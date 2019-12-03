import React from 'react';

const Todo = props => {
    return (
        <div id={props.item.id} className={`todo${props.item.completed ? '-completed' : ''}`} onClick={props.handleComplete}>
            {props.item.task}
        </div>
    );
}

export default Todo;


