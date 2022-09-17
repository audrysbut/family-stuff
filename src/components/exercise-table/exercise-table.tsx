import { SportData } from "../exercise-view/sport-data";
import "./SportPage.css";

interface ExerciseTableProps {
  data: SportData[];
}

export const ExerciseTable = ({ data }: ExerciseTableProps) => {
  const rowData = data.map((r) => (
    <tr>
      <td className="sport">{r.muscleGroup}</td>
      <td className="sport">{r.exercise}</td>
      <td className="sport">
        {r.series.map((t) => (
          <div>{t}</div>
        ))}
      </td>
    </tr>
  ));
  return (
    <table className="tableSport">
      <thead>
        <th className="sportHeader">Raumenų grupė</th>
        <th className="sportHeader">Pratimas</th>
        <th className="sportHeader">Serijos / Kartojimai</th>
      </thead>
      <tbody>{rowData}</tbody>
    </table>
  );
};
