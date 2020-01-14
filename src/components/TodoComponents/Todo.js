import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Todo = props => {
    return (
        // <div
        //  id={props.item.id}
        //  className={`todo${props.item.completed ? '-completed' : ''}`}
        //  onClick={props.handleComplete}
        //  style={{ textDecoration: props.item.completed ? 'line-through' : 'none' }}
        // >
        //     {props.item.task}
        // </div>

        
        <ListGroup
            flush
            id={props.item.id}
            className={`todo${props.item.completed ? '-completed' : ''}`}
            onClick={props.handleComplete}
            style={{ textDecoration: props.item.completed ? 'line-through' : 'none' }}
        >
            <ListGroupItem disabled tag="a" body inverse style={{ backgroundColor: '#FFE4F3', borderRadius: '25px' }}>{props.item.task}</ListGroupItem>
        </ListGroup>
    );
}

export default Todo;