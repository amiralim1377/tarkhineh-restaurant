import { useSelector } from "react-redux";

const useCategoryDetails = () => {
  const branchId = useSelector((state) => state.branches.selectedBranch.id);
  const categoryId = useSelector((state) => state.category.selectedCategory);
  const subcategoryId = useSelector(
    (state) => state.category.selectedSubCategory.id,
  );
  const subcategoryName = useSelector(
    (state) => state.category.selectedSubCategory.name,
  );
  const subcategoryName_Fa = useSelector(
    (state) => state.category.selectedSubCategory.name_fa,
  );

  return {
    branchId,
    categoryId,
    subcategoryId,
    subcategoryName,
    subcategoryName_Fa,
  };
};

export default useCategoryDetails;

// to get data from redux to use in react query
