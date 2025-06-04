import React from 'react';

const About = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20 text-black">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold tracking-widest mb-4 flex items-center gap-1">
          <span className="h-2 w-2 bg-black  inline-block"></span> ABOUT
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-4">
          Beautiful from the inside. Dive into the realm of design
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light">
          ingenuity. Take a closer look at the stunning interiors, meticulously engineered
          for a seamless integration of form and function.
        </p>
      </div>
    </section>
  );
};

export default About;
