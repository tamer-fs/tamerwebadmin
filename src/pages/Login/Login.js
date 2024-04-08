import React from "react";
import TitleTopLeft from "../../Layouts/TitleTopLeft/TitleTopLeft";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

function Login() {
  return (
    <>
      <TitleTopLeft title={"Tamer SiteBeheer"} centerChildren={true}>
        <div className="form-container">
          <LoginForm />
        </div>
      </TitleTopLeft>
    </>
  );
}

export default Login;
