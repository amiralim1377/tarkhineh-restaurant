import axios from "axios";

const API_KEY = "5b3ce3597851110001cf6248eaba6afb92bb428e8562c1ce0de9af5e";

const calculateDrivingDistanceAndTime = async (lat1, lng1, lat2, lng2) => {
  const response = await axios.post(
    "https://api.openrouteservice.org/v2/directions/driving-car",
    {
      coordinates: [
        [lng1, lat1],
        [lng2, lat2],
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    },
  );

  const route = response.data.routes[0];
  const distance = route.summary.distance / 1000; // فاصله بر حسب کیلومتر
  const duration = Math.ceil(route.summary.duration / 60); // مدت زمان بر حسب دقیقه، گرد شده به بالا

  // اعمال ضریب ترافیک
  const TRAFFIC_FACTOR = 1.5;
  const adjustedDuration = Math.round(duration * TRAFFIC_FACTOR); // مدت زمان با ضریب ترافیک، گرد شده به نزدیک‌ترین عدد صحیح

  return { distance, duration: adjustedDuration };
};

export default calculateDrivingDistanceAndTime;
