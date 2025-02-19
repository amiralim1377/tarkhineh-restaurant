import { Dialog } from "@headlessui/react";
import useModal from "../React Custom Hooks/useModal/useModal";
import { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBranches } from "../../Services/fetchBranches";
import TharkhineBranchesModal from "../TharkhineBranchesModal/TharkhineBranchesModal";

const BranchSelectionModal = memo(({ branchSelectionId }) => {
  const { isOpen, modalType, modalId, closeModalHandler } = useModal();
  const {
    data: branches,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });

  if (isLoading) {
    return <div>Loading branches...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Dialog
      open={
        isOpen &&
        modalType === "BranchSelectionModal" &&
        modalId === branchSelectionId
      }
      onClose={closeModalHandler}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex flex-col items-center justify-center px-4">
        <Dialog.Panel className="flex w-full max-w-xs flex-col items-center justify-between space-y-2 rounded-lg bg-white p-4 md:max-w-4xl">
          <Dialog.Title className="text-center text-lg font-bold text-gray-900">
            انتخاب شعبه
          </Dialog.Title>
          <Dialog.Description className="cursor-pointer text-nowrap text-center text-[10px] text-[#353535] md:text-base">
            برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:
          </Dialog.Description>
          <div className="flex w-full flex-col items-center gap-3 md:flex-row md:space-y-0 md:p-4">
            {branches && branches.length > 0 ? (
              branches.map((branch) => (
                <TharkhineBranchesModal
                  branches={branch}
                  key={branch.branch_id}
                />
              ))
            ) : (
              <div>No branches available</div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
});

BranchSelectionModal.displayName = "BranchSelectionModal";

export default memo(BranchSelectionModal);
