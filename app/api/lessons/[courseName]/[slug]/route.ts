import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: NextRequest, { params }: any) {
  console.log("I am here....");
  const { courseName, slug } = params;
  let type = "";
  if (courseName === "system-design-interview") {
    type = "sysdesign";
  } else if (courseName === "algorithms-and-data-structures") {
    type = "algorithm";
  } else if (courseName === "java") {
    type = "java";
  } else if (courseName === "javascript-interview-prep") {
    type = "javascript";
  } else if (courseName === "react-interview-prep") {
    type = "react";
  } else if (courseName === "behavioral") {
    type = "behavioral";
  }

  const query = `
    *[_type == $type && slug.current == $slug][0]{
      title,
      body,
      lesson,
      publishedAt,
      excerpt,
      "categories": categories[]->title
    }
  `;

  try {
    const post = await client.fetch(
      query,
      { type, slug },
      { cache: "no-cache" }
    );

    console.log(post);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching the post" },
      { status: 500 }
    );
  }
}
