const db = require('../models/index');
const AppError = require('../helpers/AppError');

class TransactionServices {
    async transfer({
        senderId,
        receivingId,
        AccountId,
        amount = 0,
        method = 'transfer',
    }) {
        try {
            const transaction = await db.Transaction.create({
                sender_user: senderId + '', //son string segun BD (no quiero modifcar la BD, ni los models)
                receiving_user: receivingId + '',
                AccountId,
                date: Date.now(),
            });

            const TransactionDetail = await db.Detail_transactions.create({
                transactionId: transaction.id,
                ammount: amount,
                method,
                payment_method: 'recarga debito',
                status: 'succes',
            });

            console.log(transaction, TransactionDetail);
            return transaction;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new TransactionServices();
