import HeaderNavLinkLeftLogIn from "../HeaderNavLinkLeftLogIn/HeaderNavLinkLeftLogIn";
import HeaderNavLinkLeftCartIcon from "../HeaderNavLinkLeftCartIcon/HeaderNavLinkLeftCartIcon";
import HeaderNavLinkLeftSearchIcon from "../HeaderNavLinkLeftSearchIcon/HeaderNavLinkLeftSearchIcon";

function HeaderNavLinkLeft() {
  return (
    <div className="relative flex flex-row items-center justify-between">
      <HeaderNavLinkLeftSearchIcon />
      <HeaderNavLinkLeftCartIcon />
      <HeaderNavLinkLeftLogIn />
    </div>
  );
}

export default HeaderNavLinkLeft;
