import { allOrgs } from "../stores/orgs";

const requestAllOrgs = async () => {
    const response = await fetch('/api/sfdx/org', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    });

    const results = await response.json();

    allOrgs.set(results);
}

export { requestAllOrgs }