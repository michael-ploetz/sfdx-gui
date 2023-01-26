import { derived, writable } from "svelte/store";

export const allOrgs = writable({});

export const devHubs = derived(
    allOrgs,
    $allOrgs => $allOrgs.nonScratchOrgs.filter((org) => org.isDevHub) || []
)

export const regularOrgs = derived(
    allOrgs,
    $allOrgs => $allOrgs.nonScratchOrgs.filter((org) => !org.isDevHub) || []
)

export const scratchOrgs = derived(
    allOrgs,
    $allOrgs => $allOrgs.scratchOrgs || []
)