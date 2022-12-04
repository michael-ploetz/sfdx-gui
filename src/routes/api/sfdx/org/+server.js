import { retrieveAllOrgs } from '../../../../lib/server/services/orgServices.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ }) {
    const response = await retrieveAllOrgs();
    return new Response(String(response));
}