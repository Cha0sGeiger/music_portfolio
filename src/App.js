import React from "react";
import "./App.css";
import classes from "./App.module.scss";
import AppRouter from "./AppRouter.js";

import {TweenMax, Power3} from 'gsap';

function App() {
  return (
    <div className="App">
      <div className={classes.background}>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
