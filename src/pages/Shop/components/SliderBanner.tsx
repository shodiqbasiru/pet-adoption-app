import React from 'react';
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import { Swiper as SwiperClass } from 'swiper';

const SliderBanner = ():React.ReactElement => {

    const prevRef = React.useRef<HTMLDivElement>(null);
    const nextRef = React.useRef<HTMLDivElement>(null);

    const banners = [
        {
            image: "src/assets/banner-1.jpg",
            name: "banner-1",
        },
        {
            image: "src/assets/banner-2.jpg",
            name: "banner-2",
        },
        {
            image: "src/assets/banner-3.jpg",
            name: "banner-3",
        }
    ];

    const buttonNavigation =(swiper: SwiperClass) => {
        prevRef.current?.addEventListener("click", () => {
            swiper.slidePrev();
        });
        nextRef.current?.addEventListener("click", () => {
            swiper.slideNext();
        });
    }

    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center">
                <div ref={prevRef} className="custom-prev bg-gray-800 text-white p-2 rounded-full cursor-pointer">
                    <BiChevronLeft/>
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
                <div ref={nextRef} className="custom-next bg-gray-800 text-white p-2 rounded-full cursor-pointer">
                    <BiChevronRight/>
                </div>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={buttonNavigation}
                loop={true}
                className="max-w-5xl mx-auto"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}
                                 className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg overflow-hidden">
                        <img src={banner.image} alt={banner.name} className="w-full"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderBanner;