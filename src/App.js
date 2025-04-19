import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrowseRange from './components/BrowseRange';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrowseRange />
      <Products />
      <Footer />
    </div>
  );
}

export default App;