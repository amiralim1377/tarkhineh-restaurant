import { OrbitProgress } from "react-loading-indicators";

function Loading() {
  return (
    <div>
      <OrbitProgress
        variant="spokes"
        color="#277927"
        size="medium"
        text="Loading"
        textColor=""
      />
    </div>
  );
}

export default Loading;
