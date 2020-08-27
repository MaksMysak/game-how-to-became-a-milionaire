import React, { useEffect } from "react";

import "./scss/Pages.scss";

export default function Result(props) {
  useEffect(() => {
    checkAuth();
  }, []);

  let user = localStorage.getItem("name");
  let result = localStorage.getItem("result");

  const checkAuth = () => {
    if (user === null) {
      props.history.push("/login");
    } else if (result === null) {
      props.history.push("/game");
    }
  };

  const playAgain = () => {
    props.history.push("/game");
  };

  const newGame = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h1>How to become a milionare</h1>
        <h2>{result >= 15 ? "Winner!" : "Loser!"}</h2>
        <h3 className="score-number">
          <span>{user}</span> your score {result}
        </h3>
        <div className="button-option-wrapper">
          <div className="button-wrapper" onClick={() => playAgain()}>
            <p className="button-text">Play again</p>
          </div>
          <div className="button-wrapper" onClick={() => newGame()}>
            <p className="button-text">New game</p>
          </div>
        </div>
      </div>
    </div>
  );
}
