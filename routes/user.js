/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
// const model = require('../models/index');
// const bcrypt = require('bcrypt');
// TODO: install it first  npm install bcrypt\
// TODO: npm install jsonwebtoken --save
// const jwt = require('jsonwebtoken');
const UsersController = require('../controllers/docs');


// middleware to hanlde errors

const awaitErorrHandlerFactory = (middleware) => {
    return async(req, res, next) => {
        try {
            await middleware(req, res, next);
        } catch (err) {
            next(err);
        }
    };
};

// function used by the one who creates the users
router.post('/signup', UsersController.user_signup);
router.post('/login', UsersController.user_login);
router.delete('/:userId', UsersController.delete_user);


module.exports = router;