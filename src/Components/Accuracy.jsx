import React from "react";
import A_1 from "../assets/A_1.png";
import A_2 from "../assets/A_2.png";
import A_3 from "../assets/A_3.png";
import A_4 from "../assets/A_4.png";
const Accuracy = () => {
  return (
    <section className="px-6 py-10 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
      <p className="text-sm text-gray-500 font-medium mb-2">
        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
        A SUBLIME DESIGN WONDER
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Accuracy at its core</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      
        <div className="flex flex-col gap-4 md:gap-96 lg:gap-80">
          <div className="bg-blue-700 text-white p-6 rounded-2xl text-center">
            <p className="text-4xl font-semibold">4–6</p>
            <p className="text-sm">Days Battery life</p>
          </div>
          <div className="bg-lime-300 text-black p-6 rounded-2xl text-center">
            <p className="text-3xl font-semibold">2.4</p>
            <p className="text-sm">Grams Light</p>
          </div>
        </div>

       
        <div className="flex flex-col gap-4">
          <div className="bg-gray-100 p-6 rounded-2xl">
            <img src={A_1} className="mb-3 text-xl"/>
            <h3 className="font-semibold mb-1">Precision engineering at the UltraFactory</h3>
            <p className="text-sm text-gray-600">
              Ultrahuman's integrated production facility ensures gold-standard
              performance testing, providing complete control.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl">
            <img src={A_3} className="mb-3 text-xl h-28"/>
            <h3 className="font-semibold mb-1">
              Trusted by the World's #1 Ranked Cycling Team and more
            </h3>
            <p className="text-sm text-gray-600">
              UAE Team Emirates, Team ADQ, and many other high-performance teams
              worldwide.
            </p>
          </div>
        </div>

      
        <div className="flex flex-col gap-4">
          <div className="bg-gray-100 p-6 rounded-2xl">
            <img src={A_2} className="mb-3 text-xl"/>
            <h3 className="font-semibold mb-1">
              More accurate from the Finger than the Wrist
            </h3>
            <p className="text-sm text-gray-600">
              The finger, with its higher perfusion index and arterioles, serves
              as a richer and more accurate source of biomarker information.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl">
            <img src={A_4} className="mb-3 text-xl"/>
            <h3 className="font-semibold mb-1">
              Precision engineering at the UltraFactory
            </h3>
            <p className="text-sm text-gray-600">
              Ultrahuman's integrated production facility ensures gold-standard
              performance testing, providing complete control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accuracy;
