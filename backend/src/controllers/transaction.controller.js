const transactionServices = require('../services/transaction.services');
const AccountServices = require('../services/account.services');
const accountServices = new AccountServices();
const catchAsync = require('../helpers/catchAsync');

const createTransaction = catchAsync(async (req, res, next) => {
    //const body = req.body;
    const { senderId, receivingId, amount } = req.body;
    console.log(senderId, receivingId, amount);
    //verifico los fondos del senderId
    accountSender = await accountServices.getAccountByUserId(senderId);
    if (accountSender.balance < amount) {
        res.status(400).json({
            status: 'Error',
            message: 'Not funds',
        });
        return;
    }
    
    accountReceiving = await accountServices.getAccountByUserId(receivingId)
    //hago la transaccion y guardo.
    accountSender.balance -= amount
    accountReceiving.balance  += amount
    accountSender.save()
    accountReceiving.save()
 
    res.status(200).json({
        status: 'success',
        message: 'The transaction has been done',
    });
});

module.exports = {
    createTransaction,
};
