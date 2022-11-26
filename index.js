const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Enter Title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter Description:',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Enter Table of Contents:',
        name: 'TableOfContents'
    },
    {
        type: 'input',
        message: 'Enter Installation instructions:',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Enter Usage instructions:',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'Enter Contributing instructions:',
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'Enter Tests information:',
        name: 'Test'
    },
    {
        type: 'list',
        message: 'Choose Liscense:',
        name: 'Liscense',
        choices: ['a','b','c']
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
function writeToFile(fileName, data) {
    for (let key in data){
        switch(key){
            case 'title':
                console.log(data[key]);
                break;
            case 'Liscense':
                console.log(data[key]);
                break;
            case 'github':
            case 'email':
                console.log(data[key]);
                break;
            default:
                generateMarkdown(data[key]);
                break;
        }
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => writeToFile(response.title, response))
}

// Function call to initialize app
init();
