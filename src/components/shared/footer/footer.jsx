const Footer = () => (
  <footer className="safe-paddings border-t border-[rgba(255,255,255,0.20)]">
    <div className="container flex items-center justify-between gap-2 py-5 md:py-3 sm:flex-col">
      <p className="text-15 leading-normal md:text-14">Novu 2023 Ⓒ All rights reserved</p>
      <p className="text-15 leading-normal text-grey-1 md:text-14 sm:text-center">
        By entering your email, you agree to our{' '}
        <a
          className="font-medium text-white transition duration-200 hover:text-grey-1"
          href="https://novu.co/terms/"
          target="_blank"
          rel="noreferrer"
        >
          Terms of Use
        </a>{' '}
        and{' '}
        <a
          className="font-medium text-white transition duration-200 hover:text-grey-1"
          href="https://novu.co/privacy/"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
