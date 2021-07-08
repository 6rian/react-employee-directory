import React from 'react';

function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <div className="employee-picture">
        <img src={props.pictureUrl} className="responsive-img circle-img" alt="John Doe" />
      </div>
      <div className="employee-info">
        <span className="name">
          <small className="field-label">Name:</small>
          {props.firstName} {props.lastName}
        </span>
        <span className="email">
          <small className="field-label">Email:</small>
          {props.email}
        </span>
        <span className="title">
          <small className="field-label">Title:</small>
          {props.title}
        </span>
        <span className="phone">
          <small className="field-label">Phone:</small>
          {props.phone}
        </span>
        <span className="dept">
          <small className="field-label">Department:</small>
          {props.department}
        </span>
        <span className="location">
          <small className="field-label">Location:</small>
          {props.location}
        </span>
      </div>
    </div>
  );
}

export default EmployeeCard;
