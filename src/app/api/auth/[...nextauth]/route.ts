import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
        }),
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user, account }: any) {

            if (account.provider === "google" || account.provider === "facebook") {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN!}/auth/social-media`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(user),
                    });

                    if (res.ok) {
                        return user;
                    }

                } catch (error) {
                    console.log(error);
                }
            }

            return user;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

