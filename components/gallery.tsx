import React from "react";
import "@styles/global.css";
import Image from "next/image";
import "@styles/global.css";

export const Gallery = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-2">
      <h2 className="text-xl font-medium text-sky-900 py-2 lg:mb-10">
        Project Gallery
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center lg:bg-teal-200 lg:w-8/12 lg:h-72 w-full rounded-lg lg:shadow my-10 items-center">
        <div className="w-full gallery-container gallery-container-one" >
          <div className="w-3/4 lg:w-80 xl:w-96 bg-sky-100 h-48 border border-gray-200 rounded-lg shadow lg:-mt-20">
            <img src="/assets/images/gallery/image1.png" alt="" className="w-full h-full rounded-lg"/>
          </div>
          <div className="w-3/4 lg:w-80 xl:w-96 bg-sky-100 h-48 border border-gray-200 rounded-lg shadow lg:mt-16 lg:-mb-20">
          <img src="/assets/images/gallery/image2.jpg" alt="" className="w-full h-full rounded-lg"/>
            
          </div>
        </div>
        <div className="w-full gallery-container gallery-container-two">
          <div className="w-3/4 lg:w-80 xl:w-96 bg-sky-100 lg:h-40 h-48 border border-gray-200 rounded-lg shadow">
          <img src="/assets/images/gallery/image3.png" alt="" className="w-full h-full rounded-lg"/>
          </div>
        </div>
        <div className="w-full gallery-container gallery-container-three">
          <div className="w-3/4 lg:w-80 xl:w-96 bg-sky-100 h-48 border border-gray-200 rounded-lg shadow lg:-mt-20">
          <img src="/assets/images/gallery/image4.png" alt="" className="w-full h-full rounded-lg"/>
          </div>
          <div className="w-3/4 lg:w-80 xl:w-96 bg-sky-100 h-48 border border-gray-200 rounded-lg shadow lg:mt-16 lg:-mb-20">
          <img src="/assets/images/gallery/image5.jpg" alt="" className="w-full h-full rounded-lg"/>
          </div>
        </div>
      </div>
    </div>
  );
};
