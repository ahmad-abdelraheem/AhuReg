const delBtn = document.getElementById('delete-btn');
const addBtn = document.getElementById('add-btn');
const activeCoursesTable = document.getElementById('active-courses');
const availableCoursesTable = document.getElementById('available-courses');

function selectRow(row){
    if(row.classList.contains('table-primary'))
        row.classList.remove('table-primary')
    else
        row.classList.add('table-primary')
}
addBtn.addEventListener('click', ()=> {
    const selectedRows = availableCoursesTable.getElementsByClassName('table-primary');
    while (selectedRows.length > 0) {
        const row = selectedRows[0];
        row.classList.remove('table-primary');
        activeCoursesTable.appendChild(row);
    }
});
delBtn.addEventListener('click', ()=> {
    const selectedRows = activeCoursesTable.getElementsByClassName('table-primary');
    while (selectedRows.length > 0) {
        const row = selectedRows[0];
        row.classList.remove('table-primary');
        availableCoursesTable.appendChild(row);
    }
});