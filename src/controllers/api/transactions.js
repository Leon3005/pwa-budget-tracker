const Transaction = require("../../models/transaction");

const createTransaction = async ({ body }, res) => {
  try {
    const transaction = await Transaction.create(body);

    res.json(transaction);
  } catch (error) {
    res.status(404).json(error);
  }
};

const createTransactions = async ({ body }, res) => {
  try {
    const transactions = await Transaction.insertMany(body);

    res.json(transactions);
  } catch (error) {
    res.status(404).json(error);
  }
};

const findTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({}).sort({ date: -1 });

    res.json(transactions);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { createTransaction, createTransactions, findTransactions };
