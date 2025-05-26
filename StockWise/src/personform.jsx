import React, { useState } from 'react';
import './App.css';

function PersonForm({ addPerson }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const newPerson = {
      id: Date.now().toString(),
      name,
      phone,
      paid: isPaid,
    };

    addPerson(newPerson);
    setName('');
    setPhone('');
    setIsPaid(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="input"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          className="input"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={isPaid}
            onChange={(e) => setIsPaid(e.target.checked)}
          />
          Mark as Paid
        </label>
      </div>

      <button className="add-button" type="submit">Add Person</button>
    </form>
  );
}

export default PersonForm;
