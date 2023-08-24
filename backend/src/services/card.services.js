const AppError = require('../helpers/AppError');
const db = require('../models');
const AccountServices = require('./account.services');

class CardServices {
    accountServices = new AccountServices();

    async createOneCard({ body, id, next }) {
        try {
            const account = await this.accountServices.findOneAccount({
                attributes: { id_user: id },
                next,
            });
            if (!account) {
                throw next(new AppError('user has not an active account', 400));
            }
            body.id_account = account.id;
            const card = await db.Cards.create(body);
            return card;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = CardServices;
