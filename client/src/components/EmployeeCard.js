import React from 'react';

function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <div className="employee-picture">
        <img src={props.pictureUrl} className="responsive-img circle-img" alt="John Doe" />
      </div>
      <div className="employee-info">
        <span className="name">
          <small>Name:</small>
          {props.firstName} {props.lastName}
        </span>
        <span className="email">
          <small>Email:</small>
          {props.email}
        </span>
        <span className="title">
          <small>Title:</small>
          {props.title}
        </span>
        <span className="phone">
          <small>Phone:</small>
          {props.phone}
        </span>
        <span className="dept">
          <small>Department:</small>
          {props.department}
        </span>
        <span className="location">
          <small>Location:</small>
          {props.location}
        </span>
      </div>
    </div>
  );
}

export default EmployeeCard;
