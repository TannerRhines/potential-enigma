// TODO: Include packages needed for this application

var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer.prompt = ([
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',

    },
    {
        type: "input",
        message: 'Enter your project description:',
        name: 'description',
    },
    {
        type: "input",
        message: 'What installation process is needed for project?',
        name: 'installation',
    },

    {
        type: "input",
        message: 'What is this app being app used for?',
        name: 'usage',
    },

    {
        type: "input",
        message: 'What tests are required?',
        name: 'test',
    },

    {
        type: "input",
        message: 'What GitHub accounts are associated with your project?',
        name: 'contributors',
    },

    {
        type: "list",
        message: 'What license is being used?',
        name: 'license',
        choices: ['MIT', 'GNU'],
    },


    {
        type: "input",
        message: 'Enter your GitHub username',
        name: 'username',
    },

    {
        type: "input",
        message: 'Enter your email',
        name: 'email',
    },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


