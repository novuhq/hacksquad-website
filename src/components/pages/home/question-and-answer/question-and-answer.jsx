import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/future/image';
import React, { useState } from 'react';

import SectionHeading from 'components/shared/section-heading';
import SignUpButton from 'components/shared/sign-up-button';

import bgLeftGlitch from './images/bg-left-glitch.png';
import bgLeft from './images/bg-left.jpg';
import bgRightGlitch from './images/bg-right-glitch.png';
import bgRightLine from './images/bg-right-line.png';
import bgRight from './images/bg-right.jpg';

const title = 'Q&A';
const items = [
  {
    question: "What's in it for you?",
    answer:
      'Meet amazing new people, get more involved with the open-source community and win awesome swag!',
  },
  {
    question: 'When is the event happening?',
    answer: '1st October 2022',
  },
  {
    question: 'How does it work?',
    answer: (
      <>
        Register to the HackSquad using your GitHub, Join a team or get assigned to a random team,
        contribute code and get Swag! Not sure where to start? Check:{' '}
        <a
          className="inline-block border-b-2 border-transparent text-primary-2 transition-[border-color] duration-200 hover:border-primary-2"
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
    question: 'How do you calculate the score?',
    answer:
      'Each day we will calculate every team member approved PR and sum them all together. By the end of the event, the top 300 teams will win awesome swag!',
  },
  {
    question: 'Can I register for both Hacktoberfest and Hacksquad?',
    answer:
      'Yes, and even recommended! Each contribution will be counted for both Hacktoberfest and HackSquad',
  },
  {
    question: 'Do I need other people to help me contribute code?',
    answer: 'You can join a team and invite friends or we will auto-assign you to another team',
  },
  {
    question: 'I want to create a workshop for the event during October',
    answer:
      "That's awesome! We would be super happy to give you a stage, please email us at nevo@novu.co",
  },
];

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

const QuestionAndAnswer = () => {
  const [activeItemIndexes, setActiveItemIndexes] = useState({});

  return (
    <section className="safe-paddings relative py-26 md:py-20 sm:py-16 xs:py-12" id="qa">
      <div className="container relative z-10">
        <SectionHeading className="text-center">{title}</SectionHeading>

        <ul className="mx-auto mt-14 max-w-[968px] sm:mt-6">
          {items.map(({ question, answer }, index) => {
            const isActive = activeItemIndexes[index];

            const handleHeaderClick = () => {
              setActiveItemIndexes((previousActiveItemIndexes) => ({
                ...previousActiveItemIndexes,
                [index]: !isActive,
              }));
            };
            return (
              <motion.li
                className="border-b border-gray-2 last:border-none"
                key={index}
                initial="from"
                animate={isActive ? 'to' : 'exit'}
              >
                <div
                  className="flex items-start justify-between space-x-3.5 py-6"
                  role="button"
                  tabIndex={0}
                  onClick={handleHeaderClick}
                  onKeyDown={handleHeaderClick}
                >
                  <h3 className="text-[25px] font-medium md:text-lg sm:text-[18px]">{question}</h3>
                  <span
                    className={clsx(
                      'after:transition-[transform, opacity] relative mt-2 flex h-5 w-5 flex-shrink-0 items-center justify-center before:absolute before:h-[1.5px] before:w-full before:bg-white after:absolute after:h-full after:w-[1.5px] after:bg-white after:duration-200 md:mt-1.5',
                      {
                        'after:-rotate-90 after:opacity-0': isActive,
                      }
                    )}
                    aria-hidden
                  />
                </div>
                <motion.div className="overflow-hidden" variants={itemContentVariants}>
                  <p className="pb-6 text-lg text-gray-1 md:text-base">- {answer}</p>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>

        <SignUpButton className="mx-auto mt-14 sm:mt-10" />

        <Image
          className="absolute top-[-394px] right-[-260px] lg:hidden"
          src={bgRightLine}
          alt=""
          width={288}
          height={868}
          aria-hidden
        />
      </div>

      <Image
        className="absolute bottom-0 left-0 xl:left-[-30%]"
        src={bgLeft}
        alt=""
        width={960}
        height={886}
        aria-hidden
      />
      <Image
        className="absolute top-0 right-0 xl:right-[-30%]"
        src={bgRight}
        alt=""
        width={960}
        height={886}
        aria-hidden
      />
      <Image
        className="absolute bottom-[118px] left-0 xl:left-[-12%] lg:left-[-26%] md:hidden"
        src={bgLeftGlitch}
        alt=""
        width={290}
        height={812}
        aria-hidden
      />
      <Image
        className="absolute top-[-66px] right-0 xl:right-[-6%] md:max-w-[46%]"
        src={bgRightGlitch}
        alt=""
        width={476}
        height={832}
        aria-hidden
      />
    </section>
  );
};

export default QuestionAndAnswer;
