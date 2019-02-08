import React from 'react';
import ReactDOM from 'react-dom';




const shape = {
    type: "segment",
    cordinates: {
        start: [10, 15],
        end: [17, 15]
    }
};

const { cordinates: {start: [startX, startY], end: [endX, endY]} } = shape;

console.log(startX, startY, endX, endY);



function TodoItem() {
    return (
        <span>Drink Coffee</span>
    );
}

function TodoList() {
    return (
        <ul>
            <li><TodoItem/></li>
            <li><TodoItem/></li>
            <li><TodoItem/></li>
        </ul>
    );
}

ReactDOM.render(<TodoList/>, document.getElementById('root'));