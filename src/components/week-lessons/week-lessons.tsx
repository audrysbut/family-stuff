import { useEffect, useState } from "react";
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
  const [activeLessonStatus, setActiveLessonStatus] = useState(
    getActiveLessonStatus(new Date())
  );

  useEffect(() => {
    setInterval(() => {
      const newNow = new Date();
      const activeLesson = getActiveLessonStatus(newNow);
      setActiveLessonStatus(activeLesson);
    }, 1000);
  }, []);

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
        activeDayOfWeek={activeLessonStatus.dow === monday.dayOfWeek}
      />
      <DaysLessons
        lessons={tuesday}
        activeLessonStatus={activeLessonStatus}
        activeDayOfWeek={activeLessonStatus.dow === tuesday.dayOfWeek}
      />
      <DaysLessons
        lessons={wednesday}
        activeLessonStatus={activeLessonStatus}
        activeDayOfWeek={activeLessonStatus.dow === wednesday.dayOfWeek}
      />
      <DaysLessons
        lessons={thursday}
        activeLessonStatus={activeLessonStatus}
        activeDayOfWeek={activeLessonStatus.dow === thursday.dayOfWeek}
      />
      <DaysLessons
        lessons={friday}
        activeLessonStatus={activeLessonStatus}
        activeDayOfWeek={activeLessonStatus.dow === friday.dayOfWeek}
      />
    </div>
  );
};
