import React from 'react';
import { Header } from './partials/Header.js';
import { Footer } from './partials/Footer.js';
import '../App.css';

function App(props) {
  return (
    <div className="App">
      <Header title="BitPeople" />
      <Footer />
    </div>
  );
}

export default App;
