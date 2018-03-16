const record = require('./record/record.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(record);
};
