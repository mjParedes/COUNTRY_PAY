const catchAsync = require('../helpers/catchAsync');
const AccountServices = require('../services/account.services');
const accountServices = new AccountServices();

exports.createAccount = catchAsync(async (req, res, next) => {
    console.log("en la creacion de account.")
    const userId = req.params.id;
    const createdAccount = await accountServices.createAccount(userId);
    res.status(200).json({
        status: 'success',
        message: 'Account created and saved to database',
        account: createdAccount,
    });
});
