import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const todo = [
  {
    task: "take out trash",
    id: 1,
    completed: false
  },
  {
    task: "do the dishes",
    id: 2,
    completed: false
  },
  {
    task: "wipe countertops",
    id: 3,
    completed: false
  },
  {
    task: "sweep and vaccuum",
    id: 4,
    completed: false
  },
  {
    task: "make bed",
    id: 5,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.setState = {
      todo: todo
    }
  }

  toggleTask = id => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList />
        <div className="notApp">
          <TodoForm
            todo={this.state.todo}
            toggleTask={this.toggleTask}
           />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
