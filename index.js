let employees = [];
let allEmployees = [];

window.addEventListener('load', () => {
  getEmployees();

  document.getElementById("search").addEventListener("keyup", function(event) {
    const searchTerm = event.target.value;
    if (searchTerm === "") {
      getEmployees();
    } else {
      const filteredData = allEmployees.filter(emp =>
        emp.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        renderEmployees(filteredData);
    }
  });
});

async function getEmployees() {
  const response = await fetch('http://api.alperg.com/employees');
  employees = allEmployees = await response.json();

  const newData = employees.map(emp => {
    const empStartDate = moment(emp.date, 'M/D/YYYY');
    emp.daysPassed = `${moment().diff(empStartDate, 'days')} days`;
    return emp;
  });

  renderEmployees(newData);
}

function renderEmployees(data) {
  const main = document.querySelector('tbody');
  main.innerHTML = "";

  data.forEach(employee => {
    const tr = document.createElement('tr');

    const id = document.createElement('td');
    id.innerText = employee.id;

    const avatar = document.createElement('td');
    const img = document.createElement('img');
    img.src = employee.avatar;
    img.alt = 'employee';
    avatar.appendChild(img);

    const firstName = document.createElement('td');
    firstName.innerText = employee.firstName;

    const lastName = document.createElement('td');
    lastName.innerText = employee.lastName;

    const email = document.createElement('td');
    email.innerText = employee.lastName;

    const gender = document.createElement('td');
    gender.innerText = employee.gender;

    const department = document.createElement('td');
    department.innerText = employee.email;

    const startDate = document.createElement('td');
    startDate.innerText = employee.startDate;

    const daysPassed = document.createElement('td');
    daysPassed.innerText = employee.daysPassed;

    tr.appendChild(id);
    tr.appendChild(avatar);
    tr.appendChild(firstName);
    tr.appendChild(lastName);
    tr.appendChild(email);
    tr.appendChild(gender);
    tr.appendChild(department);
    tr.appendChild(startDate);
    tr.appendChild(daysPassed);

    main.appendChild(tr);
  });
}
