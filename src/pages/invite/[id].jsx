const Join = () => <></>;

export async function getServerSideProps(context) {
  await fetch(`${process.env.HOST}/api/invite`, {
    ...context.req,
    method: 'POST',
    headers: {
      ...context.req.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: context.params.id }),
  });

  return {
    redirect: {
      permanent: false,
      destination: '/myteam',
    },
  };
}

export default Join;
