import React from "react";

function DisplayOptions(props) {
  const departmentOptions = props.departments.map((d, i) => <option key={i} value={d}>{d}</option>);

  return (
    <fieldset className="display-options">
      <div className="filters">
        <span>
          <small>Filter by:</small>
        </span>
        <select name="department">
          <option value="">Department</option>
          {departmentOptions}
        </select>
        <select name="location">
          <option value="">Location</option>
        </select>
      </div>
      <div className="search">
        <input type="search" placeholder="Search" name="search" />
      </div>
    </fieldset>
  );
}

export default DisplayOptions;
