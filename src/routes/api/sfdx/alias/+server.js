import { retrieveAllAliases } from '../../../../lib/server/services/aliasServices.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ }) {
    //const response = await retrieveAllAliases();
    const response = `{
        "status": 0,
        "result": [
            {
                "alias": "MeinServiceProdLA",
                "value": "mpl_limitedaccess@meinservice.ext.dpdhl"
            },
            {
                "alias": "realrdevDX",
                "value": "mpladmin@meinservice.ext.dpdhl.realrdev"
            },
            {
                "alias": "TLDX",
                "value": "mploetz@meinservice.ext.dpdhl.tl"
            },
            {
                "alias": "RQADX",
                "value": "mpl@meinservice.ext.dpdhl.rqa"
            },
            {
                "alias": "lwcplayground",
                "value": "m.ploetz@creative-bear-azsnnp.com"
            },
            {
                "alias": "EDU01DX",
                "value": "mploetz@meinservice.ext.dpdhl.rqa"
            },
            {
                "alias": "REALRDEVDX",
                "value": "mpladmin@meinservice.ext.dpdhl.realrdev"
            },
            {
                "alias": "RDEVDX",
                "value": "mpladmin@meinservice.ext.dpdhl.realrdev"
            },
            {
                "alias": "WebFormFrameWork",
                "value": "mpladmin@meinservice.ext.dpdhl.realrdev"
            },
            {
                "alias": "RDEV",
                "value": "mpladmin@meinservice.ext.dpdhl.realrdev"
            },
            {
                "alias": "MsWebForms4",
                "value": "mpl@mswebforms.scratch4"
            },
            {
                "alias": "MsWebForms5",
                "value": "mpl@mswebforms.scratch5"
            },
            {
                "alias": "MsWebForms6",
                "value": "mpl@mswebforms.scratch6"
            },
            {
                "alias": "MsWebForms8",
                "value": "mpl@mswebforms.scratch8"
            },
            {
                "alias": "MsWebForms1",
                "value": "mpl@mswebforms.scratch1"
            },
            {
                "alias": "MsWebForms9",
                "value": "mpl@mswebforms.scratch9"
            },
            {
                "alias": "TL",
                "value": "mploetz@meinservice.ext.dpdhl.tl"
            },
            {
                "alias": "MsWebForms10",
                "value": "mpl@mswebforms.scratch10"
            },
            {
                "alias": "playful-hawk",
                "value": "m.ploetz@playful-hawk-6t7bdl.com"
            },
            {
                "alias": "js sb playground",
                "value": "m.ploetz@cunning-otter-gi6arm.com"
            },
            {
                "alias": "MsCore1",
                "value": "mpl@mscore.scratch1"
            },
            {
                "alias": "MsWebForms11",
                "value": "mpl@mswebforms.scratch11"
            },
            {
                "alias": "MsWebForms12",
                "value": "mpl@mswebforms.scratch12"
            },
            {
                "alias": "MsWebForms13",
                "value": "mpl@mswebforms.scratch13"
            },
            {
                "alias": "mdev50",
                "value": "m.ploetz@meinservice.ext.dpdhl.mdev50"
            }
        ]
    }`;
    return new Response(String(response));
}