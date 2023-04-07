import { derived, writable } from "svelte/store";
import { callApi } from "../utils/api.js";


export const allOrgs = writable([]);

export const devHubs = derived(
    allOrgs,
    $allOrgs => $allOrgs.filter((org) => org.isDevHub)
)

export const regularOrgs = derived(
    allOrgs,
    $allOrgs => $allOrgs.filter((org) => org.isSandbox)
)

export const scratchOrgs = derived(
    allOrgs,
    $allOrgs => $allOrgs.filter((org) => org.isScratchOrg)
)

export const loadAllOrgs = async (options) => {
    const results = await callApi('sfdx/orgs', options);
    allOrgs.set([
        ...results.nonScratchOrgs.filter((org) => org.isDevHub),
        ...results.nonScratchOrgs.filter((org) => !org.isDevHub).map((org) => {
            return { ...org, isSandbox: true };
        }),
        ...results.scratchOrgs.map((org) => {
            return { ...org, isScratchOrg: true };
        }),
    ]);
}

export const openOrg = async (username) => {
    try {
        const results = await callApi(`sfdx/orgs/${username}/open`);
        return true;
    } catch (err) {
        return false;
    }
}