import { useState } from "react";
import { useSelector } from "react-redux";

const useMapLocation = () => {
  const branchLocation = useSelector(
    (state) => state.branches.selectedBranch.location,
  );
  const { lat, lng } = branchLocation;
  const initialLocation = [lat, lng];
  const [location, setLocation] = useState(initialLocation);
  const [address, setAddressState] = useState("");

  const resetLocation = () => {
    setLocation(initialLocation);
    setAddressState("");
  };

  return {
    initialLocation,
    location,
    address,
    setLocation,
    setAddressState,
    resetLocation,
  };
};

export default useMapLocation;
