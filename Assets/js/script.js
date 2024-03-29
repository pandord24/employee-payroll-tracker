// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  const employees = []
  let keepAdding = true
  while (keepAdding) {
    const firstName = prompt("What is the employee's First Name?")
    const lastName = prompt("What is the employee's Last Name?")
    const salary = parseInt(prompt("What is the employee's salary?"))
    const employee = { firstName: firstName, lastName: lastName, salary: salary }
    employees.push(employee)
    keepAdding = confirm("Do you want to add another employee?")
  }
  return employees
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let salary = 0
  for (let i = 0; i < employeesArray.length; i++) {
    salary += employeesArray[i].salary
  }
  const averageSalary = salary / employeesArray.length
  console.log(`The average salary of ${employeesArray.length} employees is $${averageSalary}.00`)
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {

  const index = Math.floor(Math.random() * employeesArray.length)
  const employee = employeesArray[index]
  console.log(`The choosen employee was ${employee.firstName} ${employee.lastName}`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
