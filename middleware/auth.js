const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
    try {
        const token = req.header('auth-token');
        if (!token) return res.status(401).json({ errors: true, message: "Token is not valid" });

        const verifyToken = jwt.verify(token, process.env.SEC);
        if (!verifyToken) return res.status(401).json({ errors: true, message: "Token is invalid" });

        req.user = verifyToken;
        next();
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
}

module.exports = auth;
