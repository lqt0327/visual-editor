import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import "./index.sass";
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function SwiperComponent() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            autoplay
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="swiper-custom"
        >
            <SwiperSlide><img src="https://img.jj59.com/6/5a717afb6f4b.jpg" alt="test" /></SwiperSlide>
            <SwiperSlide><img src="https://img.jj59.com/6/5a717afb6f4b.jpg" alt="test" /></SwiperSlide>
            <SwiperSlide><img src="https://img.jj59.com/6/5a717afb6f4b.jpg" alt="test" /></SwiperSlide>
            <SwiperSlide><img src="https://img.jj59.com/6/5a717afb6f4b.jpg" alt="test" /></SwiperSlide>
        </Swiper>
    )
}

export default SwiperComponent;