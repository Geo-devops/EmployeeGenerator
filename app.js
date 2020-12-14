
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const jest = require("jest");
const path = require("path");
const fs = require("fs");

var  newID = 0;
var teamArray= [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function promptUser(answer) {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is this role?",
            choices: ["Intern", "Manager", "Engineer"]
        },
    ]).then(function (emp) {
        console.log(role)

        if (emp.role === "Engineer") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email"
                },
                {
                    name: "gibhub",
                    type: "input",
                    message: "what is your github username?"
                }
                
            ]).then(function (engineeEmp)
                {
                    var newEngineer = new Engineer (engineerRole.email, engineerRole.name, newID, engineerRole.github);
                    newID = newID++
                    console.log(newEngineer);

                    teamArray.push(newEngineer);
                    AddUser();
                });
            };
        })
        
            .catch(function (err) {
               console.log(err) 
            });

        };

        function generateHTML() {
            console.log(teamArray)

        function renderIntern() {

        };
        function renderManager(){

        };

        function renderEngineer(){

        };
        };

function addnewUser(){
    inquirer.prompt([
        {
            name: "add more",
            message: "Need to add another user?",
            type: "confirm"
        }
    ]).then(function(confirmed){
        confirm.continue ? promptUser() : generateHTML()
    })
};

promptUser();











// first thing to run
