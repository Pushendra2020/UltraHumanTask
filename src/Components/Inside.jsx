


import React, { useRef } from 'react';
import InsideRing from '../assets/insideRing.png';
import { useScroll, useInView } from 'framer-motion';
import { Insidepara, Insidepara2, Insidepara3, Insidepara4 } from './Insidepara';

const Inside = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(containerRef, {
    margin: "10% 0px -10% 0px",
    once: false,
  });

  return (
    <section ref={containerRef} className="bg-white lg:px-24 px-6 py-12 md:px-16 md:py-20">
      <h2 className="text-3xl md:text-4xl sticky top-[17vh] font-semibold text-gray-800 mb-8 z-10">
        Beautiful from the inside
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-start gap-8">
       <div className="w-full md:w-1/2 relative h-[400vh]">
          
          <div className="sticky top-[55vh]">
            <Insidepara scrollYProgress={scrollYProgress} isActive={isInView} />
            <Insidepara2 scrollYProgress={scrollYProgress} isActive={isInView} />
            <Insidepara3 scrollYProgress={scrollYProgress} isActive={isInView} />
            <Insidepara4 scrollYProgress={scrollYProgress} isActive={isInView} />
          </div>
        </div>

     
        <div className="w-full md:w-1/2 sticky top-[25vh] self-start bg-black rounded-2xl p-4 h-fit">
          <img
            src={InsideRing}
            alt="Ring"
            className="w-full h-auto object-contain"
          />
          <span className="absolute top-4 right-4 bg-green-400 text-black text-xs font-semibold px-4 py-1 rounded-full">
            PPG SENSORS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Inside;



