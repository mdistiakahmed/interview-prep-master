import SystemDesignSidebar from "@/components/course-sidebar/CourseSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behavioral Interview Preparation",
  description:
    "Learn the question pattern and example answer for behavioural questions",
  openGraph: {
    title: "Behavioral Interview Preparation",
    description:
      "Learn the question pattern and example answer for behavioural questions",
    type: "website",
    locale: "en_US",
    url: `https://www.interviewprepmaster.com/courses/behavioural-interview-prep`,
    siteName: "InterviewPrepMaster",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row">
      <SystemDesignSidebar courseName="behavioral" />
      <div className="w-full md:w-3/4">{children}</div>
    </div>
  );
}
