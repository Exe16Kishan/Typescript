// declaring variables in javascript
let message = "Hello, World!"; 
let count = 10;
let isDone = false;

// declaring variables in typescript
let message: string = "Hello, TypeScript!"; // String type declaration
let age: number = 30; // Number type declaration
let isActive: boolean = true; // Boolean type declaration

// function in javascript
function add(num1, num2) {
    return num1 + num2; 
}

// function in typescript
function add(num1: number, num2: number): number {
    return num1 + num2; 
  }
  

// defining object in javascript
const person = {
    name: "Alice",
    age: 30
  };

// defining object in typescript
interface Person {
    name: string;
    age: number;
  }
  
  const person: Person = {
    name: "Alice",
    age: 30
  };