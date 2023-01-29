import { openOrg } from '../../../../../../lib/server/services/orgServices'

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const response = await openOrg(params.slug);
    return new Response(String(response));
}