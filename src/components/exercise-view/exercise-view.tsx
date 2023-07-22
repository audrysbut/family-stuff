import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { ExerciseTable } from "../exercise-table/exercise-table";
import { SportData } from "./sport-data";

const daysButtonStyle: CSSProperties = {
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingTop: "0.3rem",
  paddingBottom: "0.3rem",
  marginRight: "0.2rem",
  marginTop: "0.2rem",
};

interface ExerciseViewProps {
  trainingData: SportData[][];
  activeDay: number;
  person: string;
}

export const ExerciseView = ({
  trainingData,
  activeDay,
  person,
}: ExerciseViewProps) => {
  const navigate = useNavigate();
  const selectDay = (newActiveDay: number) =>
    navigate(`/${person}/${newActiveDay}`);
  const daysToSelect = trainingData.map((_, i) => {
    const background = activeDay === i ? "lightgreen" : undefined;
    return (
      <button
        style={{
          ...daysButtonStyle,
          background,
        }}
        onClick={() => {
          selectDay(i);
        }}
      >
        {i + 1} Diena
      </button>
    );
  });

  return (
    <>
      {daysToSelect}
      <ExerciseTable data={trainingData[activeDay]} />
    </>
  );
};
