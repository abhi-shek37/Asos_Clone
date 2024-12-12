import React from "react";
import "./Register.css";
import {useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState();
  const [successMessage, setsuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch(
      "https://asos-backend-riht.onrender.com/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailId, password }),
      }
    );
    if(response.ok){
      const data = await response.json()
      setsuccessMessage("Login Successfully")
      setErrorMessage('')
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem("refreshToken", data.refreshToken);
      setTimeout(()=>{
        navigate("/product");
      },1000)
    }else{
      const data = await response.json();
      setErrorMessage(data.message || "Login failed");
      setsuccessMessage("");
    }
  }
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <label> EMAIL ADDRESS: </label>
        <input
          type="email"
          className="form-control"
          value={emailId}
          onChange={(e) => setemailId(e.target.value)}
        />

        <label> PASSWORD: </label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button className="btn btn-dark w-100 py-2 login" type="submit">
          SIGN IN
        </button>
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
        <center>
          <a href="#"> Forgot password? </a>
        </center>
      </form>
    </div>
  );
};

export default LoginForm;
