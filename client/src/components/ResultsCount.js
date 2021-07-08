import React from 'react';
import './ResultsCount.css';

function ResultsCount(props) {
  if (props.showing === props.total) {
    return '';
  }
  return (
    <div className="results-count">
      Showing {props.showing} of {props.total} employees
    </div>
  );
}

export default ResultsCount;