const { body, validationResult } = require('express-validator');

const validFields = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'error',
            errors: errors.mapped(),
        });
    }
    next();
};

exports.loginValidation = [
    body('email')
        .notEmpty()
        .withMessage('email cannot be empty')
        .isEmail()
        .withMessage('must be a valid email'),
    body('password')
        .notEmpty()
        .withMessage('password cannot be empty')
        .isLength({ min: 5 })
        .withMessage('password must be at least 8 characters long'),
    validFields,
];

exports.createUserValidation = [
    body('name')
        .notEmpty()
        .withMessage('name cannot be empty')
        .isLength({ min: 3 })
        .withMessage('name must be at least 3 characters long'),
    body('lastName')
        .notEmpty()
        .withMessage('lastName cannot be empty')
        .isLength({ min: 3 })
        .withMessage('lastName must be at least 3 characters long'),
    body('email')
        .notEmpty()
        .withMessage('email cannot be empty')
        .isEmail()
        .withMessage('must be a valid email'),
    body('password')
        .notEmpty()
        .withMessage('password cannot be empty')
        .isLength({ min: 3 })
        .withMessage('password must be at least 3 characters long'),
    body('phone').isInt().withMessage('phone number must be a integer'),
    validFields,
];

const customExpiredCard = (value) => {
    const format = /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
    return format;
};

const customCardNumber = (value) => {
    const regex =
        /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/.test(
            value,
        );
    return regex;
};

exports.createCardValidation = [
    body('number')
        .notEmpty()
        .withMessage('number cannot be empty')
        .custom(customCardNumber)
        .withMessage('is not a valid credit card number')
        .isLength({ min: 16, max: 16 })
        .withMessage('number'),
    body('exp_date')
        .notEmpty()
        .withMessage('email cannot be empty')
        .custom(customExpiredCard)
        .withMessage('The "exp_date" field must have the format MM/YY'),
    body('type')
        .notEmpty()
        .withMessage('type cannot be empty')
        .isIn(['credito', 'debito'])
        .withMessage('type is credito or debito'),
    body('name')
        .notEmpty()
        .withMessage('name cannot be empty')
        .isLength({ min: 5, max: 25 })
        .withMessage(
            'name must be at least 5 characters long, and 25 character max',
        ),
    body('security_code')
        .isInt()
        .withMessage('security_code must be an integer')
        .isLength({ min: 3, max: 3 })
        .withMessage('security_code must have 3 characters long'),
    validFields,
];

exports.AvatarValidation = [
    body('avatar').custom((valor, { req }) => {
        console.log(req.file);
        if (!req.file) {
            throw new Error('Avatar image required');
        }
        return true;
    }),
    validFields,
];
