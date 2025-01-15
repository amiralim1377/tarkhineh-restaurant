// api/fetchCategories.js
export const fetchCategories = async (branchId) => {
  const response = await fetch(
    `http://your-api-base-url.com/branches/${branchId}/categories`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
