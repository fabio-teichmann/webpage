// import http = require('http');
import http from 'http';

const server = http.createServer((request, response) => {
    // console.log('headers', request.headers);
    // console.log('method', request.method);
    // console.log('url', request.url);

    const user = {
        name: 'John',
        hobby: 'skating',
    }

    // response.setHeader('Content-type', 'text/html');
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify(user));
    console.log('i hear you');
})

server.listen(3000);