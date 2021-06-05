// import logo from '../public/img/1.png';
import Header from './component/Header';
import Footer from './component/Footer';
import Home1 from './component/Home1';
import NotFound from './component/NotFound';
import ProductCategory from './component/ProductCategory';
// import { Test, Test2 } from './component/Test';
// eslint-disable-next-line
import { Route, Router, BrowserRouter, Switch, Link, browserHistory } from 'react-router-dom';
import React from 'react';
import SliderSection from './component/SliderSection';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" >
          <SliderSection />
          <Home1 />
          <ProductCategory/>
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />

    </BrowserRouter>
  )
}