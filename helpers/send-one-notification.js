import { Novu } from '@novu/node';

import prisma from '~/prisma/client';

const novu = new Novu(process.env.NOVU_API_KEY);

const sendOneNotification = async (triggerName, payload, user) => {
  const findUser = await prisma.user.findUnique({
    where: {
      id: user,
    },
  });

  const [firstName, lastName] = findUser.name.split(' ');
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
};

export default sendOneNotification;
