import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import "./Register.css";

const LoginButtons = () => {
  return (
    <div className="btn-row">
      <button type="button" className="btn btn-light login-btn">
        <FcGoogle />
        GOOGLE
      </button>
      <button type="button" className="btn btn-light login-btn">
        <FaApple />
        APPLE
      </button>
      <button type="button" className="btn btn-light login-btn">
        <FaFacebook />
        FACEBOOK
      </button>
    </div>
  );
};

export default LoginButtons;
