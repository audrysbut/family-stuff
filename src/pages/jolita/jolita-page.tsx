import { ExerciseView } from "../../components/exercise-view/exercise-view";
import { data as day1 } from "./training-data/day-1";

const trainingData = [day1];

export const JolitaPage = () => <ExerciseView trainingData={trainingData} />;
