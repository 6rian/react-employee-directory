import employeesData from '../data/employees.json';
import roles from '../data/roles.json';

let employees = [];
let departments = [];
let locations = [];

const assignRandomRole = employee => {
  const role = roles[Math.floor(Math.random() * roles.length)];
  return {
    ...employee,
    department: role.department,
    title: role.title,
  };
};

const getEmployees = () => {
  if (employees.length > 0) return employees;
  employees = employeesData.results.map(employee => {
    return assignRandomRole(employee);
  });
  return employees;
};

const getDepartments = () => {
  if (departments.length > 0) return departments;
  if (employees.length === 0) employees = getEmployees();
  employees.forEach(employee => {
    if (!departments.includes(employee.department)) {
      departments.push(employee.department);
    }
  });
  return departments;
};

const getLocations = () => {
  if (locations.length > 0) return locations;
  if (employees.length === 0) employees = getEmployees();
  employees.forEach(employee => {
    if (!locations.includes(employee.location.state)) {
      locations.push(employee.location.state);
    }
  });
  return locations;
};

const filterByDepartment = department => {
  return employees.filter(employee => employee.department === department);
};

const filterByLocation = location => {
  return employees.filter(employee => employee.location.state === location);
};

const search = term => {
  if (term === '') return employees;
  let matches = [];
  employees.forEach(employee => {
    const regex = new RegExp(`^${term}`, 'i');
    if (regex.test(employee.name.first) || regex.test(employee.name.last)) {
      matches.push(employee);
    }
  });
  return matches;
};

export { getDepartments, getEmployees, getLocations, filterByDepartment, filterByLocation, search };
