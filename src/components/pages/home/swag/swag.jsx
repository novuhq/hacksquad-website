import Image from 'next/future/image';
import React from 'react';

import SectionHeading from 'components/shared/section-heading';

import bag from './images/bag.jpg';
import bgBorder from './images/bg-border.png';
import bgLeftGlitch from './images/bg-left-glitch.jpg';
import bgRightGlitch from './images/bg-right-glitch.jpg';
import bg from './images/bg.jpg';
import box from './images/box.jpg';
import hoodie from './images/hoodie.jpg';
import mug from './images/mug.jpg';
import sticker2 from './images/sticker-2.jpg';
import sticker from './images/sticker.jpg';
import tShirt2 from './images/t-shirt-2.jpg';
import tShirt from './images/t-shirt.jpg';

const title = 'Swag list';
const swagList = [tShirt, mug, sticker, bag, box, hoodie, tShirt2, sticker2];

const Swag = () => (
  <section className="safe-paddings relative py-26 md:py-20 sm:py-16 xs:py-12" id="swag">
    <div className="container relative z-10">
      <SectionHeading className="text-center">{title}</SectionHeading>
      <p className="mx-auto mt-10 max-w-[716px] text-center text-lg md:mt-8 md:text-[18px] sm:mt-6 sm:text-base">
        Join a squad, Contribute code and win Swag. Simple.
        <br />
        Swag list will be{' '}
        <span className="relative before:absolute before:-left-1.5 before:-z-10 before:h-[30px] before:w-[318px] before:bg-primary-1">
          updated soon
        </span>
      </p>

      <ul className="grid-gap relative mt-20 grid grid-cols-4 md:mt-16 sm:mt-10 sm:grid-cols-2">
        {swagList.map((item, index) => (
          <li
            className="relative before:absolute before:h-full before:w-full before:border before:border-gray-2"
            key={index}
          >
            <Image src={item} alt="Swag item" width={338} height={388} layout="responsive" />
          </li>
        ))}

        <Image
          className="absolute top-1/2 left-1/2 -z-10 min-w-full max-w-[1532px] -translate-x-1/2 -translate-y-1/2 xl:max-w-[103%] sm:hidden"
          src={bgBorder}
          alt=""
          width={1532}
          height={876}
          layout="responsive"
          aria-hidden
        />
      </ul>
    </div>

    <Image
      className="absolute top-0 left-1/2 -z-10 min-w-[1920px] -translate-x-1/2"
      src={bg}
      alt=""
      width={1920}
      height={340}
      aria-hidden
    />
    <Image
      className="absolute top-[46.6%] left-0 -z-10 xl:left-[-20%]"
      src={bgLeftGlitch}
      alt=""
      width={534}
      height={17}
      aria-hidden
    />
    <Image
      className="absolute top-[20.6%] right-0 -z-10 xl:right-[-30%] lg:hidden"
      src={bgRightGlitch}
      alt=""
      width={534}
      height={164}
      aria-hidden
    />
  </section>
);

export default Swag;
