import Image from "next/image";

const Page = () => {
  const lessons = [
    {
      title: "Breadth-First Search",
      description:
        "Learn how Breadth-First Search explores nodes layer by layer, commonly used in shortest path problems.",
      image: "/algo.png",
    },
    {
      title: "Depth-First Search",
      description:
        "Understand Depth-First Search, a method for exploring graphs by going as deep as possible along branches before backtracking.",
      image: "/algo.png",
    },
    {
      title: "Binary Search",
      description:
        "Explore Binary Search, an efficient algorithm for finding items in sorted collections, widely used for quick lookups.",
      image: "/algo.png",
    },
    {
      title: "Sorting Algorithms",
      description:
        "Dive into sorting algorithms like Merge Sort, Quick Sort, and Bubble Sort, and learn when to use each one.",
      image: "/algo.png",
    },
    {
      title: "Hash Tables",
      description:
        "Learn about hash tables, a powerful data structure for quick data retrieval based on keys.",
      image: "/algo.png",
    },
    {
      title: "Dynamic Programming",
      description:
        "Understand the principles of dynamic programming, solving complex problems by breaking them down into overlapping subproblems.",
      image: "/algo.png",
    },
    {
      title: "Graphs and Trees",
      description:
        "Explore graph and tree data structures, essential for understanding connections and hierarchical data.",
      image: "/algo.png",
    },
  ];

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Algorithms and Data Structurs Lessons
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Dive deep into the world of algorithms and master the concepts needed to
        ace your interview.
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
