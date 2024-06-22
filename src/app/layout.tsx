import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {auth} from "../../auth";
import Nav from "@/app/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | SHS Partners",
        default: "SHS Partners",
    },
    description: "FBLA Programming Project",
};

export default async function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth();

    return (
        <html lang="en">
        <body className={inter.className}>
        <Nav session={session} />
        <div id="content">
            {children}
        </div>
        </body>
        </html>
    );
}
