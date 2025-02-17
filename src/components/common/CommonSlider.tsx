import Image from "next/image";
import React from "react";

const CommonSlider = (
    { sliderCount }: { sliderCount: number },
    { sliderCountClass }: { sliderCountClass: string },
    { heading }: { heading: string },
    { colorHeading }: { colorHeading: string },
    { descriptionOne }: { descriptionOne: string },
    { sliderImage }: { sliderImage: string },
    { myClass }: { myClass: string }
) => {
    return (
        <div
            className={`flex gap-[65px] container max-w-[1140px] mx-auto ${myClass}`}
        >
            <div className="flex flex-col max-w-[461px]">
                <h3 className={`font-roboto text-[256px] ${sliderCountClass}`}>
                    {sliderCount}
                </h3>
                <h4 className="font-bold leading-[39.01px] text-[32px] text-white max-lg:leading-[30px] max-lg:text-2xl max-sm:leading-[26px] max-sm:text-xl">
                    {heading} <span className="text-blue">{colorHeading}</span>
                </h4>
                <p className="font-poppins max-sm:text-sm leading-[25px] max-sm:leading-5">
                    {descriptionOne}
                </p>
            </div>
            <Image
                src={sliderImage}
                alt="slider"
                width={614}
                height={417}
                className={`shadow-[0px_4px_58.7px_0px_#00DDFF26] max-lg:max-w-[614px] max-lg:max-h-[417px]`}
            />
        </div>
    );
};

export default CommonSlider;
