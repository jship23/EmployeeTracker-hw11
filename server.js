//require dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

//create connection
const connection = mysql.createConnection({
    host: "local host",
    //port
    port: 3306,
    //username
    user: "root",
    //password
    password: "",
    //database name
    database:"employees_db",
});

//
connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prommpt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices:[
                "View all employees",
                "View all employees by department",
                "View all employees by role",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",
                "Exit",
            ]
        }).then(function(answer){
            switch (answer.action) {
                case "View all employees":
                    employeeSearch();
                    break;

                case "View all employees by department":
                    departmentSearch();
                    break;

                case "View all employees by role":
                    roleSearch();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Department":
                    addDepartment();
                    break;
                
                case "Add Role":
                    addRole();
                    break;

                case "Update Employee Role":
                    updateRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}