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
  title: string;
  link?: string;
}

const firstRow: PageData[] = [
  { title: "Darius" },
  { title: "Gabija" },
  { title: "Audrius", link: "/Audrius/0" },
  { title: "Jolita", link: "Jolita/0" },
];

export const Navigation = () => {
  return (
    <div style={{ marginTop: '0.5rem'}}>
      <FirstRow />
      <SecondRow />
    </div>
  );
};

const FirstRow = () => {
  const history = useHistory();
  return (
    <div style={{ display: "flex" }}>
      {firstRow.map((r) => {
        const link = r.link ? r.link : `/${r.title}`;
        return (
          <div style={styling} onClick={() => history.push(link)}>
            {r.title}
          </div>
        );
      })}
    </div>
  );
};

const secondRow: PageData[] = [{ title: "Matematika", link: "math" },{ title: "Daugiau Maziau", link: 'more-less'}];

const SecondRow = () => {
  const history = useHistory();
  return (
    <div style={{ display: "flex", marginTop: '0.5rem' }}>
      {secondRow.map((r) => {
        const link = r.link ? r.link : `/${r.title}`;
        return (
          <div style={styling} onClick={() => history.push(link)}>
            {r.title}
          </div>
        );
      })}
    </div>
  );
};
