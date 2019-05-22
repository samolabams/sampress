const Sampress = require('../sampress');
const expect = require('chai').expect;
const axios = require('axios');

describe('Sampress', function() {
    let server;

    afterEach(function() {
        server && server.close();
    });

    it('works on the basic hello world case', async function() {
        const app = new Sampress();

        app.use((req, res, next) => {
            res.end('Hello world!');
            next();
        });

        server = app.listen(3000);

        const res = await axios.get('http://localhost:3000');
        expect(res.data).to.equal('Hello world!');
    });
});