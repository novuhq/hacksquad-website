import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);

  const articles = await prisma.articles.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  const userArticles = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      votes: true,
    },
  });

  const list = articles.map((article) => ({
    ...article,
    voted: !!userArticles?.votes?.find((v) => v.articleId === article.id),
  }));

  res.json({ list });
}
