import { Handle, Position } from "reactflow";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import "../assets/styles/CustomNode.css";

export const CustomNode = ({ data }) => {
  //   const onChange = useCallback((evt) => {
  //     console.log(evt.target.value);
  //   }, []);

  return (
    <div className="custom-node">
      <Handle type="target" position={Position.Left} id="target" />
      <div className="custom-node__header">
        <div>
          <BiMessageRoundedDetail />
          <div className="custom-node__title">Send message</div>
        </div>
        <div className="custom-node__whatsapp-icon">
          <BiLogoWhatsapp />
        </div>
      </div>
      <div className="custom-node__text">{data?.label}</div>
      <Handle type="source" position={Position.Right} id="source" />
    </div>
  );
};
