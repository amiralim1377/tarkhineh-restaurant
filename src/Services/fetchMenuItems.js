// api/fetchMenuItems.js
export const fetchMenuItems = async (subcategoryId) => {
  const response = await fetch(
    `http://your-api-base-url.com/subcategories/${subcategoryId}/menu_items`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
