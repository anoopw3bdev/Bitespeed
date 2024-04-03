import { useState } from "react";

export const useUniqueId = () => {
  const [nextId, setNextId] = useState(1);

  const getUniqueId = () => {
    const id = nextId;
    setNextId((prevId) => prevId + 1);
    return `dndnode_${id}`;
  };

  return getUniqueId;
};
