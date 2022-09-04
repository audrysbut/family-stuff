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
      display: "flex",
      flexWrap: "wrap",
      gridRowGap: "10px",
      gridColumnGap: "10px",
    }}
  >
    <DaysLessons lessons={monday} dayOfWeek="Pirmadienis" />
    <DaysLessons lessons={tuesday} dayOfWeek="Antradienis" />
  </div>
);
