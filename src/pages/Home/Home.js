import React from "react";
import "./Home.css";
import NavBarLayout from "../../Layouts/NavBarLayout/NavBarLayout";
import TitleTopLeft from "../../Layouts/TitleTopLeft/TitleTopLeft";
import UsersChart from "../../contents/UsersChart/UsersChart";

function Home() {
  return (
    <>
      <NavBarLayout>
        <TitleTopLeft
          title={`Welkom, ${window.sessionStorage.getItem("buisnessName")}!`}
        >
          <div className="userchart-container">
            <div
              style={{
                width: "100%",
                paddingBottom: 30,
              }}
            >
              <h3 className="userchart-container--title">
                Groei in gebruikers laatste 7 dagen
              </h3>
            </div>
            <UsersChart />
          </div>
        </TitleTopLeft>
      </NavBarLayout>
    </>
  );
}

export default Home;
