import { Novu } from '@novu/node';

import prisma from '~/prisma/client';

const novu = new Novu(process.env.NOVU_API_KEY);

const sendNotification = async (triggerName, payload, team, removeUser) => {
  const findTeam = await prisma.team.findUnique({
    where: {
      id: team,
    },
    select: {
      users: true,
    },
  });

  const users = removeUser ? findTeam.users.filter((f) => f.id !== removeUser) : findTeam.users;

  return Promise.all(
    users.map((user) => {
      const [firstName, lastName] = user.name.split(' ');
      return novu.trigger(triggerName, {
        to: [
          {
            subscriberId: user.email,
            email: user.email,
            firstName,
            lastName,
          },
        ],
        payload,
      });
    })
  );
};

export default sendNotification;
