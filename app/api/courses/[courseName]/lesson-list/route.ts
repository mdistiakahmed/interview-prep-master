import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: NextRequest, { params }: any) {
  const { courseName } = params;

  const query = `
    *[_type == "post" && references(*[_type == "category" && slug.current == $courseName]._id)]{
      title,
      slug,
      lesson
    } | order(lesson asc)
  `;

  try {
    const data = await client.fetch(
      query,
      { courseName },
      { cache: "no-cache" }
    );
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching lessons" },
      { status: 500 }
    );
  }
}
