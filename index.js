const inquirer = require('inquirer');
const queries = require('./queries');
const db = require('./connection');

db.connect(function (error){
    if(error) throw error;
    console.log('Connected to database');
});

const dbManager = () => {
    inquirer
		.prompt([
			{
				type: 'list',
				name: 'manager',
				message: 'What would you like to look into?',
				choices: [
					'View All Employees',
					'View All Departments',
					'View All Roles',
					'Add Employee',
					'Add Department',
					'Add Role',
					'Update Employee Role',
					'Delete Employee',
					'Quit',
				],
			},
		])
		.then((answers) => {
			switch (answers.manager) {
				case 'View All Employees':
					viewAllEmployees();
					break;
				case 'View All Departments':
					viewAllDepartments();
					break;
				case 'View All Roles':
					viewAllRoles();
					break;
				case 'Add Employee':
					addEmployee();
					break;
				case 'Add Department':
					addDepartment();
					break;
				case 'Add Role':
					addRole();
					break;
				case 'Update Employee Role':
					updateEmployee();
					break;
				case 'Delete Employee':
					deleteEmployee();
					break;
				case 'Quit':
					console.log('Quitting...');
					process.exit();
					break;
				default:
					console.log('Invalid option');
			}
            console.log('\n');
		});
};

const viewAllEmployees = () => {
	queries.getAllEmployees();
    dbManager();
};

const addEmployee = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'first_name',
				message: "What is the employee's first name?",
			},
			{
				type: 'input',
				name: 'last_name',
				message: "What is the employee's last name?",
			},
			{
				type: 'input',
				name: 'role_id',
				message: "What is the employee's role id?",
			},
			{
				type: 'input',
				name: 'manager_id',
				message: "What is the employee's manager id?",
			},
		])
		.then((answers) => {
            queries.postEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id);
			dbManager();
		});
};

const updateEmployee = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'employee_id',
				message: 'What is the employee id of the employee?',
			},
			{
				type: 'input',
				name: 'role_id',
				message: 'What is the role id of the employee?',
			},
		])
		.then((answers) => {
			queries.putEmployee(answers.employee_id, answers.role_id);
            dbManager();
		});
};

const deleteEmployee = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'employee_id',
				message: 'What is the employee id of the employee?',
			},
		])
		.then((answers) => {
			queries.destroyEmployee(answers.employee_id);
            dbManager();
		});
};

const viewAllDepartments = () => {
    queries.getAllDepartments();
	dbManager();
};

const addDepartment = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the department?',
			},
		])
		.then((answers) => {
			queries.postDepartment(answers.name);
			dbManager();
		});
};

const viewAllRoles = () => {
	queries.getAllRoles();
    dbManager();
};


const addRole = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'title',
				message: 'What is the title of the role?',
			},
			{
				type: 'input',
				name: 'salary',
				message: 'What is the salary of the role?',
			},
			{
				type: 'input',
				name: 'department_id',
				message: 'What is the department id of the role?',
			},
		])
		.then((answers) => {
			queries.postRole(answers.title, answers.salary, answers.department_id);
            dbManager();
		});
};

dbManager();