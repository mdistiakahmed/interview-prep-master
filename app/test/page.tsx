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
  const [edgeType, setEdgeType] = useState("straight"); // Default edge type
  const [animation, setAnimation] = useState(false);

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

  return (
    <div className="flex ">
      {/* Sidebar for adding shapes */}
      <div className="w-1/5 bg-gray-200 p-4 flex flex-col gap-4 text-xs">
        <div className="flex flex-col border border-black p-2">
          <h3 className="font-bold mb-2">Add Shape</h3>

          {/* Shape icon buttons in a grid */}

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
          <h3 className="font-bold mb-2">Shape Color</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={() =>
                handleThemeChange({ background: "#0000ff", color: "#ffffff" })
              }
            >
              Sample
            </button>
            <button
              className="p-2 bg-white text-black border rounded"
              onClick={() =>
                handleThemeChange({
                  background: "#ffffff",
                  color: "#000000",
                })
              }
            >
              Sample
            </button>
            <button
              className="p-2 bg-red-500 text-black rounded"
              onClick={() =>
                handleThemeChange({ background: "#ff0000", color: "#000000" })
              }
            >
              Sample
            </button>
          </div>
        </div>

        {/* Layout icon buttons in a separate grid */}
        <div className="flex flex-col border border-black p-2">
          <h3 className="font-bold mb-2">Format/Layout</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
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
        <div className="flex flex-col border border-black p-2">
          <h3 className="font-bold mb-2">Edge Types</h3>
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

      {/* Main flowchart area */}
      <div className="flex-grow border-2 flex items-start justify-start">
        <div style={{ width: "80vw", height: "80vh" }}>
          <ReactFlowProvider>
            <DiagramEditor ref={layoutFlowRef} />
          </ReactFlowProvider>
        </div>
      </div>
    </div>
  );
};

export default DiagramPage;
