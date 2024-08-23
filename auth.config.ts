import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userFindByUserName } from "./dbconnector/userconnector";

export default {
  trustHost: true,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const findUser = await userFindByUserName(
          credentials.username as string
        );
        const { password, ...user } = findUser!;
        return Promise.resolve(user);
      },
    }),
  ],
} satisfies NextAuthConfig;