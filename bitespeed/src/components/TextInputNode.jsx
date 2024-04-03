import "../assets/styles/TextInputNode.css";

export const TextInputNode = ({ onDragStart }) => {
  return (
    <div className="text-input-node dndnode" onDragStart={(event) => onDragStart(event, "input")} draggable>
      Messages
    </div>
  );
};
