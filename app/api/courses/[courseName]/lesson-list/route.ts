import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(req: NextRequest, { params }: any) {
  const { courseName } = params;

  let type = "";
  if (courseName === "system-design-interview") {
    type = "post";
  } else if (courseName === "algorithms-and-data-structures") {
    type = "algorithm";
  }

  const query = `
    *[_type == $type]{
      title,
      slug,
      lesson
    } | order(lesson asc)
  `;

  try {
    const data = await client.fetch(query, { type }, { cache: "no-cache" });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching lessons" },
      { status: 500 }
    );
  }
}
