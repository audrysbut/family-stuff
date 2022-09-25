import { LessonData } from "../../components/days-lessons/days-lessons";
import { WeekLessons } from "../../components/week-lessons/week-lessons";

const monday: LessonData = {
  dayOfWeek: 1,
  lessons: [
    "Fizinis ugdymas",
    "Anglų kalba",
    "Matematika",
    "Lietuvių kalba",
    "Pasaulio pažinimas",
  ],
};

const tuesday: LessonData = {
  dayOfWeek: 2,
  lessons: [
    "Lietuvių kalba",
    "Matematika",
    "Lietuvių kalba",
    "Muzika",
    "Dailė ir technologijos",
    "Choras (burelis)",
  ],
};

const wednesday: LessonData = {
  dayOfWeek: 3,
  lessons: [
    "Etika/Tikyba",
    "Anglų kalba",
    "Matematika",
    "Lietuvių kalba",
    "Lietuvių kalba",
    "Saugus eismas (burelis)",
  ],
};

const thursday: LessonData = {
  dayOfWeek: 4,
  lessons: [
    "Lietuvių kalba",
    "Matematika",
    "Lietuvių kalba",
    "Pasaulio pažinimas",
    "Dailė ir technologijos",
    "Choras (burelis)",
  ],
};

const friday: LessonData = {
  dayOfWeek: 5,
  lessons: [
    "Lietuvių kalba",
    "Matematika",
    "Lietuvių kalba",
    "Muzika",
    "Fizinis ugdymas",
  ],
};

export const GabijaPage = () => (
  <WeekLessons
    monday={monday}
    tuesday={tuesday}
    wednesday={wednesday}
    thursday={thursday}
    friday={friday}
  />
);
