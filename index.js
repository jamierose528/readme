// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project in a few sentences.",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this application?",
  },
  {
    type: "input",
    name: "contributers",
    message: "Other contributers on the projects?",
  },
  {
    type: "input",
    name: "license",
    message: "What are the licenses used on the app?",
  },
  {
    type: "input",
    name: "tests",
    message: "How did you test your app?",
  },
  {
    type: "input",
    name: "contact",
    message: "What is the developer's Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the developer's email address?",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// fs.writeFile(fileName.data, (err) => {
//   err ? console.log(err) : console.log("Success!");
// });
// TODO: Create a function to initialize app
// function init() {}
inquirer.prompt(questions).then((data) => {
  console.log("Making ReadMe");
  fs.writeFileSync("README.md", generateMarkdown(data));
});
//   .catch((err) => {
//     console.log(err);
//   });
// Function call to initialize app
