import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = (props) => {
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return firstname.length > 0 && password.length > 0;
  }

  return (
    <div className="container Login">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <form>
            <div className="row">
              <div
                className="col-12 col-md-6 offset-md-2"
                style={{ color: "floralwhite" }}
              >
                <h1>Login</h1>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label">First Name</label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-2 col-form-label">Password</label>
              <div className="col-md-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-md-2 col-md-6">
                <Link
                  to={
                    validateForm()
                      ? { pathname: `/instructions/${firstname}` }
                      : { pathname: "/Login" }
                  }
                >
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => {
                      console.log("Login");
                      props.handleLogin(firstname);
                    }}
                  >
                    Login
                  </button>
                </Link>
              </div>
              <div className="col-12 col-md-4">
                <Link to="signup">New User!</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;