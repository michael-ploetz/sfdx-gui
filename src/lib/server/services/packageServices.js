import { sh } from './base.js';

const loadPackagesForDevhub = async (username) => {
    let { stdout } = await sh(`sfdx force:package:list -v ${username} --verbose --json`);
    return stdout;
}

export { loadPackagesForDevhub };
