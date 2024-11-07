"use client";

import React, {
  useCallback,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import Dagre from "@dagrejs/dagre";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  NodeResizer,
  Handle,
  Position,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import DownloadButton from "./DownloadButton";
import { initialEdges, initialNodes } from "./nodes-edges";

const GetLayoutedElements = (nodes: any, edges: any, options: any) => {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: options.direction });

  edges.forEach((edge: any) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node: any) =>
    g.setNode(node.id, {
      ...node,
      width: node.measured?.width ?? 0,
      height: node.measured?.height ?? 0,
    })
  );

  Dagre.layout(g);

  return {
    nodes: nodes.map((node: any) => {
      const position = g.node(node.id);
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      const x = position.x - (node.measured?.width ?? 0) / 2;
      const y = position.y - (node.measured?.height ?? 0) / 2;

      return { ...node, position: { x, y } };
    }),
    edges,
  };
};

const CustomNode = ({ data, selected = false }: any) => {
  const [label, setLabel] = useState(data.label);
  useEffect(() => {
    setLabel(data.label);
  }, [data.label]);

  const handleChange = (event: any) => {
    setLabel(event.target.value);
  };

  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={100}
        minHeight={30}
      />
      <Handle type="target" position={Position.Top} />
      <div style={{ padding: 10, width: "100%" }}>
        <input
          type="text"
          value={label}
          onChange={handleChange}
          style={{
            width: "100%",
            border: "none",
            background: "transparent",
            textAlign: "center",
            outline: "none",
            textWrap: "wrap",
          }}
        />
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

const DiagramEditor = forwardRef((props, ref) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [isAnimateEdge, setIsAnimateEdge] = useState(true);
  const [background, setBackground] = useState<any>(null);

  const onNodesClick = useCallback((event: any, node: any) => {
    setSelectedNodeId(node.id);
  }, []);

  const onConnect = useCallback(
    (params: any) =>
      setEdges((eds) => addEdge({ ...params, animated: isAnimateEdge }, eds)),
    [setEdges, isAnimateEdge]
  );

  const updateEdgeType = (type: any) => {
    setEdges((eds) => eds.map((edge) => ({ ...edge, type }))); // Update edge type for all edges
  };

  const updateAnimation = (newAnimation: any) => {
    setIsAnimateEdge(newAnimation);
    setEdges((eds) => eds.map((edge) => ({ ...edge, animated: newAnimation }))); // Update animation for all edges
  };

  const changeBackground = (newBg: any) => {
    setBackground(newBg);
  };

  const applyTheme = (newTheme: any) => {
    if (selectedNodeId) {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === selectedNodeId
            ? { ...node, style: { ...node.style, ...newTheme } }
            : node
        )
      );
    }
  };

  // Function to add a new shape node

  const customShapeStyle = {
    background: "#fff",
    border: "1px solid black",
    borderRadius: 15,
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const addShapeNode = (shape: string) => {
    const id = `${shape}-${nodes.length + 1}`;
    const newNode = {
      id,
      position: { x: 0, y: 20 },
      data: { label: `${shape} shape` },
      type: "customNode",
      style:
        shape === "rectangle"
          ? { ...customShapeStyle, width: 100, height: 50 }
          : shape === "circle"
            ? {
                ...customShapeStyle,
                width: 80,
                height: 80,
                borderRadius: "50%",
              }
            : {
                ...customShapeStyle,
                width: 120,
                height: 80,
                borderRadius: "40%",
              },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const nodeTypes = {
    customNode: CustomNode,
  };

  const { fitView } = useReactFlow();

  const onLayout = useCallback(
    (direction: any) => {
      console.log(nodes);
      const layouted = GetLayoutedElements(nodes, edges, { direction });

      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);

      window.requestAnimationFrame(() => {
        fitView();
      });
    },
    [nodes, edges]
  );

  // Expose onLayout method to parent via ref
  useImperativeHandle(ref, () => ({
    onLayout,
    addShapeNode,
    applyTheme,
    updateEdgeType,
    updateAnimation,
    changeBackground,
  }));

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      onNodeClick={onNodesClick}
      className="download-image"
    >
      <Controls />
      {background && <Background variant={background} />}

      <DownloadButton />
    </ReactFlow>
  );
});

DiagramEditor.displayName = "DiagramEditor";

export default DiagramEditor;
