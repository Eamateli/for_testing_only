import React, { useState } from 'react';

function BasicForm() {
  const initialFormState = { 
    firstName: '', 
    lastName: '', 
    email: '', 
  };

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const handleClear = () => {
    setForm(initialFormState); // Reset form state to initial values
  };

  return (
    <div className='card'>
      <h1>Basic Form</h1>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={e => handleChange(e, 'firstName')}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => handleChange(e, 'lastName')}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={e => handleChange(e, 'email')}
        />
      </label>
      <h5>Details</h5>
      <p>
        Full Name: {form.firstName}{' '}
        {form.lastName}{' '}<br/>
        Email: {form.email}
      </p>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default BasicForm;
