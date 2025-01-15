import { useQuery } from "@tanstack/react-query";
import { fetchBranches } from "../../Services/fetchBranches";
import ContactusBranchesItem from "../ContactusBranchesItem/ContactusBranchesItem";
import Loading from "../Loading/Loading";

function ContactusBranches() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["branches"],
    queryFn: fetchBranches,
  });
  if (isLoading) return <Loading />;

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className="mb-8 flex flex-col space-y-3">
      {data.map((branches) => (
        <ContactusBranchesItem branches={branches} key={branches.id} />
      ))}
    </div>
  );
}

export default ContactusBranches;
