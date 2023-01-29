import { allOrgs } from "../stores/orgs";

const requestAllOrgs = async () => {
    const response = await fetch('/api/sfdx/org', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
    });

    const results = await response.json();

    allOrgs.set(results.result);
}

const openOrg = async (username) => {
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

export { requestAllOrgs, openOrg }