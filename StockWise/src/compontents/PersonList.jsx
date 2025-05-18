import React from 'react';

function PersonList({ people }) {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          {person.name} - {person.phone}
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
