import { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);  // Store transactions
  const [searchTerm, setSearchTerm] = useState("");       // Store search input

  // Fetch transactions from the backend on mount
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then(setTransactions)
      .catch(() => alert("Failed to load transactions."));
  }, []);

  // Filter transactions based on the search term (case-insensitive)
  const filteredTransactions = transactions.filter((t) =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search onSearchChange={setSearchTerm} />  {/* Pass search handler */}
      <AddTransactionForm setTransactions={setTransactions} transactions={transactions} />
      <TransactionsList transactions={filteredTransactions} />  {/* Pass filtered transactions */}
    </div>
  );
}

export default AccountContainer;
