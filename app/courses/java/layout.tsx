import SystemDesignSidebar from "@/components/course-sidebar/CourseSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Java Interview Preparation",
  description:
    "Dive into essential Java concepts and skills to help you succeed in your interview.",
  openGraph: {
    title: "Java Interview Preparation",
    description:
      "Dive into essential Java concepts and skills to help you succeed in your interview.",
    type: "website",
    locale: "en_US",
    url: `https://www.interviewprepmaster.com/courses/java`,
    siteName: "InterviewPrepMaster",
    images: [
      {
        url: "/java.png",
        width: 1200,
        height: 630,
        alt: "java logo",
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
      <SystemDesignSidebar courseName="java" />
      <div className="w-full md:w-3/4">{children}</div>
    </div>
  );
}
