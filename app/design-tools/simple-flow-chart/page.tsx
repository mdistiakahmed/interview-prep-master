"use client";

import React, { useRef, useState } from "react";
import { ReactFlowProvider } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import DiagramEditor from "./DiagramEditor";

import { Tooltip, IconButton } from "@mui/material";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineRectangle } from "react-icons/md";
import { TbOvalVertical } from "react-icons/tb";
import { FaGripHorizontal, FaGripVertical } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const DiagramPage = () => {
  const layoutFlowRef = useRef<any>();

  const handleVerticalLayout = () => {
    if (layoutFlowRef.current) {
      layoutFlowRef.current.onLayout("TB"); // Trigger vertical layout
    }
  };

  const handleHorizontalLayout = () => {
    if (layoutFlowRef.current) {
      layoutFlowRef.current.onLayout("LR"); // Trigger horizontal layout
    }
  };

  const addShape = (shape: string) => {
    if (layoutFlowRef.current) {
      layoutFlowRef.current.addShapeNode(shape);
    }
  };

  const [theme, setTheme] = useState({ background: "#fff", color: "#000" }); // Default theme
  const [edgeType, setEdgeType] = useState("bezier"); // Default edge type
  const [animation, setAnimation] = useState(true);

  const handleThemeChange = (newTheme: any) => {
    setTheme(newTheme); // Set the selected theme
    if (layoutFlowRef.current) {
      layoutFlowRef.current.applyTheme(newTheme); // Apply theme to selected shape
    }
  };

  const handleEdgeTypeChange = (type: any) => {
    setEdgeType(type);
    if (layoutFlowRef.current) {
      layoutFlowRef.current.updateEdgeType(type);
    }
  };

  const handleAnimationToggle = () => {
    const newAnimationState = !animation;
    setAnimation(newAnimationState);
    if (layoutFlowRef.current) {
      layoutFlowRef.current.updateAnimation(newAnimationState);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar for adding shapes */}
      <>
        {/* Mobile Sidebar Toggle Button */}
        <div className="md:hidden sticky top-0 p-1 pl-0 bg-transparent z-50">
          <button
            onClick={toggleSidebar}
            className="h-7 w-7 p-1 border bg-white flex items-center justify-center"
          >
            {isOpen ? (
              <MdKeyboardDoubleArrowLeft />
            ) : (
              <MdArrowForwardIos size={25} />
            )}
          </button>
        </div>
        <div
          className={`fixed inset-y-0 left-0 transform min-h-screen overflow-y-auto ${
            isOpen ? "translate-x-0 z-50" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-64 md:w-1/4 bg-gray-200 p-4 flex flex-col gap-2  text-xs text-gray-600`}
        >
          {/* Shape icon buttons in a grid */}
          <div className="flex flex-col border border-black p-2">
            <h3 className="font-bold">Add Shape</h3>
            <div className="grid grid-cols-3 gap-4 ">
              <Tooltip title="Rectangle" placement="top">
                <IconButton onClick={() => addShape("rectangle")}>
                  <MdOutlineRectangle size={24} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Circle" placement="top">
                <IconButton onClick={() => addShape("circle")}>
                  <FaRegCircle size={24} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Oval" placement="top">
                <IconButton onClick={() => addShape("oval")}>
                  <TbOvalVertical size={24} />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          {/* Theme Buttons */}
          <div className="flex flex-col border border-black p-2">
            <h3 className="font-bold">Shape Color</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <button
                className="p-1 bg-[#3b82f6] text-white rounded"
                onClick={() =>
                  handleThemeChange({ background: "#3b82f6", color: "#ffffff" })
                }
              >
                Abc
              </button>
              <button
                className="p-1 bg-white text-black border rounded"
                onClick={() =>
                  handleThemeChange({
                    background: "#ffffff",
                    color: "#000000",
                  })
                }
              >
                Abc
              </button>
              <button
                className="p-1 bg-[#FFBF00] text-black rounded"
                onClick={() =>
                  handleThemeChange({ background: "#FFBF00", color: "#000000" })
                }
              >
                Abc
              </button>
            </div>
          </div>

          {/* Layout icon buttons in a separate grid */}
          <div className="flex flex-col border border-black p-2">
            <h3 className="font-bold ">Format/Layout</h3>
            <div className="grid grid-cols-2 gap-4">
              <Tooltip title="Vertical Layout" placement="top">
                <IconButton onClick={handleVerticalLayout} color="default">
                  <FaGripVertical size={24} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Horizontal Layout" placement="top">
                <IconButton onClick={handleHorizontalLayout} color="default">
                  <FaGripHorizontal size={24} />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          {/* Edge Type Buttons */}
          <div className="flex flex-col border border-black p-2 text-wrap">
            <h3 className="font-bold mb-1">Edge Types</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                className={`p-2 rounded ${edgeType === "straight" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => handleEdgeTypeChange("straight")}
              >
                Straight
              </button>
              <button
                className={`p-2 rounded ${edgeType === "step" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => handleEdgeTypeChange("step")}
              >
                Step
              </button>
              <button
                className={`p-2 rounded ${edgeType === "smoothstep" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => handleEdgeTypeChange("smoothstep")}
              >
                SmoothStep
              </button>
              <button
                className={`p-2 rounded ${edgeType === "bezier" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => handleEdgeTypeChange("bezier")}
              >
                Bezier
              </button>
            </div>
          </div>

          {/* Animation Toggle Button */}
          <div className="flex flex-col border border-black p-2">
            <h3 className="font-bold mb-2">Edge Animation</h3>
            <button
              className={`p-2 rounded ${animation ? "bg-green-500 text-white" : "bg-gray-300"}`}
              onClick={handleAnimationToggle}
            >
              {animation ? "Disable Animation" : "Enable Animation"}
            </button>
          </div>
        </div>
        {/* Backdrop for Mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main flowchart area */}
        <div className="flex-grow border-2 flex items-start justify-start">
          <div className="w-[80vw] h-[80vh] border border-gray-300">
            <ReactFlowProvider>
              <DiagramEditor ref={layoutFlowRef} />
            </ReactFlowProvider>
          </div>
        </div>
      </>
    </div>
  );
};

export default DiagramPage;
