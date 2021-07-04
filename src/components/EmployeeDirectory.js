import React from 'react';
import DisplayOptions from './DisplayOptions';
import EmployeeCard from './EmployeeCard';

function EmployeeDirectory(props) {
  return (
    <div className="employeeDirectory">
      <DisplayOptions />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
    </div>
  );
}

export default EmployeeDirectory;
