// import React from 'react';

// const SearchBar = ({ handleSearch }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search transactions..."
//         onChange={(e) => handleSearch(e.target.value)}
//       />
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState } from 'react';

const SearchBar = ({ transactions, setFilteredTransactions }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(query)
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
