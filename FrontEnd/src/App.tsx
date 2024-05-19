import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Comps/Navbar'; // Adjust the path as necessary
import Home from './Comps/Home';
import About from './Comps/About';
import Contact from './Comps/Contact';
import Profile from './Comps/Profile';
import Admin from './Comps/Admin';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ...

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;