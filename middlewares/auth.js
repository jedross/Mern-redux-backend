const admin = require('../firebase');


exports.authCheck = (req, res, next) => {
    console.log(req.headers); // should have tokens
    next();
}