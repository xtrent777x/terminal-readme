const fs = require('fs');

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your project description.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license was used for this project?',
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your GitHub username?', //needs link as well to Github??
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }




    ]);
};

// TODO: Create a function to write README file

//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

//function init() {}

// Function call to initialize app
init();
