import { useState, useEffect } from "react";
import { calculateCostAndTime } from "../../../js/calculateCostAndTime";

const useCostAndTime = (origin, destination) => {
  const [costAndTime, setCostAndTime] = useState({
    price: 0,
    estimatedTime: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (origin && destination) {
      setIsLoading(true);
      calculateCostAndTime(origin, destination)
        .then((result) => {
          setCostAndTime(result);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [origin, destination]);

  return { ...costAndTime, isLoading, error };
};

export default useCostAndTime;
