import Image from 'next/future/image';
import React from 'react';

import SectionHeading from 'components/shared/section-heading';

import bg from './images/bg.jpg';
import mug from './images/mug.jpg';
import socks from './images/socks.jpg';
import sticker from './images/sticker.jpg';
import tShirt from './images/t-shirt.jpg';

const title = 'Swag list';
const swagList = [tShirt, mug, sticker, socks, tShirt, mug, sticker, socks];

const Swag = () => (
  <section className="swag safe-paddings relative overflow-hidden py-[100px]" id="swag">
    <div className="container relative z-10">
      <SectionHeading className="text-center">{title}</SectionHeading>
      <p className="mx-auto mt-10 max-w-[716px] text-center text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus felis, lorem ut suspendisse{' '}
        <span className="relative before:absolute before:-left-1.5 before:-z-10 before:h-[30px] before:w-[318px] before:bg-primary-1">
          ut elementum.
        </span>
      </p>

      <ul className="grid-gap mt-20 grid grid-cols-4">
        {swagList.map((item, index) => (
          <li key={index}>
            <Image
              className="border border-gray-2"
              src={item}
              alt="Swag item"
              width={338}
              height={338}
              layout="responsive"
            />
          </li>
        ))}
      </ul>
    </div>

    <Image
      className="absolute top-0 left-1/2 min-w-[1920px] -translate-x-1/2"
      src={bg}
      alt=""
      width={1920}
      height={340}
      aria-hidden
    />
  </section>
);

export default Swag;
