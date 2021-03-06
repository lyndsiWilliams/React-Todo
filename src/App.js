import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

// Components
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const listItems1 = [
  {
    task: 'Play Doki Doki Literature Club',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Make decorations for the festival',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Bake cookies',
    id: 1528817094358,
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
      listItems: listItems1
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

  clearCompleted = e => {
    console.log(this.state);
    e.preventDefault();
    this.setState({
      listItems: this.state.listItems.filter(item => item.completed !== true)
    })
  }
  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="todo-form">
          <Jumbotron body inverse style={{ backgroundColor: '#FFE4F3', borderRadius: '25px 25px 0 0', fontSize: "2.5rem" }}>
            <h1 className="display-3">It's time to be productive!</h1>
            <br/>
            <hr className="my-2" />
            <p className="lead">
              <Button body inverse style={{ backgroundColor: '#FFB8E3' }} className="clear-btn" onClick={this.clearCompleted}>Clear Completed</Button>
            </p>
          </Jumbotron>
          <TodoForm addItem={this.addItem} />
          <br/>
          <TodoList listItems={this.state.listItems} handleComplete={this.handleComplete} />
        </div>

      </div>
    );
  }
}

export default App;
