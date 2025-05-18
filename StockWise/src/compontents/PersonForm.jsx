import React, { useState } from 'react';
function PersonForm({ addPerson }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const newPerson = {
      id: Date.now().toString(),
      name,
      phone
    };

    addPerson(newPerson);
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Add Person</button>
    </form>
  );
}

export default PersonForm;
