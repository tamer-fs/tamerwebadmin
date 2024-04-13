import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import db from "../../dbConfig";
import { ref, onValue, set } from "firebase/database";

import { Link } from "react-router-dom";

function LoginForm() {
  // Initialize usestates

  const [toggleButtonColor, setToggleButtonColor] = useState([
    "var(--color-purple)",
    0,
    faEye,
    "password",
  ]);
  const buttonColor = {
    0: ["var(--color-grey)", 1, faEyeSlash, "text"],
    1: ["var(--color-purple)", 0, faEye, "password"],
  };
  const [buisnessNameInput, setBuisnessNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // handle functions
  const handlePasswordToggle = (e) => {
    e.preventDefault();
    setToggleButtonColor([
      buttonColor[toggleButtonColor[1]][0],
      buttonColor[toggleButtonColor[1]][1],
      buttonColor[toggleButtonColor[1]][2],
      buttonColor[toggleButtonColor[1]][3],
    ]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(e);
    const passwordInputEl = document.getElementById("password-input");
    const buisnessInputEl = document.getElementById("buisness-input");
    let fieldsEntered = true;

    // check if the fields are not empty else exit
    if (isEmptyString(buisnessNameInput)) {
      buisnessInputEl.style.border = "2px solid var(--color-danger)";
      showWarningMessage("", "Vul alle velden in");
      fieldsEntered = false;
    } else {
      buisnessInputEl.style.border = "none";
    }

    if (isEmptyString(passwordInput)) {
      passwordInputEl.style.border = "2px solid var(--color-danger)";
      showWarningMessage("Er ging iets mis...", "Vul alle velden in");
      fieldsEntered = false;
    } else {
      passwordInputEl.style.border = "none";
    }

    if (!fieldsEntered) {
      return;
    } else {
      hideWarningMessage();
      // check if buisness exist
      const buisnessRef = ref(db, `${buisnessNameInput}`);
      onValue(buisnessRef, (snapshot) => {
        if (snapshot.val() == null) {
          // buisness does not exist
          showWarningMessage(
            "Oeps, er is iets mis gegaan!",
            "Het bedrijf en/of het wachtwoord dat u heeft ingevuld bestaat niet."
          );
          return;
        }
      });
      const passwordRef = ref(db, `${buisnessNameInput}/Password`);
      onValue(passwordRef, (snapshot) => {
        if (passwordInput != snapshot.val()) {
          // buisness does not exist
          showWarningMessage(
            "Oeps, er is iets mis gegaan!",
            "Het bedrijf en/of het wachtwoord dat u heeft ingevuld bestaat niet."
          );

          return;
        }
        sessionStorage.setItem("buisnessName", buisnessNameInput);
        const nextBtn = document.getElementById("form-next-btn");
        nextBtn.classList.add("show");
      });
    }
  };

  // other functions
  function isEmptyString(str) {
    return str.length === 0;
  }

  const showWarningMessage = (title, message) => {
    const formMessageField = document.getElementById("form-message-field");
    formMessageField.classList.add("show");
    formMessageField.firstElementChild.textContent = title;
    formMessageField.lastElementChild.textContent = message;
    const nextBtn = document.getElementById("form-next-btn");
    nextBtn.classList.remove("show");
  };

  const hideWarningMessage = () => {
    const formMessageField = document.getElementById("form-message-field");
    formMessageField.classList.remove("show");
  };

  const deleteWarningMessage = () => {
    const formMessageField = document.getElementById("form-message-field");
    formMessageField.style.display = "none";
  };

  return (
    <div className="Form">
      <div className="Form__input-field">
        <input
          type="text"
          className="Form__input-field--input"
          placeholder="Bedrijfsnaam"
          id="buisness-input"
          onChange={(e) => setBuisnessNameInput(e.target.value)}
          value={buisnessNameInput}
        />
        <div className="Form__input-field__combo">
          <input
            type={toggleButtonColor[3]}
            className="Form__input-field__combo--input"
            placeholder="Wachtwoord"
            id="password-input"
            onChange={(e) => setPasswordInput(e.target.value)}
            value={passwordInput}
          />
          <button
            className="Form__input-field__combo--btn fc-white"
            style={{ backgroundColor: toggleButtonColor[0] }}
            onClick={(e) => handlePasswordToggle(e)}
          >
            <FontAwesomeIcon
              icon={toggleButtonColor[2]}
              fontSize={"var(--small-text)"}
            />
          </button>
        </div>
      </div>
      <div className="Form__submit-field">
        <button
          className="Form__submit-field--btn"
          onClick={(e) => handleFormSubmit(e)}
        >
          Log in
        </button>
      </div>
      <div className="Form__message-field hidden" id="form-message-field">
        <span className="Form_message-field--title">
          Oeps, iets ging verkeerd!
        </span>
        <p className="Form_message-field--content">
          Verkeerd wachtwoord en/of verkeerd bedrijfsnaam ingevuld
        </p>
      </div>
      <Link to="/home" className="Form__next-btn hidden" id="form-next-btn">
        Ga verder{" "}
        <FontAwesomeIcon
          icon={faAngleRight}
          color={"var(--color-purple)"}
          fontSize={"var(--small-text)"}
        />
      </Link>
    </div>
  );
}

export default LoginForm;
