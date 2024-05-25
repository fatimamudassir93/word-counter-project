#! /usr/bin/env node
// import inquirer module which is cli for node.js

import inquirer from "inquirer"
// declare constant "answers" and assign it to the result of inquirer prompt function.

const answers : {
    Sentence : string
} = await inquirer.prompt([
    {
        name: "Sentence" ,
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])
const words = answers.Sentence.trim().split(" ")
// print the array of words to the console.
console.log(words)

// print the word count of the sentence to the console

console.log(`your sentence word count is ${words.length}`);















