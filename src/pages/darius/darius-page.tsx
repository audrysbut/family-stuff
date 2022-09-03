import { DaysLessons } from "../../components/days-lessons";

const monday = [
  "Lietuvių kalba",
  "Muzika",
  "Lietuvių kalba",
  "Matematika",
  "Pasaulio pažinimas",
];
const tuesday = [
  "Lietuvių kalba",
  "Muzika",
  "Lietuvių kalba",
  "Matematika",
  "Dailė ir technologijos",
];

export const DariusPage = () => (
  <div
    style={{
      marginLeft: "0.5rem",
      marginTop: "0.5rem",
    }}
  >
    <DaysLessons lessons={monday} dayOfWeek="Pirmadienis" />
    <span
      style={{
        marginLeft: "1rem",
      }}
    >
      <DaysLessons lessons={tuesday} dayOfWeek="Antradienis" />
    </span>
  </div>
);
