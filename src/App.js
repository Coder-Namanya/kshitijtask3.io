import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TrackExpenses from './pages/TrackExpenses';
import NotFound from './pages/NotFound';
import Statistics from './pages/Statistics';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>  // Changed from Switch to Routes
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/track" element={<TrackExpenses />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




