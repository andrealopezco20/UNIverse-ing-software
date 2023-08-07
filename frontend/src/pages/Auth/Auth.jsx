
import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

{/*Functional Style*/}
//funciones de Login-Sign Up
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        {/*<img src={Logo} alt="" width="120" height="150" />*/}
        <div className="Webname">
          <h6>Conectando persona, creando relaciones</h6>
        </div>
      </div>

      <LogIn />
    </div>
  );
};

const LogIn = () => {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Iniciar Sesion</h3>

        <div>
          <input
            type="text"
            placeholder="Usuario"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Contrseña"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>Don't have an account Sign up</span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Auth;
