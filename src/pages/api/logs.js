import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const page = +(req.query.page || 1);
  const data = await prisma.actionLogs.findMany({
    where: {
      AND: [
        {
          OR: [
            {
              prDetails: {
                not: null,
              },
            },
            {
              pr: null,
            },
          ],
        },
        ...[req.query.admin ? { adminId: req.query.admin } : {}],
        ...[req.query.team ? { teamId: req.query.team } : {}],
        ...[req.query.user ? { userId: req.query.user } : {}],
        ...[req.query.prType ? { actionType: req.query.prType } : {}],
      ],
    },
    orderBy: [{ createdAt: 'desc' }],
    take: 30,
    skip: 30 * (page - 1),
    select: {
      id: true,
      prDetails: true,
      actionType: true,
      team: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          handle: true,
        },
      },
      admin: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  res.status(200).json(
    data.map((d) => ({
      ...d,
      prDetails: JSON.parse(d.prDetails || '{}'),
    }))
  );
}
