/* import Log from './log';
import Calc from './calc';

const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3)); */
import React from 'react';
import ReactDOM from 'react-dom';

const el = <h1>Hello!</h1>;
console.log(el);
console.dir(el);
console.log('-------------');



ReactDOM.render(el, document.getElementById('root'));
console.log(document.querySelector('h1'));
console.dir(document.querySelector('h1'));