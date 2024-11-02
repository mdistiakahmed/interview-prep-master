export const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 50 },
    type: "customNode",
    data: { label: "Resize when selected" },
    style: {
      background: "#fff",
      border: "1px solid black",
      borderRadius: 15,
      fontSize: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  {
    id: "2",
    position: { x: 100, y: 150 },
    type: "customNode",
    data: { label: "Click to Edit" },
    style: {
      background: "#fff",
      border: "1px solid black",
      fontSize: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 100,
      height: 100,
      borderRadius: "50%",
    },
  },
  {
    id: "3",
    position: { x: 100, y: 300 },
    type: "customNode",
    data: { label: "Select & Press Backspace to delete" },
    style: {
      background: "#fff",
      border: "1px solid black",
      borderRadius: 15,
      fontSize: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 210,
    },
  },
];
export const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
];
