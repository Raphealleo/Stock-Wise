
import React, { useState } from 'react';
import PersonList from "./PersonList.jsx";
import PersonForm from "./personform.jsx";

import './App.jsx';




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import History from './pages/History.jsx';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (person) => {
    setPeople((prev) => [...prev, person]);
  };

  


function App() {
  const [people, setPeople] = useState([]);

  return (
    <div className="App">
      <h1>People Directory</h1>
      {/* Form and List components will go here */}
    </div>
  );
}





  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home people={people} addPerson={addPerson} />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

