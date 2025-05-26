import React from 'react';
import './App.css';

function PersonList({ people }) {
  if (people.length === 0) {
    return <p>No paid people added yet.</p>;
  }

  return (
    <ul className="person-list">
      {people.map((person) => (
        <li key={person.id}>
          {person.name} — {person.phone}
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
