import SystemDesignSidebar from "@/components/course-sidebar/CourseSidebar";

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
