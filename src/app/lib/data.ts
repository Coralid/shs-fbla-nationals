import {sql} from '@vercel/postgres';
import {Question, Partner, PartnerCategory} from "./definitions";
import {unstable_noStore as noStore} from 'next/cache';

export async function getAllPartners() {
    // get all partners from the database
    noStore(); // disable caching
    const data = await sql<Partner>`
      SELECT * FROM "Partner"
      ORDER BY name ASC;
      `;
    // return the data
    return data.rows.map((partner: Partner) => ({
        partner,
    }));
}

export async function getPartnerByTerm(term: string, sortBy: string) {
    // get all partners from the database matching the search term
    noStore();

    const sanitizedTerm = `%${term}%`
    // search for the term in the database
    let query
    switch (sortBy) {
        case "1":
            query = sql<Partner>`
                SELECT * FROM "Partner"
                WHERE name ILIKE ${sanitizedTerm}
                OR address ILIKE ${sanitizedTerm}
                OR phonenumber ILIKE ${sanitizedTerm}
                OR category ILIKE ${sanitizedTerm}
                ORDER BY name ASC;
            `;
            break;
        case "2":
            query = sql<Partner>`
                SELECT * FROM "Partner"
                WHERE name ILIKE ${sanitizedTerm}
                OR address ILIKE ${sanitizedTerm}
                OR phonenumber ILIKE ${sanitizedTerm}
                OR category ILIKE ${sanitizedTerm}
                ORDER BY address ASC;
            `;
            break;
        case "3":
            query = sql<Partner>`
                SELECT * FROM "Partner"
                WHERE name ILIKE ${sanitizedTerm}
                OR address ILIKE ${sanitizedTerm}
                OR phonenumber ILIKE ${sanitizedTerm}
                OR category ILIKE ${sanitizedTerm}
                ORDER BY phonenumber ASC;
            `;
            break;
        case "4":
            query = sql<Partner>`
                SELECT * FROM "Partner"
                WHERE name ILIKE ${sanitizedTerm}
                OR address ILIKE ${sanitizedTerm}
                OR phonenumber ILIKE ${sanitizedTerm}
                OR category ILIKE ${sanitizedTerm}
                ORDER BY category ASC;
            `;
            break;
        default:
            query = sql<Partner>`
                SELECT * FROM "Partner"
                WHERE name ILIKE ${sanitizedTerm}
                OR address ILIKE ${sanitizedTerm}
                OR phonenumber ILIKE ${sanitizedTerm}
                OR category ILIKE ${sanitizedTerm}
            `;
            break;
    }

    // return the data
    const data = await query;
    // console.log(data.rows)
    // @ts-ignore
    return data.rows.map((partner: Partner) => ({
        partner,
    }));
}

export async function fetchCategories() {
    // get all categories from the database
    noStore();
    // fetch all categories from the database
    try {
        const data = await sql<PartnerCategory>`
        SELECT DISTINCT
            category
        FROM
            "Partner"
        ORDER BY
            category ASC;
    `;

        return data.rows;
    } catch (err) { // handle errors
        console.error('Database Error:', err);
        throw new Error('Failed to fetch all categories.');
    }
}

export async function getPartner(id: number) {
    // get a partner by id
    noStore()
    const query = sql<Partner>`
        SELECT * FROM "Partner"
        WHERE id = ${id};
    `;
    const data = await query;
    return data.rows[0];
}

export async function getQuestions() {
    // get all questions from the database
    noStore()
    const query = sql<Question>`
        SELECT * FROM "Questions";
    `;
    // return the data
    const data = await query;
    return data.rows.map((question: Question) => ({
        question,
    }));
}

export async function getQuestionById(id: number) {
    // get a question by id
    const query = sql<Question>`
        SELECT * FROM "Questions"
        WHERE id = ${id};
    `;
    // return the data
    const data = await query;
    return data.rows[0];
}