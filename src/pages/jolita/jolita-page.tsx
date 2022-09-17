import { CSSProperties, useState } from "react";
import { ExerciseTable } from "../audrius/exercise-table";
import { SportData } from "../audrius/sport-data";

//TODO: fix code duplication issues
const day1: SportData[] = [
  {
    exercise: "Apšilimas",
    muscleGroup: "Takelis+pramankštos pratimai",
    series: ["10 min"],
  },
  {
    muscleGroup: "Presas",
    exercise: "Susirietimai su svoriu 1 koja sulenkta",
    series: ["4x12"],
  },
  {
    muscleGroup: "Bicepsas",
    exercise: "Lenkimas treniruoklyje",
    series: ["3x12 2.5Kg"],
  },
  {
    muscleGroup: "Bicepsas",
    exercise: "Lenkimas su apatiniu trosu tiesia rankenėle",
    series: ["3x12 2 plytos"],
  },
  {
    muscleGroup: "Tricepsas",
    exercise: "Tiesimas su viršutiniu trosu virvė",
    series: ["3x12 3 plytelės"],
  },
  {
    muscleGroup: "Tricepsas",
    exercise: "Tiesimas su hanteliais gulint",
    series: ["3x12 2 Kg"],
  },
  {
    muscleGroup: "Kojos",
    exercise:
      "6) Tiesimas sėdint 12 iškart pamažini svori pusiau ir dar 12 + izometrija pritupus",
    series: ["3x12/12+3x20s 10 Kg"],
  },
  {
    muscleGroup: "Kojos",
    exercise: "Įtupstai, galinė koja ant pakylos (būt pasvirus į priekį)",
    series: ["3x12"],
  },
  {
    muscleGroup: "Kojos",
    exercise: "Koju platforma sėdint plačiai+Koju platforma sėdint siaurai",
    series: ["3x12 20 Kg"],
  },
];
const trainingData = [day1];

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

export const JolitaPage = () => {
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
