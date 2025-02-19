import axios from "axios";

// دریافت اطلاعات علاقه‌مندی‌ها بر اساس userId و branchId
export const getFavorites = async (userId, branchId) => {
  const response = await axios.get(`/api/favorites`, {
    params: { userId, branchId },
  });
  return response.data;
};

// دریافت اطلاعات دسته‌بندی‌ها بر اساس categoryIds
export const getCategories = async (categoryIds) => {
  const response = await axios.post(`/api/categories`, { categoryIds });
  return response.data;
};
