import React from 'react';
import './EmployeeCard.css';

function EmployeeCard(props) {
  const highlightSearchTerm = text => {
    if (!props.searchTerm) return text;
    if (text.toLowerCase().startsWith(props.searchTerm.toLowerCase())) {
      const textAsArray = Array.from(text);
      const highlightedLetters = [];
      for (let i=0; i<props.searchTerm.length; i++) {
        highlightedLetters.push(textAsArray.shift());
      }
      return (
        <span>
          <span class="highlightSearchTerm">{highlightedLetters.join('')}</span>{textAsArray.join('')}
        </span>
      );
    }
    return text;
  };

  return (
    <div className="employee-card">
      <div className="employee-picture">
        <img src={props.pictureUrl} className="responsive-img circle-img" alt="John Doe" />
      </div>
      <div className="employee-info">
        <span className="employee-info-field name">
          <small>Name:</small>
          {highlightSearchTerm(props.firstName)} {highlightSearchTerm(props.lastName)}
        </span>
        <span className="employee-info-field email">
          <small>Email:</small>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </span>
        <span className="employee-info-field title">
          <small>Title:</small>
          {props.title}
        </span>
        <span className="employee-info-field phone">
          <small>Phone:</small>
          <a href={`tel:${props.phone}`}>{props.phone}</a>
        </span>
        <span className="employee-info-field dept">
          <small>Department:</small>
          {props.department}
        </span>
        <span className="employee-info-field location">
          <small>Location:</small>
          {props.location}
        </span>
      </div>
    </div>
  );
}

export default EmployeeCard;
