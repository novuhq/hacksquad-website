import JoinUs from 'components/shared/join-us';

const TITLE = 'Oh no!';
const DESCRIPTION = (
  <p className="text-left">
    You can't claim the Novu Swag, there might be a few problems:
    <br />
    <ul className="text-left">
      <li>- You have already claimed your swag</li>
      <li>- You have just joined the HackSquad system - you will have to wait 1 hour</li>
      <li>
        - You haven't contributed <strong>3 MERGED PRs</strong> to Novu
      </li>
    </ul>
    <br />
    If you think there is a problem here, please contact nevo@novu.co
  </p>
);

const Hero = () => (
  <>
    <section className="safe-paddings relative pt-40">
      <div className="container relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="leading-tight font-titles text-60 font-bold uppercase lg:text-[50px] md:text-[40px] xs:text-[32px]">
          {TITLE}
        </h1>
        <p className="sm:text-base mt-10 text-center text-20 sm:mt-6">{DESCRIPTION}</p>
      </div>
    </section>

    <JoinUs />
  </>
);

export default Hero;
