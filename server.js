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
    const query = "SELECT * FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        startMenu();

        });
};


function departmentSearch(){
    const query = "SELECT * FROM department"
    connection.query(query, function(err, res){
        if(err) throw err;
        console.table(res);
        startMenu();
    });
};


function roleSearch(){
    const query = "SELECT * FROM role"
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
            message: "Please select the employee's role",
            choices: employee_role
            },
            {
            type: "input",
            name: "department",
            message: "Please select the employee's department",
        choices: department    
        ).then(function(answer){

        })
};


function addDepartment(){
    inquirer
        .prompt({

        });
};


function addRole(){
    inquirer
        .prompt({

        });
};


function updateRole(){
    inquirer
        .prompt({

        });
};