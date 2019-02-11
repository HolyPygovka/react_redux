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

const user = "Bob";
const txt2 = `Hello ${user} you are ${19+3}, now is ${Date.now()}`;
console.log(txt2);
const templateHtml = `
    <ul>
        <li>Item One</li>
        <li>Item Two</li>
    </ul>
`;
console.log(templateHtml);

const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};
const opts = {
    user: 'John',
    password: 'utopia'
};



const result = { ...defaults, ...opts};

console.log(result);

class Animal {
    constructor(name, voice){
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(this.name, "goes", this.voice);
    }
};

class Bird extends Animal {
    constructor(name, voice, canFly) {
       super(name, voice);
       super.say();
       this.canFly = canFly; 
    }

    say() {
        console.log("Birds don't like to talk");
    }
}

const duck = new Bird("Duck", "quack", true);
duck.say();











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