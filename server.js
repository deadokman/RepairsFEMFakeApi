const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router("output.json");
const middlewares = jsonServer.defaults();
const omMiddleware = require("./outputModifier.js");

server.use(middlewares);
server.use(jsonServer.bodyParser)

// If you need to scope this behaviour to a particular route, use this
server.post('/calculate', function (req, res, next) {
  req.method = 'GET'
  req.query = req.body
  next()
});

server.use(router);


// Or /resources in general
router.render = omMiddleware();

server.listen(3000, () => {
  console.log('JSON Server is running')
});