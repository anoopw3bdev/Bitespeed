import { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";

import "../assets/styles/TextInputNode.css";

export const TextInputNode = ({
  onDragStart,
  updateNode,
  isNodeSelected,
  setIsNodeSelected,
  currentSelection,
}) => {
  const [text, setText] = useState(
    currentSelection?.data?.label
      ? currentSelection?.data?.label
      : "Test message"
  );
  return (
    <>
      {isNodeSelected ? (
        <div
          className=""
          onDragStart={(event) => onDragStart(event, "input")}
          draggable
        >
          <div className="text-input-node__header">
            <span
              onClick={() => {
                setIsNodeSelected(false);
              }}
              className="text-input-node__back-icon"
            >
              <BiArrowBack />
            </span>
            <div className="text-input-node__title">Message</div>
          </div>
          <div className="text-input-node__text-area">
            <div>Text</div>
            <textarea
              onChange={(e) => {
                setText(e.target.value);
                updateNode(e.target.value, currentSelection.id);
              }}
              value={text}
            />
          </div>
        </div>
      ) : (
        <div
          className="text-input-node"
          onDragStart={(event) => onDragStart(event, "input")}
          draggable
        >
          <div>
            <BiMessageRoundedDetail />
          </div>
          <div>Message</div>
        </div>
      )}
    </>
  );
};
