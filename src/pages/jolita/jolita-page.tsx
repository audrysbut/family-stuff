import { ExerciseView } from "../../components/exercise-view/exercise-view";
import { data as day1 } from "./training-data/day-1";
import { data as day2 } from "./training-data/day-2";

const trainingData = [day1, day2];

export const JolitaPage = () => <ExerciseView trainingData={trainingData} />;
