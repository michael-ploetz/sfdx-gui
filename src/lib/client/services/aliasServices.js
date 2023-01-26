import { allAliases } from "../stores/aliases";

const requestAllAliases = async () => {
    const response = await fetch('/api/sfdx/alias', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    });

    const results = await response.json();

    allAliases.set(results.result);
}

export { requestAllAliases }