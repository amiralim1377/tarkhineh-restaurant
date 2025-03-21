import { useState } from "react";
import { useSelector } from "react-redux";

const useMapLocation = () => {
  // Selecting the branch location from the Redux store
  const branchLocation = useSelector(
    (state) => state.branches.selectedBranch?.location,
  );

  // Set the initial location to branch location or default to Iran's coordinates
  const initialLocation = branchLocation
    ? [branchLocation.lat, branchLocation.lng]
    : [32.4279, 53.688]; // Default Latitude and Longitude for Iran

  // State to manage the current location and address
  const [location, setLocation] = useState(initialLocation);
  const [address, setAddressState] = useState("");

  // Function to reset location and address to initial values
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
