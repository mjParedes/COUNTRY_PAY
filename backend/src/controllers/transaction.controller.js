const transactionServices = require('../services/transaction.services')
const catchAsync = require('../helpers/catchAsync');


const createTransaction = catchAsync(async (req, res, next) => {
  const body = req.body;
  console.log("te mando el body")
  console.log(body)
  //corroboro que el account tenga la plata.. 
  //transactionId = await transactionServices.transfer(body);
  res.status(200).json({
      status: 'success',
      message: 'The transaction has been done',
      
  });
});

module.exports = {
  createTransaction
}