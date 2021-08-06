const fs = require('fs');

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: '',
            name: '',
            message 'What is your project title?',
        }
        {
            type: '',
            name: '',
            message 'Enter your project description.',
        }
        {
            type: 'list',
            name: '',
            message 'What license was used for this project?',
        }
        {
            type: '',
            name: '',
            message 'What is your GitHub username?', //needs link as well to Github??
        }
        {
            type: '',
            name: '',
            message 'What is your email address?',
        }




    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
