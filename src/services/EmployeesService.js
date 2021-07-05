import employeesData from '../data/employees.json';
import departments from '../data/departments.json';

const assignRandomDepartment = employee => {
  const department = departments[Math.floor(Math.random() * departments.length)].name;
  return {
    ...employee,
    department
  };
};

const getEmployees = () => {
  const employees = employeesData.results.map(employee => {
    return assignRandomDepartment(employee);
  });
  return employees;
};

export {
  getEmployees
};