const Task = require('../models/taskModel');

const resolvers = {
  Query: {
    tasks: () => Task.find(),
  },
};

module.exports = resolvers;