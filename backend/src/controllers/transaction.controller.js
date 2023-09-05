const transactionServices = require('../services/transaction.services')
const catchAsync = require('../helpers/catchAsync');


const createTransaction = catchAsync(async (req, res, next) => {
  const body = req.body;
  console.log(body)
  transactionId = await transactionServices.transfer(body);
  res.status(200).json({
      status: 'success',
      message: 'The transaction has been done',
      transacionId
  });
});

module.exports = {
  createTransaction
}