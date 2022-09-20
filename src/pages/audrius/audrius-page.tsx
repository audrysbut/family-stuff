import { data as day1 } from "./training-data/day-1";
import { data as day2 } from "./training-data/day-2";
import { data as day3 } from "./training-data/day-3";
import { ExerciseView } from "../../components/exercise-view/exercise-view";

const trainingData = [day1, day2, day3];

export const AudriusPage = () => <ExerciseView trainingData={trainingData} />;
