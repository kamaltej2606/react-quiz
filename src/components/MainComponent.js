import React from "react";
import Login from "./Login";
import Exam1 from "./Exam1";
import SignUp from "./SignUp";
import Instructions from "./Instructions";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Main() {
  let score = 0,
    name = "",
    status = "Fail";
  const sendData = async () => {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/kamal_tej/google_sheets/AJHvQtEgXslcFbjv?tabId=FinalScores",
        {
          method: "post",
          body: JSON.stringify([[name, score, status]]),
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
  const handleLogin = (n) => {
    name = n;
  };
  const handleEnd = (sc) => {
    score = sc;
    if (score > 2) status = "Pass";
    sendData();
  };

  return (
    <div>
      <div className="Main">
        <div className="container">
          <div className="window">
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/login">
                <Login handleLogin={handleLogin} />
              </Route>
              <Route path="/instructions/:Name" component={Instructions} />
              <Route path="/quiz">
                <Exam1 handleEnd={handleEnd} />
              </Route>
              <Redirect to="/signup" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;