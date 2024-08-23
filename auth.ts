import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { cookies } from "next/headers";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  events: {
    async signOut() {
      cookies().delete("token");
    },
  },
  callbacks: {
    async session({ token, session }) {
      if (session.user && token?.sub) {
        session.user.id= token.sub; 
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user && token?.sub) {
        token.sub = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 5 * 24 * 60 * 60 * 1000, // 5 days
  },
  adapter: PrismaAdapter(db),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  ...authConfig,
});
