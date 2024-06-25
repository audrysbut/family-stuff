import { useParams } from "react-router-dom";
import { ExerciseView } from "../../components/exercise-view/exercise-view";
import { SportData } from "../../components/exercise-view/sport-data";

// const monday: LessonData = {
//   dayOfWeek: 1,
//   lessons: [
//     "Lietuvių kalba",
//     "Teatras",
//     "Matematika",
//     "Pasaulio pažinimas",
//     "Muzika",
//   ],
// };

// const tuesday: LessonData = {
//   dayOfWeek: 2,
//   lessons: [
//     "Lietuvių kalba",
//     "Lietuvių kalba",
//     "Anglų kalba",
//     "Matematika",
//     "Dailė ir technologijos",
//     "Dailė ir technologijos",
//   ],
// };

// const wednesday: LessonData = {
//   dayOfWeek: 3,
//   lessons: [
//     "Tikyba",
//     "Lietuvių kalba",
//     "Lietuvių kalba",
//     "Matematika",
//     "Pasaulio pažinimas",
//   ],
// };

// const thursday: LessonData = {
//   dayOfWeek: 4,
//   lessons: [
//     "Fizinis lavinimas",
//     "Fizinis lavinimas",
//     "Fizinis lavinimas",
//     "Lietuvių kalba",
//     "Matematika",
//   ],
// };

// const friday: LessonData = {
//   dayOfWeek: 5,
//   lessons: ["Lietuvių kalba", "Anglų kalba", "Matematika", "Muzika", "Etika"],
// };

export const day1: SportData[] = [
  {
    muscleGroup: "Apšilimas",
    exercise: "Bėgimas",
    series: ["~500 m"],
  },
  {
    muscleGroup: "Krutinė",
    exercise: "Siauri atsispaudimai",
    series: ["2x10"],
  },
  {
    muscleGroup: "Pilvo presas",
    exercise: "Atsilenkimai",
    series: ["2x10"],
  },
  {
    muscleGroup: "Pilvo presas",
    exercise: "Lenta",
    series: ["30s"],
  },
];

export const day2: SportData[] = [
  {
    muscleGroup: "Apšilimas",
    exercise: "Bėgimas",
    series: ["~500 m"],
  },
  {
    muscleGroup: "Krutinė",
    exercise: "Normalus atsispaudimai",
    series: ["2x20"],
  },
  {
    muscleGroup: "Krutinė",
    exercise: "Atsispaudimai ant kumščių",
    series: ["2x10"],
  },
];

const trainingData = [day1, day2];
export const DariusPage = () => {
  const { page } = useParams();
  return (
    // <WeekLessons
    //   monday={monday}
    //   tuesday={tuesday}
    //   wednesday={wednesday}
    //   thursday={thursday}
    //   friday={friday}
    // />
    <ExerciseView
      trainingData={trainingData}
      activeDay={parseInt(page ?? "0")}
      person="Darius"
    />
  );
};
