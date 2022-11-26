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

interface PageData {
  title: string
  link?: string
}

const links: PageData[] = [
  { title: "Darius" },
  { title: "Gabija" },
  { title: "Audrius", link: "/Audrius/0" },
  { title: "Jolita", link: "Jolita/0" },
  { title: "Matematika", link: "math"}
];

export const Navigation = () => {
  const history = useHistory();
  return (
    <div style={{ marginTop: "1.5rem" }}>
      {links.map((r) => {
        const link = r.link ? r.link : `/${r.title}`
        return <span style={styling} onClick={() => history.push(link)}>
          {r.title}
        </span>
      })}
    </div>
  );
};
