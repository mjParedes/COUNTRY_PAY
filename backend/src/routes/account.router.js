const express = require('express');
const accountController = require('../controllers/account.controller');

const router = express.Router();

router.post('/:id', accountController.createAccount);

module.exports = router;
