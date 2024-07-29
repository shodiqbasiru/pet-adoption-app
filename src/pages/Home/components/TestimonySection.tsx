import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";

const testimonials = [
    {
        name: "John Doe",
        text: "PetHeaven helped me find the perfect pet. The adoption process was smooth and the staff was very helpful.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Jane Smith",
        text: "I adopted my cat from PetHeaven and couldn't be happier. They truly care about the animals.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Sam Wilson",
        text: "Great experience! The team at PetHeaven is amazing and they helped me find my new best friend.",
        image: "https://via.placeholder.com/150"
    }
];

const TestimonySection = ():React.ReactElement => {
    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-4xl font-bold text-center text-primary-900 mb-8">What Our Clients Say</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                loop={true}
                className="max-w-4xl mx-auto"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                        <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 mx-auto rounded-full mb-4"/>
                        <p className="text-lg text-gray-700 mb-2">"{testimonial.text}"</p>
                        <h3 className="text-xl font-semibold text-primary-900">{testimonial.name}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonySection;