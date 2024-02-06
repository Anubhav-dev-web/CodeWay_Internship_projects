import React from "react";
import { selfpro } from "../constants";
import "../index.css";
import pdf from "../assets/resumeAnubhav.pdf";
const Hero2 = () => {
  const handleClick = () => {
    const link = document.createElement("a");

    link.href = pdf;

    link.download = "downloaded-file.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="bg-custom text-white pt-32  px-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between pl-1 lg:pl-28 ">
        <div className="lg:w-1/2 mb-6 lg:mb-0 p-0 md:p-20 ">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-[#ffffff]">
            Hey !{" "}
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            I'm{" "}
            <span
              className="text-4xl lg:text-6xl font-bold mb-4 text-[#8A2BE2]"
              text
            >
              Anubhav
            </span>
          </h1>
          <p className="text-lg lg:text-xl mb-4">
            👋 Hi there! I'm Anubhav , a passionate and results-driven web
            developer with expertise in both front-end and back-end
            technologies.
          </p>
          <button
            onClick={() => handleClick()}
            className="bg-white text-[#151030] px-6 py-3 rounded-full text-lg font-bold hover:bg-[#8A2BE2] hover:text-[#ffffff]"
          >
            Download Resume
          </button>
        </div>
        <div className="lg:w-1/2 pr-5">
          {/* Replace the following URL with your actual image URL */}
          <img
            src={selfpro.image1}
            alt="Portfolio Image"
            className="w-full md:w-96 lg:w-96 xl:w-128  shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
