import React from "react";
import classes from "./Todos.module.css";

const TodoItem = (props) => {
  const { key, task } = props.Todos;
  let completed = "";
  props.Todos.completed === true
    ? (completed = classes.TodosCompleted)
    : (completed = classes.Todos);

  return (
    <li
      className={completed}
      onClick={props.toggleCompleted.bind(this, key)}
      onDoubleClick={props.taskRemover.bind(this, key)}
    >
      {task}
    </li>
  );
};

export default TodoItem;
