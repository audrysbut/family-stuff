import { CSSProperties, useState } from "react";
import { ExerciseTable } from "../exercise-table/exercise-table";
import { SportData } from "./sport-data";

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

interface ExerciseViewProps {
  trainingData: SportData[][];
}

export const ExerciseView = ({ trainingData }: ExerciseViewProps) => {
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
