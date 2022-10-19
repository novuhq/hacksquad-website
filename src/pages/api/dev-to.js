import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  if (!req?.body?.token) {
    res.json({ finish: false });
    return;
  }

  try {
    const data = await (
      await fetch('https://dev.to/api/users/me', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': req?.body?.token,
        },
        method: 'GET',
      })
    ).json();

    if (data?.error) {
      res.json({ finish: false });
      return;
    }

    await prisma.social.create({
      data: {
        type: 'DEVTO',
        userId: user.id,
        accessToken: req?.body?.token,
        refreshToken: '',
      },
    });
  } catch (err) {
    res.json({ finish: false });
    return;
  }

  res.json({ finish: true });
}
