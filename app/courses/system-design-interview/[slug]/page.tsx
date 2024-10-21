import { fetchPostBySlug } from "@/services/getLessons";
import { PortableText } from "next-sanity";
import React from "react";

const page = async ({ params }: any) => {
  const { slug } = params;
  console.log(slug);
  const lesson: any = await fetchPostBySlug(slug);
  return (
    <div className="p-6 ml-auto">
      <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>

      <article className="prose lg:prose-xl max-w-none">
        <PortableText value={lesson.body} />
      </article>
    </div>
  );
};

export default page;
