import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import prisma from '~/prisma/client';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user, profile }) {
      const { email } = user;
      const { name } = profile;

      await prisma.user.create({
        data: {
          email,
          name,
        },
      });

      return true;
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
