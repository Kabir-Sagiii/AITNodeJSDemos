function getRequestHandler(req, res) {
  res.end("get is working");
}

function anotherGetRequestHandler(req, res) {
  res.end("Another get is working");
}

module.exports = { getRequestHandler, anotherGetRequestHandler };
