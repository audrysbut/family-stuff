import { LessonData } from "../../components/days-lessons/days-lessons";
import { WeekLessons } from "../../components/week-lessons/week-lessons";

const monday: LessonData = {
  dayOfWeek: 1,
  lessons: [
    "Fizinis ugdymas",
    "Matematika",
    "Lietuvių kalba",
    "Lietuvių kalba",
    "Dailė ir technologijos",
  ],
};

const tuesday: LessonData = {
  dayOfWeek: 2,
  lessons: [
    "Lietuvių kalba",
    "Matematika",
    "Teatras",
    "Pasaulio pažinimas",
    "Muzika",
  ],
};

const wednesday: LessonData = {
  dayOfWeek: 3,
  lessons: [
    "Matematika",
    "Fizinis ugdymas",
    "Anglų kalba",
    "Lietuvių kalba",
    "Lietuvių kalba",
  ],
};

const thursday: LessonData = {
  dayOfWeek: 4,
  lessons: [
    "Informatika",
    "Matematika",
    "Anglų kalba",
    "Lietuvių kalba",
    "Dailė ir technologijos",
    "Etika / Tikyba",
  ],
};

const friday: LessonData = {
  dayOfWeek: 5,
  lessons: [
    "Muzika",
    "Matematika",
    "Lietuvių kalba",
    "Fizinis ugdymas",
    "Pasaulio pažinimas",
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
