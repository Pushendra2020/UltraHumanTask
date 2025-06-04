import React from "react";
import sleepImage from "../assets/sleep.png";
import tempImage from "../assets/clock.png";

const Precision = () => {
  return (
    <section className="px-4 py-12 mt-10 md:py-20 lg:py-24 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center md:text-left">
        Precision in miniature
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
       
        <div className="flex flex-col bg-gray-50 rounded-xl p-6 shadow-md">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Wake up to your sleep insights
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              The Sleep Index, intelligently designed to be your sole metric for sleep health, assesses..
            </p>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 mt-3 inline-block"
            >
              LEARN MORE <span aria-hidden>↗</span>
            </a>
          </div>
          <img
            src={sleepImage}
            alt="Sleep graph"
            className="w-full rounded-lg mt-auto"
          />
        </div>

     
        <div className="flex flex-col bg-gray-50 rounded-xl p-6 shadow-md">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Temperature tracking made easy
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              Skin temperature is vital for measuring your body’s physiological states and…
            </p>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 mt-3 inline-block"
            >
              LEARN MORE <span aria-hidden>↗</span>
            </a>
          </div>
          <img
            src={tempImage}
            alt="Temperature graph"
            className="w-full rounded-lg mt-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Precision;
