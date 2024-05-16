import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home'; 
import Profile from './component/profile';
import Blog from './component/Blog';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
