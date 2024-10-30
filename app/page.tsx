import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-10">
        <h1 className="text-2xl md:text-6xl font-bold text-blue-600 mb-4">
          Welcome to InterviewPrepMaster
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your ultimate guide to ace software engineering interviews and more.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </main>

      <section id="services" className="mx-auto my-16 text-center px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                System Design
              </h3>
              <p className="text-gray-700">
                Detailed guides and practice for system design interviews.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Java Interview Prep
              </h3>
              <p className="text-gray-700">
                Ace your Java interviews with our comprehensive preparation
                materials.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Problem Solving
              </h3>
              <p className="text-gray-700">
                Sharpen your problem-solving skills with our curated practice
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto my-16 text-center px-4">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">About Us</h2>
        <p className="text-lg text-gray-700">
          We provide comprehensive resources and guides to help you prepare for
          various types of interviews, from software engineering to management.
        </p>
      </section>
    </div>
  );
}
