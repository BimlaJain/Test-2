import Slider from "@/components/home/RoadmapSlider";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-3 py-10">
        <Link href={"/question-1/dashboard"} className="text-black">
          Question-1
        </Link>
        <Link href={"/question-2/dashboard"} className="text-black">
          Question-2
        </Link>
      </div>
    </>
  );
}
