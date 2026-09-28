type TransactionType = 'income' | 'expense';

interface Transaction {
    id: string;
    title: string;
    amount: number;
    type: TransactionType;
    date: Date;
}

let transactions: Transaction[] = [];

function addTransaction(title:string, amount:number, type:TransactionType): void {
    const newTransaction: Transaction = {
        id: Date.now().toString(),
        title: title,
        amount: amount,
        type: type,
        date: new Date()
    };

    transactions.push(newTransaction);

    console.log(`Transaction added: ${title} (Rp ${amount})`);
}

function calculateBalance(): number {
    let totalBalance = 0;

    for (const transaction of transactions) {
        if (transaction.type === 'income') {
            totalBalance += transaction.amount;
        } else {
            totalBalance -= transaction.amount;
        }
    }

    return totalBalance;
}

addTransaction("Salary", 100000000, "income");
addTransaction("Groceries", 500000, "expense");
addTransaction("Coffee", 50000, "expense");

console.log("Transaction Lists: ",transactions);

const currentBalance = calculateBalance();
console.log(`Current Balance: Rp ${currentBalance}`);