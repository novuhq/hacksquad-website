// import mailchimp from '@mailchimp/mailchimp_marketing';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';

import prisma from '../../prisma/client';

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
  throw new Error('The GITHUB_ID and GITHUB_SECRET environment variables are required.');
}

// mailchimp.setConfig({
//   apiKey: process.env.MAILCHIMP_KEY,
//   server: process.env.MAILCHIMP_SERVER,
// });

export const authOptions = (req) => ({
  adapter: PrismaAdapter(prisma),
  session: {
    maxAge: 30 * 24 * 60 * 60,
  },
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

      const getInvite = req?.cookies?.invite
        ? await prisma.user.findUnique({
            where: {
              email: Buffer.from(req?.cookies?.invite, 'base64').toString(),
            },
          })
        : undefined;

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          handle: login,
          ...(getInvite && getInvite.id !== user.id ? { inviteId: getInvite.id } : {}),
        },
      });

      // if (user.email) {
      //   const [name, lastName] = user.name.split(' ');
      //   await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST, {
      //     email_address: user.email,
      //     status: 'subscribed',
      //     skip_merge_validation: true,
      //     merge_fields: {
      //       FNAME: name,
      //       LNAME: lastName,
      //     },
      //   });
      // }
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
});
