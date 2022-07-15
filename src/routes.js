const express = require('express');
const verify = require('./Utils/functionsJWT');

const routes = express.Router();

const ctrl = require('./Controllers/UserController');
const { verifyJWT } = require('./Utils/functionsJWT');

routes.post('/signup', ctrl.signUp);
routes.get('/users', ctrl.getUsers);
routes.post('/login', ctrl.login);
routes.post('/recover-password', ctrl.recoverPassword);
routes.put('/change-password/:id', verify.verifyJWT, ctrl.changePassword);

routes.get('/users/newest-four', verify.verifyJWT, ctrl.newestFourUsersGet);
routes.get('/users/:id', verifyJWT, ctrl.getUserByid);
routes.put('/users/update/:id', verify.verifyJWT, ctrl.updateUser);
routes.delete('/users/delete/:id', verify.verifyJWT, ctrl.toggleUser);

module.exports = routes;
