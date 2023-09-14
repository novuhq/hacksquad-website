'use client';

import { m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

import SignUpButton from 'components/shared/sign-up-button';

const itemArrowVariants = {
  from: {
    rotate: 0,
  },
  to: {
    rotate: 180,
    transition: { duration: 0.3 },
  },
  exit: {
    rotate: 0,
    transition: { duration: 0.3 },
  },
};

const itemContentVariants = {
  from: {
    height: 0,
  },
  to: {
    height: 'auto',
    transition: { duration: 0.3 },
  },
  exit: {
    height: 0,
    transition: { duration: 0.3 },
  },
};

const title = 'Q&A';
const items = [
  {
    question: "What's in it for me?",
    answer:
      'Meet amazing new people, get more involved with the open-source community and win awesome swag!',
  },
  {
    question: 'When is the event happening?',
    answer: 'Between 1st - 31st October 2022',
  },
  {
    question: 'How does it work?',
    answer: (
      <>
        Register to the HackSquad using your GitHub, Join a squad or get assigned to a random squad,
        contribute code and get Swag! Not sure where to start? Check:{' '}
        <a
          className="text-primary-2 hover:border-primary-2 inline-block border-b-2 border-transparent transition-[border-color] duration-200"
          href="https://goodfirstissue.dev"
          target="_blank"
          rel="noreferrer"
        >
          goodfirstissue.dev
        </a>
      </>
    ),
  },
  {
    question: 'How many members can join a squad?',
    answer: (
      <>
        Each squad can have a maximum of 5 members.
        <br />
        If you can't find all 5, you can always turn on the "Allow random people to join my squad"
        <br />
      </>
    ),
  },
  {
    question: 'How do we calculate the score?',
    answer: (
      <>
        Each day at midnight we will calculate every squad member <strong>MERGED PR</strong> and sum
        them all together. By the end of the event, the top 60 squads will win awesome swag! The
        calculation method can be{' '}
        <a
          className="text-primary-2 hover:border-primary-2 inline-block border-b-2 border-transparent transition-[border-color] duration-200"
          href="https://github.com/novuhq/hacksquad-background/blob/main/src/services/github/github.service.ts"
          target="_blank"
          rel="noreferrer"
        >
          found here
        </a>
      </>
    ),
  },
  {
    question: 'How many people will get swag?',
    answer: <>The top 60 squads will win awesome swag! around ~300 winners!</>,
  },
  {
    question: 'Can I register for both Hacktoberfest and Hacksquad?',
    answer:
      'Yes, and even recommended! Each contribution will be counted for both Hacktoberfest and HackSquad',
  },
  {
    question: 'Do I need other people to help me contribute code?',
    answer: 'You can join a squad and invite friends or we will auto-assign you to another squads',
  },
  {
    question: 'I want support / get more updates / find a squads member',
    answer: (
      <>
        Feel free to follow us on{' '}
        <a
          className="text-primary-2 hover:border-primary-2 inline-block border-b-2 border-transparent transition-[border-color] duration-200"
          href="https://twitter.com/HackSquadDev"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>{' '}
        and join our{' '}
        <a
          className="text-primary-2 hover:border-primary-2 inline-block border-b-2 border-transparent transition-[border-color] duration-200"
          href="https://discord.gg/vcqkXgT3Xr"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
      </>
    ),
  },
  {
    question: 'Does the swag in the picture is the actual swag?',
    answer: (
      <>
        Most of it is! We will also add more Swag from our sponsors.
        <br />
        We still haven&apos;t finalized everything.
      </>
    ),
  },
  {
    question: 'How long will it take to receive the swag?',
    answer: (
      <>
        We are sending the swag from the US.
        <br />
        We assume that it will reach everybody within 60-90 days.
      </>
    ),
  },
  {
    question: 'Do I need to pay duty for the SWAG?',
    answer: <>No! We are taking care of it!</>,
  },
  {
    question: 'I want to create a workshop for the event during October',
    answer:
      "That's awesome! We would be super happy to give you a stage, please email us at nevo@novu.co",
  },
];

const QuestionAndAnswer = ({ isAuthorized = false }) => {
  const [activeItemIndexes, setActiveItemIndexes] = useState({ 0: true });

  return (
    <section
      className="safe-paddings relative scroll-mt-5 pb-40 pt-[100px] md:pb-28 md:pt-20 sm:pb-20 sm:pt-16 xs:pt-12"
      id="qa"
    >
      <div className="container">
        <h2 className="bg-gradient-title bg-white bg-clip-text pb-6 text-center font-titles text-60 leading-1.125 text-transparent">
          {title}
        </h2>

        <LazyMotion features={domAnimation}>
          <ul className="mx-auto mt-8 max-w-[1008px]">
            {items.map(({ question, answer }, index) => {
              const isActive = activeItemIndexes[index];

              const handleHeaderClick = () => {
                setActiveItemIndexes((previousActiveItemIndexes) => ({
                  ...previousActiveItemIndexes,
                  [index]: !isActive,
                }));
              };

              return (
                <m.li
                  className="border-b border-white border-opacity-20 py-4"
                  key={index}
                  initial="from"
                  animate={isActive ? 'to' : 'exit'}
                  role="button"
                  tabIndex="0"
                  onClick={handleHeaderClick}
                  onKeyDown={handleHeaderClick}
                >
                  <div className="flex justify-between space-x-2.5 text-white outline-none">
                    <h3 className="text-20 font-medium leading-normal">{question}</h3>
                    <m.svg
                      className="relative mt-3 flex-shrink-0"
                      width="16"
                      height="10"
                      fill="none"
                      viewBox="0 0 16 10"
                      variants={itemArrowVariants}
                      aria-hidden
                    >
                      <path stroke="currentColor" strokeWidth="2" d="m1 1.5 7 7 7-7" />
                    </m.svg>
                  </div>
                  <m.div
                    className="text-with-link max-w-[920px] overflow-hidden"
                    variants={itemContentVariants}
                  >
                    <p className="mt-4 space-y-2.5 text-16 leading-normal text-gray-1">{answer}</p>
                  </m.div>
                </m.li>
              );
            })}
          </ul>
        </LazyMotion>

        <div className="flex justify-center">
          <SignUpButton
            className="mt-[72px]"
            size="md"
            theme="fill-yellow"
            to={isAuthorized ? '/my-team' : null}
            isSignInButton={!isAuthorized}
          >
            {!isAuthorized ? 'Sign up with GitHub' : 'Go to my Squad'}
          </SignUpButton>
        </div>
      </div>
    </section>
  );
};

QuestionAndAnswer.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default QuestionAndAnswer;
