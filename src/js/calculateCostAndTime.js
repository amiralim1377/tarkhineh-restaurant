// تابع برای محاسبه فاصله و زمان و هزینه
export const calculateCostAndTime = async (origin, destination) => {
  // console.log(
  //   `"origin": ${JSON.stringify(origin)}, "destination": ${JSON.stringify(destination)}`,
  // );

  try {
    const response = await fetch(
      `https://router.project-osrm.org/table/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?sources=0&destinations=1`,
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data.distances?.length > 0 && data.durations?.length > 0) {
      const distance = data.distances[0][0]; // فاصله به متر
      const duration = data.durations[0][0]; // مدت زمان به ثانیه

      const distanceInKm = distance / 1000;
      const basePrice = 50; // قیمت پایه
      const pricePerKm = 10; // قیمت به ازای هر کیلومتر
      const price = basePrice + distanceInKm * pricePerKm;

      const estimatedTime = duration / 60; // به دقیقه

      return {
        price: Math.round(price), // گرد کردن هزینه
        estimatedTime: Math.round(estimatedTime), // گرد کردن مدت زمان
      };
    } else {
      throw new Error("مسیر یافت نشد");
    }
  } catch (error) {
    console.error("Error fetching directions:", error);
    throw error;
  }
};
