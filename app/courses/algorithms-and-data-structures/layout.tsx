import SystemDesignSidebar from "@/components/course-sidebar/CourseSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Master Algorithms and Data Structures for Interviews | Ace Coding Challenges",
  description: `Prepare for algorithms and data structure interviews with our expert resources. Learn essential concepts, solve challenging problems, and practice with real-world examples to excel in coding interviews. Start your journey to success today!`,
  openGraph: {
    title:
      "Master Algorithms and Data Structures for Interviews | Ace Coding Challenges",
    description: `Prepare for algorithms and data structure interviews with our expert resources. Learn essential concepts, solve challenging problems, and practice with real-world examples to excel in coding interviews. Start your journey to success today!`,
    type: "website",
    locale: "en_US",
    url: `https://www.interviewprepmaster.com/courses/algorithms-and-data-structures`,
    siteName: "InterviewPrepMaster",
    images: [
      {
        url: "/algo.png",
        width: 1200,
        height: 630,
        alt: "algorithm and data structures",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row">
      <SystemDesignSidebar courseName="algorithms-and-data-structures" />
      <div className="w-full md:w-3/4">{children}</div>
    </div>
  );
}
