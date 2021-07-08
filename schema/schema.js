const {buildSchema} = require('graphql');

const schema = buildSchema(`
  type Name {
    first: String
    last: String
  }
  type Location {
    city: String
    state: String
  }
  type Picture {
    medium: String
  }
  type Login {
    uuid: String
  }
  type Employee {
    name: Name
    location: Location
    email: String
    login: Login
    phone: String
    picture: Picture
  }
  type Query {
    getEmployees(results: Int): [Employee]
  }
`);

module.exports = schema;