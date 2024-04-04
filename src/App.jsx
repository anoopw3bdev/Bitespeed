import "./App.css";
import { Navbar } from "./components/Navbar";
import { FlowBuilderMain } from "./components/FlowBuilderMain";
import { initialNodes } from "./constants/initialNodes";
import { useNodesState, useEdgesState } from "reactflow";

function App() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <div className="app">
      <Navbar nodes={nodes} edges={edges} />
      <FlowBuilderMain
        nodes={nodes}
        setNodes={setNodes}
        onNodesChange={onNodesChange}
        edges={edges}
        setEdges={setEdges}
        onEdgesChange={onEdgesChange}
      />
    </div>
  );
}

export default App;
