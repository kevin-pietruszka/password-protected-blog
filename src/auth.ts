import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "user" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (credentials?.username === "admin" && credentials?.password === process.env.ADMIN_PASSWORD) {
          return { id: "1", name: "admin" };
        } else if (credentials?.username === "user" && credentials?.password === process.env.USER_PASSWORD) {
          return { id: "2", name: "user" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
