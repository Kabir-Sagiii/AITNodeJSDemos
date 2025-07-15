const secret_key =
  "cdlncvdlknvlkdfnvkdlfnvkfdlnvkfdlnvkfdlnvkdflnvkdflnvklfdnvkfdlnvkfdlnvkdflnvkdlfnvdkflvndfkl";
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  if (req.headers["authorization"]) {
    var token = req.headers.authorization.slice(7);
    jwt.verify(token, secret_key, (error) => {
      if (error) {
        res.json({ ok: false, error: "Invalid token" });
      } else {
        next();
      }
    });
  } else {
    res.json({ ok: false, error: "Token is missing" });
  }
}

module.exports = verifyToken;
