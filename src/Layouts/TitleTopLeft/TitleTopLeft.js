import React, { useEffect, useState } from "react";
import "./TitleTopLeft.css";

function TitleTopLeft({
  title = "no title yet",
  children,
  centerChildren = false,
}) {
  const [titleBarHeight, setTitleBarHeight] = useState(0);

  useEffect(() => {
    const titleBar = document.getElementById("TLL-titlebar");
    setTitleBarHeight(titleBar.offsetHeight);
    if (centerChildren) {
      const bodyContent = document.getElementById("body-content");
      bodyContent.classList.add("align-center-content");
    }
  }, []);

  return (
    <div className="TTL-container">
      <div className="TTL--container--title" id="TLL-titlebar">
        <h1 className="fs-title ft-poppins fc-white">{title}</h1>
      </div>
      <div
        id="body-content"
        style={{ minHeight: `calc(100vh - ${titleBarHeight}px)` }}
      >
        {children}
      </div>
    </div>
  );
}

export default TitleTopLeft;
