/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import React from 'react';
import Image from 'next/image';

const ResponsiveSlider = ({ title, imgLinks }) => {

  console.log(imgLinks);
  return <div className='w-full h-96'>

    <Carousel thumbWidth={100} showThumbs={true} autoPlay={true}>

      {
        imgLinks?.length !== 0 &&
        imgLinks?.map((imgLink, index) => {
          <div className='w-full h-96' key={index}>
            <Image fill objectFit="cover" alt={title} src={imgLink} />
            <p className="legend">Legend 1</p>
          </div>
        })
      }

    </Carousel>
  </div>
};

export default ResponsiveSlider;