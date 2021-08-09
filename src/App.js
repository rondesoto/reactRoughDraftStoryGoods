import './App.css';
// import Header from './Compnents/Header';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <body data-spy="scroll" data-target=".navbar" data-offset="50">
            <header>
              <nav className="navbar navbar-expand navbar-light">
                <div className="container-fluid">
                  <a href="index.html" className="navbar-brand">Rough Draft Story Goods</a>
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link active" href="home.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="shop.html">Shop</a></li>
                    <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                  </ul>
                  <button className="btn btn-sm btn-secondary" data-toggle="modal"
                    data-target="#cartModal">Cart</button>
                </div>
              </nav>
              <section className="hero-content">
                <div className="container">
                  <div className="row">
                    <div className="col col-md-6" id="heroHeader">
                      <h1 className="text-nowrap">Write more, Write fast</h1>
                      <p className="lead">It's a deck of cards. It fits in your pocket. It's designed to help you write
                        story
                        ideas anytime, anywhere. Plus no batteries needed.</p>
                    </div>
                  </div>
                </div>
              </section>
            </header>
          </body>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
