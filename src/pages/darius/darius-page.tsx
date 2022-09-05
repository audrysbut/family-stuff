import { useState } from "react";
import {
  DaysLessons,
  LessonData,
} from "../../components/days-lessons/days-lessons";
import { getActiveLessonIndex } from "../../components/days-lessons/utils";

const monday: LessonData = {
  dayOfWeek: 1,
  lessons: [
    "Lietuvių kalba",
    "Muzika",
    "Lietuvių kalba",
    "Matematika",
    "Pasaulio pažinimas",
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
  ],
};

const thursday: LessonData = {
  dayOfWeek: 4,
  lessons: ["Lietuvių kalba", "Teatras", "Matematika", "Pasaulio pažinimas"],
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
  const now = new Date();
  const dow = now.getDay();
  const [activeLessonIndex, setActiveLessonIndex] = useState(
    getActiveLessonIndex(now)
  );

  setInterval(() => {
    const newNow = new Date();
    const activeLesson = getActiveLessonIndex(newNow);
    setActiveLessonIndex(activeLesson);
  }, 30000);

  return (
    <div
      style={{
        marginLeft: "0.5rem",
        marginTop: "0.5rem",
        display: "flex",
        flexWrap: "wrap",
        gridRowGap: "10px",
        gridColumnGap: "10px",
      }}
    >
      <DaysLessons
        lessons={monday}
        activeLessonIndex={activeLessonIndex}
        activeDayOfWeek={dow === monday.dayOfWeek}
      />
      <DaysLessons
        lessons={tuesday}
        activeLessonIndex={activeLessonIndex}
        activeDayOfWeek={dow === tuesday.dayOfWeek}
      />
      <DaysLessons
        lessons={wednesday}
        activeLessonIndex={activeLessonIndex}
        activeDayOfWeek={dow === wednesday.dayOfWeek}
      />
      <DaysLessons
        lessons={thursday}
        activeLessonIndex={activeLessonIndex}
        activeDayOfWeek={dow === thursday.dayOfWeek}
      />
      <DaysLessons
        lessons={friday}
        activeLessonIndex={activeLessonIndex}
        activeDayOfWeek={dow === friday.dayOfWeek}
      />
    </div>
  );
};
