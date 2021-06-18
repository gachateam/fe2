// import logo from '../public/img/1.png';
import Header from './component/Header';
import Footer from './component/Footer';
import Home1 from './component/Home1';
import NotFound from './component/NotFound';
import ProductCategory from './component/ProductCategory';
// import { Test, Test2 } from './component/Test';
// eslint-disable-next-line
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import SliderSection from './component/SliderSection';
import BrandLogo from './component/BrandLogo';
import LastestPost from './component/LastestPost';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" >
          <SliderSection />
          <Home1 />
          <ProductCategory/>
          <BrandLogo/>
          <LastestPost/>
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />

    </BrowserRouter>
  )
}