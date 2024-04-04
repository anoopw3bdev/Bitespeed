import { useState } from "react";
import { FlowBuilder } from "./FlowBuilder";
import { NodesPanel } from "./NodesPanel";
import "../assets/styles/FlowBuilderMain.css";

export const FlowBuilderMain = ({
  nodes,
  setNodes,
  onNodesChange,
  edges,
  setEdges,
  onEdgesChange,
}) => {
  const [currentSelection, setCurrentSelection] = useState({});
  const [isNodeSelected, setIsNodeSelected] = useState(false);

  return (
    <div className="flow-builder-main">
      <div className="flow-builder-main__flow-builder">
        <FlowBuilder
          nodes={nodes}
          setNodes={setNodes}
          onNodesChange={onNodesChange}
          edges={edges}
          setEdges={setEdges}
          onEdgesChange={onEdgesChange}
          setIsNodeSelected={setIsNodeSelected}
          setCurrentSelection={setCurrentSelection}
        >
          <NodesPanel
            setNodes={setNodes}
            isNodeSelected={isNodeSelected}
            setIsNodeSelected={setIsNodeSelected}
            currentSelection={currentSelection}
          />
        </FlowBuilder>
      </div>
    </div>
  );
};
