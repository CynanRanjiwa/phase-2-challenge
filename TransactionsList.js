// import React, { useEffect, useState } from "react";
// import TransactionsTable from './Components/TransactionsTable';

// function TransactionsList() {
//     const [transactions, setTransactions] = useState([]); // Corrected order

//     useEffect(() => {
//         // Create sample data
//         const sampleTransactions = [
//             { date: '2024-04-27', description: 'Purchase 1', category: 'Food', amount: 50 },
//             { date: '2024-04-26', description: 'Purchase 2', category: 'Clothing', amount: 30 },
//             { date: '2024-04-25', description: 'Purchase 3', category: 'Electronics', amount: 70 },
//         ];

//         setTransactions(sampleTransactions);
//     }, []);

//     return (
//         <div>
//             <TransactionsTable transactions={transactions} />
//         </div>
//     );
// }

// export default TransactionsList;

// 

// import React, { useState, useEffect } from 'react';
// import TransactionsTable from './TransactionsTable';

// const MainComponent = () => {
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
//       <TransactionsTable transactions={transactions} />
//     </div>
//   );
// };

// export default MainComponent;
