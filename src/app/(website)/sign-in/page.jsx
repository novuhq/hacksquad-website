import JoinUs from 'components/shared/join-us';
import { redirect } from 'next/navigation';

import SignUpButton from 'components/shared/sign-up-button';
import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

const TITLE = 'Sign in!';
const DESCRIPTION = 'Oh no, you have probably signed out of the system';

async function SignIn() {
  const session = await auth();

  if (session?.user) {
    redirect('/myteam');
  }

  return (
    <>
      <section className="safe-paddings relative pt-40">
        <div className="container relative z-10 flex h-full flex-col items-center justify-center">
          <h1 className="leading-tight font-titles text-60 font-bold lg:text-[50px] md:text-[40px] xs:text-[32px]">
            {TITLE}
          </h1>
          <p className="mt-5 text-center text-20 sm:text-base">{DESCRIPTION}</p>

          <SignUpButton className="mt-8" size="md" theme="fill-yellow">
            Sign In
          </SignUpButton>
        </div>
      </section>
      <JoinUs />
    </>
  );
}

export default SignIn;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
