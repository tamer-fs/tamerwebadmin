import React from "react";
import "./NavBarLayout.css";
import NavBar from "../../components/NavBar/NavBar";

function NavBarLayout({ children }) {
  return (
    <div className="nav-bar-layout">
      <NavBar />
      {children}
    </div>
  );
}

export default NavBarLayout;
