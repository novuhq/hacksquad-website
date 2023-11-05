import Link from 'next/link';

const title = 'Thank you!';
const description = (
  <>
    Awesome! We will send you the swag as soon as possible.
    <br />
    <div className="mb-12">To check that your submission is valid</div>
    <a
      target="_blank"
      rel="noopener"
      className="text-xl text-yellow underline hover:font-bold"
      href="https://airtable.com/embed/appExUbLiOTHavFIY/shr3DV1b1xJdCUoM9?backgroundColor=red&viewControls=on"
    >
      Please click here
    </a>
    <br />
    <br />
    <div className="mt-10">If you have made any mistake, please contact </div>
    <a className="font-medium" href="mailto:nevo@novu.co">
      nevo@novu.co
    </a>
  </>
);

const Hero = () => (
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
          <span className="text-lg sm:text-[18px]">Go to your team</span>
        </div>
      </Link>
    </div>
  </section>
);

export default Hero;
