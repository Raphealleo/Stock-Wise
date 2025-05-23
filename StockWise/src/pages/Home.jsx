import React from 'react';
import PersonForm from '../personform.jsx';
import PersonList from '../PersonList.jsx';

function Home({ people, addPerson }) {
  return (
    <div>
      <PersonForm addPerson={addPerson} />
      <PersonList people={people} />
    </div>
  );
}

export default Home;