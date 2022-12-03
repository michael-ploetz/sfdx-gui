import { retrieveAllOrgs } from '../../../../lib/services/orgServices';

/** @type {import('./$types').RequestHandler} */
export async function GET({ }) {
    const response = await retrieveAllOrgs();
    return new Response(String(response));
}