const http = require('http');

var history = '';
const server = http.createServer((req, res) => {
	console.log(req.url);
	history += '\n' + req.url
	res.end('Hello world; '+history);
}).listen(3000, (err)=> {
	if (err) {
		return console.log('bad ', err);
	}
	console.log('listening on 3000');
});