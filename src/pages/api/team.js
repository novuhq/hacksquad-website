import findUserAndTeam from '~/helpers/find.user.and.team';

export default async (req, res) => {
  const { team, admin } = await findUserAndTeam(req, res);
  res.status(200).json({ team, admin });
};
