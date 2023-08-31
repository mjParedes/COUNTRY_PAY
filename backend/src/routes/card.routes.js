const { createCard } = require('../controllers/card.controller');
const {
    protectRoute,
    verifyAccountOwner,
} = require('../middlewares/auth.middleware');
const express = require('express');
const { createCardValidation } = require('../middlewares/validated.middleware');
const router = express.Router();

router.post(
    '/create/:id/',
    createCardValidation,
    protectRoute,
    verifyAccountOwner,
    createCard,
);

module.exports = router;
