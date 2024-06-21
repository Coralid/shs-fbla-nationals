'use server';

import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

import {signIn} from '@/../auth'
import {AuthError} from 'next-auth';
import {getPartner} from "@/app/lib/data";
import {Partner} from "@/app/lib/definitions";

export async function createPartner(formData: FormData) {
    // takse form data and inserts it into the database as a new partner
    let category = formData.get("category") as string; // get the category from the form data
    const newCategory = formData.get("Category") as string; // get the new category from the form data
    if (newCategory) { // if there is a new category
        category = newCategory; // set the category to the new category
    }

    // insert the new partner into the database
    await sql`INSERT INTO "Partner" (name, address, phonenumber, category) VALUES (${formData.get("name") as string}, ${formData.get("address") as string}, ${formData.get("phonenumber") as string}, ${category})`;

    // revalidate the cache for the home page, and redirect
    revalidatePath("/")
    redirect("/home")
}

export async function deletePartner(id: number) {
    // deletes a partner from the database by id
    const partner = await getPartner(id);

    await sql`INSERT INTO "DeletedPartner" (name, address, phonenumber, category) VALUES (${partner.name}, ${partner.address}, ${partner.phonenumber}, ${partner.category})`;
    await sql`DELETE FROM "Partner" WHERE id = ${id}`;
    revalidatePath("/")
}

export async function Authenticate(
    _currentState: unknown,
    formData: FormData,
) {
    // authenticates a user with the given credentials
    try {
        // sign in with the given credentials
        await signIn('credentials', formData);
    } catch (error) {
        // if there is an error, check if it is an authentication error
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                // if it is, return an error message
                default:
                    // if it is not, return a generic error message
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function askQuestion(formData: FormData) {
    // takes form data and inserts it into the database as a new question
    const question = formData.get("question") as string; // get the question from the form data

    await sql`INSERT INTO "Questions" (question) VALUES (${question})`; // insert the new question into the database
    // revalidate the cache for the help page
    revalidatePath("/help")
}

export async function deleteQuestion(id: number) {
    // deletes a question from the database by id
    await sql`DELETE FROM "Questions" WHERE id = ${id}`; // delete the question from the database
    // revalidate the cache for the help page
    revalidatePath("/help")
}

export async function answerQuestion(id: number, formData: FormData) {
    // answers a question by id
    const answer = formData.get("answer") as string; // get the answer from the form data

    await sql`UPDATE "Questions" SET answer = ${answer} WHERE id = ${id}`; // update the question with the answer
    // revalidate the cache for the help page
    revalidatePath("/help")
}
export async function revalidateCache(path: string) {
    // revalidates the cache for a given path, should be rarely used
    revalidatePath(path);
}
export async function updatePartner(id: number, formData: FormData) {
    // updates a partner by id
    let category = formData.get("category") as string; // get the category from the form data
    const newCategory = formData.get("Category") as string; // get the new category from the form data
    if (newCategory) { // if there is a new category
        category = newCategory; // set the category to the new category
    }
    // update the partner with the new data
    await sql`
        UPDATE "Partner"
        SET name = ${formData.get("name") as string}, address = ${formData.get("address") as string}, phonenumber = ${formData.get("phonenumber") as string}, category = ${category}
        WHERE id = ${id}`;
    // revalidate the cache for the home page, and redirect
    revalidatePath("/")
}