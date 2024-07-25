import React from 'react';
import FooterCopyright from "./FooterComponent/FooterCopyright.tsx";
import FooterLegal from "./FooterComponent/FooterLegal.tsx";
import FooterLinks from "./FooterComponent/FooterLinks.tsx";
import FooterMission from "./FooterComponent/FooterMission.tsx";
import FooterContact from "./FooterComponent/FooterContact.tsx";
import NewsLetterSignup from "./FooterComponent/NewsLetterSignup.tsx";
import FooterSosmed from "./FooterComponent/FooterSosmed.tsx";

const Footer = ():React.ReactElement => {
    return (
        <footer className="bg-secondary text-white py-16">
            <div className="mx-32">
                <div
                    className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
                    {/* Left Section */}
                    <div className="flex-1">
                        <FooterMission/>
                        <FooterContact/>
                    </div>

                    {/* Middle Section */}
                    <div className="flex-1 flex">
                        <FooterLinks/>
                        <FooterLegal/>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1">
                        <NewsLetterSignup/>
                        <h4 className="text-lg font-bold text-primary-900 text-center md:text-left my-4 uppercase">
                            Connect with Us
                        </h4>
                        <FooterSosmed/>
                    </div>
                </div>
                {/* Copyright */}
                <hr className="border-primary-700 my-8"/>
                <FooterCopyright/>
            </div>
        </footer>
    );
};

export default Footer;