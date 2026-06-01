import type React from "react";
import type { TodoType } from "./Todo.types";

const TodoItem = ({ isDone, title, color }: TodoType) => {
  const Style: React.CSSProperties = {
    color,
    fontSize: "20px",
  };
  return (
    <>
      <li style={Style}>
        <h3>{title}</h3>
        {isDone ? "✔" : "❌"}
      </li>
    </>
  );
};

export default TodoItem;
