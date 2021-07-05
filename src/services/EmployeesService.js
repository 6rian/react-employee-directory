import employeesData from '../data/employees.json';

const getEmployees = () => {
  return employeesData.results;
};

export {
  getEmployees
};