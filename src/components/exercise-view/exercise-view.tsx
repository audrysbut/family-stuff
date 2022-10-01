import { CSSProperties, useState } from "react";
import { ExerciseTable } from "../exercise-table/exercise-table";
import { SportData } from "./sport-data";

const daysButtonStyle: CSSProperties = {
  paddingLeft: '2rem',
  paddingRight: '2rem',
  paddingTop: '0.3rem',
  paddingBottom: '0.3rem',
  marginRight: '1rem',
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
    }} onClick={() => { setIndex(i) }}>Day {i + 1}</button>
  })

  return (
    <>
      <div style={{ width: '100%' }}>{daysToSelect}</div>
      <ExerciseTable data={trainingData[index]} />
    </>
  );
};
