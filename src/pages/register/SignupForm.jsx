import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
    const [emailId,setemailId] = useState('')
    const [firstName,setfirstName] = useState('')
    const [lastName,setlastName] = useState();
    const [password,setpassword] = useState();
    const [dob,setdob] = useState('');
    const [successMessage,setsuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch("https://asos-backend-riht.onrender.com/user/register",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({emailId,firstName,lastName,password,dob}),
      })
      if(response.ok){
        setsuccessMessage('User registered successfully')
        setErrorMessage('')
      }else{
        const data = await response.json();
        setErrorMessage(data.message || 'Registration failed')
        setsuccessMessage('')
      }
    }catch(e){
      setErrorMessage('Error occured during registration')
      setsuccessMessage('')
    }
  }
  return (
    <>
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <label> EMAIL ADDRESS: </label>
          <input
            type="email"
            className="form-control"
            value={emailId}
            onChange={(e) => setemailId(e.target.value)}
          />
          <p> We'll send your order confirmation here </p>

          <label> FIRST NAME: </label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />

          <label> LAST NAME: </label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />

          <label> PASSWORD: </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <p> Must be 10 or more characters </p>

          <label> DATE OF BIRTH: </label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={(e) => setdob(e.target.value)}
          />
          <p> You need to be 16 or over to use ASOS </p>

          <label>MOSTLY INTERESTED IN</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <p className="form-check-label" htmlFor="inlineRadio1">
              Womenswear
            </p>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <p className="form-check-label" htmlFor="inlineRadio2">
              MensWear
            </p>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          {successMessage && <p>{successMessage}</p>}
            <button className="btn btn-dark w-100 py-2 login" type="submit">
              JOIN ASOS
            </button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
