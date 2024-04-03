import "./App.css";
import { Navbar } from "./components/Navbar";
import { FlowBuilderMain } from "./components/FlowBuilderMain";

function App() {
  return (
    <div className="app">
      <Navbar />
      <FlowBuilderMain />
    </div>
  );
}

export default App;
