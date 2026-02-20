const form = document.getElementById('addForm');
const table = document.getElementById('employees');
const empCount = document.getElementById('empCount');

let count = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    const row = table.insertRow();

    const cellID = row.insertCell();
    const cellName = row.insertCell();
    const cellExt = row.insertCell();
    const cellEmail = row.insertCell();
    const cellDept = row.insertCell();
    const cellDelete = row.insertCell();

    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.addEventListener('click', (e) => {
        if (confirm('Are you sure you want to delete this employee?')) {
            table.deleteRow(e.target.parentElement.parentElement.rowIndex);
            count--;
            empCount.textContent = `(${count})`;
        }
    });
    cellDelete.appendChild(deleteBtn);

    form.reset();
    document.getElementById('id').focus();

    count++;
    empCount.textContent = `(${count})`;
});