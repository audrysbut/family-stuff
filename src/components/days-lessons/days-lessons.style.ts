import { CSSProperties } from "react";

export const tableStyle: CSSProperties = {
  borderCollapse: "collapse",
};

const tableItem: CSSProperties = {
  border: "1px solid black",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  userSelect: "none",
};

const lessonTime: CSSProperties = {
  ...tableItem,
  fontSize: 12,
};

const dayOfWeek: CSSProperties = {
  borderTop: "1px solid black",
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
  padding: "0.25rem",
  textAlign: "center",
  fontSize: 20,
  fontWeight: "bold",
  background: "#ABEBC6",
  userSelect: "none",
};

export function getLessonTimeStyle(
  activeLesson: boolean,
  activeDayOfWeek: boolean
): CSSProperties {
  const background = getBackground(activeLesson, activeDayOfWeek);
  return { ...lessonTime, background };
}

export function getLectureStyle(
  activeLesson: boolean,
  activeDayOfWeek: boolean
) {
  const background = getBackground(activeLesson, activeDayOfWeek);
  return { ...tableItem, background };
}

function getBackground(activeLesson: boolean, activeDayOfWeek: boolean) {
  if (activeDayOfWeek && activeLesson) {
    return "lightgreen";
  }
  return "white";
}

export function getDayOfWeekStyle(activeDayOfWeek: boolean): CSSProperties {
  const background = activeDayOfWeek ? "#ABEBC6" : "lightgray";
  return { ...dayOfWeek, background };
}
