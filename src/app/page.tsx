
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center gap-3 py-10 min-h-screen">
        <Link href={"/question-1/dashboard"} className="text-white bg-black px-4 py-2 rounded-xl hover:bg-white hover:text-black border border-black transition-all duration-500 ">
          Question-1
        </Link>
        <Link href={"/question-2/dashboard"} className="text-white bg-black px-4 py-2 rounded-xl hover:bg-white hover:text-black border border-black transition-all duration-500">
          Question-2
        </Link>
      </div>
    </>
  );
}
