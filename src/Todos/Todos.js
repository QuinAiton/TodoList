import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return props.Todos.map((todo) => (
    <TodoItem
      Todos={todo}
      key={todo.key}
      toggleCompleted={props.toggleCompleted}
      taskRemover={props.taskRemover}
    />
  ));
};

export default Todos;
