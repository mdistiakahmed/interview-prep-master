export async function fetchLessons(courseName: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/courses/${courseName.toLocaleLowerCase()}/lesson-list`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch course with course slug: ${courseName}`);
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
}

export async function fetchPostBySlug(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/lessons/${slug}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch post with slug: ${slug}`);
    }

    const data = await res.json();
    return data.post; // returns the post object
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
