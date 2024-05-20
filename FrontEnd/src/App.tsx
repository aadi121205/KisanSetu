import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Comps/Navbar';
import Home from './Comps/Home';
import About from './Comps/About';
import Contact from './Comps/Contact';
import Profile from './Comps/Profile';
import Admin from './Comps/Admin';
import LoginPage from './Comps/Login';
import Footer from './Comps/Footer'; // Import the Footer component
import SignupPage from './Comps/Signup';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer /> {/* Include the Footer component */}
    </Router>
  );
};

export default App;