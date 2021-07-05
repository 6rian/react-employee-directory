import React from 'react';

function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <div className="employee-picture">
        <img src={props.pictureUrl} className="responsive-img circle-img" alt="John Doe" />
      </div>
      <div className="employee-info">
        <span className="name">{props.firstName} {props.lastName}</span>
        <span className="email">{props.email}</span>
        <span className="title">{props.title}</span>
        <span className="phone">{props.phone}</span>
        <span className="dept">{props.department}</span>
        <span className="location">{props.location}</span>
      </div>
    </div>
  );
}

export default EmployeeCard;
