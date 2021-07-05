import React from 'react';
import DisplayOptions from './DisplayOptions';
import EmployeeCard from './EmployeeCard';

function EmployeeDirectory(props) {
  return (
    <div className="employee-directory">
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
