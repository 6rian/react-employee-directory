import React from 'react';
import './DisplayOptions.css';

function DisplayOptions(props) {
  const departmentOptions = props.departments.map((d, i) => (
    <option key={i} value={d}>
      {d}
    </option>
  ));
  const locationOptions = props.locations.map((l, i) => (
    <option key={i} value={l}>
      {l}
    </option>
  ));

  return (
    <fieldset className="display-options">
        <select name="department" value={props.filterByDepartment} onChange={props.handleFilter}>
          <option value="">Department</option>
          {departmentOptions}
        </select>
        <select name="location" value={props.filterByLocation} onChange={props.handleFilter}>
          <option value="">Location</option>
          {locationOptions}
        </select>
        <select name="sortBy" value={props.sortBy} onChange={props.handleSort}>
          <option value="">Sort by</option>
          <option value="sortByFirstName">First Name</option>
          <option value="sortByFirstNameDesc">First Name Descending</option>
          <option value="sortByLastName">Last Name</option>
          <option value="sortByLastNameDesc">Last Name Descending</option>
          <option value="sortByDepartment">Department</option>
        </select>
        <input
          type="search"
          placeholder="Search by Name"
          name="searchTerm"
          onChange={props.handleSearch}
          value={props.searchTerm}
        />
    </fieldset>
  );
}

export default DisplayOptions;
