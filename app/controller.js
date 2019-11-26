export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Search binding
    this.view.bindSearchEmployee(this.handleSearchEmployee);

    // Display initial data
    this.view.bindOnLoad(this.renderEmployeeList);
  }

  renderEmployeeList = () => {
    this.model.fetchEmployeeList(employees => {
      this.view.displayEmployees(employees);
    });
  }

  handleSearchEmployee = (searchTerm) => {
    this.model.searchEmployee(searchTerm, (data) => {
      this.view.displayEmployees(data);
    });
  }

};
