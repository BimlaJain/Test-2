"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROGRESS_ICONS, SLIDER_DATA } from "@/utils/helper";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const progressRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderWrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const totalSlides = SLIDER_DATA.length;
    const slideWidth = sliderWrapperRef.current ? sliderWrapperRef.current.scrollWidth / totalSlides : 0;

    if (progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${(activeIndex / (totalSlides - 1)) * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    if (sliderWrapperRef.current) {
      gsap.to(sliderWrapperRef.current, {
        x: `-${activeIndex * slideWidth}px`,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, [activeIndex]);


  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top top",
          end: "200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.round(progress * (SLIDER_DATA.length - 1));
            setActiveIndex(newIndex);
          },
        },
      });

      tl.to(sliderWrapperRef.current, {
        x: "-75%",
        duration: 5,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Navigation Links */}
      <div className="flex justify-center items-center gap-3 py-4">
        <Link href="/test/question-1/dashboard">
          <span className="text-white bg-black px-4 py-2 rounded-xl hover:bg-white hover:text-black border border-black transition-all duration-500 cursor-pointer">
            Question-1
          </span>
        </Link>
        <Link href="/test/question-2/dashboard">
          <span className="text-white bg-black px-4 py-2 rounded-xl hover:bg-white hover:text-black border border-black transition-all duration-500 cursor-pointer">
            Question-2
          </span>
        </Link>
      </div>

      {/* Slider Section */}
      <div ref={sliderRef} className="relative bg-light-black slider-section lg:min-h-[1014px] min-h-[800px] px-4 mx-auto flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="font-medium md:text-5xl text-2xl md:leading-[57.6px] text-white text-center md:max-w-[830px] max-w-[320px] mx-auto">
            Transforming Secure, Modern{" "}
            <span className="bg-gradient-to-tl from-sky-blue to-pink bg-clip-text text-transparent">
              Development
            </span>{" "}
            with AdaptsAI
          </h2>

          {/* Progress Bar */}
          

          {/* Steps Navigation */}
          <div className="relative flex justify-between items-center mt-6 w-full max-w-[1137px]">
            {PROGRESS_ICONS.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center cursor-pointer" onClick={() => setActiveIndex(index)}>
                <div
                  className={`flex items-center justify-center px-4 py-[18px] rounded-lg border-2 transition-all ${activeIndex === index
                    ? "bg-gradient-to-br from-sky-blue to-purple-500 text-white border-transparent"
                    : "bg-gray-900 text-gray-400 border-gray-700"
                    }`}
                >
                  <img src={step.img} alt={step.alt} className={activeIndex === index ? "filter brightness-0 invert" : ""} />
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full mt-4">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-700 transform -translate-y-1/2"></div>
            <div ref={progressRef} className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-sky-blue to-purple-500 transform -translate-y-1/2 w-0"></div>
          </div>
          {/* GSAP Slider */}
          <div className="overflow-hidden pt-[60px] max-w-[1440px] w-full">
            <div ref={sliderWrapperRef} className="flex w-max slider-item left-0">
              {SLIDER_DATA.map((slide, index) => (
                <div key={index} className="max-w-[1440px]">
                  <div className="xl:flex gap-[65px] items-center container max-w-[1140px] mx-auto">
                    <div className="flex flex-col max-w-[461px]">
                      <img src={slide.img} alt="slide" className="md:max-w-[297px] max-w-[150px]" />
                      <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                        {slide.title}{" "}
                        {slide.highlight && (
                          <span className="bg-gradient-to-tl from-pink to-sky-blue bg-clip-text text-transparent">
                            {slide.highlight}
                          </span>
                        )}
                      </h4>
                      <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                        {slide.desc}
                      </p>
                    </div>
                    <Image src={slide.slideImg} alt="slider" width={614} height={417} className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[314px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
