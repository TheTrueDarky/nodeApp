const app = require('../app');
const http = require('http');
 // set port, listen for requests
const port = process.env.PORT || '8900';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);