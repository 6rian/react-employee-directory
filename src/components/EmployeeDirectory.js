import React from 'react';
import DisplayOptions from './DisplayOptions';
import EmployeeCard from './EmployeeCard';
import {getEmployees} from '../services/EmployeesService';

class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      employees: getEmployees(),
      isLoading: false
    });
  }

  render() {
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
          title="Front End Developer"
          department={employee.department}
        />
      );
    });

    if (this.state.isLoading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return(
      <div className = "employee-directory" >
        <DisplayOptions />
        {employeeCards}
      </div>
    );
  }
}

export default EmployeeDirectory;