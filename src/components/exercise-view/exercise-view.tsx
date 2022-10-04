import { CSSProperties, useState } from "react";
import { ExerciseTable } from "../exercise-table/exercise-table";
import { SportData } from "./sport-data";

const daysButtonStyle: CSSProperties = {
  paddingLeft: '2rem',
  paddingRight: '2rem',
  paddingTop: '0.3rem',
  paddingBottom: '0.3rem',
  marginRight: '0.2rem',
  marginTop: '0.2rem'
}

interface ExerciseViewProps {
  trainingData: SportData[][];
}

export const ExerciseView = ({ trainingData }: ExerciseViewProps) => {
  const [index, setIndex] = useState(0);
  const daysToSelect = trainingData.map((_, i) => {
    const background = index === i ? 'lightgreen' : undefined
    return <button style={{
      ...daysButtonStyle,
      background
    }} onClick={() => { setIndex(i) }}>{i + 1} Diena</button>
  })

  return (
    <>
      {daysToSelect}
      <ExerciseTable data={trainingData[index]} />
    </>
  );
};
