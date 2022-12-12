const PORT = 3000;
const http = require('http');

function handler(req, res) {

    // cors
    res.setHeader('Access-Control-Allow-Origin', '*');

    // helper to send responses
    const send = (payload = {}, statusCode = 200) => {
        res.writeHead(statusCode, { 'Content-Type': 'aplications/json'});
        res.write(JSON.stringify(payload));
    }

    // router
    switch (req.url) {
        case '/':
            send({ message: 'You are on /'});
        break;
        
        case '/status':
            send({ message: `The server is running`, uptime: process.uptime() });
        break;

        default:
            send({ message: 'Resource not found' }, 400);
        break;
    }

    res.end();
}

http
    .createServer(handler)
    .listen(PORT, () => {
        console.log(`The API is runnging on port: ${PORT}.`)
    });