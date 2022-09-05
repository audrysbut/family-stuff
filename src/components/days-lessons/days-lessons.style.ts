import { CSSProperties } from "react";

export const tableStyle: CSSProperties = {
  borderCollapse: "collapse",
};

const tableItemStyle: CSSProperties = {
  border: "1px solid black",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  userSelect: "none",
};

const lessonTimeStyle: CSSProperties = {
  ...tableItemStyle,
  fontSize: 12,
};

export const headerStyle: CSSProperties = {
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
  return { ...lessonTimeStyle, background };
}

export function getLectureStyle(
  activeLesson: boolean,
  activeDayOfWeek: boolean
) {
  const background = getBackground(activeLesson, activeDayOfWeek);
  return { ...tableItemStyle, background };
}

function getBackground(activeLesson: boolean, activeDayOfWeek: boolean) {
  if (activeDayOfWeek && activeLesson) {
    return "lightgreen";
  }
  return "white";
}
