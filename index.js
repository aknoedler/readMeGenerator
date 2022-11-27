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
        name: 'description'
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
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Choose License:',
        name: 'license',
        choices: ['MIT License','GNU GPLv3','No License']
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
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log(`${fileName}.md created.`));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => writeToFile(response.title, response))
}

// Function call to initialize app
init();
