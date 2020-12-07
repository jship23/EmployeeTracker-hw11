//require dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

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
    startMenu();
    console.log("Connected");
});

function startMenu() {
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

function employeeSearch(){
    var query = "SELECT * FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        startMenu();

        });
};


function departmentSearch(){
    var query = "SELECT * FROM department"
    connection.query(query, function(err, res){
        if(err) throw err;
        console.table(res);
        startMenu();
    });
};


function roleSearch(){
    var query = "SELECT * FROM role"
    connection.query(query, function(err, res){
        if(err) throw err;
        console.table(res);
        startMenu();
    });
};


function addEmployee(){

    inquirer
        .prompt({
            name: "firstName",
            type: "input",
            message: "What is the employees first name?"
        },
        {
            name:"lastName",
            type: "input",
            message: "What is the employees last name?"
        },
        {
            name: "role",
            type: "input",
            message: "What is the employee's role",
        },
        {
            name: "department",
            type: "input",
            message: "What is the employee's department?",
        },
        ).then(function(answer) {
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    employee_role: answer.role,
                    employee_department: answer.deparment
                },
                function(err, answer) {
                    if (err) {
                     throw err;
                    }
                        
                    console.table(answer);
                }
            );
            startMenu();  
        })
};


function addDepartment(){
    inquirer
        .prompt({
            name:"addDept",
            type: "input",
            message: "What department would you like to add?"
        }).then(function(answer){
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: answer.addDept
                },
                function(err, answer){
                    if (err){
                        throw err
                    }
                }
            );
                console.table(answer);
                startMenu();
        });
};


function addRole(){
    inquirer
        .prompt({
            name: "addRole",
            type: "input",
            message: "What role would you like to add?"
        }).then(function(answer){
            connection.query(
                "INSERT INTO role SET ?",
                {
                    name: answer.addRole
                },
                function (err, answer){
                    if(err){
                        throw err
                    }
                }
            );
            console.table(answer);
            startMenu();
        })
};


function updateRole(){
    var allemp = [];
  connection.query("SELECT * FROM employee", function(err, answer) {
    console.log(answer);
    for (let i = 0; i < answer.length; i++) {
      var employeeString =
        answer[i].id + " " + answer[i].firstname + " " + answer[i].lastname;
      allemp.push(employeeString);
    inquirer
        .prompt({

        });
};