const UserRoutes = require('express').Router();
const { register, login, logout } = require('./user.controller');

// UserRoutes.patch('/:id', patchOne);
UserRoutes.post('/register', register);
UserRoutes.post('/login', login);
UserRoutes.post('/logout', logout);

module.exports = UserRoutes;
