const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

init()
function init() {  
    console.log("Create Your Team")
    checkTypeOfEmp()
    // makeManager()
}

function makeManager() {
    const answers = inquirer.prompt([
        {
            message: "What is your manager's name?",
            name: "name",
            type: "input",
            validate: value => {
                if (value !== "") {
                    return true;
                } else {
                    return ("Please enter at least one letter")
                }
            }
        },
        {
            message: "What is your manager's id?",
            name: "id",
            type: "input",
            validate: value => {
                if (!isNaN(value) || value > 0) {
                    return true;
                } else {
                    return ("Please enter a valid number")
                }
            }
        },
        {
            message: "What is your manager's email?",
            name: "email",
            type: "input",
            validate: emailValidator
        },
        {
            message: "What is your manager's office number?",
            name: "office",
            type: "input",
            validate: value => {
                if (value !== "") {
                    return true;
                } else {
                    return "Please enter a valid phone number";
                }
            }
        },

    ]).then(function (answers) {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            employees.push(manager);
            checkTypeOfEmp();
        })
        .catch(function (err) {
            console.log(err);
        })

};

function checkTypeOfEmp () {
    inquirer.prompt ([
        {
            type: "list",
            name: "next",
            message: "Which type of employee would you like to add?",
            choices: ["Manager","Engineer", "Intern", "I don't want to enter another employee"]
        }
    ])
    .then(function(ans){
        switch (ans.next) {
            case "Manager":
                makeManager();
                break;
            case "Engineer":
                makeEngineer();
                break;
            case "Intern":
                makeIntern();
                break;
            default: finish()
        }
    })
    .catch(function(err){
        console.log(err);
    })
};

function makeEngineer() {
    const answers = inquirer.prompt([
        {
            message: "What is your Engineer's name?",
            name: "name",
            type: "input",
            validate: value => {
                if (value !== "") {
                    return true;
                } else {
                    return ("Please enter at least one letter")
                }
            }
        },
        {
            message: "What is your Engineer's id?",
            name: "id",
            type: "input",
            validate: value => {
                if (!isNaN(value) || value > 0) {
                    return true;
                } else {
                    return ("Please enter a valid number")
                }
            }
        },
        {
            message: "What is your Engineer's email?",
            name: "email",
            type: "input",
            validate: emailValidator
        },
        {
            message: "What is your Engineer's Github username?",
            name: "github",
            type: "input",
            validate: value => {
                if (value!=="") {
                    return true;
                } else {
                    return ("Please enter a valid username")
                }
            }
        },

    ]).then(function (answers) {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        checkTypeOfEmp();
    })
        .catch(function (err) {
            console.log(err);
        })
}
function makeIntern() {
    const answers = inquirer.prompt([
        {
            message: "What is your Intern's name?",
            name: "name",
            type: "input",
            validate: value => {
                if (value !== "") {
                    return true;
                } else {
                    return ("Please enter at least one letter")
                }
            }
        },
        {
            message: "What is your Intern's id?",
            name: "id",
            type: "input",
            validate: value => {
                if (!isNaN(value) || value > 0) {
                    return true;
                } else {
                    return ("Please enter a valid number")
                }
            }
        },
        {
            message: "What is your Intern's email?",
            name: "email",
            type: "input",
            validate: emailValidator
        },
        {
            message: "What school is your intern from?",
            name: "school",
            type: "input",
            validate: value => {
                if (value !== "") {
                    return true;
                } else {
                    return ("Please enter a valid School name")
                }
            }
        },
    ]).then(function (answers) {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(intern);
        checkTypeOfEmp();
    })
        .catch(function (err) {
            console.log(err);
        })
}


function emailValidator(value) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value !== mailformat) {
        return true;
    }
    else {
        return ("You have entered an invalid email address!");
    }
}

function finish() {
    let html = render(employees)
    fs.writeFile(outputPath, html, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("The file has been written");
        }
    }
    )
}