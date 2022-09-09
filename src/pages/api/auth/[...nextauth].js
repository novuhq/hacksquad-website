import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import prisma from '~/prisma/client';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn(user, account, profile) {
      console.log('signIn', user, account, profile);
      console.log('test');

      return true;
    },
  },
  providers: [
    GithubProvider({
      clientId: 'fa4376d84ff29a71cbf9',
      clientSecret: '6ef1c3140b8b407da74670e8f2f14dfbdffb00ba',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
