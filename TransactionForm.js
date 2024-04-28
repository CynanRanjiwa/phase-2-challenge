import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    amount: '',
    category: '' // Adding category field to form data
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ date: '', description: '', amount: '', category: '' }); // Reset form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="text" name="date" value={formData.date} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Amount:
        <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;


// import React, { useState } from 'react';

// const TransactionForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     date: '',
//     description: '',
//     amount: '',
//     category: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     setFormData({ date: '', description: '', amount: '', category: '' }); // Reset form data
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Date:
//         <input type="text" name="date" value={formData.date} onChange={handleChange} />
//       </label>
//       <label>
//         Description:
//         <input type="text" name="description" value={formData.description} onChange={handleChange} />
//       </label>
//       <label>
//         Amount:
//         <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
//       </label>
//       <label>
//         Category:
//         <input type="text" name="category" value={formData.category} onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default TransactionForm;

