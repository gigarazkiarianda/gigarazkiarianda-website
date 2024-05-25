import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Profile from './component/profile';
import Blog from './component/Blog/Blog';
import Project from './component/Project/Project';
import BlogPost from './component/Blog/BlogPost';
import ProjectPost from './component/Project/ProjectPost';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/project" element={<Project />} />
          <Route path="/post/:postId" element={<BlogPost />} /> 
          <Route exact path="/project/:projectId" element={<ProjectPost/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
