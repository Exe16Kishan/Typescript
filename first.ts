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
// function calculate(a:number,b:number,type:"sum"|"mul"|"div"|"sub"):number {
//     if (type==="sum") {
//         return a+b;
//     }
//     if (type==="mul") {
//         return a*b;
//     }
//     if (type==="div") {
//         return a/b;
//     }
//     if (type==="sub") {
//         return a-b;
//     }
//     else{
//         return 0;
//     }
// }
// const result = calculate(10,10,"mul");
// console.log(result);

// create a function that greets with persons name and age

// easy way
// function greet(person:{
// name:string,
//     age:number
// }):string {
//     return "hello " + person.name + " your age is "+person.age;
// }

// console.log(greet({
//     name:"kishan",
//     age:21
// }))

// medium way
// interface is like struct or class where b define
// the variables 
// interface person {
//     name: string;
//     age: number;
// }

// function greet(person: person): string {
//     return "hello " + person.name + " your age is " + person.age;
// }

// console.log(greet({
//     name: "kishan",
//     age: 21
// }))


// we can create multiple data type
// interface genderprops{
//     gender : "male" | "female"; // we can write string also
//     pronouns : "mard" | "aurat";// we can write string also
// }

// interface person {
//     name: string;
//     age: number;
    
//     // gender : genderprops; // we can do like this or like below
//     gender : {
//         gender : "male" | "female";
//         pronouns : "mard" | "aurat";
//     };
// }

// function greet(person: person): string {
//     return "hello " + person.name + " your age is " + person.age + " you are " + person.gender.gender + " and  you are " + person.gender.pronouns;
// }

// console.log(greet({
//     name: "kishan",
//     age: 21,
//     gender:{
//         gender:"male",
//         pronouns:"mard"
//     }
// }))

// interface circle{
//     radius : number;
//     borderWidth ?:number; // ? it is used for optional parameter
// }
// interface Square{
//     side : number;
// }
// interface rectangle{
//     width : number;
//     height: number;
// }
// type shape = rectangle | circle | Square;

// // one method 
// // function renderShape(shape:rectangle | circle | Square) {
// //     console.log("rendered")
// // }

// // second method
// function renderShape(shape:shape) {
//     console.log("rendered")
// }
// console.log(renderShape({
//     // radius:10,
//     width : 5,
//     height: 5
//     // so the second argument is optional as it is not showing error
// }))

// checking if no. is positive or negative
// function no(num1:number) {
//     if (num1 > 0){
//         return "positive"
//     }
//     if (num1 < 0){
//         return "negative"
//     }
//     return 0;
// }

// const val:number | string =no(-1);
// console.log(val);


// prime number
// function prime(num1:number) {
//     for (let i:number  = 2; i < num1; i++) {
        
//         if (num1%i===0) {
//             return "not prime"
//         }
//     }
//     return "prime";
// }
// const qt:string=prime(13)
// console.log(qt)


// defining new data type
// interface user{
//     name:string,
//     roll : number,
// }
// const user:user ={  // user is interface 
//     name:"kishan",
//     roll :24
// }
// console.log(user);
