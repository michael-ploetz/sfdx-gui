import { addToast } from '../stores/toasts';
const staticURL = 'http://localhost:3000/';

const clientCache = new Map();

const callApi = async (path, options = { skipServerCache: false, skipClientCache: false }) => {

    if (!options.skipClientCache && clientCache.has(path)) {
        return clientCache.get(path).result;
    }

    const response = await fetch(`${staticURL}${path}${options.skipServerCache ? '?skipcache=true' : ''}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    });
    const results = await response.json();
    if (results.warnings) {
        results.warnings.forEach((warning) => {
            addToast({
                message: 'Warnung: ' + warning,
                variant: 'warning',
            });
        });
    }
    clientCache.set(path, results);
    return results.result;
}

export { callApi }