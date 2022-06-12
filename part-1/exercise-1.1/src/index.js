import React from "react";
import ReactDOM from "react-dom";

import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

const App = () => {
  const sectionsInfo = {
    part1: {
      name: "Fundamentals of React",
      exercises: 10,
    },
    part2: {
      name: "Using props to pass data",
      exercises: 7,
    },
    part3: {
      name: "State of a component",
      exercises: 14,
    },
  };

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content content={sectionsInfo} />
      <Total
        total={
          sectionsInfo.part1.exercises +
          sectionsInfo.part2.exercises +
          sectionsInfo.part3.exercises
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
