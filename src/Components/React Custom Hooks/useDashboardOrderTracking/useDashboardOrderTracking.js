import { useQuery } from "@tanstack/react-query";
import useUserData from "../useUserData/useUserData";
import { getOrders } from "../../../Services/getOrders";
import { fetchBranchesById } from "../../../Services/fetchBranchesById";
import { fetchOrderedItemsById } from "../../../Services/fetchOrderedItemsById";

const useDashboardOrderTracking = () => {
  const { userId: customerId } = useUserData();

  const {
    isLoading: isLoadingOrders,
    error: ordersError,
    data: orders,
  } = useQuery({
    queryKey: ["orders", customerId],
    queryFn: () => getOrders(customerId),
    enabled: !!customerId,
  });

  const branchIds = orders ? orders.map((order) => order.branch_id) : [];
  const {
    data: branches,
    isLoading: isLoadingBranches,
    error: branchesError,
  } = useQuery({
    queryKey: ["branches", branchIds],
    queryFn: async () => {
      const branchPromises = branchIds.map((id) => fetchBranchesById(id));
      return Promise.all(branchPromises);
    },
    enabled: branchIds.length > 0,
  });

  const menuItemsIds = orders
    ? orders.flatMap((order) => order.items.map((item) => item.id))
    : [];
  const {
    isLoading: isLoadingMenuItems,
    error: menuItemsError,
    data: menuItems,
  } = useQuery({
    queryKey: ["menuItems", menuItemsIds],
    queryFn: async () => fetchOrderedItemsById(menuItemsIds),
    enabled: menuItemsIds.length > 0,
  });

  const isLoading = isLoadingOrders || isLoadingBranches || isLoadingMenuItems;
  const error = ordersError || branchesError || menuItemsError;

  return { isLoading, error, orders, branches, menuItems };
};

export default useDashboardOrderTracking;
