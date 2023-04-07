import { get, writable } from "svelte/store";
import { awaitPromtAction } from './prompts';
import { callApi } from "../utils/api.js";
import { addToast } from '../stores/toasts';

export const packages = writable([]);
export const packageVersions = writable([]);
export const dependencies = writable([]);
export const dependencyTrees = writable([]);


const keyCache = new Map();

export const loadPackagesForDevhub = async (devhubUsername) => {
    const results = await callApi(`sfdx/devhub/${devhubUsername}/packages`);
    packages.update((all) => [...results]);
}

export const loadPackageVersionsForDevhub = async (devhubUsername) => {
    const results = await callApi(`sfdx/devhub/${devhubUsername}/packageversions`);
    packageVersions.update((all) => [...results]);
}

export const loadPackageVersionsForPackage = async (devhubUsername, packageId) => {
    const results = await callApi(`sfdx/devhub/${devhubUsername}/packages/${packageId}/versions`);
    packageVersions.update((all) => [...results, ...all]);
}

export const loadDependenciesForPackageVersion = async (devhubUsername, id) => {
    let results;
    const packageversion = get(packageVersions).find((version) => version.Id === id);
    if (packageversion.IsPasswordProtected) {
        const key = await getKeyForVersion(id);
        results = await callApi(`sfdx/devhub/${devhubUsername}/packageversions/${packageversion.SubscriberPackageVersionId}/${key}/dependencies`);
    } else {
        results = await callApi(`sfdx/devhub/${devhubUsername}/packageversions/${packageversion.SubscriberPackageVersionId}/dependencies`);
    }

    // some extra unwrapping because its a query, not a command in the backend
    const dependency = { id, subscriberId: packageversion.SubscriberPackageVersionId, dependencies: results.records[0].Dependencies ? results.records[0].Dependencies.ids.map((dep) => dep.subscriberPackageVersionId) : [] };
    dependencies.update((all) => [...all.filter((dep) => dep.subscriberId !== id), dependency]);
}

export const promotePackageVersion = async (devhubUsername, versionId) => {
    const result = await callApi(`sfdx/devhub/${devhubUsername}/packageversions/${versionId}/promote`);
    if (result.success) {
        addToast({
            message: 'Promoted Id: ' + result.id,
            variant: 'success',
        });
    } else {
        result.errors.forEach((err) => {
            addToast({
                message: 'Error: ' + err,
                variant: 'error',
            });
        })
    }
}

export const deletePackageVersion = async (devhubUsername, versionId) => {
    const result = await callApi(`sfdx/devhub/${devhubUsername}/packageversions/${versionId}/delete`);
    if (result.success) {
        addToast({
            message: 'Deleted Id: ' + result.id,
            variant: 'success',
        });
    } else {
        result.errors.forEach((err) => {
            addToast({
                message: 'Error: ' + err,
                variant: 'error',
            });
        })
    }
}

export const loadCompleteDependencyTreeForPackageVersion = async (devhubUsername, id) => {
    await loadDependenciesForPackageVersion(devhubUsername, id);
    const dependency = get(dependencies).find((dep) => dep.id === id);
    for (const dependentVersionSubId of dependency.dependencies) {
        const dependentDependency = get(dependencies).find((dep) => dep.subscriberId === dependentVersionSubId);
        if (!dependentDependency) {
            const dependentVersion = get(packageVersions).find((version) => version.SubscriberPackageVersionId === dependentVersionSubId)
            if (dependentVersion) { // catch versions outside of devhub
                await loadCompleteDependencyTreeForPackageVersion(devhubUsername, dependentVersion.Id)
            } else {
                const unknownDep = { id: dependentVersionSubId, subscriberId: dependentVersionSubId, dependencies: [] };
                dependencies.update((all) => [...all, unknownDep]);
            }
        }
    }
}

const getKeyForVersion = async (id) => {
    const packageversion = get(packageVersions).find((version) => version.Id === id);
    if (keyCache.has(id)) {
        return keyCache.get(id);
    }
    const promptResult = await awaitPromtAction({
        message: 'We need the key for retrieving the dependencies',
        title: `Key for: ${packageversion.Package2Name} ${packageversion.Version}`,
        inputs: [
            {
                label: 'Key',
                placeholder: 'Installation Key',
            },
        ],
        options: [
            {
                title: 'Confirm',
                variant: 'neutral',
                disabled: false,
                stretch: true,
            },
        ],
    });
    const key = promptResult.inputs.find((input) => input.label === 'Key').value;
    keyCache.set(id, key);
    return key;
}