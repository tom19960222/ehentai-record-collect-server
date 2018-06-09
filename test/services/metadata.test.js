const assert = require('assert');
const app = require('../../src/app');

describe('\'metadata\' service', () => {
  it('registered the service', () => {
    const service = app.service('metadata');

    assert.ok(service, 'Registered the service');
  });
});
