"use client"
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import "../../app/globals.scss"


import { Autoplay, Pagination,  Keyboard, Mousewheel } from 'swiper/modules';

function Hero() {
  return (
    <div className="hero">
      
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true,  }}
      keyboard={{ enabled: true, }}
      mousewheel={true}

      modules={[Autoplay, Pagination, Keyboard, Mousewheel ]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="define">
          <div className="defineInfo">
            <h1>Re-define </h1>
            <h2>financial freedom</h2>
            <div className="buttons">
              <button className="button"><span>Read whitepaper</span></button>
              <button className="button"><span>IDO starts in: 90.23.59.59</span></button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="launchpad" >
            <div className="launchpadInfo">
              <h1>IDO Lauchpad</h1>
              <h2>empowering Web3 projects</h2>
              <div className="buttons">
                <button className="button"><span>Launch VXC-DAO protocol</span></button>
                <button className="button"><span>IDO starts in: 90.23.59.59</span></button>
              </div>
            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="journey">
          <div className="journeyInfo">
            <h1>Explore</h1>
            <h2>Be part of the journey</h2>
            <div className="buttons">
              <button className="button"><span>Explore the ecosystem</span></button>
              <button className="button"><span>IDO starts in: 90.23.59.59</span></button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="together">
          <div className="togetherInfo">
            <h1>Difference</h1>
            <h2>Build the future together</h2>
            <div className="buttons">
              <button className="button"><span>Get started</span></button>
              <button className="button"><span>IDO starts in: 90.23.59.59</span></button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="vindexpro">
          <div className="vindexproInfo">
            <h1>XPro <span>(coming soon)</span></h1>
            <h2>Metaverse Stock & Bond Market</h2>
            <div className="buttons">
              <input className="input" type="email" placeholder='Mail Adress' />
              <button className="button"><span>Join waitlist</span></button>
            </div>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>

    </div>
  )
}

export default Hero