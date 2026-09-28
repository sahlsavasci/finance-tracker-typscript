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

addTransaction("Salary", 100000000, "income");
addTransaction("Groceries", 500000, "expense");

console.log(transactions);