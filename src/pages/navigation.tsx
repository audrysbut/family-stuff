import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

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

const secondRow: PageData[] = [
  { title: "Matematika", link: "math" },
  //TODO: uncomment once ready
  // { title: "Daugiau Maziau", link: "more-less" },
];

export const Navigation = () => {
  return (
    <div style={{ marginTop: "0.5rem" }}>
      <NavigationRow input={firstRow} />
      <NavigationRow input={secondRow} />
    </div>
  );
};


interface NavigationRowProps {
  input: PageData[];
}

const NavigationRow = ({ input }: NavigationRowProps) => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", marginTop: "0.5rem" }}>
      {input.map((r) => {
        const link = r.link ? r.link : `/${r.title}`;
        return (
          <div style={styling} onClick={() => navigate(link)}>
            {r.title}
          </div>
        );
      })}
    </div>
  );
};
