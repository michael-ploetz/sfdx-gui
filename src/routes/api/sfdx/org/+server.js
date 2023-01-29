import { retrieveAllOrgs } from '../../../../lib/server/services/orgServices.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ }) {
    //const response = await retrieveAllOrgs();
    const response = `{
        "status": 0,
        "result": {
            "nonScratchOrgs": [
                {
                    "username": "mploetz@meinservice.ext.dpdhl.rqa",
                    "accessToken": "00D7Y000000H0KY!ARAAQJ6AyLInoYjg0HPJ4BxzvWQ_iGYZyv4PwSz6MOa4.Uk.WcpAb.J.I0vKLnwY5moMKU218d4rjduHl6EMDGPTpr2_juLp",
                    "instanceUrl": "https://meinservice--edu01.my.salesforce.com",
                    "orgId": "00D7Y000000H0KYUA0",
                    "loginUrl": "https://test.salesforce.com/",
                    "clientId": "PlatformCLI",
                    "instanceApiVersion": "55.0",
                    "instanceApiVersionLastRetrieved": "6.8.2022, 19:18:37",
                    "isDevHub": false,
                    "alias": "EDU01DX",
                    "lastUsed": "2023-01-29T16:12:48.917Z",
                    "connectedStatus": "DomainNotFoundError"
                },
                {
                    "username": "mpl_limitedaccess@meinservice.ext.dpdhl",
                    "accessToken": "00D0Y000001Xopw!AQoAQCXD0fBELYswZjeJLLhbS1o7tPb50.y_en4M9ieHS25O2dYSYtec1z_8XJhAn0xEPAEsl6dPfRyYqFcQHZsVrcV8_0YH",
                    "instanceUrl": "https://meinservice.my.salesforce.com",
                    "orgId": "00D0Y000001XopwUAC",
                    "loginUrl": "https://login.salesforce.com/",
                    "clientId": "PlatformCLI",
                    "instanceApiVersion": "56.0",
                    "instanceApiVersionLastRetrieved": "2.1.2023, 22:41:27",
                    "isDevHub": true,
                    "alias": "MeinServiceProdLA",
                    "lastUsed": "2023-01-29T16:12:48.917Z",
                    "connectedStatus": "Connected"
                },
                {
                    "username": "mpladmin@meinservice.ext.dpdhl.realrdev",
                    "accessToken": "00D1X0000008gWK!AR8AQLoZiSdg7YEIJUCj5ohbj4H6kqP1m96V6Z9E_M3hPTkkjlYhVFBRxv.efdTbovnvPktnVyF8Osg.eWPLPP7PiwmYEImm",
                    "instanceUrl": "https://meinservice--realrdev.sandbox.my.salesforce.com",
                    "orgId": "00D1X0000008gWKUAY",
                    "loginUrl": "https://test.salesforce.com/",
                    "clientId": "PlatformCLI",
                    "instanceApiVersion": "56.0",
                    "instanceApiVersionLastRetrieved": "2.1.2023, 22:41:00",
                    "isDevHub": false,
                    "alias": "RDEV",
                    "lastUsed": "2023-01-29T16:12:48.917Z",
                    "connectedStatus": "Connected"
                },
                {
                    "username": "mpl@meinservice.ext.dpdhl.rqa",
                    "accessToken": "00D1j0000000MXr!AQ0AQEnGaAGB.2fvq1pXRM_ow5I27mImFmalW771bwzDriBF1tufpEDWsSMGUd8aDzXV_2y54T0EMBSQSKI0W8R.SXq8xcdE",
                    "instanceUrl": "https://meinservice--rqa.sandbox.my.salesforce.com",
                    "orgId": "00D1j0000000MXrEAM",
                    "loginUrl": "https://test.salesforce.com/",
                    "clientId": "PlatformCLI",
                    "instanceApiVersion": "56.0",
                    "instanceApiVersionLastRetrieved": "2.1.2023, 22:45:53",
                    "isDevHub": false,
                    "alias": "RQADX",
                    "lastUsed": "2023-01-29T16:12:48.917Z",
                    "connectedStatus": "Connected"
                },
                {
                    "username": "mploetz@meinservice.ext.dpdhl.tl",
                    "accessToken": "00D7Y000000H2cN!AR4AQNr9iMdOzcflscKt8D9W1mujtHmc2lWL04CY14pS4M3AhCq1BZg9_2C62ZKN7M2gdDsecQe2KaHp0PPGLK2IM.hAwdgO",
                    "instanceUrl": "https://meinservice--tl.sandbox.my.salesforce.com",
                    "orgId": "00D7Y000000H2cNUAS",
                    "loginUrl": "https://test.salesforce.com/",
                    "clientId": "PlatformCLI",
                    "instanceApiVersion": "56.0",
                    "instanceApiVersionLastRetrieved": "26.1.2023, 15:54:48",
                    "isDevHub": false,
                    "alias": "TL",
                    "lastUsed": "2023-01-29T16:12:48.917Z",
                    "connectedStatus": "RefreshTokenAuthError"
                },
                {
                    "username": "m.ploetz@cunning-otter-gi6arm.com",
                    "accessToken": "00D7S000001MTUc!AQ4AQFb0yqR8.7pcxeWOqxVhKqiuE_HZYZ3gny9EMankf9wGG.4vMQ7ofTry2AAPtwKIShcmDEQRv8sgOe.oW.XSFFqoqboU",
                    "instanceUrl": "https://cunning-otter-gi6arm-dev-ed.trailblaze.my.salesforce.com",
                    "orgId": "00D7S000001MTUcUAO",
                    "loginUrl": "https://login.salesforce.com/",
                    "clientId": "PlatformCLI",
                    "isDevHub": false,
                    "instanceApiVersion": "56.0",
                    "instanceApiVersionLastRetrieved": "26.1.2023, 15:54:47",
                    "alias": "js sb playground",
                    "lastUsed": "2023-01-29T16:12:48.917Z",
                    "connectedStatus": "Connected"
                },
                {
                    "username": "m.ploetz@creative-bear-azsnnp.com",
                    "accessToken": "00D7Q000006Fi0W!ARMAQFHrRUB.gtDHH0fzaAqy9wHJO.iE_GF43f1HjMEcdFxtltM_YUXkDlWJV1XSwApdquva0jeXPu3gPR106CUri7Rh0FmY",
                    "instanceUrl": "https://creative-bear-azsnnp-dev-ed.my.salesforce.com",
                    "orgId": "00D7Q000006Fi0WUAS",
                    "loginUrl": "https://login.salesforce.com/",
                    "clientId": "PlatformCLI",
                    "instanceApiVersion": "56.0",
                    "instanceApiVersionLastRetrieved": "26.1.2023, 15:54:47",
                    "isDevHub": false,
                    "alias": "lwcplayground",
                    "lastUsed": "2023-01-29T16:12:48.917Z",
                    "connectedStatus": "Connected"
                },
                {
                    "accessToken": "00D7Z00000052lU!AQgAQAWHnK2yIJnG0moSGyZk1HZMTpT0NzfrJIjH6z2r1w23VpavB7PsMUtn4YxuqslEZ8C7BSdWnvJonlHrl.pj1JXvlPjq",
                    "instanceUrl": "https://meinservice--mdev50.sandbox.my.salesforce.com",
                    "orgId": "00D7Z00000052lUUAQ",
                    "username": "m.ploetz@meinservice.ext.dpdhl.mdev50",
                    "loginUrl": "https://test.salesforce.com/",
                    "clientId": "PlatformCLI",
                    "isDevHub": false,
                    "instanceApiVersion": "57.0",
                    "instanceApiVersionLastRetrieved": "27.1.2023, 13:00:43",
                    "alias": "mdev50",
                    "lastUsed": "2023-01-29T16:12:48.917Z",
                    "connectedStatus": "Connected"
                },
                {
                    "username": "m.ploetz@playful-hawk-6t7bdl.com",
                    "accessToken": "00D7Q000006mWuz!ARQAQCp4v_8n60knglI7sbd2cWWkGXnfUhcrh7K0zs9xk2yOjbKhSN19ai0fxi62Dc8mYhvXAhkVIRf5hC2ffIOaGvovcnui",
                    "instanceUrl": "https://playful-hawk-6t7bdl-dev-ed.trailblaze.my.salesforce.com",
                    "orgId": "00D7Q000006mWuzUAE",
                    "loginUrl": "https://login.salesforce.com/",
                    "clientId": "PlatformCLI",
                    "isDevHub": false,
                    "instanceApiVersion": "56.0",
                    "instanceApiVersionLastRetrieved": "26.1.2023, 15:54:47",
                    "alias": "playful-hawk",
                    "lastUsed": "2023-01-29T16:12:48.917Z",
                    "connectedStatus": "Connected"
                }
            ],
            "scratchOrgs": [
                {
                    "accessToken": "00D1j000000H2HS!ARUAQNT6.Leh5dnDxqnbv790S9.s_JT.q0xvS0tp50SNMwlU443E7lk53QHEpWg1e1gET.f.gYbLsWqE3ad4AhLkk8K1XY1e",
                    "instanceUrl": "https://nosoftware-fun-4247-dev-ed.scratch.my.salesforce.com",
                    "orgId": "00D1j000000H2HSEA0",
                    "username": "mpl@mswebforms.scratch13",
                    "loginUrl": "https://CS102.salesforce.com",
                    "clientId": "PlatformCLI",
                    "isDevHub": false,
                    "devHubUsername": "mpl_limitedaccess@meinservice.ext.dpdhl",
                    "created": "1674048119000",
                    "expirationDate": "2023-02-17",
                    "createdOrgInstance": "CS102",
                    "instanceApiVersion": "56.0",
                    "instanceApiVersionLastRetrieved": "26.1.2023, 23:18:54",
                    "tracksSource": true,
                    "alias": "MsWebForms13",
                    "lastUsed": "2023-01-29T16:12:48.917Z",
                    "signupUsername": "mpl@mswebforms.scratch13",
                    "createdBy": "mpl_limitedaccess@meinservice.ext.dpdhl",
                    "createdDate": "2023-01-18T13:21:59.000+0000",
                    "devHubOrgId": "00D0Y000001XopwUAC",
                    "attributes": {
                        "type": "ScratchOrgInfo",
                        "url": "/services/data/v56.0/sobjects/ScratchOrgInfo/2SR07000000KyxYGAS"
                    },
                    "orgName": "MsWebForms13",
                    "edition": "Developer",
                    "status": "Active",
                    "isExpired": false,
                    "namespace": "MsWebForms"
                }
            ]
        }
    }`;
    return new Response(String(response));
}