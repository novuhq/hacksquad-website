import Link from 'next/link';
import PropTypes from 'prop-types';

import DevToAccount from '../../../shared/devto/dev.to';
import DevToAccountList from '../../../shared/devto/dev.to.list';
import DevToToolTip from '../../../shared/devto/tooltip';
import InviteButton from '../../../shared/invite/invite.button';

const title = 'Bonuses';

const Hero = ({ devto }) => (
  <section className="safe-paddings relative">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center py-16">
      <h1 className="font-titles text-60 font-semibold leading-none md:text-42">{title}</h1>
      <div className="md:scrollbar-hidden mx-auto mt-20 max-w-[1220px] bg-black md:-ml-4 md:w-screen md:overflow-x-auto">
        <div className="mt-5 md:min-w-[500px] md:px-7">
          <div className="grid grid-cols-[20px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[20px_390px_1fr_1fr] md:grid-cols-[20px_485px_230px_1fr] sm:grid-cols-[100px_100px_120px]">
            <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18 sm:hidden">
              #
            </span>
            <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18">
              Type
            </span>
            <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18">
              Points
            </span>
            <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18">
              Claim
            </span>
          </div>
          <ul>
            <li className="grid grid-cols-[20px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[20px_390px_1fr_1fr] md:grid-cols-[20px_485px_230px_1fr] sm:grid-cols-[100px_100px_120px]">
              <span className="sm:hidden">2</span>
              <span>Friend invite</span>
              <span>1 per friend [Max:5]</span>
              <span>
                <InviteButton />
              </span>
            </li>
            <li className="grid grid-cols-[20px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[20px_390px_1fr_1fr] md:grid-cols-[20px_485px_230px_1fr] sm:grid-cols-[100px_100px_120px]">
              <span className="sm:hidden">3</span>
              <span>
                <DevToToolTip />
              </span>
              <span>1 point</span>
              <span>{devto ? 'Connected' : <DevToAccount />}</span>
            </li>
            {!!devto && <DevToAccountList />}
          </ul>
        </div>
      </div>
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
          <span className="text-lg sm:text-[18px]">Back to my squad</span>
        </div>
      </Link>
    </div>
  </section>
);

Hero.propTypes = {
  teams: PropTypes.array,
  twitter: PropTypes.bool,
  devto: PropTypes.bool,
};

export default Hero;
