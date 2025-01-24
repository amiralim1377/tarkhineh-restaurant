import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const FREE_RADIUS = 2000; // شعاع دایره خدمات رایگان بر حسب متر
const BASE_COST = 0; // هزینه پایه داخل محدوده
const COST_PER_KM = 15000; // هزینه هر کیلومتر بر حسب ریال

const useDeliveryCost = () => {
  const branchLocation = useSelector(
    (state) => state.branches.selectedBranch.location,
  );
  const { lat, lng } = branchLocation;

  // استفاده از useMemo برای محاسبه initialLocation
  const initialLocation = useMemo(() => [lat, lng], [lat, lng]);

  const [location, setLocation] = useState(initialLocation);
  const [address, setAddressState] = useState("");
  const [distance, setDistance] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(BASE_COST);

  const calculateDistance = (loc1, loc2) => {
    const R = 6371; // شعاع زمین بر حسب کیلومتر
    const dLat = (loc2[0] - loc1[0]) * (Math.PI / 180);
    const dLng = (loc2[1] - loc1[1]) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(loc1[0] * (Math.PI / 180)) *
        Math.cos(loc2[0] * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // فاصله بر حسب کیلومتر
  };

  const roundToNearestThousand = (num) => {
    return Math.round(num / 1000) * 1000;
  };

  useEffect(() => {
    if (location) {
      const dist = calculateDistance(initialLocation, location);
      setDistance(dist);

      if (dist > FREE_RADIUS / 1000) {
        const cost = BASE_COST + (dist - FREE_RADIUS / 1000) * COST_PER_KM;
        setDeliveryCost(roundToNearestThousand(cost));
      } else {
        setDeliveryCost(BASE_COST);
      }
    }
  }, [location, initialLocation]);

  const resetLocation = () => {
    setLocation(initialLocation);
    setAddressState("");
    setDistance(0);
    setDeliveryCost(BASE_COST);
  };

  return {
    initialLocation,
    location,
    address,
    distance,
    deliveryCost,
    setLocation,
    setAddressState,
    resetLocation,
  };
};

export default useDeliveryCost;
