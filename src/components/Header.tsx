import "./Header.scss";

import igniteLogo from "../images/igniteLogo.svg";

export function Header() {
  return (
    <header className="header">
      <img src={igniteLogo} alt="" />
    </header>
  );
}
