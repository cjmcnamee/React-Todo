import React from 'react';

const todo = [
  {
    task: "take out trash",
    id: 1,
    completed: false
  }
  {
    task: "do the dishes",
    id: 2,
    completed: false
  }
  {
    task: "wipe countertops",
    id: 3,
    completed: false
  }
  {
    task: "sweep and vaccuum",
    id: 4,
    completed: false
  }
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

    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
