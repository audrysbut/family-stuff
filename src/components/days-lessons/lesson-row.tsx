import { getLectureStyle, getLessonTimeStyle } from "./days-lessons.style";
import { ActiveLessonStatus, lessonTimes, makeLessonTime } from "./utils";

interface LessonRowProps {
  activeLessonStatus: ActiveLessonStatus;
  index: number;
  activeDayOfWeek: boolean;
  lecture: string;
}

export const LessonRow = ({
  index,
  activeLessonStatus,
  activeDayOfWeek,
  lecture,
}: LessonRowProps) => {
  const lessonTime = lessonTimes[index];

  const lectureTimeStyle = getLessonTimeStyle(
    activeLessonStatus,
    activeDayOfWeek,
    index
  );
  const lectureStyle = getLectureStyle(
    activeLessonStatus,
    activeDayOfWeek,
    index
  );

  const lectureTime = makeLessonTime(lessonTime);
  const remainTime =
    activeLessonStatus.activeLessonIndex === index &&
    activeDayOfWeek &&
    activeLessonStatus.timeLeft ? (
      <span
        style={{
          color: "red",
        }}
      >{` ${activeLessonStatus.timeLeft}`}</span>
    ) : undefined;
  return (
    <tr key={index}>
      <td style={lectureTimeStyle}>{lectureTime}</td>
      <td style={lectureStyle}>
        {lecture}
        {remainTime}
      </td>
    </tr>
  );
};
