// import logo from '../public/img/1.png';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
