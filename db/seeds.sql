USE employee_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Scott', 1, 1),
('Dwight', 'Schrute', 2, 2),
('Jim', 'Halpert', 3, 2),
('Phyllis', 'Vance', 3, 2),
('Stanley', 'Hudson', 3, 2),
('Andy', 'Benard', 3, 2),
('Pam', 'Beesley', 4, 2),
('Oscar', 'Martinez', 5, 2),
('Angela', 'Martin', 5, 2),
('Kevin', 'Malone', 5, 2),
('Creed', 'Bratton', 6, 2),
('Meredith', 'Palmer', 7, 2),
('Kelly', 'Kapoor', 8, 2),
('Darryl', 'Philbin', 9, 2),
('Ryan', 'Howard', 10, 2),
('Toby', 'Flenderson',11, 1)

INSERT INTO department(department_name)
('Management'),
('Sales'),
('Reception'),
('Accounting'),
('Product Oversight'),
('Warehouse'),
('Temp'),
('Human Resources')

INSERT INTO employeeRole(title, deparment_id)
('Regional Manager', 1),
('Assistant to the Regional Manager', 2),
('Sales Representative', 2),
('Receptionist', 3),
('Accountant', 4),
('Quality Assurance Representative', 5),
('Supplier Relations Representative', 5),
('Customer Service Representative', 5),
('Warehouse Foreman', 6),
('Temp', 7),
('HR Representative', 8),


