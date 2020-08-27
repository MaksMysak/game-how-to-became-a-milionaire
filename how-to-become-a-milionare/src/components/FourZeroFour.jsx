import React, { useEffect } from 'react';
import "./scss/Pages.scss";

export default function FourZeroFour() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "http://localhost:3000/login"
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
    
  return (
    <div className="page-wrapper">
      <div className="form-container">
        <h1>How to become a milionare</h1>
        <h4>Error 404</h4>
        <h2>Page not found</h2>
      </div>
    </div>
  );
}
