import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const lessons = [
    {
      title: "Basic Syntax",
      description: "Get familiar with basic java syntax",
      image: "/java.png",
      path: `/courses/java/java-syntax-basics`,
    },
    {
      title: "Java Collections Framework",
      description:
        "Use collection framework cheatsheet to recap the available methods and operations",
      image: "/java.png",
      path: `/courses/java/collection-framework-arraylist`,
    },
    {
      title: "Additional Section",
      description:
        "Get some additional knowledge before you sit on the interview",
      image: "/java.png",
      path: `/courses/java/additional-strings`,
    },
    {
      title: "Exception Handling",
      description:
        "Learn about Java's robust exception handling, focusing on try-catch blocks, checked and unchecked exceptions, and custom exceptions.",
      image: "/java.png",
      path: `/courses/java`,
    },
    {
      title: "Multithreading and Concurrency",
      description:
        "Dive into Java multithreading concepts, covering thread lifecycle, synchronization, and the Executor framework for concurrent programming.",
      image: "/java.png",
      path: `/courses/java`,
    },
    {
      title: "Java Streams API",
      description:
        "Master the Java Streams API for functional-style operations on collections, including filter, map, reduce, and parallel processing.",
      image: "/java.png",
      path: `/courses/java`,
    },
    {
      title: "Memory Management & Garbage Collection",
      description:
        "Understand Java’s memory management, garbage collection, and performance tuning for efficient resource use in applications.",
      image: "/java.png",
      path: `/courses/java`,
    },
    {
      title: "JVM Architecture",
      description:
        "Learn the architecture of the Java Virtual Machine (JVM), including the class loader, runtime data areas, and the execution engine.",
      image: "/java.png",
      path: `/courses/java`,
    },
  ];

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Java Interview Preparation
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Dive into essential Java concepts and skills to help you succeed in your
        interview.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => (
          <Link
            href={lesson.path}
            key={index}
            className="bg-white p-4 border hover:shadow-xl transition-shadow duration-200 cursor-pointer"
          >
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                {lesson.title}
              </h2>
              <Image
                src={lesson.image}
                alt={`${lesson.title} graphic`}
                height={200}
                width={200}
                className="w-full h-32 object-cover "
              />
              <p className="text-gray-600 mt-2 text-center">
                {lesson.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
