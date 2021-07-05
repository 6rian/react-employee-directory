import React from 'react';

function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <div className="employee-picture">
        <img src="https://placeimg.com/300/300/any" className="responsive-img circle-img" alt="John Doe" />
      </div>
      <div className="employee-info">
        <span className="name">John Doe</span>
        <span className="dept">Engineering</span>
        <span className="title">Front End Developer</span>
        <span className="email">john.doe@company.com</span>
        <span className="phone">999.123.4567</span>
        <span className="location">Brooklyn, NY</span>
      </div>
    </div>
  );
}

export default EmployeeCard;
