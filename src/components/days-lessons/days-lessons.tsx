import { getDayOfWeekStyle, tableStyle } from "./days-lessons.style";
import { LessonRow } from "./lesson-row";
import { ActiveLessonStatus, getDayOfWeek } from "./utils";

export interface LessonData {
  dayOfWeek: number;
  lessons: string[];
}

interface DaysLessonsProps {
  lessons: LessonData;
  activeLessonStatus: ActiveLessonStatus;
  activeDayOfWeek: boolean;
}

export const DaysLessons = ({
  lessons,
  activeLessonStatus,
  activeDayOfWeek,
}: DaysLessonsProps) => {
  const activeLessons = lessons.lessons.map((lecture, index) => (
    <LessonRow
      activeDayOfWeek={activeDayOfWeek}
      activeLessonStatus={activeLessonStatus}
      index={index}
      lecture={lecture}
    />
  ));

  const dayOfWeek = getDayOfWeek(lessons.dayOfWeek);
  const dayOfWeekStyle = getDayOfWeekStyle(activeDayOfWeek);
  return (
    <div style={{ width: "fit-content" }}>
      <div style={dayOfWeekStyle}>{dayOfWeek}</div>
      <table style={tableStyle}>
        <tbody>{activeLessons}</tbody>
      </table>
    </div>
  );
};
