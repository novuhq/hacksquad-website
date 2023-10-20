// import findUserAndTeam from '~/helpers/find.user.and.team';
// import prisma from '~/prisma/client';

export default async function handler(req, res) {
  // const { user } = await findUserAndTeam(req, res);
  // if (
  //   !user ||
  //   process.env.RIDDLE_ANSWER.split(',')
  //     .map((p) => p.toLowerCase())
  //     .includes(req.body.answer.toLowerCase()) === false
  // ) {
  //   res.json({ finish: false });
  //   return;
  // }
  //
  // await prisma.productHunt.create({
  //   data: {
  //     userId: user.id,
  //   },
  // });

  res.json({ finish: true });
}
