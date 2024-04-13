import React, { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import { Link } from "react-router-dom";
import Message from "../Message/Message";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar({ homeColor, contentColor }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleLogOut = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  const handleLogOutSubmit = (e) => {
    e.preventDefault();
    setShowMessage(false);
    console.log("logout");
  };

  const handleCancelSubmit = (e) => {
    e.preventDefault();
    setShowMessage(false);
  };

  const handleMenuShow = (e) => {
    e.preventDefault();
    const navBarEl = document.getElementById("nav-bar");
    const navBarToggleEl = document.getElementById("nav-bar-toggle");

    if (navBarToggleEl.style.left === "25px") {
      navBarEl.classList.add("slide-in");
      navBarToggleEl.style.left = "225px";
    } else {
      navBarEl.classList.remove("slide-in");
      navBarToggleEl.style.left = "25px";
    }
  };

  return (
    <>
      <button
        className="nav-bar--btn hover-opacity"
        onClick={(e) => handleMenuShow(e)}
        id="nav-bar-toggle"
      >
        <FontAwesomeIcon icon={faBars} fontSize={"var(--small-text"} />
      </button>
      <nav className="nav-bar" id="nav-bar">
        {showMessage && (
          <Message
            titleText={"Weet u zeker dat u wilt uitloggen?"}
            secondaryBtnText={"Annuleren"}
            mainBtnText={"Uitloggen"}
            cancelFunction={handleCancelSubmit}
            submitFunction={handleLogOutSubmit}
          />
        )}
        <div className="nav-bar--links">
          <ul className="nav-bar--links--list">
            <Link
              className="nav-bar--links--list__item"
              style={{ backgroundColor: homeColor }}
            >
              <FontAwesomeIcon icon={faHome} fontSize={"var(--small-text)"} />
              <p>Home</p>
            </Link>
            <Link
              className="nav-bar--links--list__item"
              style={{ backgroundColor: contentColor }}
            >
              <FontAwesomeIcon icon={faHome} fontSize={"var(--small-text)"} />
              <p>Content</p>
            </Link>
          </ul>
        </div>
        <section className="log-out-section">
          <button
            className="log-out-section__btn hover-opacity"
            onClick={(e) => handleLogOut(e)}
          >
            <p className="log-out-section__btn-text fs-small">Uitloggen</p>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              fontSize={"var(--small-text)"}
            />
          </button>
        </section>
      </nav>
    </>
  );
}

export default NavBar;
