import { data as day1 } from "./training-day-1";
import { data as day2 } from "./training-day-2";
import { data as day3 } from "./training-day-3";
import { ExerciseTable } from "./exercise-table";
import { CSSProperties, useState } from "react";

const trainingData = [day1, day2, day3];

const buttonPreviousStyle: CSSProperties = {
  marginRight: "1rem",
  padding: "0.5rem",
  userSelect: "none",
};

const buttonNextStyle: CSSProperties = {
  marginLeft: "1rem",
  padding: "0.5rem",
  userSelect: "none",
};

const dayAnnotationStyle: CSSProperties = {
  marginLeft: "4rem",
  marginRight: "4rem",
  userSelect: "none",
};

export const AudriusPage = () => {
  const [index, setIndex] = useState(0);
  const nextIndex = () =>
    setIndex((prev) => {
      if (prev === trainingData.length - 1) {
        return 0;
      }
      return prev + 1;
    });

  const prevIndex = () =>
    setIndex((prev) => {
      if (prev === 0) {
        return trainingData.length - 1;
      }
      return prev - 1;
    });

  return (
    <>
      <button style={buttonPreviousStyle} onClick={prevIndex}>
        {"<"}
      </button>
      <span style={dayAnnotationStyle}>{index + 1} diena</span>
      <button style={buttonNextStyle} onClick={nextIndex}>
        {">"}
      </button>
      <ExerciseTable data={trainingData[index]} />
    </>
  );
};
