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

export interface ActiveLessonStatus {
  activeLessonIndex: number;
  status: "Active" | "Inactive";
  timeLeft?: string;
}

function getLessonStart(lesson: LessonTime, now: Date): number {
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    lesson.startHour,
    lesson.startMinute
  ).getTime();
}

function getLessonEnd(lesson: LessonTime, now: Date): number {
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    lesson.endHour,
    lesson.endMinute
  ).getTime();
}

export function getActiveLessonStatus(now: Date): ActiveLessonStatus {
  for (let index = 0; index < lessonTimes.length; index++) {
    const lessonTime = lessonTimes[index];
    const lessonStart = getLessonStart(lessonTime, now);
    const lessonEnd = getLessonEnd(lessonTime, now);

    const time = now.getTime();
    if (time >= lessonStart && time <= lessonEnd) {
      const remainMinutes = Math.round((time - lessonEnd) / 60000);
      const timeLeft = `(${remainMinutes} minutes remain)`;
      return { activeLessonIndex: index, status: "Active", timeLeft };
    }

    if (time < lessonStart) {
      const remainMinutes = Math.round((lessonStart - time) / 60000);
      const timeLeft = `(after ${remainMinutes} minutes)`;
      return { activeLessonIndex: index, status: "Inactive", timeLeft };
    }

    if (index < lessonTimes.length - 1) {
      const lessonAfter = lessonTimes[index + 1];
      const lessonAfterStart = getLessonStart(lessonAfter, now);
      if (time < lessonAfterStart) {
        const remainMinutes = Math.round((lessonAfterStart - time) / 60000);
        const timeLeft = `(after ${remainMinutes} minutes)`;
        return { activeLessonIndex: index + 1, status: "Inactive", timeLeft };
      }
    }
  }
  return { activeLessonIndex: -1, status: "Inactive" };
}
