import React from "react";
import { Link } from "react-router-dom";
import {auth} from "./firebase";
const Instructions = ({ match }) => {
  return (
    <div>
      <h1 style={{ color: "floralwhite" }}>Hello {match.params.Name} </h1>
      <h1 style={{ color: "floralwhite" }}>Important Points to remember!</h1>
      <div className="mt-4">
        <ul>
          <li style={{ color: "floralwhite" }}>This ia multiple choice quiz</li>
          <li style={{ color: "floralwhite" }}>This quiz consists of 8 questions on the subject "React".</li>
          <li style={{ color: "floralwhite" }}>The question which is correct will be indicated by "Green" colour.</li>
          <li style={{ color: "floralwhite" }}>The question which is wrong will be indicated by "Red" colour.</li>
          <li style={{ color: "floralwhite" }}>If you select the correct the answer the score will be incremented by one</li>
          <li style={{ color: "floralwhite" }}>Once you click on next you cannot visit previous question</li>
          <li style={{ color: "floralwhite" }}>There is no negative marking</li>
          <li style={{ color: "floralwhite" }}>Based on the score you will regarded either "pass" or "fail"</li>
        </ul>
      </div>
      <div className="mt-5">
        <Link className="btn btn-primary" to="/quiz">
          Take Test
        </Link>
      </div>
   
    </div>
  );
};

export default Instructions;