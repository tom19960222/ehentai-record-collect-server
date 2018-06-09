const record = require('./record/record.service.js');
const metadata = require('./metadata/metadata.service.js');
const event = require('./event/event.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(record);
  app.configure(metadata);
  app.configure(event);
};
