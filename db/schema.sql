DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department(
id INTEGER (11) AUTO_INCREMENT NOT NULL,
department_name VARCHAR (30),
PRIMARY KEY (id)
);

CREATE TABLE employeeRole (
id INTEGER (11) AUTO_INCREMENT NOT NULL,
title VARCHAR (30),
salary DECIMAL(12,2),
department_id INT,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
id INTEGER (11) AUTO_INCREMENT NOT NULL,
first_name VARCHAR (30),
last_name VARCHAR (30),
role_id INT,
manager_id INT,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES employeeRole(id),
FOREIGN KEY (manager_id) REFERENCES employee(id)
);

SELECT * FROM department;
SELECT * FROM employeeRole;
SELECT * FROM employee;