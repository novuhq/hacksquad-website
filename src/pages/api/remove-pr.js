import { ActionType } from '@prisma/client';

import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  if (!user?.moderator || !user?.cleaner || !req?.query?.id) {
    return;
  }

  const data = await prisma.report.findUnique({
    where: {
      pr: req.query.id,
    },
  });

  if (data) {
    await Promise.all([
      // Recovering the PR
      prisma.report.delete({
        where: { pr: req.query.id },
      }),

      // Logging the action
      prisma.actionLogs.create({
        data: {
          admin: user,
          pr: req.query.id,
          actionType: ActionType.RECOVER_PR,
        },
      }),
    ]);

    res.json({
      finish: true,
      id: req.query.id,
      status: '',
    });

    return;
  }

  await Promise.all([
    // Marking the PR as deleted
    prisma.report.create({
      data: {
        pr: req.query.id,
        status: 'DELETED',
      },
    }),

    // Logging the action
    prisma.actionLogs.create({
      data: {
        admin: user,
        pr: req.query.id,
        actionType: ActionType.DELTE_PR,
      },
    }),
  ]);

  res.json({
    finish: true,
    id: req.query.id,
    status: 'DELETED',
  });
}
