import { useState } from "react";

export const useUniqueId = () => {
  const [nextId, setNextId] = useState(2);

  const getUniqueId = () => {
    const id = nextId;
    setNextId((prevId) => prevId + 1);
    return {
      value: `dndnode_${id}`,
      id: id,
    };
  };

  return getUniqueId;
};
