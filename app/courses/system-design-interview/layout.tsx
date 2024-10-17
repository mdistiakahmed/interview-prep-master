import SystemDesignSidebar from "@/components/system-design-sidebar/SystemDesignSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row">
      <SystemDesignSidebar />
      <div className="w-full md:w-3/4">{children}</div>
    </div>
  );
}
