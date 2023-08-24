const db = require('../models');

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
}

module.exports = AccountServices;
