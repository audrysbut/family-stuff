import { CSSProperties } from "react";

interface DaysLessonsProps {
  dayOfWeek: string;
  lessons: string[];
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

interface LessonTime {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

const lessonTimes: LessonTime[] = [
  { startHour: 8, startMinute: 0, endHour: 8, endMinute: 45 },
  { startHour: 8, startMinute: 55, endHour: 9, endMinute: 40 },
  { startHour: 9, startMinute: 50, endHour: 10, endMinute: 35 },
  { startHour: 11, startMinute: 5, endHour: 11, endMinute: 50 },
  { startHour: 12, startMinute: 10, endHour: 12, endMinute: 55 },
  { startHour: 13, startMinute: 5, endHour: 13, endMinute: 55 },
];

function formatMinute(minute: number): string {
  return minute > 9 ? `${minute}` : `0${minute}`;
}

export const DaysLessons = ({ lessons, dayOfWeek }: DaysLessonsProps) => {
  const activeLesons = lessons.map((l, index) => {
    const { startHour, endHour, startMinute, endMinute } = lessonTimes[index];
    return (
      <tr>
        <td style={{ ...styling, fontSize: 12 }}>{`${startHour}:${formatMinute(
          startMinute
        )} - ${endHour}:${formatMinute(endMinute)}`}</td>
        <td style={styling}>{l}</td>
      </tr>
    );
  });
  return (
    <div
      style={{
        display: "inline-block",
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
        {dayOfWeek}
      </div>
      <table style={tableStyle}>
        <tbody>{activeLesons}</tbody>
      </table>
    </div>
  );
};
