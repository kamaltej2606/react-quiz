import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth, signInWithGoogle} from "./firebase";

const SignUp = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    AreaCode: "",
    TelNum: "",
    Email: "",
    Password: "",
  });

  function validateForm() {
    return (
      formData.FirstName.length > 0 &&
      formData.LastName.length > 0 &&
      formData.AreaCode.length > 0 &&
      formData.TelNum.length > 0 &&
      formData.Email.length > 0 &&
      formData.Password.length > 0
    );
  }

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async (e) => {
    const { FirstName, LastName, AreaCode, TelNum, Email } = formData;
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/kamal_tej/google_sheets/AJHvQtEgXslcFbjv?tabId=LoginDetails",
        {
          method: "post",
          body: JSON.stringify([
            [FirstName, LastName, AreaCode, TelNum, Email],
          ]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="container Login">
      <div className="row">
        <div
          className="col-12 col-md-6 offset-md-4"
          style={{ color: "floralwhite" }}
        >
          <h1>SignUp</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <form>
            <div className="form-group row">
              <label className="col-md-2 col-form-label"></label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleInput}
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label"></label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleInput}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-12 col-md-2 col-form-label"></label>
              <div className="col-5 col-md-3">
                <input
                  type="tel"
                  className="form-control"
                  name="AreaCode"
                  value={formData.AreaCode}
                  onChange={handleInput}
                  placeholder="Area Code"
                />
              </div>
              <div className="col-7 col-md-7">
                <input
                  type="tel"
                  className="form-control"
                  name="TelNum"
                  value={formData.TelNum}
                  onChange={handleInput}
                  placeholder="Tel. Number"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label"></label>
              <div className="col-md-10">
                <input
                  type="email"
                  className="form-control"
                  value={formData.Email}
                  onChange={handleInput}
                  name="Email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label"></label>
              <div className="col-md-10">
                <input
                  type="password"
                  className="form-control"
                  name="Password"
                  value={formData.Password}
                  onChange={handleInput}
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-md-2 col-md-6">
                <Link
                  to={
                    validateForm
                      ? { pathname: "/login" }
                      : { pathname: "/signup" }
                  }
                >
                  <button
                    className="btn btn-success btn-sm"
                    type="button"
                    onClick={sendData}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className="col-12 col-md-4">
                <Link to="/login">Already Existing User!</Link>
              </div>
              {/* <div>
                <p className="text-center my-3">or</p>
                <Link
                  to={
                      signInWithGoogle() ? { pathname: "/instructions" } : { pathname: "signup" }
                  }
                >
                  <button className="btn-danger hover:bg-red-600 w-full py-2 text-white">
                            Sign In with Google
                  </button>
                </Link>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;