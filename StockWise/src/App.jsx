
import React, { useState } from 'react';
import PersonList from "./compontents/PersonList.jsx";
import PersonForm from "./compontents/PersonForm.jsx";

import './App.jsx';

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (person) => {
    setPeople((prev) => [...prev, person]);
  };

  return (
    <div className="App">
      <h1>ADETOPZY INTERGRATED SERVICES</h1>
      <PersonForm addPerson={addPerson} />
      { <PersonList people={people} /> }
    </div>
  );
}

export default App;
