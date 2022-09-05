import { useState } from "react";
import {
  DaysLessons,
  LessonData,
} from "../../components/days-lessons/days-lessons";

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

export interface LessonTime {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export const lessonTimes: LessonTime[] = [
  { startHour: 8, startMinute: 0, endHour: 8, endMinute: 45 },
  { startHour: 8, startMinute: 55, endHour: 9, endMinute: 40 },
  { startHour: 9, startMinute: 50, endHour: 10, endMinute: 35 },
  { startHour: 11, startMinute: 5, endHour: 11, endMinute: 50 },
  { startHour: 12, startMinute: 10, endHour: 12, endMinute: 55 },
  { startHour: 13, startMinute: 5, endHour: 13, endMinute: 55 },
];

function getActiveLessonIndex(now: Date): number {
  for (let index = 0; index < lessonTimes.length; index++) {
    const lessonTime = lessonTimes[index];
    if (isActiveLesson(now, lessonTime)) {
      return index;
    }
  }
  return -1;
}

function isActiveLesson(now: Date, lessonTime: LessonTime): boolean {
  const lessonStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    lessonTime.startHour,
    lessonTime.startMinute
  ).getTime();
  const lessonEnd = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    lessonTime.endHour,
    lessonTime.endMinute
  ).getTime();

  const time = now.getTime();
  return time >= lessonStart && time <= lessonEnd;
}

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
