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
    database:"employee_db",
});

//
connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prommpt({
            
        })
}