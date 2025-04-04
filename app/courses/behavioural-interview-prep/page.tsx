import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const lessons: any = [];

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Behavioral Interview Preparation
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Learn the question pattern and example answer for behavioural questions
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson: any, index: any) => (
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
