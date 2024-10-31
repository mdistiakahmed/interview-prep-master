import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <header className="relative w-full h-[50vh] sm:h-[70vh]">
        <Image
          src="/study.jpg" // Replace with actual path
          alt="Interview Preparation"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to InterviewPrepMaster
          </h1>
          <p className="text-lg md:text-xl font-light max-w-lg mb-6 drop-shadow-lg">
            Your ultimate guide to ace software engineering interviews and more.
          </p>
          <a
            href="#preparations"
            className="group relative h-14 w-44 flex items-center justify-center bg-transparent text-white font-bold rounded-full border-2 border-white transition-all duration-500 overflow-hidden"
          >
            <span className="absolute left-1 h-12 w-12 border-2 border-white rounded-full transition-all duration-500 group-hover:w-[165px]"></span>

            <span className="absolute left-5 flex items-center justify-center z-10 ">
              <FaArrowRight className="text-white" />
            </span>

            <span className="ml-6 relative z-10">Lets Start</span>
          </a>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-10">
        <section
          id="preparations"
          className="mx-auto my-16 text-center px-4 scroll-mt-16"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-8">
            Preparations
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3  p-4">
              <div className="bg-white shadow-md md:h-[150px] rounded-lg p-6 ">
                <Link href={`/courses/system-design-interview`}>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    System Design
                  </h3>
                  <p className="text-gray-700">
                    Detailed guides and practice for system design interviews.
                    Short notes before you sit on the interview.
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-md md:h-[150px] rounded-lg p-6">
                <Link href={`/courses/java`}>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Java Interview
                  </h3>
                  <p className="text-gray-700">
                    Ace your Java interviews with our comprehensive preparation
                    materials.
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow-md md:h-[150px] rounded-lg p-6">
                <Link href={`/courses/system-design-interview`}>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    Problem Solving
                  </h3>
                  <p className="text-gray-700">
                    Sharpen your problem-solving skills with our curated
                    practice problems.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="container mx-auto my-16 text-center px-4"
        >
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We provide comprehensive resources and guides to help you prepare
            for various types of interviews, from software engineering to
            management.
          </p>
        </section>
      </main>
    </div>
  );
}
