const http = require('http');

const hostname = 'localhost';
const port = process.argv[2];

const server = http.createServer((req, res) => {
		          res.statusCode = 200;
		          res.setHeader('Content-Type', 'text/plain');
		          res.end('hi larry\n');
});

server.listen(port, hostname, () => {
		          console.log(`Server running at http://${hostname}:${port}/`);
});
