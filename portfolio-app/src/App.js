import React from 'react';
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Blog from "./components/Blog";
import Demo from "./routes/Demo";
import Map from "./routes/Map";
import NewsPage from "./routes/News";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog/:blogSlug" element={<Blog />} />
        <Route path="/demo" element={<Demo />}/>
        <Route path="/map" element={<Map />}/>
        <Route path="/news" element={<NewsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
