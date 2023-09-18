const Join = () => <>Loading</>;

export async function getServerSideProps(context) {
  await fetch(`${process.env.HOST}/api/invite/${context.params.id}`, {
    ...context.req,
    method: 'POST',
    headers: {
      ...context.req.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return {
    redirect: {
      permanent: false,
      destination: '/myteam',
    },
  };
}

export default Join;
