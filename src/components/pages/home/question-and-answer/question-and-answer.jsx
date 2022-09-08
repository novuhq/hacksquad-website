import Image from 'next/future/image';
import React from 'react';

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
    question: 'Can I register for both Hacktoberfest and Hacksquad?',
    answer: 'Yes',
  },
  {
    question: 'Do I need other people to help me contribute code?',
    answer: 'No, we will assign a team for you, it’s a great time to meet more community members.',
  },
  {
    question: 'When is the event happening?',
    answer: '1st October 2022',
  },
];

const QuestionAndAnswer = () => (
  <section className="safe-paddings relative py-26" id="qa">
    <div className="container relative z-10">
      <SectionHeading className="text-center">{title}</SectionHeading>

      <ul className="mx-auto mt-14 max-w-[968px]">
        {items.map(({ question, answer }, index) => (
          <li className="border-b border-gray-2 py-6 last:border-none" key={index}>
            <h3 className="text-[25px] font-medium">{question}</h3>
            <p className="mt-5 text-lg text-gray-1">- {answer}</p>
          </li>
        ))}
      </ul>

      <SignUpButton className="mx-auto mt-14" />

      <Image
        className="absolute top-[-394px] right-[-224px]"
        src={bgRightLine}
        alt=""
        width={253}
        height={880}
        aria-hidden
      />
    </div>

    <Image
      className="absolute bottom-0 left-0"
      src={bgLeft}
      alt=""
      width={960}
      height={886}
      aria-hidden
    />
    <Image
      className="absolute top-0 right-0"
      src={bgRight}
      alt=""
      width={960}
      height={886}
      aria-hidden
    />
    <Image
      className="absolute bottom-[118px] left-0"
      src={bgLeftGlitch}
      alt=""
      width={290}
      height={812}
      aria-hidden
    />
    <Image
      className="absolute top-[-66px] right-0"
      src={bgRightGlitch}
      alt=""
      width={476}
      height={832}
      aria-hidden
    />
  </section>
);

export default QuestionAndAnswer;
