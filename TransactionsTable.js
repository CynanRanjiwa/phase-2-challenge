import React from 'react'
function TransactionsTable() {
    return (// creating transactions table 
        <div>
            <h1>TransactionsTable</h1>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
                <tbody>
                    {TransactionsTable.map ((transaction, index) => (
                        <tr key = {index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>

                        </tr>

                    
                    ))}
                </tbody>
            </table>
        </div>
    )

    
}

export default TransactionsTable;