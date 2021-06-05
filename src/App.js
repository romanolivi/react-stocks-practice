import React, { useState, useEffect } from 'react';
import './App.css';
import InputStock from './InputStock';

function App() {

  return (
    <main>
      <section className="container">
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
