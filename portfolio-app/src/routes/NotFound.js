import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          minHeight: "50vh",
          padding: "6rem 1.5rem 2rem",
          textAlign: "center",
        }}
      >
        <h1>Page not found</h1>
        <p style={{ marginTop: "1rem", color: "#fff" }}>
          The page you&apos;re looking for doesn&apos;t exist or the link may be
          outdated.
        </p>
        <p style={{ marginTop: "1.5rem" }}>
          <Link to="/" style={{ color: "#90ee90" }}>
            Return home
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
