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
  dow: number;
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

function calculateTimeLeft(startTime: number, endTime: number): string {
  const difSeconds = Math.ceil((endTime - startTime) / 1000);
  const hours = Math.floor(difSeconds / 3600);
  const minutes = Math.floor((difSeconds - hours * 3600) / 60);
  const seconds = difSeconds - hours / 3600 - minutes * 60;

  const h = makeNumber(hours);
  const m = makeNumber(minutes);
  const s = makeNumber(seconds);
  return `${h}:${m}:${s}`;
}

function makeNumber(num: number): string {
  return num > 9 ? `${num}` : `0${num}`;
}

export function getActiveLessonStatus(now: Date): ActiveLessonStatus {
  for (let index = 0; index < lessonTimes.length; index++) {
    const lessonTime = lessonTimes[index];
    const lessonStart = getLessonStart(lessonTime, now);
    const lessonEnd = getLessonEnd(lessonTime, now);

    const time = now.getTime();
    if (time >= lessonStart && time <= lessonEnd) {
      const timeLeft = `(${calculateTimeLeft(time, lessonEnd)} remain)`;
      return {
        activeLessonIndex: index,
        status: "Active",
        timeLeft,
        dow: now.getDay(),
      };
    }

    if (time < lessonStart) {
      const timeLeft = `(after ${calculateTimeLeft(time, lessonStart)})`;
      return {
        activeLessonIndex: index,
        status: "Inactive",
        timeLeft,
        dow: now.getDay(),
      };
    }

    if (index < lessonTimes.length - 1) {
      const lessonAfter = lessonTimes[index + 1];
      const lessonAfterStart = getLessonStart(lessonAfter, now);
      if (time < lessonAfterStart) {
        const timeLeft = `(after ${calculateTimeLeft(time, lessonAfterStart)})`;
        return {
          activeLessonIndex: index + 1,
          status: "Inactive",
          timeLeft,
          dow: now.getDay(),
        };
      }
    }
  }
  return { activeLessonIndex: -1, status: "Inactive", dow: now.getDay() };
}
