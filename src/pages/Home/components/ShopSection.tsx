import React from 'react';
import Cat from '../../../assets/cat.svg';
import {FaBowlFood} from "react-icons/fa6";

const ShopSection = (): React.ReactElement => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#DC975D" fillOpacity="0.5"
                      d="M0,288L26.7,277.3C53.3,267,107,245,160,229.3C213.3,213,267,203,320,192C373.3,181,427,171,480,154.7C533.3,139,587,117,640,133.3C693.3,149,747,203,800,197.3C853.3,192,907,128,960,133.3C1013.3,139,1067,213,1120,218.7C1173.3,224,1227,160,1280,122.7C1333.3,85,1387,75,1413,69.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            </svg>
            <div className="-mt-80">
                <div className="flex justify-center items-center gap-5">
                    <div className="bg-primary-50 text-center p-20 rounded-full w-1/2">
                        <div className="flex  justify-center gap-5">
                            <FaBowlFood className="text-7xl text-primary-100"/>
                            <h1 className="text-left text-4xl text-white font-bold" style={{lineHeight: '1'}}>
                                <span className="text-secondary text-xl">Tasty</span> <br/><span className="text-primary-700">Food</span>
                            </h1>
                        </div>
                        <h2 className="font-semibold text-primary-700 text-xl mt-4">Get the best food for your pets</h2>
                        <p className="text-white mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquid animi aspernatur
                            atque autem blanditiis commodi consequatur cumque delectus doloremque doloribus eaque
                            exercitationem explicabo facere facilis fugit harum id illum in inventore ipsam iure iusto
                            laborum laudantium magnam maxime minima
                        </p>

                        <button
                            className="bg-secondary hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-full mt-4 uppercase transition-all duration-300">
                            Shop Now
                        </button>
                    </div>
                    <img src={Cat} alt="cat" className="w-[500px] object-contain mix-blend-darken "/>
                </div>

            </div>
        </>
    );
};

export default ShopSection;