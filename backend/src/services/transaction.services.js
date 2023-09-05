const db = require('../models/index');
const AppError = require('../helpers/AppError');

class TransactionServices {
    async transfer({ senderId, receivingId, amount = 0, method = "transfer" }) {
        try {
            const accountId = 3; //--> tengo que hacer la funcion de buscar el account segun el user.
            console.log("amount: ", amount)
            console.log("method: ", method)
            const info = db.Transaction.create({
                sender_user:senderId + "", //son string segun BD (no quiero modifcar la BD, ni los models)
                receiving_user: receivingId +"",
                AccountId: accountId,
                date: Date.now()
            });
            console.log(info)
            return info.id
        } catch (err) {
            console.log('error en transefer de TransactionServices');
        }
    }
}

module.exports = new TransactionServices();
