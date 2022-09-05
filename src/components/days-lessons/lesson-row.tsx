import { lessonTimes } from "../../pages/darius/darius-page";
import { getLectureStyle, getLessonTimeStyle } from "./days-lessons.style";
import { makeLessonTime } from "./utils";

interface LessonRowProps {
  activeLessonIndex: number;
  index: number;
  activeDayOfWeek: boolean;
  lecture: string;
}

export const LessonRow = ({
  index,
  activeLessonIndex,
  activeDayOfWeek,
  lecture,
}: LessonRowProps) => {
  const lessonTime = lessonTimes[index];
  const activeLesson = activeLessonIndex === index;

  const lectureTimeStyle = getLessonTimeStyle(activeLesson, activeDayOfWeek);
  const lectureStyle = getLectureStyle(activeLesson, activeDayOfWeek);

  const lectureTime = makeLessonTime(lessonTime);
  return (
    <tr key={index}>
      <td style={lectureTimeStyle}>{lectureTime}</td>
      <td style={lectureStyle}>{lecture}</td>
    </tr>
  );
};
