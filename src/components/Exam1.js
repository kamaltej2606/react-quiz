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
      6: "Who developed React..?",
      7: "How can you access the state of a component from inside of a member function?",
      8: "How many elements does a react component return "
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
      6: {
        1: "Apple",
        2: "Google",
        3: "Twitter",
        4: "Facebook",
      },
      7: {
        1: "this.getState()",
        2: "this.values",
        3: "this.prototype.stateValue",
        4: "this.state",
      },
      8: {
        1: "2 Elements",
        2: "1 Element",
        3: "None of These",
        4: "Multiple Elements",
      },
    },
    correctAnswers: {
      1: "1",
      2: "1",
      3: "2",
      4: "3",
      5: "2",
      6: "4",
      7: "2",
      8: "4",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
    min: 4,
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