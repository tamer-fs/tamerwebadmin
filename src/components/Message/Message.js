import React, { useEffect } from "react";
import "./Message.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Message({
  titleText,
  secondaryBtnText,
  mainBtnText,
  cancelFunction,
  submitFunction,
}) {
  useEffect(() => {
    const cardEl = document.getElementById("card");
    cardEl.classList.add("show");
  }, []);

  const handleCancel = (e) => {
    e.preventDefault();
    const cardEl = document.getElementById("card");
    cardEl.classList.remove("show");
    cancelFunction(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardEl = document.getElementById("card");
    cardEl.classList.remove("show");
    submitFunction(e);
  };

  return (
    <div className="message-container">
      <section className="message-container--card hidden" id="card">
        <div className="message-container--card__text-section">
          <h2 className="message-container--card__text-section__h2">
            {titleText}
          </h2>
        </div>
        <div className="message-container--card__btn-section">
          <button
            className="message-container--card__btn-section__btn-cancel"
            onClick={(e) => handleCancel(e)}
          >
            {secondaryBtnText}
          </button>
          <button
            className="message-container--card__btn-section__btn-danger"
            onClick={(e) => handleSubmit(e)}
          >
            {mainBtnText}
          </button>
        </div>
        <button
          className="message-container--card--close-btn hover-opacity"
          onClick={(e) => handleCancel(e)}
        >
          <FontAwesomeIcon
            icon={faClose}
            fontSize={"var(--small-text)"}
            color="var(--color-white)"
          />
        </button>
      </section>
    </div>
  );
}

export default Message;
