import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  if (!req?.body?.id) {
    res.json({ finish: false });
    return;
  }

  const social = await prisma.social.findMany({
    where: {
      userId: user.id,
      type: 'DEVTO',
    },
  });

  const article = await prisma.articles.findUnique({
    where: {
      id: req?.body?.id,
    },
  });

  if (!social.length) {
    res.json({ finish: false });
    return;
  }

  try {
    const data = await (
      await fetch(`https://dev.to/api/readinglist`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': social[0].accessToken,
        },
        method: 'GET',
      })
    ).json();

    const findReading = data.find((f) => f?.article?.id === article?.articleId);
    if (findReading.id) {
      await prisma.articlesVotes.create({
        data: {
          userId: user.id,
          articleId: req?.body?.id,
        },
      });
    }
  } catch (err) {
    res.json({ finish: false });
    return;
  }

  res.json({ finish: true });
}
