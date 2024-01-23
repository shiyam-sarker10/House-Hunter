import React from 'react';
import Button from '../Shared/Button';
import { HeroLottie } from '../LottieReact/LottieReact';


const Banner = () => {
    return (
      <div className="">
        <div className="h-[calc(100vh-114px)] flex justify-center items-center">
          <div className="md:w-[50%] space-y-6 ">
            <h1 className="text-[#4F64AC] text-3xl md:text-4xl lg:text-5xl leading-10">
              Discover Your Ideal Nest
            </h1>
            <p className="text-gray-400 leading-7">
              RestNest - where house owners find the perfect tenants, and house
              renters discover their dream homes. Find comfort and convenience
              in every rental journey with us.
            </p>
            <Button title="Find Your Nest"></Button>
          </div>
          <div className="md:w-[50%]">
            <HeroLottie></HeroLottie>
          </div>
        </div>
      </div>
    );
};

export default Banner;