import { PrismaAdapter } from '@next-auth/prisma-adapter';
import mailchimp from 'mailchimp-marketing';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import prisma from '~/prisma/client';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

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
      const { login } = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${account.access_token}`,
        },
      }).then((res) => res.json());

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          handle: login,
        },
      });

      if (user.email) {
        const [name, lastName] = user.name.split(' ');
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST, {
          email_address: user.email,
          status: 'subscribed',
          skip_merge_validation: true,
          merge_fields: {
            FNAME: name,
            LNAME: lastName,
          },
        });
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
