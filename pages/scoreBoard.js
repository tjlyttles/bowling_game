import React from "react";

const scoreBoard = () => {
  const frames = [
    {
      title: "Frame One",
      rollOne: 0,
      rollTwo: 0,
      score: "-"
    },
    {
      title: "Frame Two",
      rollOne: 0,
      rollTwo: 0,
      score: "-"
    },
    {
      title: "Frame Three",
      rollOne: 0,
      rollTwo: 0,
      score: "-"
    },
    {
      title: "Frame Four",
      rollOne: 0,
      rollTwo: 0,
      score: "-"
    },
    {
      title: "Frame Five",
      rollOne: 0,
      rollTwo: 0,
      score: "-"
    },
    {
      title: "Frame Six",
      rollOne: 0,
      rollTwo: 0,
      score: "-"
    },
    {
      title: "Frame Seven",
      rollOne: 0,
      rollTwo: 0,
      score: "-"
    },
    {
      title: "Frame Eight",
      rollOne: 0,
      rollTwo: 0,
      score: "-"
    },
    {
      title: "Frame Nine",
      rollOne: 0,
      rollTwo: 0,
      score: "-"
    },
    {
      title: "Frame Ten",
      rollOne: 0,
      rollTwo: 0,
      score: "-"
    }
  ];
  return (
    <div>
      <ul>
        {frames.map((frame, i) => {
          <li className="box" key={i}>
            <div className="frame_title">{frame.title}</div>
            <div className="roll_one">
              {frame.rollOne}
              <div className="roll_two">{frame.rollTwo}</div>
            </div>
            <div className="frame_score">{frame.score}</div>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default scoreBoard;
