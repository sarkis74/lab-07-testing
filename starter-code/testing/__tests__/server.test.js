'use strict';

const supertest = require('supertest');

// What's up with the {}????
//It's called destructuring; a new feature of ES6; it creates a variable(server in this case) by unpacking an object. The object in this case was originally empty.
const {server} = require('../main.js');

const mockClient = supertest(server);

describe('The Server GET /a', () => {
    it('responds with a 200 on a good route', () => {
        // Why do we return here?
        return mockClient.get('/a')
        //So we can access the response through the .then method
            .then( result => {
                expect(result.status).toEqual(200);
            });
    });

    it('responds with a 500 on an error', () => {
    });

    it('responds with a 404 on an unknown route', () => {
    });

});