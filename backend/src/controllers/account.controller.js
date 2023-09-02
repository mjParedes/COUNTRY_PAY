const catchAsync = require('../helpers/catchAsync');
const AccountServices = require('../services/account.services');
const accountServices = new AccountServices();

exports.createStripeAccount = catchAsync(async (req, res, next) => {
    const user = req.body;
    const email = user.email;
    const userId = req.params.id;

    const createdAccount = await accountServices.createAccount({
        email,
        userId,
    });

    res.status(200).json({
        status: 'success',
        message: 'Stripe account created and saved to database',
        account: createdAccount,
    });
});
