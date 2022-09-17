import { CSSProperties } from "react";
import { useHistory } from "react-router-dom";

const styling: CSSProperties = {
  marginLeft: "0.5rem",
  padding: "1rem",
  border: "1px solid black",
  background: "lightgreen",
  borderRadius: "5px",
  userSelect: "none",
};

const links = ["Darius", "Gabija", "Audrius", "Jolita"];

export const Navigation = () => {
  const history = useHistory();
  return (
    <div style={{ marginTop: "1.5rem" }}>
      {links.map((r) => (
        <span style={styling} onClick={() => history.push(`/${r}`)}>
          {r}
        </span>
      ))}
    </div>
  );
};
