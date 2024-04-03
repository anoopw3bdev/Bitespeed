import { useState } from "react";
import { FlowBuilder } from "./FlowBuilder";
import { NodesPanel } from "./NodesPanel";
import { useNodesState, useEdgesState } from "reactflow";
import { initialNodes } from "../constants/initialNodes";
import "../assets/styles/FlowBuilderMain.css";

export const FlowBuilderMain = () => {
  const [currentSelection, setCurrentSelection] = useState({});
  const [isNodeSelected, setIsNodeSelected] = useState(false);

  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

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
