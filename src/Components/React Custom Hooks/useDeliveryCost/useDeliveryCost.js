import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setDeliveryCost,
  setDeliveryTime,
  setDistance,
} from "../../../Slice/cartSlice/cartSlice";
import calculateDrivingDistanceAndTime from "../../../Services/calculateDrivingDistanceAndTime"; // Import function

const haversine = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLng = (lng2 - lng1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
};

const useDeliveryCost = (branchLocation, userLocation) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDistanceAndTime = async () => {
      if (branchLocation && userLocation) {
        const { lat: branchLat, lng: branchLng } = branchLocation;
        const [userLat, userLng] = userLocation;

        const haversineDistance = haversine(
          branchLat,
          branchLng,
          userLat,
          userLng,
        );

        // Calculate cost based on distance
        const FREE_RADIUS = 2; // Free delivery radius in kilometers
        const BASE_COST = 0; // Base cost inside free radius
        const COST_PER_KM = 10000; // Cost per kilometer in Rials
        const BASE_DELIVERY_TIME = 10; // Base delivery time for inside radius

        if (haversineDistance > FREE_RADIUS) {
          // Calculate driving distance and time
          const { distance, duration } = await calculateDrivingDistanceAndTime(
            branchLat,
            branchLng,
            userLat,
            userLng,
          );

          const cost = Math.round(distance * COST_PER_KM);
          dispatch(setDeliveryCost(cost)); // Set delivery cost in Redux
          dispatch(setDeliveryTime(duration)); // Set delivery time in Redux
          dispatch(setDistance(distance)); // Set distance in Redux
        } else {
          const cost = Math.round(BASE_COST);
          dispatch(setDeliveryCost(cost)); // Set base delivery cost in Redux
          dispatch(setDeliveryTime(BASE_DELIVERY_TIME)); // Set base delivery time in Redux
          dispatch(setDistance(haversineDistance)); // Set haversine distance in Redux
        }
      }
    };

    fetchDistanceAndTime();
  }, [branchLocation, userLocation, dispatch]);

  return null; // Since all states are dispatched to Redux, no local states needed
};

export default useDeliveryCost;
