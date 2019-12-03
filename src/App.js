import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const listItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

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
    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      listItems: [...this.state.listItems, newItem]
    });
  };
    
  handleComplete = e => {
    console.log("correct!");
      this.setState({
        listItems: this.state.listItems.map(item => {
          console.log(e.target);
          if (item.id===Number(e.target.id)) {
            item.completed=!item.completed
          }
          return item;
        })
      });
    };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="todo-form">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList listItems={this.state.listItems} handleComplete={this.handleComplete} />

      </div>
    );
  }
}

export default App;
