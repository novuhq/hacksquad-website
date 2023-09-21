import Link from 'next/link';

const title = 'Join an existing squad';
const description = (
  <>
    If you know which squad you want to join to,
    <br />
    please ask one of the squad members to send you an invite link
    <br />
    If you want the system to auto-assign you to a team,
    <br />
    Go back and click "Auto assign me"
  </>
);

const JoinSquad = () => (
  <section className="safe-paddings relative">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center py-16">
      <h1 className="font-titles text-60 font-semibold leading-none md:text-42">{title}</h1>
      <p className="mt-10 text-center text-20 leading-normal md:text-18 sm:mt-6">{description}</p>
      <Link
        className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none sm:mt-6"
        href="/myteam"
      >
        <svg
          className="cta-btn-animation-border xs:w-full"
          width="268"
          height="59"
          viewBox="0 0 268 59"
          fill="none"
          aria-hidden
        >
          <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
          <span className="text-lg sm:text-[18px]">Go back</span>
        </div>
      </Link>
    </div>
  </section>
);

export default JoinSquad;
