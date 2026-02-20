// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12345678, 'John Smith', 1234, 'john.smith@example.com', 'Engineering'],
    [23456789, 'Sarah Johnson', 2345, 'sarah.johnson@example.com', 'Marketing'],
    [34567890, 'Michael Brown', 3456, 'michael.brown@example.com', 'Executive'],
    [45678901, 'Emily Davis', 4567, 'emily.davis@example.com', 'QA'],
    [56789012, 'David Wilson', 5678, 'david.wilson@example.com', 'Sales']
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
}

// GET DOM ELEMENTS
const form = document.getElementById('addForm');
const empTable = document.getElementById('empTable');
const empCount = document.getElementById('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = parseInt(document.getElementById('id').value);
    const name = document.getElementById('name').value;
    const extension = parseInt(document.getElementById('extension').value);
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    const newEmployee = [id, name, extension, email, department];
    employees.push(newEmployee);

    buildGrid();
    form.reset();
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-danger')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            const rowIndex = e.target.parentNode.parentNode.rowIndex - 1;
            employees.splice(rowIndex, 1);
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    const tbody = empTable.querySelector('tbody');
    tbody.innerHTML = '';

    for (const emp of employees) {
        const row = `<tr>
            <td>${emp[0]}</td>
            <td>${emp[1]}</td>
            <td>${emp[2]}</td>
            <td>${emp[3]}</td>
            <td>${emp[4]}</td>
            <td><button class="btn btn-sm btn-danger">X</button></td>
        </tr>`;
        tbody.innerHTML += row;
    }

    empCount.textContent = `(${employees.length})`;
    localStorage.setItem('employees', JSON.stringify(employees));
};