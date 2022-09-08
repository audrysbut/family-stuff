import { useState } from "react";
import { DaysLessons, LessonData } from "../days-lessons/days-lessons";
import { getActiveLessonStatus } from "../days-lessons/utils";

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
  // const n = new Date();
  // const now = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 10, 45);
  const now = new Date();
  const dow = now.getDay();
  const [activeLessonStatus, setActiveLessonStatus] = useState(
    getActiveLessonStatus(now)
  );

  setInterval(() => {
    const newNow = new Date();
    const activeLesson = getActiveLessonStatus(newNow);
    setActiveLessonStatus(activeLesson);
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
        activeLessonStatus={activeLessonStatus}
        activeDayOfWeek={dow === monday.dayOfWeek}
      />
      <DaysLessons
        lessons={tuesday}
        activeLessonStatus={activeLessonStatus}
        activeDayOfWeek={dow === tuesday.dayOfWeek}
      />
      <DaysLessons
        lessons={wednesday}
        activeLessonStatus={activeLessonStatus}
        activeDayOfWeek={dow === wednesday.dayOfWeek}
      />
      <DaysLessons
        lessons={thursday}
        activeLessonStatus={activeLessonStatus}
        activeDayOfWeek={dow === thursday.dayOfWeek}
      />
      <DaysLessons
        lessons={friday}
        activeLessonStatus={activeLessonStatus}
        activeDayOfWeek={dow === friday.dayOfWeek}
      />
    </div>
  );
};
