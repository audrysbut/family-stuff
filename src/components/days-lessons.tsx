import { CSSProperties } from "react";
import { LessonTime, lessonTimes } from "../pages/darius/darius-page";

export interface LessonData {
  dayOfWeek: number;
  lessons: string[];
}

interface DaysLessonsProps {
  lessons: LessonData;
  activeLessonIndex: number;
  activeDayOfWeek: boolean;
}

const tableStyle: CSSProperties = {
  borderCollapse: "collapse",
};

const styling: CSSProperties = {
  border: "1px solid black",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  userSelect: "none",
};

function formatMinute(minute: number): string {
  return minute > 9 ? `${minute}` : `0${minute}`;
}

function getDayOfWeek(dayOfWeek: number): string {
  switch (dayOfWeek) {
    case 1:
      return "Pirmadienis";
    case 2:
      return "Antradienis";
    default:
      return "";
  }
}

export const DaysLessons = ({
  lessons,
  activeLessonIndex,
  activeDayOfWeek,
}: DaysLessonsProps) => {
  const activeLessons = lessons.lessons.map((l, index) => {
    const lessonTime = lessonTimes[index];
    const activeLesson = activeLessonIndex === index;
    const background = getBackground(activeLesson, activeDayOfWeek);
    return (
      <tr key={index}>
        <td style={{ ...styling, fontSize: 12, background }}>
          {makeLessonTime(lessonTime)}
        </td>
        <td style={{ ...styling, background }}>{l}</td>
      </tr>
    );
  });

  return (
    <div
      style={{
        width: "fit-content",
      }}
    >
      <div
        style={{
          borderTop: "1px solid black",
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
          padding: "0.25rem",
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          background: "#ABEBC6",
          userSelect: "none",
        }}
      >
        {getDayOfWeek(lessons.dayOfWeek)}
      </div>
      <table style={tableStyle}>
        <tbody>{activeLessons}</tbody>
      </table>
    </div>
  );
};

function makeLessonTime(lessonTime: LessonTime) {
  const { startHour, endHour, startMinute, endMinute } = lessonTime;
  return `${startHour}:${formatMinute(startMinute)} - ${endHour}:${formatMinute(
    endMinute
  )}`;
}

function getBackground(activeLesson: boolean, activeDayOfWeek: boolean) {
  if (activeDayOfWeek && activeLesson) {
    return "lightgreen";
  }
  return "white";
}
