import React, { useState, useEffect } from "react";
import store from "./../store";

import "./scss/Pages.scss";

export default function Game(props) {
  let [qNumber, setqNumber] = useState(1);
  let [score, setScore] = useState(0);
  let [questions, setQuestions] = useState();
  let [answerComponent, setAnswerComponent] = useState("");
  let [answer, setAnswer] = useState("");

  const [qText, setqText] = useState();

  const state = store.getState();

  useEffect(() => {
    loadQuestion();
    checkAuth();
  }, []);

  const loadQuestion = () => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean"
    )
      .then(function (response) {
        return response.json();
      })
      .then((loadedQuestion) => {
        setQuestions(loadedQuestion.results);
        setqText(loadedQuestion.results[qNumber - 1].question);

        loadedQuestion.results.map((res) => {
          console.log(res);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const checkAns = (a) => {
    const answer = questions[qNumber - 1].correct_answer;
    localStorage.setItem('result', score);
    if (a === answer) {
      setAnswer(answer);
      setAnswerComponent("correct");
      setScore(score + 3);
      next();
    }
    if (a !== answer) {
      setAnswer(answer);
      setAnswerComponent("wrong");
      next();
    }
  };

  const next = () => {
    if (qNumber === 10) {
      props.history.push("/result");
    } else {
      setAnswer("");
      setAnswerComponent("");
      setqNumber(qNumber + 1);
      setqText(questions[qNumber - 1].question);
    }
  };

  const checkAuth = () => {
    let user = localStorage.getItem("name");
    if (user === null) {
      props.history.push("/login");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h3>{localStorage.getItem("name")}</h3>
        <div className="question-score">
          <h3 className="number">
            Question <span>{qNumber}/10</span>
          </h3>
          <h3 className="score">
            Score <span>{score}</span>
          </h3>
        </div>
        <h4 className="question">
          {qText}
        </h4>
        <div className="button-option-wrapper">
          <div
            className="button-wrapper false-button"
            onClick={() => checkAns("False")}
          >
            <p className="button-text">FALSE</p>
          </div>
          <div
            className="button-wrapper true-button"
            onClick={() => checkAns("True")}
          >
            <p className="button-text">TRUE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
