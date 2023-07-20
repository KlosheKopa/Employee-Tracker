const db = require('./connection');

const queries = {
    getAllEmployees : () => {
        db.query('SELECT * FROM employees JOIN roles ON employees.role_id = roles.id;', function (err, rows){
            if(err){
                console.log('An error occurred while querying employees', err);
            } else {
                console.table(rows);
            }
        });
    },
    
    postEmployee : (first, last, role, manager) => {
        db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (${first}, ${last}, ${role}, ${manager})`, function (err, result) {
            if (err) {
                console.log('An error occurred while adding an employee', err);
            } else {
                console.log('New employee added successfully');
                console.table(result);
            }
        });
    },
    
    putEmployee : (id, role) => {
        db.query(`UPDATE employees SET role_id = ${role} WHERE id = ${id}`, function (err, result) {
            if (err) {
                console.log('An error occurred while updating the employee role', err);
            } else {
                console.log('Employee role updated successfully');
                console.table(result);
            }
        });
    },
    
    destroyEmployee : (id) => {
        db.query(`DELETE FROM employees WHERE id = ${id}`, function (err, result) {
            if (err) {
                console.log('An error occurred while deleting an employee', err);
            } else {
                console.log('Employee deleted successfully');
                console.table(result);
            }
        });
    },
    
    getAllDepartments : () => {
        db.query('SELECT * FROM departments;', function (err, rows) {
            if (err) {
                console.log('An error occurred while retrieving departments', err);
            } else {
                console.table(rows);
            }
        });
    },
    
    postDepartment : (name) => {
        db.query(`INSERT INTO departments (name) VALUES (${name})`, function (err, result) {
            if (err) {
                console.log('An error occurred while adding department', err);
            } else {
                console.log('New department added successfully');
                console.table(result);
            }
        });
    },
    
    getAllRoles : () => {
        db.query('SELECT * FROM roles;', function (err, rows) {
            if (err) {
                console.log('An error occurred while retrieving roles', err);
            } else {
                console.table(rows);
            }
        });
    },
    
    postRole : (title, salary, department) => {
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES (${title}, ${salary}, ${department})`, function (err, result) {
            if (err) {
                console.log('An error occurred while adding role', err);
            } else {
                console.log('New role added successfully');
                console.table(result);
            }
        });
    },
};

module.exports = queries;