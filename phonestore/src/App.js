// import logo from '../public/img/1.png';
import Header from './component/Header';
import Footer from './component/Footer';
import Home1 from './component/Home1';
// import { Test, Test2 } from './component/Test';
// eslint-disable-next-line
import { Route, Router, BrowserRouter, Switch, Link } from 'react-router-dom';
import React from 'react';
import SliderSection from './component/SliderSection';
// import Home1 from './component/home1';


export default function App() {
  return (
    <BrowserRouter>
      <Route>
        <Header />
        <SliderSection/>
        {/* <CustomSlick/> */}
        <Home1/>
        <Footer />
        {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1><Link to="/test">test</Link></h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1><Link to="/test1">test1</Link></h1>
        </div>
        <Route path="/test">
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>
            test
          </h1>
        </Route>
        <Route path="/test1">
          <h1 style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'red' }}>
            test1
          </h1>
        </Route> */}

      </Route>

    </BrowserRouter>
  )
}