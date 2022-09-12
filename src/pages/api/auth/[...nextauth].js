import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import prisma from '~/prisma/client';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  events: {
    async signIn({ user, account }) {
      // Get user email if we don't have it in public emails
      if (!user.email) {
        try {
          // fetch user email
          const emails = await fetch('https://api.github.com/user/emails', {
            headers: {
              Authorization: `token ${account.accessToken}`,
            },
          }).then((res) => res.json());

          if (!emails || emails.length === 0) {
            return;
          }

          // Sort by primary email - the user may have several emails, but only one of them will be primary
          const sortedEmails = emails.sort((a, b) => b.primary - a.primary);
          const primaryEmail = sortedEmails[0].email;

          // update user email
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              email: primaryEmail,
            },
          });
        } catch (err) {
          console.log('Failed to set email', err);
        }
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
