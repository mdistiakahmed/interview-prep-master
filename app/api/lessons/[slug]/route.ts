import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const query = `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      lesson,
      publishedAt,
      "categories": categories[]->title
    }
  `;

  try {
    const post = await client.fetch(query, { slug }, { cache: "no-cache" });

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
