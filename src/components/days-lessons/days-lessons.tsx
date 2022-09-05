import { headerStyle, tableStyle } from "./days-lessons.style";
import { LessonRow } from "./lesson-row";
import { getDayOfWeek } from "./utils";

export interface LessonData {
  dayOfWeek: number;
  lessons: string[];
}

interface DaysLessonsProps {
  lessons: LessonData;
  activeLessonIndex: number;
  activeDayOfWeek: boolean;
}

export const DaysLessons = ({
  lessons,
  activeLessonIndex,
  activeDayOfWeek,
}: DaysLessonsProps) => {
  const activeLessons = lessons.lessons.map((lecture, index) => (
    <LessonRow
      activeDayOfWeek={activeDayOfWeek}
      activeLessonIndex={activeLessonIndex}
      index={index}
      lecture={lecture}
    />
  ));

  const dayOfWeek = getDayOfWeek(lessons.dayOfWeek);
  return (
    <div style={{ width: "fit-content" }}>
      <div style={headerStyle}>{dayOfWeek}</div>
      <table style={tableStyle}>
        <tbody>{activeLessons}</tbody>
      </table>
    </div>
  );
};
