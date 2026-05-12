const express = require('express');

const app = express();

app.get('/', (_req, res) => {
	res.send('Hello Holberton School!');
});

app.get('/students', (_req, res) => {
	const countStudents = require('./3-read_file_async');
	const database = process.argv[2];
	countStudents(database)
		.then((studentsOutput) => {
			res.send(`This is the list of our students\n${studentsOutput}`);
		})
		.catch(() => {
			res.send('This is the list of our students\nCannot load the database');
		});
});

app.listen(1245);

module.exports = app;
