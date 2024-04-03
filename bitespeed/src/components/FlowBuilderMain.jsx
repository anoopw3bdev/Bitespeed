import { FlowBuilder } from "./FlowBuilder";
import { NodesPanel } from "./NodesPanel";
import "../assets/styles/FlowBuilderMain.css";

export const FlowBuilderMain = () => {
  return (
    <div className="flow-builder-main">
      <div className="flow-builder-main__flow-builder">
        <FlowBuilder>
          <NodesPanel />
        </FlowBuilder>
      </div>
    </div>
  );
};
