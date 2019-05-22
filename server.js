const server = require('./src/sampress.js');

const app = new server();

app.use((req, res, next) => {
    res.end('Hello world!');
    next();
});

app.listen(3000, () => {
    console.log('Listening');
});