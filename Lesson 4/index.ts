// LESSON 4

//type alias we can use type alias for union type
type stringOrNumber = string | number;
type stringOrNumberArray = (String | Number)[];

type Guiterist = {
  name: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userID = stringOrNumber;

// interface postId = stringOrNumber
// interface is like classes or objects, we can not use interface for union type
type PostID = stringOrNumber;

//Literal types myName can not be changed to other names!!!
let myName: "Evan";
let herName: "Eva" | "Eve" | "Evelyn";

//herName='Evangelina';//error , only certain values are allowed
//DRY - Don't Repeat Yourself

//function type

const add = (a: number, b: number): number => {
  //number is return type
  return a * b;
};

//void type

const logMsg = (message: any): void => {
  console.log(message);
};
logMsg("Hello World");
console.log(add(1879452, 2114544));

let subtract = function (c: number, d: number): number {
  return c - d;
};
console.log(subtract(100, 50));

type mathFunction = (a: number, b: number) => number; //converted to interface
// interface mathFunction  { (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(10, 20));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  //when we put optional , return will be red, because it can be undefined, so we need a type guard
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b; //if there is no c, it will return a+b
};
//optional parameters 2
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c; //if there is no c, it will return a+b
};

logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2));
logMsg(sumAll(1, 2, 3)); //so we can put c value if we want, even though it is not optional but default value is 2

//Rest parameters

const total = (a: number, ...nums: number[]): number => {
  return nums.reduce((prev, curr) => a + prev + curr);
};

logMsg(total(1, 2, 3));

const createErr = (errMsg: string): never => {
  //its a specfic type of return type, which returns nothing and used for error handling
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 0;
  while (true) {
    i++;
    // if (i>100) break; //if we put break, it will not be infinite, this type will be void other wise never
  }

//custom type guard

  const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
  };


  //use of the never type
  const numberOfString = (value: string | number): string => {
    if (typeof value === "string") return `String`;
    if (isNumber(value)) return `number`;
    return createErr(`Expected string or number`); //if we remove this line, string declaration will be void, because it will not return anything
  };
};
