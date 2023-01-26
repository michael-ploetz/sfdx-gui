import { sh } from './base.js';

const retrieveAllAliases = async () => {
    let { stdout } = await sh('sfdx alias:list --json');
    return stdout;
}

export { retrieveAllAliases };

