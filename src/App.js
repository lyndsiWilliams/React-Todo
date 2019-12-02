import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      listItems: listItems
    };
  }

  addItem = newItemText => {
    // add new item to the grocery list
    // need to follow immutability rules
    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      listItems: [...this.state.listItems, newItem]
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="todoForm">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
