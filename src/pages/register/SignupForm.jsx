import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <>
      <div className="register-form">
        <form>
          <label> EMAIL ADDRESS: </label>
          <input type="email" className="form-control" />
          <p> We'll send your order confirmation here </p>

          <label> FIRST NAME: </label>
          <input type="text" className="form-control" />

          <label> LAST NAME: </label>
          <input type="text" className="form-control" />

          <label> PASSWORD: </label>
          <input type="password" className="form-control" />
          <p> Must be 10 or more characters </p>

          <label> DATE OF BIRTH: </label>
          <input type="date" className="form-control" />
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

          <Link to="/">
            <button className="btn btn-dark w-100 py-2 login" type="submit">
              JOIN ASOS
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
