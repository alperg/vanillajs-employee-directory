export default class Model {
  constructor() {
    this.url = 'https://alper.dev/employees';
    this.employees = [];
    this.allEmployees = [];
  }

  async fetchEmployeeList(callback) {
    const response = await fetch(this.url);
    const data = await response.json();

    const newData = data.map(emp => {
      const empStartDate = moment(emp.date, 'M/D/YYYY');
      emp.daysPassed = `${moment().diff(empStartDate, 'days')} days`;
      return emp;
    });

    this.employees = this.allEmployees = newData || [];
    callback(data);
  }

  searchEmployee = (searchTerm, callback) => {
    if (searchTerm === "") {
      this.fetchEmployeeList(data => {
        callback(data);
      });
    } else {
      const filteredData = this.allEmployees.filter(emp =>
        emp.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      this.employees = filteredData;
      callback(this.employees);
    }
  }

};
