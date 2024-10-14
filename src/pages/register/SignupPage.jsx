import React from "react";
import LoginButtons from "./LoginButtons";
import SignupForm from "./SignupForm";
import "./Register.css";

const SignupPage = () => {
  return (
    <>
      <center>
        <h6> OR SIGN UP WITH... </h6>
        <LoginButtons />
        <p>
          Signing up with social is super quick. No extra passwords to remember
          - no brain fail. <br /> Don't worry, we'd never share any of your data
          or post anything on your behalf <br /> #NotEvil
        </p>
        <h6> OR SIGN UP WITH EMAIL </h6>
      </center>
      <SignupForm />
    </>
  );
};

export default SignupPage;
