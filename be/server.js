const http = require('http');
const mongoose = require('mongoose');
const hostname = process.env.IS_IN_DOCKER ? '0.0.0.0' : '127.0.0.1';
const port = 3000;

// console.log('DB_HOST', process.env.DB_HOST);
const { DB_HOST } = process.env;
mongoose.connect(`mongodb://${DB_HOST}:27017`, { dbName: 'myapp' }).then(
  () => {
    console.log('server connected to mongodb');
  },
  (err) => {
    console.log('Error', err);
  }
);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  res.end('Hello !, this is a basic Node.js server!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
