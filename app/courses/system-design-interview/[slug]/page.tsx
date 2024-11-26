import { urlForImage } from "@/sanity/lib/image";
import { fetchPostBySlug } from "@/services/getLessons";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const courseName = "system-design-interview";
  const { slug } = params;
  const lesson: any = await fetchPostBySlug(courseName, slug);

  return {
    title: `${lesson?.title || "Article"}`,
    description: `${lesson?.excerpt}`,
    openGraph: {
      title: `${lesson?.title || "Article"}`,
      description: `${lesson?.excerpt}`,
      type: "article",
      locale: "en_US",
      url: `https://www.interviewprepmaster.com/courses/system-design-interview/${slug}`,
      siteName: "interviewprepmaster",
      images: [
        {
          url: "/system-design.png",
          width: 1200,
          height: 630,
          alt: "system design",
        },
      ],
    },
  };
}

const LessonPage = async ({ params }: any) => {
  const courseName = "system-design-interview";
  const { slug } = params;
  const lesson: any = await fetchPostBySlug(courseName, slug);
  return (
    <div className="p-4 ml-auto md:px-16">
      <h1 className="text-3xl font-bold font-custom text-[#212529] my-4 tracking-wide text-center custom-underline">
        {lesson.title}
      </h1>

      <article className="prose lg:prose-xl">
        <PortableText
          value={lesson.body}
          components={myPortableTextComponents}
        />
      </article>
    </div>
  );
};

export default LessonPage;

const CodeBlock = ({ value }: any) => {
  const { language, code } = value;

  const highlightedCode = hljs.highlight(code, {
    language: language || "java",
  }).value;

  return (
    <pre className="border md:mx-10 my-4 p-4 overflow-x-auto">
      <code
        className={`hljs language-${language || "java"}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
};

function extractImageDimensions(ref: any) {
  const match = ref.match(/-(\d+)x(\d+)-/);
  if (!match) {
    throw new Error("Invalid image reference format");
  }
  const width = parseInt(match[1], 10);
  const height = parseInt(match[2], 10);
  return { width, height };
}

const MyPortableTextImage = ({ value }: any) => {
  const { asset, alt } = value;
  const dimensions = extractImageDimensions(asset._ref);

  return (
    <div className={`w-full flex justify-center min-h-[400px]`}>
      <Image
        src={urlForImage(value)}
        alt={alt || "image"}
        width={dimensions.width}
        height={dimensions.height}
        className="text-center h-auto w-auto max-h-[600px]"
      />
    </div>
  );
};

const MyPortableTextVideo = ({ value }: any) => {
  const { url, title } = value;

  return (
    <div className="w-full flex justify-center my-8">
      <iframe
        width="560"
        height="315"
        src={url.replace("watch?v=", "embed/")}
        title={title || "Embedded Video"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

const TableComponent = ({ value }: any) => {
  return (
    <div className="md:mx-10 my-4  overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <tbody>
          {value.rows.map((row: any, rowIndex: number) => (
            <tr
              key={rowIndex}
              className={`border-b border-gray-300 ${
                rowIndex === 0 ? "bg-gray-200" : ""
              }`}
            >
              {row.cells.map((cell: any, cellIndex: number) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 border border-gray-300 text-left"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const myPortableTextComponents = {
  types: {
    image: MyPortableTextImage,
    videoEmbed: MyPortableTextVideo,
    myCodeField: CodeBlock,
    table: TableComponent,
  },
  marks: {
    myCodeField: ({ children }: any) => <CodeBlock>{children}</CodeBlock>,
    link: ({ value, children }: any) => (
      <a href={value.href} className="text-pink-600 underline">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold font-custom text-[#212529] my-4 tracking-wider">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-[#212529] my-4 font-custom tracking-wider">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-[#212529] my-4 font-custom tracking-wider">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg text-[#212529] leading-[32px] my-4 font-custom tracking-wider">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => {
      const isEmpty =
        !children || (children.length === 1 && children[0] === "");

      if (isEmpty) {
        return (
          <div className="h-4">
            {/* Empty div to create space for an empty line */}
          </div>
        );
      }

      return (
        <p className="my-4 font-custom text-xl font-[400] leading-[26px] text-[#212529] text-justify ">
          {children}
        </p>
      );
    },
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 my-4 font-custom leading-[28px] text-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 ml-2 md:ml-6 font-custom text-[#212529] text-justify text-xl">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 ml-2 md:ml-6 font-custom  text-[#212529] text-justify text-xl ">
        {children}
      </ol>
    ),
  },
};
