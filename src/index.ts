//Lesson 2
let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
let album: any;
let songs: string|number;
// 4 types of variables

album = 515;
myName = 'Evan';
meaningOfLife = 42;
isLoading = true;


const sum = (a: any, b:string)=>{
    return a + b;
}

console.log(sum(1,"2"));


let postId: string|number;
let isActiveValue: boolean|number;
let re: RegExp = /\w+/g;  //Regular Expression is RegExp. 



console.log(album + " : "+myName, meaningOfLife, isLoading);


