export interface LessonTime {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export const lessonTimes: LessonTime[] = [
  { startHour: 8, startMinute: 0, endHour: 8, endMinute: 45 },
  { startHour: 8, startMinute: 55, endHour: 9, endMinute: 40 },
  { startHour: 9, startMinute: 50, endHour: 10, endMinute: 35 },
  { startHour: 11, startMinute: 5, endHour: 11, endMinute: 50 },
  { startHour: 12, startMinute: 10, endHour: 12, endMinute: 55 },
  { startHour: 13, startMinute: 5, endHour: 13, endMinute: 55 },
];

export function makeLessonTime(lessonTime: LessonTime) {
  const { startHour, endHour, startMinute, endMinute } = lessonTime;
  return `${startHour}:${formatMinute(startMinute)} - ${endHour}:${formatMinute(
    endMinute
  )}`;
}

function formatMinute(minute: number): string {
  return minute > 9 ? `${minute}` : `0${minute}`;
}

export function getDayOfWeek(dayOfWeek: number): string {
  switch (dayOfWeek) {
    case 1:
      return "Pirmadienis";
    case 2:
      return "Antradienis";
    case 3:
      return "Trečiadienis";
    case 4:
      return "Ketvirtadienis";
    case 5:
      return "Penktadienis";
    default:
      return "";
  }
}

export function getActiveLessonIndex(now: Date): number {
  for (let index = 0; index < lessonTimes.length; index++) {
    const lessonTime = lessonTimes[index];
    if (isActiveLesson(now, lessonTime)) {
      return index;
    }
  }
  return -1;
}

function isActiveLesson(now: Date, lessonTime: LessonTime): boolean {
  const lessonStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    lessonTime.startHour,
    lessonTime.startMinute
  ).getTime();
  const lessonEnd = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    lessonTime.endHour,
    lessonTime.endMinute
  ).getTime();

  const time = now.getTime();
  return time >= lessonStart && time <= lessonEnd;
}
