const router = require("express").Router();
const Transaction = require("../models/transaction");
const {
  createTransaction,
  createTransactions,
  findTransactions,
} = require("../controllers/api/transactions");

router.post("/api/transaction", createTransaction);

router.post("/api/transaction/bulk", createTransactions);

router.get("/api/transaction", findTransactions);

module.exports = router;
