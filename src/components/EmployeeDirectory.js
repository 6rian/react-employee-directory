import React from 'react';
import DisplayOptions from './DisplayOptions';
import EmployeeCard from './EmployeeCard';
import employeesData from '../data/employees.json';

class EmployeeDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    this.setState({
      employees: employeesData
    });
  }

  render() {
    const employeeCards = employeesData.results.map(employee => {
      return (
        <EmployeeCard
          pictureUrl={employee.picture.medium}
          firstName={employee.name.first}
          lastName={employee.name.last}
          email={employee.email}
          phone={employee.phone}
          location={`${employee.location.city}, ${employee.location.state}`}
          title="Front End Developer"
          department="Engineering"
        />
      );
    });

    return(
      <div className = "employee-directory" >
        <DisplayOptions />
        {employeeCards}
      </div>
    );
  }
}

export default EmployeeDirectory;