import { TextInputNode } from "./TextInputNode";
import "../assets/styles/NodesPanel.css";

export const NodesPanel = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="nodes-panel">
      <TextInputNode onDragStart={onDragStart} />
    </div>
  );
};
