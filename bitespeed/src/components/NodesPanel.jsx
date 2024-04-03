import { TextInputNode } from "./TextInputNode";
import "../assets/styles/NodesPanel.css";

export const NodesPanel = ({
  setNodes,
  isNodeSelected,
  setIsNodeSelected,
  currentSelection,
}) => {
  const updateNode = (val, id) => {
    setNodes((prevVal) =>
      prevVal.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            label: val,
          };
        }

        return node;
      })
    );
  };

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="nodes-panel">
      <TextInputNode
        onDragStart={onDragStart}
        isNodeSelected={isNodeSelected}
        setIsNodeSelected={setIsNodeSelected}
        currentSelection={currentSelection}
        updateNode={updateNode}
      />
    </div>
  );
};
