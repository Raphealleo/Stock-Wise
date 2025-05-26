import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import PersonForm from './PersonForm';
import PersonList from './PersonList';

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (person) => {
    setPeople((prev) => [...prev, person]);
  };

  const paidPeople = people.filter(person => person.paid);
  const notPaidPeople = people.filter(person => !person.paid);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <h1>ADETOPZY INTERGRATED SERVICES</h1>
        <PersonForm addPerson={addPerson} />

        <h2>Paid People</h2>
        <PersonList people={paidPeople} />

        <h2>Not Paid People</h2>
        <PersonList people={notPaidPeople} />
      </div>
    </div>
  );
}

export default App;
