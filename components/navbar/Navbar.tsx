"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiPlus, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // For desktop menu
  const [activeMobileMenu, setActiveMobileMenu] = useState(null); // For mobile sub-menu

  const toggleMenu = (menu: any) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleMobileSubMenu = (menu: any) => {
    setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
  };

  const menuList = [
    {
      item: "Home",
      path: "/",
    },
    {
      item: "Courses",
      subMenu: [
        { name: "System Design", path: "/courses/system-design-interview" },
        {
          name: "Algorithms and Data structures",
          path: "/courses/algorithms-and-data-structures",
        },
        { name: "Java Interview Prep", path: "/courses/java" },
        {
          name: "JavaScript Interview Prep",
          path: "/courses/javascript-interview-prep",
        },
        { name: "React Interview Prep", path: "/courses/react-interview-prep" },
        {
          name: "Behavioural Interview  Prep",
          path: "/courses/behavioral",
        },
      ],
    },
    {
      item: "Design Tools",
      subMenu: [
        { name: "Simple Flow Chart", path: "/design-tools/simple-flow-chart" },
      ],
    },
    {
      item: "Articles",
      path: "/articles",
    },
    {
      item: "Sign In",
      path: "/",
    },
  ];

  return (
    <header className={`relative z-20 bg-white border-b`}>
      <nav className="flex justify-between items-center p-6 md:px-12 text-black bg-transparent">
        {/* Logo */}
        <div className={`text-xl font-semibold `}>
          <Link href="/">InterviewPrepMaster</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          {menuList.map((menu, idx) => (
            <li key={idx} className="">
              {menu.subMenu ? (
                // Menu item with sub-menu
                <>
                  <div
                    className="flex items-center cursor-pointer hover:text-orange-400"
                    onClick={() => toggleMenu(menu.item)}
                  >
                    <a className={``}>{menu.item}</a>
                    <FiChevronDown className={`ml-1 w-4 h-4 `} />
                  </div>
                  {activeMenu === menu.item && (
                    <div className="absolute left-0 top-full w-screen bg-white text-black py-6 shadow-lg z-10">
                      <div className="relative px-6">
                        <button
                          className="absolute top-2 right-44 text-black"
                          onClick={() => setActiveMenu(null)}
                        >
                          <FiX className="w-6 h-6" />
                        </button>
                        <h3 className="text-xl font-semibold px-36">
                          {menu.item}
                        </h3>
                        <hr className="border-orange-400 my-4 mx-32" />
                        <div className="grid grid-cols-3 gap-5 px-32 py-10">
                          {menu.subMenu.map((sub, subIdx) => (
                            <div key={subIdx}>
                              <Link
                                href={sub.path}
                                className="block hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 py-2"
                                onClick={() => setActiveMenu(null)}
                              >
                                {sub.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Menu item without sub-menu
                <Link
                  href={menu.path}
                  className={`hover:text-orange-400 cursor-pointer `}
                >
                  {menu.item}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX className={`w-8 h-8 `} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-8 h-8 `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black py-4 space-y-4 shadow-lg">
          {menuList.map((menu, idx) => (
            <div key={idx}>
              <div
                className="flex justify-between items-center px-4 py-2"
                onClick={() => toggleMobileSubMenu(menu.item)}
              >
                <Link
                  href={menu.path || "#"}
                  onClick={() => {
                    if (!menu.subMenu) {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {menu.item}
                </Link>
                {menu.subMenu && (
                  <FiPlus
                    className={`w-6 h-6 transition-transform transform ${
                      activeMobileMenu === menu.item ? "rotate-45" : ""
                    }`}
                  />
                )}
              </div>
              {menu.subMenu && activeMobileMenu === menu.item && (
                <div className="px-6 space-y-2">
                  {menu.subMenu.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sub.path}
                      className="block hover:text-orange-500"
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
