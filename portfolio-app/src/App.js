import React from 'react';
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Blog from "./components/Blog";
import Demo from "./routes/Demo";
import Map from "./routes/Map";
import NewsPage from "./routes/News";
import LawnWaitlist from "./routes/LawnWaitlist";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lawnwaitlist" element={<LawnWaitlist />} />
        <Route path="/lawn-waitlist" element={<LawnWaitlist />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog/:blogSlug" element={<Blog />} />
        <Route path="/demo" element={<Demo />}/>
        <Route path="/map" element={<Map />}/>
        <Route path="/news" element={<NewsPage />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
