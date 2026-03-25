import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      // @ts-expect-error auth
      async authorize (credentials) {
        // 这里写你的登录逻辑（Prisma）
        return { id: "1", email: credentials.email };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
