import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import InviteButton from '../../../shared/invite/invite.button';
import ProductHuntButton from '../../../shared/product-hunt/product-hunt.button';

import ForkTheLibrary from './fork.the.library';
import StarTheLibrary from './star.the.library';

const title = 'Bonuses';

const Hero = ({ findStars, findForks, productHunt }) => (
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
              <span className="sm:hidden">1</span>
              <span>
                <strong>
                  Product Hunt launch <span className="text-[#ff9999]">(24 hours bonus)</span>
                </strong>
                :<br />
                <a
                  href="https://www.producthunt.com/posts/novu"
                  rel="noreferrer"
                  target="_blank"
                  className="cursor-pointer underline hover:font-bold"
                >
                  watch the video over Product Hunt
                </a>{' '}
                help us with the launch, write us a nice comment, and submit your answer to the
                riddle.
              </span>
              <span>2 point</span>
              <ProductHuntButton productHunt={productHunt} />
            </li>
            <li className="grid grid-cols-[20px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[20px_390px_1fr_1fr] md:grid-cols-[20px_485px_230px_1fr] sm:grid-cols-[100px_100px_120px]">
              <span className="sm:hidden">2</span>
              <span>Friend invite</span>
              <span>1 per friend [Max:5]</span>
              <span>
                <InviteButton />
              </span>
            </li>
            <StarTheLibrary
              number={3}
              name="Novu"
              library="novuhq/novu"
              accepted={findStars.find((item) => item.library === 'novuhq/novu')}
            />
            <StarTheLibrary
              number={4}
              name="ToolJet"
              library="tooljet/tooljet"
              accepted={findStars.find((item) => item.library === 'tooljet/tooljet')}
            />
            <StarTheLibrary
              number={5}
              name="Wasp"
              library="wasp-lang/wasp"
              accepted={findStars.find((item) => item.library === 'wasp-lang/wasp')}
            />
            <StarTheLibrary
              number={6}
              name="Hanko"
              library="teamhanko/hanko"
              accepted={findStars.find((item) => item.library === 'teamhanko/hanko')}
            />
            <StarTheLibrary
              number={7}
              name="CrowdDev"
              library="CrowdDotDev/crowd.dev"
              accepted={findStars.find((item) => item.library === 'CrowdDotDev/crowd.dev')}
            />
            <StarTheLibrary
              number={8}
              name="ClickVote"
              library="clickvote/clickvote"
              bonus={1}
              accepted={findStars.find((item) => item.library === 'clickvote/clickvote')}
            />
            <ForkTheLibrary
              number={9}
              name="Novu"
              library="novuhq/novu"
              accepted={findForks.find((item) => item.library === 'novuhq/novu')}
            />
            <ForkTheLibrary
              number={10}
              name="ToolJet"
              library="tooljet/tooljet"
              accepted={findForks.find((item) => item.library === 'tooljet/tooljet')}
            />
            <ForkTheLibrary
              number={11}
              name="Wasp"
              library="wasp-lang/wasp"
              accepted={findForks.find((item) => item.library === 'wasp-lang/wasp')}
            />
            <ForkTheLibrary
              number={12}
              name="Hanko"
              library="teamhanko/hanko"
              accepted={findForks.find((item) => item.library === 'teamhanko/hanko')}
            />
            <ForkTheLibrary
              number={13}
              name="CrowdDev"
              library="CrowdDotDev/crowd.dev"
              accepted={findForks.find((item) => item.library === 'CrowdDotDev/crowd.dev')}
            />
            <ForkTheLibrary
              number={14}
              name="ClickVote"
              library="clickvote/clickvote"
              bonus={1}
              accepted={findForks.find((item) => item.library === 'clickvote/clickvote')}
            />
            <li className="grid grid-cols-[20px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[20px_390px_1fr_1fr] md:grid-cols-[20px_485px_230px_1fr] sm:grid-cols-[100px_100px_120px]">
              <span className="sm:hidden">8</span>
              <span>
                <strong>Join ToolJet Slack:</strong>
                <br />
                Post an intro on the #hack-squad channel with your GitHub ID
                <br />
                <a className="underline hover:font-bold" href="https://bit.ly/tj-slack-hs">
                  https://bit.ly/tj-slack-hs
                </a>
              </span>
              <span>1 point</span>
              <span>
                <a
                  className="cta-btn-animation relative flex max-w-full cursor-pointer items-center justify-center leading-none"
                  rel="noreferrer"
                  target="_blank"
                  href="https://docs.google.com/spreadsheets/d/1T8wzktxoPuQgaw9365q11FYK0KDXJ6xyIj4z9Bk6mrs/edit#gid=0"
                >
                  <svg
                    className="cta-btn-animation-border xs:w-full"
                    width="200"
                    height="59"
                    viewBox="0 0 268 59"
                    fill="none"
                  >
                    <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
                    <span className="text-lg sm:text-[18px]">Check Submission</span>
                  </div>
                </a>
              </span>
            </li>
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
  productHunt: PropTypes.object,
  findStars: PropTypes.array,
  findForks: PropTypes.array,
};

export default Hero;
