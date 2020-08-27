import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addName } from '../actions/action.js';
import store from "./../store";

import "./scss/Pages.scss";

export default function Login(props) {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState({});

  const setName = () => {
    dispatch(addName(userName));
    localStorage.setItem("name", userName);
  }

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h1>How to become a milionare</h1>
        <h4>Please enter your name</h4>
        <div className="input-wrapper">
          <input
            type="text"
            id="name"
            className="input"
            placeholder="enter your name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <NavLink className="button-wrapper" to="/game" onClick={() => setName()}>
          <p className="button-text">Start</p>
        </NavLink>
      </div>
    </div>
  );
}
