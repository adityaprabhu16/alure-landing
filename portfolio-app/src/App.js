import React from 'react';
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Blog from "./components/Blog";
import Demo from "./components/Demo";
import Map from "./routes/Map";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog/:blogSlug" element={<Blog />} />
        <Route path="/demo" element={<Demo />}/>
        <Route path="/map" element={<Map />}/>
      </Routes>
    </div>
  );
}

export default App;
