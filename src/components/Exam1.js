import React, { Component } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import "./Exam1.css";

class Exam1 extends Component {
  // initiating the local state
  state = {
    questions: {
      1: "React is a__",
      2: "React is _",
      3: "ReactJS uses __ to increase performance",
      4: "In ReactJS, props can be used to pass",
      5: "The state in react can be updated by call to seState method. These calls are___",
    },
    answers: {
      1: {
        1: "Javascript library",
        2: "Javascript framework",
        3: "Design Based",
        4: "None of the above",
      },
      2: {
        1: "Component Based",
        2: "Module Based",
        3: "Object Oriented Based",
        4: "All the above",
      },
      3: {
        1: "Original DOM",
        2: "Virtual DOM",
        3: "Data base",
        4: "None of the above",
      },
      4: {
        1: "Properties to the component",
        2: "Event handler to component",
        3: "Both of above",
        4: "None of the above",
      },
      5: {
        1: "Synchronous in nature",
        2: "Asynchronous in nature",
        3: "Are synchronous but can be made synchronous when required",
        4: "Can not say",
      },
    },
    correctAnswers: {
      1: "1",
      2: "1",
      3: "2",
      4: "3",
      5: "2",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
    min: 2,
  };

  // the method that checks the correct answer

  checkAnswer = (answer) => {
    let { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  // method to move to the next question
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  render() {
    let {
      questions,
      answers,
      correctAnswer,
      clickedAnswer,
      step,
      score,
    } = this.state;
    return (
      <div className="Content">
        {step <= Object.keys(questions).length ? (
          <>
            <Question question={questions[step]} />
            <Answer
              answer={answers[step]}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            {step === Object.keys(questions).length ? (
              <button
                className="NextStep"
                onClick={() => {
                  this.nextStep(step);
                  this.props.handleEnd(score);
                }}
              >
                End Test
              </button>
            ) : (
              <button className="NextStep" onClick={() => this.nextStep(step)}>
                Next
              </button>
            )}
          </>
        ) : (
          <div className="finalPage">
            {score <= this.state.min ? (
              <h1>You have failed the test!!</h1>
            ) : (
              <h1>Congrats!! You have passed the test</h1>
            )}
            <p>
              Your score is: {score} of {Object.keys(questions).length}
            </p>
            <p>Thank you!</p>
          </div>
        )}
      </div>
    );
  }
}

export default Exam1;