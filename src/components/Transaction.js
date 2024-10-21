import React, {useState, useEffe}  from "react"; 

// useState, useEffect
 
//initialize state

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
}
//Display food, when user type letters coresponds to food either copital or lower case 


function Transaction({ transaction }) {
  const { date, description, category, amount } = transaction;
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
