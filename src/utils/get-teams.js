const getTeams = async () =>
  fetch(`${process.env.HOST}/api/leaderboard`, {
    next: { revalidate: 3600 },
  }).then((response) => response.json());

export default getTeams;
