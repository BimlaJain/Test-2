"use client";
import { PROGRESS_ICONS, SLIDER_DATA } from "../../utils/helper";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const RoadmapSlider: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState(0);

  useEffect(() => {
    let mm = gsap.matchMedia();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "30% top",
        end: "400% center",
        pin: true,
        scrub: 2,
        onUpdate: (self) => {
          const progress = self.progress;
          const newIndex = Math.round(progress * (PROGRESS_ICONS.length - 1));
          setActiveIcon(newIndex);
        },
      },
    });

    mm.add("(min-width:1200px) and (max-width:1596.99px)", () => {
      tl.fromTo(".my-slider", { x: 100 }, { xPercent: -260, duration: 10 }, "0");
      tl.fromTo(".custom-line", { left: 0, width: 180 }, { width: "100%", duration: 11 }, "0");
    });

    mm.add("(min-width:1000px) and (max-width:1200.99px)", () => {
      tl.fromTo(".my-slider", { x: 0 }, { xPercent: -330, duration: 10 }, "0");
      tl.fromTo(".custom-line", { left: 0, width: 30 }, { width: "100%", duration: 11 }, "0");
    });

    mm.add("(min-width:650px) and (max-width:999.99px)", () => {
      tl.fromTo(".my-slider", { x: 0 }, { xPercent: -320, duration: 10 }, "0");
      tl.fromTo(".custom-line", { left: 0, width: 50 }, { width: "100%", duration: 11 }, "0");
    });

    mm.add("(min-width:300px) and (max-width:649.99px)", () => {
      tl.fromTo(".my-slider", { x: 0 }, { xPercent: -340, duration: 10 }, "0");
      tl.fromTo(".custom-line", { left: 0, width: 50 }, { width: "100%", duration: 11 }, "0");
    });
  }, []);

  return (
    <>
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

      <div id="hero" className="bg-black pt-[156px] max-lg:pt-32 max-sm:pt-28 pb-28 overflow-hidden min-h-screen">
        <div className="max-w-[1172px] mx-auto px-4">
          <h2 className="max-w-[830px] mx-auto font-medium text-5xl max-md:text-4xl max-sm:text-3xl leading-[57.6px] text-white text-center">
            Transforming Secure, Modern{" "}
            <span className="bg-gradient-to-r from-pink to-sky-blue bg-clip-text text-transparent">
              Development
            </span>{" "}
            with AdaptsAI
          </h2>

          <div className="flex items-center justify-between pt-[60px]">
            {PROGRESS_ICONS.map((obj, i) => (
              <div key={i} className="relative flex flex-col items-center cursor-pointer">
                <div
                  className={`flex items-center justify-center px-4 py-[18px] rounded-lg border-2 transition-all ${activeIcon === i ? "border-white bg-gradient-to-r from-pink to-sky-blue" : "border-gray-600"
                    }`}
                >
                  <img
                    src={obj.img}
                    alt={obj.alt}
                    className={`w-8 h-8 transition-all ${activeIcon === i ? "filter brightness-0 invert" : ""}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[1px] bg-light-gray line mt-3 max-w-[1440px] mx-auto">
          <div className="custom-line h-[1px] bg-gradient-to-r from-pink to-sky-blue mt-3 max-w-[1440px] "></div>
        </div>

        <div className="px-4 mx-auto w-full flex sm:gap-28 max-sm:gap-10 pt-[60px] max-md:pt-10 my-slider">
          {SLIDER_DATA.map((obj, i) => (
            <div
              key={i}
              className="flex max-sm:flex-wrap items-center w-full sm:gap-10 mx-auto justify-between lg:min-w-[1172px] max-lg:min-w-[1000px] max-md:min-w-[700px] max-sm:min-w-[375px] px-4"
            >
              <div className="sm:max-w-[461px] mx-auto">
                <Image
                  src={obj.img}
                  alt={obj.textAlt}
                  width={297}
                  height={187}
                  className="pointer-events-none max-lg:h-[150px] max-lg:w-[200px] max-md:h-[70px] max-md:w-[100px] max-sm:h-[50px] max-sm:w-[50px]"
                />
                <h2 className="font-bold text-[32px] max-lg:text-2xl max-sm:text-xl max-sm:leading-6 leading-[39px] text-white">
                  {obj.title}{" "}
                  <span className="bg-gradient-to-r from-lightSky to-lightPurple bg-clip-text text-transparent">
                    {obj.highlight}
                  </span>
                </h2>
                <p className="font-poppins text-base max-md:text-sm max-sm:text-xs leading-[25px] text-white/90 pt-4">
                  {obj.description} <br />
                  <br />
                </p>
              </div>
              <Image
                src={obj.slideImg}
                width={614}
                height={427}
                alt={obj.imageAlt}
                className="max-lg:h-[350px] max-lg:w-[500px] max-md:h-[200px] max-md:w-[350px] max-sm:mt-1"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoadmapSlider;
