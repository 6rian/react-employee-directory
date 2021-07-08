const axios = require('axios');
const express = require('express');
const schema = require('../schema/schema');
const {graphqlHTTP} = require('express-graphql');

const router = express.Router();

const resolver = {
  getEmployees: async (args) => {
    try {
      const results = args.results || 100;
      const response = await axios.get(`https://randomuser.me/api/?nat=us&results=${results}`);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
};

router.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true
}));

module.exports = router;
