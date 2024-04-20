

data = [
    { name: "munna", email: "munna@gmail.com", phone: "9711925422", address: "mubarkour dabas", state: "Delhi", country: "India", zip: "110001" },
    { name: "akash", email: "akas@gmail.com", phone: "8881925422", address: "mubarkour dabas", state: "Delhi", country: "India", zip: "110021" }
]


document.addEventListener("DOMContentLoaded", function () {
    localStorage.setItem('mydata', JSON.stringify(data));
    displayData();

})

function create() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let addr = document.getElementById("add").value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let zip = document.getElementById("zip").value;

    let data = JSON.parse(localStorage.getItem("mydata")) || [];

    data.push({ name, email, phone, addr, state, country, zip });

    localStorage.setItem('mydata', JSON.stringify(data));
    document.getElementById("dataform").reset();


    displayData();
}


function displayData() {
    const tabledata = document.getElementById("tabledata");
    const data = JSON.parse(localStorage.getItem('mydata')) || [];

    tabledata.querySelector("tbody").innerHTML = "";

    // loop to create data 
    data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        tabledata.querySelector('tbody').appendChild(row);

    });
}