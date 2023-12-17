import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Create from './Views/Create';
import Read from './Views/Read';
import Update from './Views/Update';
import Delete from './Views/Delete';
import Developer from './Views/Developer';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </Router>
  );
}

export default App;
