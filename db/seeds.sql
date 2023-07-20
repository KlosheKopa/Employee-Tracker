INSERT INTO departments (name) VALUES ('Engineering');
INSERT INTO departments (name) VALUES ('Legal');
INSERT INTO departments (name) VALUES ('Finance');
INSERT INTO departments (name) VALUES ('Sales');

INSERT INTO roles (title, salary, department_id) VALUES ('Sales Lead', 100000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('Salesperson', 80000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('Lead Engineer', 150000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Software Engineer', 120000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Account Manager', 160000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Accountant', 125000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Legal Team Lead', 250000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Lawyer', 190000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Mike', 'Chan', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Ashley', 'Rodriguez', 3, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Kevin', 'Tupik', 4, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Kuanl', 'Singh', 5, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Malia', 'Brown', 6, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Sarah', 'Lourd', 7, NULL);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Tom', 'Allen', 8, 7);