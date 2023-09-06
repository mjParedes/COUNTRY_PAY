const db = require('../models/index');

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

    async createAccount(userId) {
        try {
            const createdAccount = await db.Accounts.create({
                userId,
                balance: 100,
                account_detail_stripe: {},
            });
            return createdAccount;
        } catch (error) {
            throw error;
        }
    }

    async getAccountByUserId(userId) {
        try {
            const account = await db.Accounts.findOne({
                where:{userId:userId}
            })
            return account;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AccountServices;
