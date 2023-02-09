import { writable } from "svelte/store";

export const allAliases = writable({});

export const loadAllAliases = async () => {
    const response = await fetch('/api/sfdx/alias', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    });

    const results = await response.json();

    allAliases.set(results.result);
};