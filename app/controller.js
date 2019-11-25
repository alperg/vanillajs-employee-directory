export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Search binding
    this.view.bindSearchEmployee(this.handleSearchEmployee);

    // Display initial data
    this.view.bindOnLoad(this.fetchEmployeeList);
  }

  fetchEmployeeList = () => {
    this.model.fetchEmployeeList(employees => {

      const newData = employees.map(emp => {
        const empStartDate = moment(emp.date, 'M/D/YYYY');
        emp.daysPassed = `${moment().diff(empStartDate, 'days')} days`;
        return emp;
      });

      this.view.displayEmployees(newData);
    });
  }

  handleSearchEmployee = id => {
    this.model.searchEmployee(id);
  }

};
