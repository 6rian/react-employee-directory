import React from 'react';
import DisplayOptions from './DisplayOptions';
import EmployeeCard from './EmployeeCard';
import {
  getEmployees,
  getDepartments,
  getLocations,
  filterByDepartment,
  filterByLocation,
  search,
  totalEmployees
} from '../services/EmployeesService';
import ResultsCount from './ResultsCount';
import './EmployeeDirectory.css';

class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      employees: [],
      departments: [],
      locations: [],
      filterByDepartment: '',
      filterByLocation: '',
      searchTerm: ''
    };
    this.clearFilters = this.clearFilters.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    this.setState({
      isLoading: false,
      employees: await getEmployees(),
      departments: getDepartments(),
      locations: getLocations()
    });
  }

  clearFilters() {
    this.setState({
      filterByDepartment: '',
      filterByLocation: '',
      employees: getEmployees(),
    });
  }

  handleFilter(event) {
    const { name, value } = event.target;
    if (value === '') return this.clearFilters();
    if (name === 'department') {
      this.setState({
        filterByDepartment: value,
        employees: filterByDepartment(value),
      });
    }
    if (name === 'location') {
      this.setState({
        filterByLocation: value,
        employees: filterByLocation(value),
      });
    }
  }

  handleSearch(event) {
    const term = event.target.value;
    this.setState({
      searchTerm: term,
      employees: search(term),
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    const employeeCards = this.state.employees.map(employee => {
      return (
        <EmployeeCard
          key={employee.login.uuid}
          pictureUrl={employee.picture.medium}
          firstName={employee.name.first}
          lastName={employee.name.last}
          email={employee.email}
          phone={employee.phone}
          location={`${employee.location.city}, ${employee.location.state}`}
          title={employee.title}
          department={employee.department}
        />
      );
    });

    return (
      <div className="employee-directory">
        <DisplayOptions
          departments={this.state.departments}
          locations={this.state.locations}
          handleFilter={this.handleFilter}
          filterByDepartment={this.state.filterByDepartment}
          filterByLocation={this.state.filterByLocation}
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
        <ResultsCount total={totalEmployees} showing={this.state.employees.length} />
        {(
          this.state.searchTerm && this.state.employees.length === 0
        ) ? (
          <h3>No matches found...</h3>
        ) : (
          employeeCards
        )}
      </div>
    );
  }
}

export default EmployeeDirectory;
