import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions }) {
  const mappedTransactions = transactions.map((transaction) => (
    <Transaction key={transaction.id} transaction={transaction} />
  ));

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {mappedTransactions.length > 0 ? (
          mappedTransactions
        ) : (
          <tr>
            <td colSpan="4" className="ui center aligned">
              No transactions found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TransactionsList;

