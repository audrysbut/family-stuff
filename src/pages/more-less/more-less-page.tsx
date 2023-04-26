export const MoreLessPage = () => {
  return <MoreLess num1={5} num2={4} />;
};

interface MoreLessProps {
  num1: number;
  num2: number;
}

const MoreLess = ({ num1, num2 }: MoreLessProps) => {
  const firstGreater = num1 > num2;
  const sign = firstGreater ? ">" : "<";
  return (
    <div style={{ display: "flex" }}>
      <ViewNum value={num1} isMore={firstGreater} />
      {/* Reuse style */}
      <div style={{ padding: "0.5rem" }}>{sign}</div>
      <ViewNum value={num2} isMore={firstGreater!} />
    </div>
  );
};

interface ViewNumProps {
  value: number;
  isMore: boolean;
}
const ViewNum = ({ value, isMore }: ViewNumProps) => {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid black",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        textAlign: "center",
      }}
    >
      {value}
    </div>
  );
};
