import Image from "next/image";

const Page = () => {
  const lessons = [
    {
      title: "Introduction to System Design",
      description: "Learn the basics of system design and its core principles.",
      image: "/system-design.png",
    },
  ];

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        React Interview Lessons
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Learn the fundamental and important topics that are usually being tested
        in react interview
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="bg-white p-4 border hover:shadow-xl transition-shadow duration-200"
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
