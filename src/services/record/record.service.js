// Initializes the `record` service on path `/record`
const createService = require('feathers-mongodb');
const hooks = require('./record.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/record', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('record');

  mongoClient.then(db => {
    service.Model = db.collection('record');
  });

  service.hooks(hooks);
};
