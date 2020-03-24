export default class View {
  constructor() {
    this.tableBody = document.querySelector('tbody');
    this.search = document.getElementById("search");
  }

  createElement(tag, innerText, src, alt) {
    const element = document.createElement(tag);
    if (innerText) element.innerText = innerText;
    if (src) element.src = src;
    if (alt) element.alt = alt;
    return element;
  }

  displayEmployees(data) {
    // Delete all nodes
    while (this.tableBody.firstChild) {
      this.tableBody.removeChild(this.tableBody.firstChild);
    }

    data.forEach(employee => {
      const tr = this.createElement('tr');

      const avatar = this.createElement('td');
      avatar.appendChild(this.createElement('img', null, employee.avatar, 'employee'));

      tr.appendChild(this.createElement('td', employee.id));
      tr.appendChild(avatar);
      tr.appendChild(this.createElement('td', employee.firstName));
      tr.appendChild(this.createElement('td', employee.lastName));
      tr.appendChild(this.createElement('td', employee.email));
      tr.appendChild(this.createElement('td', employee.gender));
      tr.appendChild(this.createElement('td', employee.department));
      tr.appendChild(this.createElement('td', employee.date));
      tr.appendChild(this.createElement('td', employee.daysPassed));

      this.tableBody.appendChild(tr);
    });
  }

  bindSearchEmployee(handler) {
    this.search.addEventListener('keyup', event => {
      const searchTerm = event.target.value;
      handler(searchTerm);
    });
  }

  bindOnLoad(handler) {
    window.addEventListener('load', () => {
      handler();
    });
  }

};
