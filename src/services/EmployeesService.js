import employeesData from '../data/employees.json';
import roles from '../data/roles.json';

const assignRandomRole = employee => {
  const role = roles[Math.floor(Math.random() * roles.length)];
  return {
    ...employee,
    department: role.department,
    title: role.title
  };
};

const getEmployees = () => {
  const employees = employeesData.results.map(employee => {
    return assignRandomRole(employee);
  });
  return employees;
};

export {
  getEmployees
};