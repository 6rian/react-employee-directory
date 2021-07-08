import React from 'react';
import './ClearFilter.css';

function ClearFilter(props) {
  const isActive = Object.values(props.filters).filter(val => val.length > 0).length;

  if (isActive) {
    return (
      <button className="clear-filter" onClick={props.handleClearFilter}>Clear</button>
    );
  }
  return '';
}

export default ClearFilter;