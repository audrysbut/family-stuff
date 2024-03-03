import { LessonData } from "../../components/days-lessons/days-lessons";
import { WeekLessons } from "../../components/week-lessons/week-lessons";

const monday: LessonData = {
  dayOfWeek: 1,
  lessons: [
    "Lietuvių kalba",
    "Teatras",
    "Matematika",
    "Pasaulio pažinimas",
    "Muzika",
  ],
};

const tuesday: LessonData = {
  dayOfWeek: 2,
  lessons: [
    "Lietuvių kalba",
    "Lietuvių kalba",
    "Anglų kalba",
    "Matematika",
    "Dailė ir technologijos",
    "Dailė ir technologijos",
  ],
};

const wednesday: LessonData = {
  dayOfWeek: 3,
  lessons: [
    "Tikyba",
    "Lietuvių kalba",
    "Lietuvių kalba",
    "Matematika",
    "Pasaulio pažinimas",
  ],
};

const thursday: LessonData = {
  dayOfWeek: 4,
  lessons: [
    "Fizinis lavinimas",
    "Fizinis lavinimas",
    "Fizinis lavinimas",
    "Lietuvių kalba",
    "Matematika",
  ],
};

const friday: LessonData = {
  dayOfWeek: 5,
  lessons: ["Lietuvių kalba", "Anglų kalba", "Matematika", "Muzika", "Etika"],
};

export const DariusPage = () => {
  return (
    <WeekLessons
      monday={monday}
      tuesday={tuesday}
      wednesday={wednesday}
      thursday={thursday}
      friday={friday}
    />
  );
};
