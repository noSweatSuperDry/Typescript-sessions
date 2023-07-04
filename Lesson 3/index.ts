//Lesson 3 
//three different types of arrays

let randomAccessMemory = ['DDR3', 'DDR4', 'DDR5'];
let computingArch = [86, 64, 'Arm'];  //union type = multiple types of variables
let graphicsConfig = ['Nvidia', 8 , true];

randomAccessMemory.push('DDR6');
computingArch.push(1987);
graphicsConfig.push(false);
randomAccessMemory.unshift('LDDR');
// randomAccessMemory=/= computingArch; //error because they are different types
// computingArch =/= graphicsConfig; //error because they are different types
computingArch=randomAccessMemory
graphicsConfig = computingArch;
console.log(randomAccessMemory, computingArch, graphicsConfig);


//any type
let product = []; // this means any type of array
let version:string[] = []; // this is assigned array but should be string elements

version.push('production');
console.log(version);

//to strick types of array in specific elements and length, we use tuple
let mytuple: [string, number, boolean] = ['development', 1, true];
graphicsConfig = mytuple
// But mytuple =/= graphicsConfig; eventhough they are same types of array but there might be less elements in graphicsConfig


console.log(mytuple[1]);


// ************OBJECTS************


let myObject: object ;
myObject = [1,2,5,4];
myObject= graphicsConfig
console.log(myObject);
console.log(typeof myObject);  //Array is also object in javascript

const exampleObject = {
    key: 1,
    value: 'Evan',
}

console.log("exampleObject: ", exampleObject);

type computers = {
    cpu?: string,
    memory: (string | number )[],
    gpu: string | number | boolean,
}

let myPC: computers = {
    
    memory: ['DDR4', 16],
    gpu: 'Nvidia',
}
let myLaptop: computers = {
    cpu: 'i5',
    memory: ['DDR4', 8], // thats why we can remobe gpu property bcause gpu?: is optional
    gpu: false,
   }

// myPC.years = 2023   we can add new property in object , in this case we can not , because it is not defined in type   


console.log(myLaptop,myPC);

const superComputer = (Komputers: computers) => {
return `This is a supercomputers part ${Komputers.cpu?.toUpperCase()}`; //? means optional, if we want to use optional property,
// we need to use ? in front of property  , we have to put ? after property name
//toUpperCase() is a method of string  

}
const superComputer1 = (Komputers: computers) => {
  //narrowing down the type of variable
  if (Komputers.cpu) {
    return `This is a supercomputers part ${Komputers.cpu.toUpperCase()}`;
    }
    return `This is a supercomputers part not found`;
}

console.log(superComputer(myPC));
console.log(superComputer1(myPC));

interface Komputers  {
    cpu: string,
    memory: (string | number )[],
    gpu: string | number | boolean,
}


//Interface is used in class.

// now if we change optional gpu to cpu, then  line 78 will be error because it is not defined in interface



// ************ENUMS************'



enum Grade {
    U , D, C, B, A
}

console.log(Grade.U, Grade.D, Grade.C, Grade.B, Grade.A);

