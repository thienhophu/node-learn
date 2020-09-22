const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);

  const path = parseUrl.pathname;

  // Trim '/users/profile' -> 'users/profile',
  // '/users/' -> 'users,
  // '/users/profile/' -> 'users/profile'
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  const queryStringObject = parseUrl.query;

  const method = req.method.toLowerCase();

  const headers = req.headers;

  res.end();

  console.log('HEADERS: ', headers);
  console.log(
    `${method.toUpperCase()} - ${path} : ${JSON.stringify(queryStringObject)}`,
  );
});

server.listen(3000, () => {
  console.log('The server is listening on port 3000.');
});
