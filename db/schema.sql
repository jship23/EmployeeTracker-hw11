DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR (30),
last_name VARCHAR (30),
role_id INT,
manager_id INT,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES employee(id)
);

CREATE TABLE role (
id INTEGER NOT NULL AUTO_INCREMENT,
title VARCHAR (30),
salary DECIMAL,
department_id INT,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE department(
id INTEGER NOT NULL AUTO_INCREMENT,
name VARCHAR (30),
PRIMARY KEY (id)
);
