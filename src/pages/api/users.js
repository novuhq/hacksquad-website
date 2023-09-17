import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const users = await prisma.user.findMany({
    where: {
      AND: [
        {
          OR: [
            {
              moderator: !!req.query.mod,
            },
            {
              cleaner: !!req.query.mod,
            },
          ],
        },
        {
          name: {
            startsWith: req.query.name || '',
          },
        },
      ],
    },
    select: {
      id: true,
      name: true,
    },
    take: req.query.mod ? 1000 : 10,
  });

  res.status(200).json({ users });
}
