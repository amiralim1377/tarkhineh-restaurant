import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setError,
  setLoading,
  setMenuItems,
} from "../../../Slice/menuSlice/menuSlice";
import useCategoryDetails from "../useCategoryDetails/useCategoryDetails";
import useMenuItemsData from "../useMenuItemsData/useMenuItemsData";

const useMenuItemsLogic = () => {
  const dispatch = useDispatch();
  const {
    branchId,
    categoryId,
    subcategoryId,
    subcategoryName,
    subcategoryName_Fa,
  } = useCategoryDetails();

  const {
    data: menuItems,
    isLoading,
    isError,
    error,
  } = useMenuItemsData({
    branchId,
    categoryId,
    subcategoryId,
    subcategoryName,
  });

  useEffect(() => {
    if (menuItems) {
      if (isLoading) {
        dispatch(setLoading(true));
      } else if (isError) {
        dispatch(setError(true));
      } else {
        dispatch(setMenuItems(menuItems));
        dispatch(setLoading(false));
      }
    }
  }, [menuItems, dispatch, isLoading, isError, error]);

  return {
    branchId,
    categoryId,
    subcategoryId,
    subcategoryName,
    subcategoryName_Fa,
    menuItems,
    isLoading,
    isError,
    error,
  };
};

export default useMenuItemsLogic;
