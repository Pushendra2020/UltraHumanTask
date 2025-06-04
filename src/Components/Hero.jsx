import heroImage from '../assets/hero_bg.png'
import ring from '../assets/ring.png'
import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full max-h-[28rem] md:max-h-[32rem]  lg:max-h-[42rem] bg-black text-white overflow-hidden grid grid-cols-1 items-center justify-center">

            <img
                src={heroImage}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />


            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
                <p className="text-xs md:text-sm tracking-widest uppercase text-gray-300 mb-2">
                    World’s most comfortable sleep tracker
                </p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Ultrahuman Ring Air
                </h1>
                <p className="text-gray-300 text-sm md:text-base max-w-md md:max-w-xl mb-6">
                    Accurately tracks sleep, HRV, temperature, and movement with daily actionable health insights.
                </p>

                <button
                    onClick={console.log("Buy Now Clicked")}
                    className="bg-black px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                    Buy Now
                </button>


            </div>

            <div className='flex items-center justify-center relative z-10 bottom-12 md:bottom-40 lg:bottom-5'>

                <img
                    src={ring}
                    alt="Ultrahuman Ring AIR"
                    className="w-48 md:w-72 -rotate-[55deg] lg:w-80 mt-10 md:mt-14 "
                />
            </div>
        </section>
    );
};

export default Hero;

















