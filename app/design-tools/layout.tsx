import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Simple Flow Chart Diagram Writer - Create & Customize Diagrams Effortlessly",
  description:
    "Design clear and customizable flowchart diagrams with our Simple Flow Chart Diagram Writer. Easily add shapes, adjust layouts, and export as images to streamline your process and visualize ideas effectively.",
  openGraph: {
    title:
      "Simple Flow Chart Diagram Writer - Create & Customize Diagrams Effortlessly",
    description:
      "Design clear and customizable flowchart diagrams with our Simple Flow Chart Diagram Writer. Easily add shapes, adjust layouts, and export as images to streamline your process and visualize ideas effectively.",
    type: "website",
    locale: "en_US",
    url: `https://www.interviewprepmaster.com/design-tools/simple-flow-chart`,
    siteName: "InterviewPrepMaster",
    images: [
      {
        url: "/flow-chart-tool.PNG",
        width: 1200,
        height: 630,
        alt: "flow chart",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
