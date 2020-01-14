import React from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
   } from 'reactstrap';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: "",
            completed: false
        };
    }

    handleChanges = e => {
        this.setState({ newItem: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("This is the handleSubmit");
        if(this.state.newItem) {
            this.props.addItem(this.state.newItem);
            this.setState({
                newItem: ""
            });
        }
    };  


    render() {
        console.log("Rendering form");
        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <Input
                        type="text"
                        name="item"
                        value={this.state.newItem}
                        onChange={this.handleChanges}
                    />
                    <InputGroupAddon addonType="append"><Button body inverse style={{ backgroundColor: '#FFB8E3' }}>Add Task</Button></InputGroupAddon>
                </InputGroup>
            </form>
        );
    }
}

export default TodoForm;