import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Home from './pages/Home';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Home Page */}
          <Route path="/" element={<Home />} />
          {/* Route for Login Page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

