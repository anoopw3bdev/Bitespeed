import { useState, useRef, useCallback } from "react";
import ReactFlow, { ReactFlowProvider, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import "../assets/styles/FlowBuilder.css";
import { useUniqueId } from "../hooks/useUniqueId";

export const FlowBuilder = ({
  children,
  nodes,
  setNodes,
  onNodesChange,
  edges,
  setEdges,
  onEdgesChange,
  setIsNodeSelected,
  setCurrentSelection,
}) => {
  const reactFlowWrapper = useRef(null);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const getUniqueId = useUniqueId();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData(
        "application/reactflow"
      );

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getUniqueId(),
        position,
        data: { label: "Test message" },
        sourcePosition: "right",
        targetPosition: "left",
      };

      setNodes((prevVal) => prevVal.concat(newNode));
    },
    [reactFlowInstance, setNodes, getUniqueId]
  );

  const onNodeClick = (_, object) => {
    setCurrentSelection(object);
    setIsNodeSelected(true);
  };

  return (
    <div className="flow-builder dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            fitView
          />
        </div>
        {children}
      </ReactFlowProvider>
    </div>
  );
};
