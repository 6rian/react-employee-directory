import React from 'react';

function ResultsCount(props) {
  if (props.showing === props.total) {
    return '';
  }
  return (
    <div className="resultsCount">
      Showing {props.showing} of {props.total} employees
    </div>
  );
}

export default ResultsCount;