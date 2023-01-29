import { sh } from './base.js';

const retrieveAllOrgs = async () => {
    let { stdout } = await sh('sfdx force:org:list --json');
    return stdout;
}

const openOrg = async (username, options = { browser: 'chrome', path: '' }) => {
    let { stdout } = await sh(`sfdx force:org:open -u ${username} -b ${options.browser} ${options.path !== '' ? '-p ' + options.path : ''} --json`);
    return stdout;
}

export { retrieveAllOrgs, openOrg };

