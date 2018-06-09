// Initializes the `metadata` service on path `/metadata`
const createService = require('feathers-mongodb');
const hooks = require('./event.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/event', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('event');

  mongoClient.then(db => {
    service.Model = db.collection('event');
  });

  service.hooks(hooks);
};
