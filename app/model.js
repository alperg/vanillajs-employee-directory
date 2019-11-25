export default class Model {
  constructor() {
    this.url = 'http://api.alperg.com/employees';
    this.employees = [];
    this.allEmployees = [];
  }

  async fetchEmployeeList(callback) {
    const response = await fetch(this.url);
    const data = await response.json();

    this.employees = this.allEmployees = data || [];
    callback(data);
  }

  searchEmployee = searchTerm => {
    console.log(searchTerm);
  }

};
