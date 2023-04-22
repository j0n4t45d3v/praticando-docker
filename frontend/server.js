const connect = require('connect');
const serveStatic = require('serve-static');

connect()
  .use(serveStatic(__dirname))
  .listen(5173, () => {
    console.log('Server statico rodando');
  });
