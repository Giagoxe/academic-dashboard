const jwt = require('jsonwebtoken');

// JWT Authentication Middleware
function authenticateJWT(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer TOKEN
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

module.exports = authenticateJWT;