import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";


const LoginForm = () => {
  return (
    <div className="register-form">
      <form>
        <label> EMAIL ADDRESS: </label>
        <input type="email" className="form-control" />

        <label> PASSWORD: </label>
        <input type="password" className="form-control" />

        <Link to="/">
          <button className="btn btn-dark w-100 py-2 login" type="submit">
            SIGN IN
          </button>
        </Link>
        <center>
          <a href="#"> Forgot password? </a>
        </center>
      </form>
    </div>
  );
};

export default LoginForm;
