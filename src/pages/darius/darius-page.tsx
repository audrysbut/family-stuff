import { DaysLessons } from "../../components/days-lessons";

const monday = [
  "Lietuvių kalba",
  "Muzika",
  "Lietuvių kalba",
  "Matematika",
  "Pasaulio pažinimas",
];

export const DariusPage = () => (
  <div
    style={{
      marginLeft: "0.5rem",
      marginTop: "0.5rem",
    }}
  >
    <DaysLessons lessons={monday} dayOfWeek="Pirmadienis" />
  </div>
);
