import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            quibusdam quod omnis voluptas provident nobis magni tempora ad
            aliquid ab?
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            quibusdam quod omnis voluptas provident nobis magni tempora ad
            aliquid ab?
          </p>
          <b className="text-gray-800">Our Mission</b>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            quibusdam quod omnis voluptas provident nobis magni tempora ad
            aliquid ab?
          </p>
        </div>
      </div>
      {/* duv */}
      <div className="text-4xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row text-sm mb-20">
        <div className="flex flex-col justify-center gap-5 border px-10 py-8 md:px-16 sm:py-20">
          <b className="text-gray-800">Quality Assurance:</b>

          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            quibusdam quod omnis voluptas provident nobis magni tempora ad
            aliquid ab?
          </p>
        </div>

        <div className="flex flex-col justify-center gap-5 border px-10 py-8 md:px-16 sm:py-20">
          <b className="text-gray-800">Convenience:</b>

          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            quibusdam quod omnis voluptas provident nobis magni tempora ad
            aliquid ab?
          </p>
        </div>
        <div className="flex flex-col justify-center gap-5 border px-10 py-8 md:px-16 sm:py-20">
          <b className="text-gray-800">Exceptional:</b>

          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            quibusdam quod omnis voluptas provident nobis magni tempora ad
            aliquid ab?
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
