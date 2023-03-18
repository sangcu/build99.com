import { useState } from "react";

const useRandomSelect = (ids: number[]) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [ignoredList, setIgnoreList] = useState<number[]>([]);

  const isSelected = (id?: number) => id === selectedId;

  const randomize = () => {
    const validIds = ids.filter((id) => id && !ignoredList.includes(id));
    if (!validIds || validIds.length === 0) return;

    const randomId = validIds[Math.floor(Math.random() * validIds.length)];
    if (!randomId) return;

    setSelectedId(randomId);
    setIgnoreList([...ignoredList, randomId]);
  };

  return {
    isSelected,
    randomize,
  };
};

export default useRandomSelect;
