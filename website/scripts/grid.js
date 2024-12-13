function renewTable() {
    try {
        let data = JSON.parse(localStorage.getItem("rows"));
        let table = document.getElementById("table-body");
        table.innerHTML = ""
    
        for(let i=0; i<data.length; i++) {
            table.innerHTML += `
            <tr class="${(i % 2 == 0) ? "even" : "odd"}">
                <td class="table-cell">${data[i][0]}</td>
                <td class="table-cell">${data[i][1]}</td>
            </tr>
            `
        }
    } catch {
        localStorage.setItem("rows", `[]`)
    }
}

renewTable();

document.getElementById("add-task").addEventListener("submit", e => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let data = JSON.parse(localStorage.getItem("rows"));
    
    data[data.length] = [];
    data[data.length - 1][0] = formData.get("name");
    data[data.length - 1][1] = formData.get("todo");

    localStorage.clear();
    localStorage.setItem("rows", JSON.stringify(data));

    renewTable();
});

document.getElementById("clear-btn").addEventListener("click", e => {
    e.preventDefault();

    localStorage.clear();
    renewTable();
});