import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: NextRequest, { params }: any) {
  const { courseName, slug } = params;
  let type = "";
  if (courseName === "system-design-interview") {
    type = "post";
  } else if (courseName === "algorithms-and-data-structures") {
    type = "algorithm";
  } else if (courseName === "java") {
    type = "java";
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
