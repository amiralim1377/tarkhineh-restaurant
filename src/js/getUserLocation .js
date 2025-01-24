// geolocation.js
export const getUserLocation = (callback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        callback({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting user location:", error);
        callback(null);
      },
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    callback(null);
  }
};
