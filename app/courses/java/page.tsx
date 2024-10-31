import Image from "next/image";

const Page = () => {
  const lessons = [
    {
      title: "Object-Oriented Programming (OOP)",
      description:
        "Understand the principles of OOP in Java, including inheritance, polymorphism, encapsulation, and abstraction.",
      image: "/java.png",
    },
    {
      title: "Java Collections Framework",
      description:
        "Explore Java's Collections Framework, covering data structures like ArrayList, HashMap, and LinkedList, essential for handling data in Java.",
      image: "/java.png",
    },
    {
      title: "Exception Handling",
      description:
        "Learn about Java's robust exception handling, focusing on try-catch blocks, checked and unchecked exceptions, and custom exceptions.",
      image: "/java.png",
    },
    {
      title: "Multithreading and Concurrency",
      description:
        "Dive into Java multithreading concepts, covering thread lifecycle, synchronization, and the Executor framework for concurrent programming.",
      image: "/java.png",
    },
    {
      title: "Java Streams API",
      description:
        "Master the Java Streams API for functional-style operations on collections, including filter, map, reduce, and parallel processing.",
      image: "/java.png",
    },
    {
      title: "Memory Management & Garbage Collection",
      description:
        "Understand Java’s memory management, garbage collection, and performance tuning for efficient resource use in applications.",
      image: "/java.png",
    },
    {
      title: "JVM Architecture",
      description:
        "Learn the architecture of the Java Virtual Machine (JVM), including the class loader, runtime data areas, and the execution engine.",
      image: "/java.png",
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
          <div
            key={index}
            className="bg-white p-4 border hover:shadow-xl transition-shadow duration-200 cursor-pointer"
          >
            <Image
              src={lesson.image}
              alt={`${lesson.title} graphic`}
              height={200}
              width={200}
              className="w-full h-32 object-cover "
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {lesson.title}
              </h2>
              <p className="text-gray-600 mt-2">{lesson.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
