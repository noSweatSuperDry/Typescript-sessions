"use strict";
// Lesson 5 - Modules
//convert to more or less specific 
let a = 'apple';
let b = a; //convert to less specific
let c = a; //convert to more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c == 'add')
        return a + b;
    return '' + a + b;
};
// Till 8:06
