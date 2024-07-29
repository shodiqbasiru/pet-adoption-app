import React from 'react';
import HeroSection from "./components/HeroSection.tsx";
import ServiceSection from "./components/ServiceSection.tsx";
import CategorySection from "./components/CategorySection.tsx";
import BannerSection from "./components/BannerSection.tsx";
import ShopSection from "./components/ShopSection.tsx";
import TestimonySection from "./components/TestimonySection.tsx";

const Home = ():React.ReactElement => {
    return (
        <>
            <HeroSection/>
            <ServiceSection/>
            <BannerSection/>
            <CategorySection/>
            <ShopSection/>
            <TestimonySection/>
        </>
    );
};

export default Home;