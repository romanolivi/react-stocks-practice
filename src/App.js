import React, { useState, useEffect } from 'react';
import './App.css';
import InputStock from './components/InputStock';
import Home from './components/Home';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MarketNews from './components/MarketNews';
import Recommendation from './components/Recommendation';



const defaultHistory = createBrowserHistory();

const App = (props, {history=defaultHistory}) => {

  return (
    <Router history={history}>
      <main className="primary">
        <nav className="navbar navbar-expand-sm navbar-light" color="blue">
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
                  <Link className="nav-link active" to={"/"}>Home</Link>
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
                      <li><Link className="dropdown-item" to={"/search-stocks"}>Stock Search</Link></li>
                      <li><Link className="dropdown-item" to={"/market-news"}>Market News</Link></li>
                      <li><Link className="dropdown-item" to={"/trends"}>Trends</Link></li>
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
      </main>
      <div>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/search-stocks'} component={InputStock} />
        <Route exact path={'/market-news'} component={MarketNews} />
        <Route exact path={'/trends'} component={Recommendation} />
      </div>

    </Router>
  );
}

export default App;
