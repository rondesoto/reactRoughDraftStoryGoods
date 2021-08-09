import './App.css';
import Header from './Compnents/Header';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
      </BrowserRouter>
    </>
      );
}

      export default App;
