const db = require('../models/index');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

class AccountServices {
    async findOneAccount({ attributes, next }) {
        try {
            const account = await db.Accounts.findOne({
                where: attributes,
            });
            return account;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createAccount({ email, userId }) {
        try {
            const account = await stripe.accounts.create({
                type: 'custom',
                country: 'US',
                email: email,
                capabilities: {
                    card_payments: { requested: true },
                    transfers: { requested: true },
                    // business_type: 'individual',
                    metadata: {},
                },
            });

            const createdAccount = await db.Accounts.create({
                userId: userId,
                cbu: '...',
                balance: 0.0,
                account_detail_stripe: account,
            });

            return createdAccount;
        } catch (error) {
            console.log('error', error);
            throw error;
        }
    }
}

module.exports = AccountServices;
