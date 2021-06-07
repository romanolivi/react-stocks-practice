import React, { useState, useEffect } from 'react';
import './App.css';
import InputStock from './InputStock';

function App() {

  return (
    <main>
      <nav className="navbar navbar-expand-sm navbar-light bg-light" color="white">
        <div className="container">
          <a href="#" className="navbar-brand mb-0 h1">
            <img 
            className="d-inline-block align-top" 
            src="https://cdn-images-1.medium.com/max/1200/1*fmJW9a3HTPWAsCKjnz2FRQ.png"
            width="30" height="30" />
            Romano Stocks
          </a>
          <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          class="navbar-toggler"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a href="#" className="nav-link active"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                    Stocks
                  </a>
                  <ul className="dropdown-menu"
                  aria-labelledby="navbarDropdown">
                    <li><a href="#" className="dropdown-item">Stock Info</a> </li>
                    <li><a href="#" className="dropdown-item">Graphs</a> </li>
                    <li><a href="#" className="dropdown-item">News</a> </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                    Contact
                  </a>
                  <ul className="dropdown-menu"
                  aria-labelledby="navbarDropdown">
                    <li><a href="#" className="dropdown-item">Phone</a> </li>
                    <li><a href="#" className="dropdown-item">Email</a> </li>
                    <li><a href="#" className="dropdown-item">Message</a> </li>
                  </ul>
                </li>
              </ul>
          </div>
        </div>
      </nav>
      <section className="content">
        <h1 className="title">Romano's Stock App</h1>
        <div className="underline"></div>
        <div className="input-stock">
          <InputStock />
        </div>
      </section>
    </main>
  );
}

export default App;
