import React from 'react'
import "./Register.css";
import LoginForm from './LoginForm';
import LoginButtons from "./LoginButtons";

const LoginPage = () => {
  return (
      <div>
        <LoginForm />
        <center>
          <h6> OR SIGN UP WITH... </h6>
          <LoginButtons />
          <a href="#">Where has Twitter Gone?</a>
        </center>
      </div>
  );
}

export default LoginPage
