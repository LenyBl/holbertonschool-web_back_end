const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((_req, res) => {
	if (_req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Hello Holberton School!');
	} else if (_req.url === '/students') {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		countStudents('database.csv')
			.then(() => {
				res.end();
			})
			.catch((err) => {
				res.end(err.message);
			});
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Not Found');
	}
});

app.listen(1245);

module.exports = app;
