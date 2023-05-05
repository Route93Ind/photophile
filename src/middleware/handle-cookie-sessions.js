const express = require('express');
const cookieSession = require('cookie-session');

const Router = express.Router();

Router.use(cookieSession({
    secret: process.env.SESSION_SECRET,
}));

module.exports = Router;