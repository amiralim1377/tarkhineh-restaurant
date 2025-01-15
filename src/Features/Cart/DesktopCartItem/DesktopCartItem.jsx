import { useNavigate } from "react-router-dom";
import DesktopCartItemFactor from "../DesktopCartItemFactor/DesktopCartItemFactor";
import DesktopCartItemCards from "../DesktopCartItemCards/DesktopCartItemCards";

function DesktopCartItem() {
  return (
    <div className="mx-auto my-8 flex max-w-8xl flex-row items-start justify-between">
      <DesktopCartItemCards />

      <DesktopCartItemFactor />
    </div>
  );
}

export default DesktopCartItem;
