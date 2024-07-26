import React from 'react';
import HeroSection from "./components/HeroSection.tsx";
import ServiceSection from "./components/ServiceSection.tsx";
import CategorySection from "./components/CategorySection.tsx";
import BannerSection from "./components/BannerSection.tsx";
import ShopSection from "./components/ShopSection.tsx";

const Home = ():React.ReactElement => {
    return (
        <>
            <HeroSection/>
            <ServiceSection/>
            <BannerSection/>
            <CategorySection/>
            <ShopSection/>
        </>
    );
};

export default Home;