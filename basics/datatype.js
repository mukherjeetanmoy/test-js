//alert(33) --> usable in browser only
console.log(33) // usable in browser and nodejs
console.warn("This is a warning message") // usable in browser and nodejs

/*Datatypes in JavaScript

1. Primitive Data Types:
   - Number: Represents both integer and floating-point numbers.
   - String: Represents a sequence of characters enclosed in quotes.
   - Boolean: Represents true or false values.
   - Undefined: A variable that has been declared but not assigned a value.
   - Null: Represents the intentional absence of any object value.
   - Symbol: A unique and immutable primitive value, often used as object property keys.
   - BigInt: Represents integers with arbitrary precision.

2. Non-Primitive Data Types:
    - Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type.
    - Array: A special type of object used to store ordered collections of values.
    - Function: A callable object that can be executed to perform a specific task.
    - Date: Represents dates and times.
    - RegExp: Represents regular expressions for pattern matching in strings.
    */

// Example of different data types in JavaScript
let number = 42; // Number
let string = "Hello, World!"; // String
let boolean = true; // Boolean
let undefinedVar; // Undefined
let nullVar = null; // Null
let symbolVar = Symbol("unique"); // Symbol
let bigIntVar = BigInt(123456789012345678901234567890); // BigInt
let objectVar = { key: "value" }; // Object
let arrayVar = [1, 2, 3, 4, 5]; // Array
let functionVar = function() { return "I am a function"; }; // Function
let dateVar = new Date(); // Date
let regExpVar = /abc/; // RegExp

console.log(typeof null) // Outputs: "object" (this is a known quirk in JavaScript)
console.log(typeof undefined) // Outputs: "undefined"