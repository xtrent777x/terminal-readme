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
            type: 'input',
            name:'table',
            message: 'Create a table table of contents'
        },
        {
            type: 'input',
            name:'install',
            message: 'Provide install instructions'
        },
        {
            type: 'list',     
            name: 'license',
            choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost'],   //https://medium.com/swlh/how-to-make-the-perfect-readme-md-on-github-92ed5771c061
            message: 'What license was used for this project (choose one) ?',
        },
        {
            type: 'input',
            name:'use',
            message: 'What is your project used for?'
        },
        {
            type: 'input',
            name:'involved',
            message: 'Who all contributed to this project'
        },
        {
            type: 'input',
            name:'test',
            message: 'what test did you run to insure no errors?'
        },
        {
            type: 'input',
            name:'table',
            message: 'Create a table table of contents'
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
