import React from 'react';
import './EmployeeCard.css';

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
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </span>
        <span className="title">
          <small>Title:</small>
          {props.title}
        </span>
        <span className="phone">
          <small>Phone:</small>
          <a href={`tel:${props.phone}`}>{props.phone}</a>
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
