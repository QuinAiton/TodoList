import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import classes from "./App.module.css";
import Todos from "./Todos/Todos";
import Header from "./Header/Header";
import TaskCreator from "./AddTodo/TaskCreator";
import About from "./About/About";
import uuid from "uuid/v4";

class App extends Component {
  state = {
    Todos: [
      {
        task: "Post couch for sale",
        key: uuid(),
        completed: false,
      },
    ],
  };

  addTodo = (task) => {
    const newTodo = {
      key: uuid(),
      task: task,
      completed: false,
    };
    this.setState({ Todos: [...this.state.Todos, newTodo] });
  };

  taskRemover = (key) => {
    this.setState({
      Todos: [...this.state.Todos.filter((todo) => todo.key !== key)],
    });
  };

  toggleCompleted = (key) => {
    this.setState({
      Todos: this.state.Todos.map((todo) => {
        if (todo.key === key) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <Router>
        <div className={classes.AppContainer}>
          <Header />
          <div className={classes.AppBody}>
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <TaskCreator addTodo={this.addTodo} />
                  <Todos
                    Todos={this.state.Todos}
                    toggleCompleted={this.toggleCompleted}
                    taskRemover={this.taskRemover}
                    taskCreator={this.taskCreator}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
