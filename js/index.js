function addRow(form) {
    localStorage.setItem(form.fname.value,form.desc.value);
    let row = document.getElementById("tbl1").insertRow(-1);
    row.innerHTML = `<tr><td>${localStorage.length}</td><td>${form.fname.value}</td><td>${form.desc.value}</td><td>
                    <button value=${localStorage.length-1} onclick="deleteRow(this)">Delete</button></td></tr>`;
    return false;
}

function deleteRow(button) {
    localStorage.removeItem(button.value);
    button.parentElement.parentElement.remove();
}

function loadList() {
    let table = document.getElementById("tbl1");
    for (let i=0;i<localStorage.length;i++) {
        let row = table.insertRow(-1);
        let index = localStorage.key(i);
        row.innerHTML = `<tr><td>${i+1}</td><td>${index}</td><td>${localStorage.getItem(index)}</td>
                        <td><button value=${index} onclick="deleteRow(this)">Delete</button></td></tr>`;
    }
}