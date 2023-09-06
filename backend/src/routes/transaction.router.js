const transactionController = require('../controllers/transaction.controller');
const { Router } = require('express');

const router = Router()

router.post('/', transactionController.createTransaction);
router.post('/charge-point/:id', transactionController.chargePointCharge);

module.exports = router;