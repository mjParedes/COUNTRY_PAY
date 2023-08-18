const catchAsync = require('../helpers/catchAsync');
const User = require('../models/user.model');
const generatejwt = require('../helpers/JWT');
const UserServices = require('../services/user.services');
const userServices = new UserServices();

exports.createUser = catchAsync(async (req, res, next) => {
    const body = req.body;

    const { newUser, token } = await userServices.createUser({ body, next });

    res.status(200).json({
        status: 'success',
        message: 'The user has been created',
        newUser,
        token,
    });
});

exports.login = catchAsync(async (req, res, next) => {
    //1. traernos la informacion de la req.body
    const { email, password } = req.body;
    const { user, token } = await userServices.login({
        email,
        password,
        next,
    });

    console.log(user, token);

    res.status(200).json({
        status: 'success',
        token,
        user,
    });
});
