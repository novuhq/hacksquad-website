import { ActionType } from '@prisma/client';

//
import findUser from '~/helpers/find.user';
import findUserAndTeam from '~/helpers/find.user.and.team';
import sendOneNotification from '~/helpers/send-one-notification';
import prisma from '~/prisma/client';

//
export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  if (!user?.moderator || !req?.query?.id) {
    res.status(400).send();
    return;
  }

  const userF = await findUser(req.query.id);

  await Promise.all([
    // Performing action on user
    prisma.user.update({
      where: { id: req.query.id },
      data: { disqualified: !userF.disqualified },
    }),

    // Logging the action
    prisma.actionLogs.create({
      data: {
        actionType: userF.disqualified ? ActionType.RECOVER_USER : ActionType.DISQUALIFY_USER,
        admin: user,
        user: userF,
      },
    }),
  ]);

  sendOneNotification('disqualified', { name: userF.name }, req.query.id);

  res.json({ finish: true });
}
