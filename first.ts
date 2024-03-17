// // declaring variables in javascript
// let message = "Hello, World!"; 
// let count = 10;
// let isDone = false;

// // declaring variables in typescript
// let message: string = "Hello, TypeScript!"; // String type declaration
// let age: number = 30; // Number type declaration
// let isActive: boolean = true; // Boolean type declaration

// // function in javascript
// function add(num1, num2) {
//     return num1 + num2; 
// }

// // function in typescript
// function add(num1: number, num2: number): number {
//     return num1 + num2; 
//   }
  

// // defining object in javascript
// const person = {
//     name: "Alice",
//     age: 30
//   };

// // defining object in typescript
// interface Person {
//     name: string;
//     age: number;
//   }
  
//   const person: Person = {
//     name: "Alice",
//     age: 30
//   };

// sum of two number 
// function calculateSum(a:number,b:number):number {
//     return a+b;
    
// }
// let sum=calculateSum(5,2);
// console.log(sum)

// calculator 
function calculate(a:number,b:number,type:string):number {
    if (type==="sum") {
        return a+b;
    }
    if (type==="mul") {
        return a*b;
    }
    if (type==="div") {
        return a/b;
    }
    if (type==="sub") {
        return a-b;
    }
    else{
        return 0;
    }
}
const result = calculate(10,10,"mul");
console.log(result);