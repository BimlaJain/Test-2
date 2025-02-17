"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".slider-section",
        start: "top top",
        end: "200%",
        scrub: 1,
        pin: true,
      },
    });
    tl.fromTo(
      ".slider-item",
      {
        x: "0%",
      },
      {
        x: "-75%",
      },
      "+=0.5"
    );
  }, []);
  return (
    <div className="bg-light-black slider-section min-h-[1014px] mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-medium text-5xl leading-[57.6px] text-white text-center max-w-[830px] mx-auto">
          Transforming Secure, Modern{" "}
          <span className="bg-gradient-to-tl from-sky-blue to-pink bg-clip-text text-transparent">Development</span> with AdaptsAI
        </h2>
        <div className="overflow-hidden pt-[60px] max-w-[1440px]">
          <div className="flex w-max slider-item left-0 ">
            {/* gsap slider one */}
            <div className="min-w-[1440px]">
              <div
                className={`flex gap-[65px] items-center container max-w-[1140px] mx-auto`}
              >
                <div className="flex flex-col max-w-[461px]">
                  <img src="../assets/images/png/one.png" alt="one" className="max-w-[297px]" />
                  <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                    AI Chatbots don’t create enterprse-grade
                    <span className="bg-gradient-to-tl from-pink to-sky-blue bg-clip-text text-transparent"> apps</span>
                  </h4>
                  <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                    Bootstrap end to end application package including
                    architecture, tests, infrastructure and deployment code
                    leveraging AdaptsAI’s patented engine. Your apps are secure
                    by design and by default.
                  </p>
                </div>
                <Image
                  src="/assets/images/png/first-image.png"
                  alt="slider"
                  width={614}
                  height={417}
                  className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[614px] max-lg:max-h-[417px]"
                />
              </div>
            </div>
            {/* gsap slider two */}
            <div className="min-w-[1440px]">
              <div
                className={`flex gap-[65px] items-center container max-w-[1140px] mx-auto`}
              >
                <div className="flex flex-col max-w-[461px]">
                  <img src="../assets/images/png/two.png" alt="one" className="max-w-[297px]" />
                  <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                    Modernization Doesn’t Have to Mean Failure
                  </h4>
                  <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                    Traditional app modernization often falls short because
                    teams are forced to navigate poorly documented legacy code —
                    an outdated maze that slows progress and drives up costs.
                    It’s time to change the narrative. <br /> <br /> The
                    execution can neither compromise on business and technical
                    requirements nor lose sight of modern architecture and
                    security.
                  </p>
                </div>
                <Image
                  src="/assets/images/png/second-image.png"
                  alt="slider"
                  width={614}
                  height={417}
                  className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[614px] max-lg:max-h-[417px]"
                />
              </div>
            </div>
            {/* gsap slider three*/}
            <div className="min-w-[1440px]">
              <div
                className={`flex gap-[65px] items-center container max-w-[1140px] mx-auto`}
              >
                <div className="flex flex-col max-w-[461px]">
                  <img src="../assets/images/png/three.png" alt="one" className="max-w-[297px]" />
                  <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                    Protected from Legal Risks and IP liability
                  </h4>
                  <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                    AdaptsAI ensures IP protection by generating custom,
                    original code with no direct replication of copyrighted
                    material. Our LLM engine delivers unique, optimized
                    solutions while maintaining high quality. Users can trust
                    their codebases are free from IP risks, enabling secure,
                    responsible AI innovation.
                  </p>
                </div>
                <Image
                  src="/assets/images/png/third-image.png"
                  alt="slider"
                  width={614}
                  height={417}
                  className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[614px] max-lg:max-h-[417px]"
                />
              </div>
            </div>
            {/* gsap slider four */}
            <div className="min-w-[1440px]">
              <div
                className={`flex gap-[65px] items-center container max-w-[1140px] mx-auto`}
              >
                <div className="flex flex-col max-w-[461px]">
                  <img src="../assets/images/png/four.png" alt="one" className="max-w-[297px]" />
                  <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                    AI generated apps need maintenance too!
                  </h4>
                  <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5 text-white mt-4">
                    Business applications demand ongoing maintenance to address
                    new vulnerabilities, ensure reliability, and deliver updates
                    or bug fixes. <br /> <br />
                    With AdaptsAI's advanced context awareness, maintenance
                    becomes effortless—minimizing code ramp-up time,
                    streamlining troubleshooting, and simplifying enhancements
                    for maximum efficiency.
                  </p>
                </div>
                <Image
                  src="/assets/images/png/fourth-image.png"
                  alt="slider"
                  width={614}
                  height={417}
                  className="shadow-[0px_4px_58.7px_0px_#00DDFF26] rounded-xl h-[417px] max-lg:max-w-[614px] max-lg:max-h-[417px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
