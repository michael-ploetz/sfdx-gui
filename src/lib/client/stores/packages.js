import { writable } from "svelte/store";

export const packages = writable([]);
export const packageVersions = writable([]);

export const loadPackagesForDevhub = async (devhubUsername) => {
    const response = await fetch('/api/sfdx/packages/' + devhubUsername, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    });

    const results = await response.json();
    packages.set([...results.result]);
}
