import { LessonData } from "../../components/days-lessons/days-lessons";
import { WeekLessons } from "../../components/week-lessons/week-lessons";

const monday: LessonData = {
  dayOfWeek: 1,
  lessons: [
    "Lietuvių kalba",
    "Muzika",
    "Lietuvių kalba",
    "Matematika",
    "Pasaulio pažinimas",
    "Anglu kalba (burelis)",
  ],
};

const tuesday: LessonData = {
  dayOfWeek: 2,
  lessons: [
    "Lietuvių kalba",
    "Kūno kultūra",
    "Lietuvių kalba",
    "Matematika",
    "Dailė ir technologijos",
  ],
};

const wednesday: LessonData = {
  dayOfWeek: 3,
  lessons: [
    "Lietuvių kalba",
    "Kūno kultūra",
    "Lietuvių kalba",
    "Matematika",
    "Etika/Tikyba",
    "Kvadratas (burelis)",
  ],
};

const thursday: LessonData = {
  dayOfWeek: 4,
  lessons: [
    "Lietuvių kalba",
    "Teatras",
    "Matematika",
    "Pasaulio pažinimas",
    "-",
    "Saugus eismas (burelis)",
  ],
};

const friday: LessonData = {
  dayOfWeek: 5,
  lessons: [
    "Lietuvių kalba",
    "Kūno kultūra",
    "Dailė ir technologijos",
    "Muzika",
  ],
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
