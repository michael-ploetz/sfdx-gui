import { derived, writable } from "svelte/store";

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

export const loadAllOrgs = async () => {
    const response = await fetch('/api/sfdx/org', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    });

    const results = await response.json();

    allOrgs.set([
        ...results.result.nonScratchOrgs.filter((org) => org.isDevHub),
        ...results.result.nonScratchOrgs.filter((org) => !org.isDevHub).map((org) => {
            return { ...org, isSandbox: true };
        }),
        ...results.result.scratchOrgs.map((org) => {
            return { ...org, isScratchOrg: true };
        }),
    ]);
}

export const openOrg = async (username) => {
    try {
        const response = await fetch('/api/sfdx/org/' + username + '/open', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        });
        const results = await response.json();
        return true;
    } catch (err) {
        return false;
    }
}