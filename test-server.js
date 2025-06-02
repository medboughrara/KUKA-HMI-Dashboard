const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Test server is working!');
});

server.listen(9000, '0.0.0.0', () => {
    console.log('Test server running on http://0.0.0.0:9000');
});
