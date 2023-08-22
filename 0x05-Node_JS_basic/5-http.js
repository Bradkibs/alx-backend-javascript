const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }

  if (request.url === '/students') {
    const databasePath = process.argv[2];
    countStudents(databasePath)
      .then((output) => {
        response.write(`This is the list of our students\n ${output}`);
        response.end();
      })
      .catch((error) => {
        response.statusCode = 404;
        response.end('Cannot load the database');
      });
  }
});

app.listen(port, () => {});

module.exports = app;

