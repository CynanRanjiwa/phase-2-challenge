import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MainComponent from './MainComponent';
import TransactionForm from './TransactionForm';
import TransactionsTable from './TransactionsTable';
//console.log();

function App() {
  const [transactions, setTransactions] = useState ([]);
  const handleFormSubmit = (formData) => {
    setTransactions([...transactions, formData]); // Add new transaction to the list
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MainComponent />
      <TransactionForm onSubmit={handleFormSubmit} />
      <TransactionsTable transactions={transactions} />
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import TransactionsTable from './TransactionsTable';

// const App = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     // Fetch or create sample data
//     const sampleTransactions = [
//       { date: '2024-04-27', description: 'Purchase 1', amount: 50 },
//       { date: '2024-04-26', description: 'Purchase 2', amount: 30 },
//       { date: '2024-04-25', description: 'Purchase 3', amount: 70 },
//     ];

//     setTransactions(sampleTransactions);
//   }, []);

//   return (
//     <div>
//       <h1>My Bank Transactions</h1>
//       <TransactionsTable transactions={transactions} />
//     </div>
//   );
// };

// export default App;

