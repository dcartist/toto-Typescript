import React, { useContext, useState } from "react";
import TodosProvider, { TodosContext } from "./TodosContext";

const Todos = () => {
  const { todos, addTodo } = useContext(TodosContext);
  const [info, setInfo] = useState("");
  function grabName(e) {
    e.preventDefault();
    setInfo(e.target.value);
  }
  return (
    <div>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>{todo}</div>
        ))}

        <form>
          <input type="text" onChange={(e) => grabName(e)} />
        </form>
      </div>
      <button onClick={() => addTodo(info)}>add todo</button>
    </div>
  );
};

export default () => (
  <TodosProvider>
    <Todos />
  </TodosProvider>
);
