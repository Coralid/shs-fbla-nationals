export type Partner = {
    // Partner is an object with the following properties:
    // id: number, name: string, address: string, phonenumber: string, category: string
    id: number;
    name: string;
    address: string;
    phonenumber: string;
    category: string;
};

export type PartnerCategory = {
    // PartnerCategory is an object with the following properties:
    // category: string
    category: string;
}

export type User = {
    // User is an object with the following properties:
    // id: string, name: string, email: string, password: string
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Question = {
    // Question is an object with the following properties:
    // id: number, question: string, answer: string
    id: number;
    question: string;
    answer: string;
};