const inquirer = require('inquirer');

const fs = require('fs');

const util = require('util');

const writeFileReadMe = util.promisify(fs.writeFile);

//https://www.geeksforgeeks.org/node-js-util-promisify-method/
//https://hackernoon.com/node8s-util-promisify-is-so-freakin-awesome-1d90c184bf44


// Questions for input
const promptUser = () => {              // used from portfolio generator
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter your project description.',
        },
    
        {
            type: 'input',
            name:'install',
            message: 'Provide install instructions'
        },
        {
            type: 'list',     
            name: 'license',
            choices: ['GNU General Public License v3.0', 'Apache License v2.0', 'Ms-PL', 'BSD', 'CDDL', 'EPL', 'MIT License', 'N/A'],   //https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-explained/
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
            name: 'githubName',
            message: 'What is your GitHub username?' //needs link as well to Github??
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },




    ]);
};
// TODO: Create a function to write README file

//Need to add markdown for list on README
// Markdown resources how too ***
//https://code.visualstudio.com/docs/languages/markdown
//https://www.youtube.com/watch?v=Ix416lAYRSg
//https://www.youtube.com/watch?v=7SMqArX8PYo
// # biggest ## smaller ..
// ** bold
//number list 1. 2. // bullet list - - //
// [link](linkurl) // <for link display>
// > blockquote
// markdown help https://guides.github.com/features/mastering-markdown/
// link for help with add link to table https://gist.github.com/rachelhyman/b1f109155c9dafffe618

const createReadMe = (answers) =>
`



# ${answers.title}

## Description*

${answers.description}

## Table Of Contents

* [Title] (#title)
* [Description] (#description)
* [Install] (#install)
* [License] (#license)                 
* [Use] (#use)
* [Involved] (#involved)
* [Test] (#test)
* [Questions] (#questions)

## Install
${answers.install}

## License
${answers.license}

## Use
${answers.use}

## Involved
${answers.involved}

## Test
${answers.test}

## Questions

- See my GitHub (https://github.com/${answers.githubName})

- Email me for additional help or questions: ${answers.email}.

`;





//app Call

promptUser()
.then((answers) => writeFileReadMe('README.md', createReadMe(answers)))
.then (() => console.log ('README has been created'))               //.then from module portfolio generator
.catch (err => {
    console.log (err)
})
