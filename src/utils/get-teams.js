const getTeams = async () =>
  fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/leaderboard`, {
    next: { revalidate: 3600 },
  }).then((response) => response.json());

export default getTeams;
