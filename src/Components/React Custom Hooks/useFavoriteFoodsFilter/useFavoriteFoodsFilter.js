import { useState } from "react";

const useFavoriteFoodsFilter = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return { filter, handleFilterChange };
};

export default useFavoriteFoodsFilter;
