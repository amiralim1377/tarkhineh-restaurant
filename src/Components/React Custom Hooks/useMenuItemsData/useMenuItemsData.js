import { useQuery } from "@tanstack/react-query";
import { fetchMenuItems } from "../../../Services/fetchMenuItems";

const useMenuItemsData = ({
  branchId,
  categoryId,
  subcategoryId,
  subcategoryName,
}) => {
  return useQuery({
    queryKey: ["menuItems", branchId, categoryId, subcategoryId],
    queryFn: () =>
      fetchMenuItems({
        branchId,
        categoryId,
        subcategoryType: subcategoryName,
        specificSubcategoryId: subcategoryId,
      }),
    enabled: !!branchId && !!categoryId,
  });
};

export default useMenuItemsData;

// use redux data to get data from server
