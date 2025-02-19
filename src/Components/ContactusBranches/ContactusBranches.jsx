import { useQuery } from "@tanstack/react-query";
import ContactusBranchesItem from "../ContactusBranchesItem/ContactusBranchesItem";
import Loading from "../Loading/Loading";
import { fetchBranches } from "../../Services/fetchBranches";

function ContactusBranches() {
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
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mb-8 flex flex-col space-y-3">
      {branches && branches.length > 0 ? (
        branches.map((branch) => (
          <ContactusBranchesItem branches={branch} key={branch.branch_id} />
        ))
      ) : (
        <div>No branches available</div>
      )}
    </div>
  );
}

export default ContactusBranches;
