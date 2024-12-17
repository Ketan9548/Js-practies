const sinon = require('sinon');
const fetch = require('node-fetch');

describe('Fetch API response handling', function() {
    let fetchStub;

    beforeEach(function() {
        fetchStub = sinon.stub(global, 'fetch');
    });

    afterEach(function() {
        fetchStub.restore();
    });
});
