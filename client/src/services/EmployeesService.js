import {request, gql} from 'graphql-request';
import roles from '../data/roles.json';

let employees = [];
let departments = [];
let locations = [];
let totalEmployees = 0;

const assignRandomRole = employee => {
  const role = roles[Math.floor(Math.random() * roles.length)];
  return {
    ...employee,
    department: role.department,
    title: role.title,
  };
};

const getEmployees = async () => {
  if (employees.length > 0) return employees;

  const query = gql`
    {
      getEmployees(results: 100) {
        name {
          first
          last
        }
        location {
          city
          state
        }
        email
        login {
          uuid
        }
        phone
        picture{
          medium
        }
      }
    }
  `;

  const data = await request('/api/graphql', query);
  employees = data.getEmployees.map(employee => assignRandomRole(employee));
  totalEmployees = employees.length;
  return employees.sort(sortByLastName);
};

const getDepartments = () => {
  if (departments.length > 0) return departments;
  if (employees.length === 0) return [];
  employees.forEach(employee => {
    if (!departments.includes(employee.department)) {
      departments.push(employee.department);
    }
  });
  return departments.sort();
};

const getLocations = () => {
  if (locations.length > 0) return locations;
  if (employees.length === 0) return [];
  employees.forEach(employee => {
    if (!locations.includes(employee.location.state)) {
      locations.push(employee.location.state);
    }
  });
  return locations.sort();
};

const filterBy = (name, value) => {
  if (name === 'department') {
    return employees.filter(employee => employee.department === value);
  }
  if (name === 'location') {
    return employees.filter(employee => employee.location.state === value);
  }
  return employees;
}

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

const sortByFirstName = (a, b) => {
  if (a === b) return 0;
  if (a.name.first < b.name.first) {
    return -1;
  }
  return 1;
};

const sortByFirstNameDesc = (a, b) => {
  if (a === b) return 0;
  if (a.name.first > b.name.first) {
    return -1;
  }
  return 1;
};

const sortByLastName = (a, b) => {
  if (a === b) return 0;
  if (a.name.last < b.name.last) {
    return -1;
  }
  return 1;
};

const sortByLastNameDesc = (a, b) => {
  if (a === b) return 0;
  if (a.name.last > b.name.last) {
    return -1;
  }
  return 1;
};

const sortByDepartment = (a, b) => {
  if (a === b) return 0;
  if (a.department < b.department) {
    return -1;
  }
  return 1;
};

export {
  getDepartments,
  getEmployees,
  getLocations,
  filterBy,
  search,
  sortByFirstName,
  sortByFirstNameDesc,
  sortByLastName,
  sortByLastNameDesc,
  sortByDepartment,
  totalEmployees,
};
