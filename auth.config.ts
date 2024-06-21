import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnNew = nextUrl.pathname.startsWith('/new');
            if (isOnNew) {
                return isLoggedIn;
                // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/new', nextUrl));
            }
            return true;
        },
    },
    providers: [], // Providers is an empty array for now, will be filled in the auth.ts file, during the spreading of this authConfig
} satisfies NextAuthConfig;