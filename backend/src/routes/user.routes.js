const userController = require('../controllers/user.controller');
const express = require('express');

const router = express.Router();

router.post('/create', userController.createUser);
router.post('/login', userController.login);

module.exports = router;
