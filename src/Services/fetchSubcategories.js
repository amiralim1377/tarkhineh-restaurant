// api/fetchSubcategories.js
export const fetchSubcategories = async (categoryId) => {
  const response = await fetch(
    `http://your-api-base-url.com/categories/${categoryId}/subcategories`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
