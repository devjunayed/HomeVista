/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import React from 'react';

const ResponsiveSlider = ({title}) => {
    return  <Carousel thumbWidth={100} showThumbs={true} autoPlay={true}>
    <div>
      <img alt={title} src="/property.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt={title} src="/property.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt={title} src="/property.jpg" />
      <p className="legend">Legend 1</p>
    </div>
  </Carousel>
};

export default ResponsiveSlider;