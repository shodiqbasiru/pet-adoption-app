import React from 'react';
import Navbar from "../components/layouts/Navbar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/layouts/Footer.tsx";

const Root = ():React.ReactElement => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Root;