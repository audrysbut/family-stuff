import { MathComponent } from "./math-component";

export const MathPage = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <MinusOperations />
      <MinusOperations />
      <SumOperations />
      <SumOperations />
    </div>
  );
};

export const SumOperations = () => {
  const numbers = Array.from(Array(10).keys());
  const tasks = numbers.map((r) => (
    <MathComponent key={`m${r}`} operation="+" upTo={99} />
  ));
  return (
    <div
      style={{
        paddingRight: "1.5rem",
      }}
    >
      {tasks}
    </div>
  );
};

export const MinusOperations = () => {
  const numbers = Array.from(Array(10).keys());
  return (
    <div>
      {numbers.map((r) => (
        <MathComponent key={`m${r}`} operation="-" upTo={99} />
      ))}
    </div>
  );
};
