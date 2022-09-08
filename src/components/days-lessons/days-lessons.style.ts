import { CSSProperties } from "react";
import { ActiveLessonStatus } from "./utils";

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
  activeLessonStatus: ActiveLessonStatus,
  activeDayOfWeek: boolean,
  index: number
): CSSProperties {
  const background = getBackground(activeLessonStatus, activeDayOfWeek, index);
  return { ...lessonTime, background };
}

export function getLectureStyle(
  activeLessonStatus: ActiveLessonStatus,
  activeDayOfWeek: boolean,
  index: number
) {
  const background = getBackground(activeLessonStatus, activeDayOfWeek, index);
  return { ...tableItem, background };
}

function getBackground(
  activeLessonStatus: ActiveLessonStatus,
  activeDayOfWeek: boolean,
  index: number
) {
  if (!activeDayOfWeek) {
    return "white";
  }

  const activeLesson = activeLessonStatus.activeLessonIndex === index;
  if (!activeLesson) {
    return "white";
  }

  if (activeLessonStatus.status === "Active") {
    return "lightgreen";
  }
  return "lightyellow";
}

export function getDayOfWeekStyle(activeDayOfWeek: boolean): CSSProperties {
  const background = activeDayOfWeek ? "#ABEBC6" : "lightgray";
  return { ...dayOfWeek, background };
}
