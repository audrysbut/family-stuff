import { data as day1 } from "./training-data/day-1";
import { data as day2 } from "./training-data/day-2";
import { data as day3 } from "./training-data/day-3";
import { ExerciseView } from "../../components/exercise-view/exercise-view";
import { useParams } from "react-router-dom";

const trainingData = [day1, day2, day3];

export const AudriusPage = () => {
    const { page } = useParams()
    return <ExerciseView trainingData={trainingData} activeDay={parseInt(page || '0')} person="Audrius" />
}
