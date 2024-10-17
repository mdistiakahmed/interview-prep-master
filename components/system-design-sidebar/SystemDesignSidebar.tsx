"use client";

import Link from "next/link";
import React, { useState } from "react";

import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const SystemDesignSidebar = () => {
  const baseUrl = "/courses/system-design-interview";
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
          <li className="cursor-pointer hover:bg-gray-200 p-2">
            <Link href={`${baseUrl}`}>Overview</Link>
          </li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">
            <Link href={`${baseUrl}/ch-1`}>Chapter 1</Link>
          </li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">
            <Link href={`${baseUrl}/ch-2`}>Chapter 2</Link>
          </li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">
            <Link href={`${baseUrl}/ch-3`}>Chapter 3</Link>
          </li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 1</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 2</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 3</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 1</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 2</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 3</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 1</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 2</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 3</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 1</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 2</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 3</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 1</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 2</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 3</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 1</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 2</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 3</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 1</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 2</li>
          <li className="cursor-pointer hover:bg-gray-200 p-2">Chapter 100</li>
          {/* Add more chapter titles here */}
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
