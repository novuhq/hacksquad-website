import { setCookie } from 'cookies-next';

const Join = () => <></>;

export async function getServerSideProps(context) {
  if (context.params.id) {
    setCookie('invite', context.params.id, {
      req: context.req,
      res: context.res,
      maxAge: 60 * 6 * 24,
    });
  }

  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
}

export default Join;
