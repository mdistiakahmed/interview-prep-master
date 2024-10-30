"use client";

import { fetchLessons } from "@/services/getLessons";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

const CourseSidebar = ({ courseName }: any) => {
  const [lessons, setLessons] = useState<any>([]);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const title = courseName
    .split("-")
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const router = useRouter();

  useEffect(() => {
    async function loadLessons() {
      const lessonsData = await fetchLessons(courseName);
      setLessons(lessonsData);
    }
    loadLessons();
  }, [courseName]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLessonSelect = (lessonSlug: string) => {
    setSelectedLesson(lessonSlug);
    router.push(`/courses/${courseName}/${lessonSlug}`);
  };

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden sticky top-0 p-1 pl-0 bg-transparent z-50">
        <button onClick={toggleSidebar}>
          {isOpen ? (
            <MdKeyboardDoubleArrowLeft />
          ) : (
            <MdKeyboardDoubleArrowRight size={25} />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform min-h-screen overflow-y-auto ${
          isOpen ? "translate-x-0 z-50" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-64 md:w-1/4 bg-[#484848] text-white p-4`}
      >
        <div className="flex items-center justify-between mb-4">
          <Link
            href={`/courses/${courseName}`}
            className="text-lg font-semibold cursor-pointer"
            onClick={() => setSelectedLesson(null)}
          >
            {title}
          </Link>
          <MdKeyboardDoubleArrowLeft
            size={25}
            className="md:hidden"
            onClick={toggleSidebar}
          />
        </div>

        <ul className="space-y-2">
          {lessons && lessons.length > 0 ? (
            lessons.map((l: any, index: any) => (
              <li
                key={index}
                className={`flex items-center justify-between cursor-pointer hover:bg-[#555555] p-2 ${
                  selectedLesson === l.slug.current
                    ? "bg-[#777777]"
                    : "bg-transparent"
                }`}
                onClick={() => handleLessonSelect(l.slug.current)}
              >
                <p className="text-sm w-[95%]">{l.title}</p>
                <MdArrowForwardIos size={20} className="w-5%" />
              </li>
            ))
          ) : (
            <div className="mt-10 p-2 text-2xl text-orange-500">
              Loading....
            </div>
          )}
        </ul>
      </div>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default CourseSidebar;
