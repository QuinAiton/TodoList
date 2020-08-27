import React, { Component } from "react";
import classes from "./TaskCreator.module.css";

class TaskCreator extends Component {
  state = {
    task: "",
  };

  newTask = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            className={classes.Input}
            type="text"
            name="task"
            placeholder="Add New task"
            value={this.state.task}
            onChange={this.newTask}
          />
          <button className={classes.Button} type="submit" value="submit">
            +
          </button>
        </form>
      </div>
    );
  }
}

export default TaskCreator;
