import { retrieveAllAliases } from '../../../../lib/server/services/aliasServices.js';

/** @type {import('./$types').RequestHandler} */
export async function GET({ }) {
    const response = await retrieveAllAliases();
    return new Response(String(response));
}