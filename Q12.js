"use strict";
// 12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let personName = ["Ambreen", "Zoya", "Ramsha", "Meerum"];
let message = "How do you do?";
console.log(personName[0] + " " + message);
console.log(personName[1] + " " + message);
console.log(personName[2] + " " + message);
console.log(personName[3] + " " + message);
// 2nd way
// Define an array of names
const names = ["Alice", "Bob", "Charlie", "David", "Emily"];
// Function to print personalized messages
function printPersonalizedMessages(names) {
    names.forEach(name => {
        console.log(`Hello, ${name}! Have a great day!`);
    });
}
// Call the function with the array of names
printPersonalizedMessages(names);
