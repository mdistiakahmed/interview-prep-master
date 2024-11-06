import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Interview Preperation for software engineers",
  description:
    "InterViewPrepMaster offers top-notch resources and guides to help you ace every interview. From software engineering and system design to problem-solving and behavioral interviews, get ready to succeed with our expert tips and in-depth preparation materials. Join our community today and take the first step towards landing your dream job.",
  other: {
    "google-site-verification": "suDh686UnWZz7NkSxQb23W2SV2IU5F2jAm8McRxwHCc",
  },
  openGraph: {
    title: "Interview Preperation for software engineers",
    description:
      "InterViewPrepMaster offers top-notch resources and guides to help you ace every interview. From software engineering and system design to problem-solving and behavioral interviews, get ready to succeed with our expert tips and in-depth preparation materials. Join our community today and take the first step towards landing your dream job.",
    type: "website",
    locale: "en_US",
    url: `https://www.interviewprepmaster.com/`,
    siteName: "InterviewPrepMaster",
    images: [
      {
        url: "/study.jpg",
        width: 1200,
        height: 630,
        alt: "study",
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
    <html lang="en">
      <GoogleAnalytics gaId="G-BP7EGJ1CED" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
