import SystemDesignSidebar from "@/components/course-sidebar/CourseSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master System Design Interviews | Tips, Resources, and Practice",
  description:
    "Ace your system design interview with expert tips, comprehensive resources, and real-world practice examples. Learn how to design scalable, reliable systems and succeed in your next tech interview.",
  openGraph: {
    title: "Master System Design Interviews | Tips, Resources, and Practices",
    description:
      "Ace your system design interview with expert tips, comprehensive resources, and real-world practice examples. Learn how to design scalable, reliable systems and succeed in your next tech interview.",
    type: "website",
    locale: "en_US",
    url: `https://www.interviewprepmaster.com/courses/system-design-interview`,
    siteName: "InterviewPrepMaster",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row">
      <SystemDesignSidebar courseName="javascript-interview-prep" />
      <div className="w-full md:w-3/4">{children}</div>
    </div>
  );
}
