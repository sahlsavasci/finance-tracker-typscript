"use strict";
let transactions = [];
function addTransaction(title, amount, type) {
    const newTransaction = {
        id: Date.now().toString(),
        title: title,
        amount: amount,
        type: type,
        date: new Date()
    };
    transactions.push(newTransaction);
    console.log(`Transaction added: ${title} (Rp ${amount})`);
}
addTransaction("Salary", 100000000, "income");
addTransaction("Groceries", 500000, "expense");
console.log(transactions);
