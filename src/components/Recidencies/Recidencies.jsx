import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper"; 
import "swiper/css";
import "./Recidencies.css";
import data from "../../utils/slider.json";
import { SliderSetting } from "../../utils/common";

// Enable Autoplay module
SwiperCore.use([Autoplay]);

const Recidencies = () => {
  return (
    <section className="r-wraper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choice</span>
          <span className="primaryText">Popular Recidencies</span>
        </div>
        <Swiper
          loop={true}
          speed={2000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
        >
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>₹ </span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recidencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button className="b1" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button className="b2" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
