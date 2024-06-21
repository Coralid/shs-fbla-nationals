import { sql } from "@vercel/postgres";
export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
    const questions = await sql`SELECT * FROM "Questions"`;
    const partners = await sql`SELECT * FROM "Partner"`;
    const deletedPartners = await sql`SELECT * FROM "DeletedPartner"`;
    const users = await sql`SELECT * FROM "users"`;

    const rows = { questions, partners, deletedPartners, users };

    const data = JSON.stringify(rows);
    const res = new Response(data);
    return res;
}