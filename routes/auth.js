const express = require('express')

const router = express.Router()
//import middlewares
const {authCheck} = require("../middlewares/auth")
//import
const { createOrUpdateUser } = require('../controllers/auth')
const myMiddleware = (req, res, next) => {
     console.log("im the middleway yay")
     next();
}

// route
router.post("/create-or-update-user", authCheck, createOrUpdateUser);

router.get('/testing', myMiddleware, (req, res) => {
    res.json({
        data: 'successfully tried middleware'
        
    })
})

module.exports = router;
  