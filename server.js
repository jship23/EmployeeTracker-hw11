const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "local host",
    port: 3306,
    user: "root",
    password: "",
    database:"employee_db",
});