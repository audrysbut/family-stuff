import { useState } from "react";
import { DaysLessons, LessonData } from "../days-lessons/days-lessons";
import { getActiveLessonIndex } from "../days-lessons/utils";

interface WeekLessonsProps {
  monday: LessonData;
  tuesday: LessonData;
  wednesday: LessonData;
  thursday: LessonData;
  friday: LessonData;
}

export const WeekLessons = ({
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
}: WeekLessonsProps) => {
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
