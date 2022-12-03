import { sh } from './base.js';

const retrieveAllOrgs = async () => {
    let { stdout } = await sh('sfdx force:org:list --json');
    return stdout;
}

export { retrieveAllOrgs };

