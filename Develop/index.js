const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const fileName = 'README.md'


// array of questions for user
//What questions do i need:
//1. Githhub Name and repo, Title, Description, Table of Contents, Installation, Usage, License, 
// Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please type in your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email'
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is the name of repository for this project?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description for you project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write down the steps you need to install your project.. if you want to!',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Tell users how to use your project!'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project',
        choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'State how other devs can help your project!',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Demonstrate your tests or examples here!',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What if I have problems running the program?'
    }


];

// function to write README file
//I should call on generateMarkdown somewhere in here
function writeToFile(fileName, data) {

    //writing the file here

    //pulling data from generateMarkdown
    const markdown = generateMarkdown(data)

    fs.writeFile(fileName, markdown, err => {
        err ? console.error(err) : console.log('README has been generated! Yeehaw!')


    })
}

// function to initialize program

// im gonna have to call on writeToFile in here
function init() {
    //Using inquirer to ask questions:

    inquirer
        .prompt(questions)

        .then(data => {
            writeToFile(fileName, data)
        })
}

// function call to initialize program
init();

// What do i need to do? 

// '^' means completed tasks

// 1. download npm install ^
// 2. Write questions inside the const question ^
// 3. WRite the function for writetoFile ^
// 4. Write the function for function init()
// 5. Use *fs.appendFile* to actually make the README X
    //- Using writeFile seems to work too
// 6. Figure out the generate markdown function ^
// 7. Add the generatemarkdown function to the index.js ^
