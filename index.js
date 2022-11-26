const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter Description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter Table of Contents:',
        name: 'tableOfContents'
    },
    {
        type: 'input',
        message: 'Enter Installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter Usage instructions:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter Contributing instructions:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter Tests information:',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Choose Liscense:',
        name: 'liscense'
    },
    {
        type: 'input',
        message: 'Enter GitHub username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter email address:',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then((response) => {
            
        })
}

// Function call to initialize app
init();
