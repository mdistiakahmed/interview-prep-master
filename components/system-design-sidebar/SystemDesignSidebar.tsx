"use client";

import { fetchLessons } from "@/services/getLessons";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const SystemDesignSidebar = () => {
  const [lessons, setLessons] = useState<any>([]);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    // Fetch the lessons list
    async function loadLessons() {
      const lessonsData = await fetchLessons("system-design-interview");
      setLessons(lessonsData);
    }
    loadLessons();
  }, []);

  const baseUrl = "/courses/system-design-interview";
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLessonSelect = (lessonSlug: string) => {
    setSelectedLesson(lessonSlug); // Set the selected lesson's slug
    router.push(`/courses/system-design-interview/${lessonSlug}`); // Push to a new route (optional)
  };

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <div className="md:hidden sticky top-0 p-1 pl-0 bg-transparent ">
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
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-64 md:w-1/4 bg-gray-100 p-4 z-20`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold  ">System Design Interview</h2>
          <MdKeyboardDoubleArrowLeft
            size={25}
            className="md:hidden"
            onClick={toggleSidebar}
          />
        </div>

        <ul className="space-y-2">
          {lessons.map((l: any, index: any) => (
            <li className="cursor-pointer hover:bg-gray-200 p-2" key={index}>
              <p onClick={() => handleLessonSelect(l.slug.current)}>
                {l.title}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default SystemDesignSidebar;
