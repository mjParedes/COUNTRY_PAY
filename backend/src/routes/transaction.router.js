const transactionController = require('../controllers/transaction.controller');
const { Router } = require('express');

const router = Router()

router.post('/', transactionController.createTransaction);

module.exports = router;