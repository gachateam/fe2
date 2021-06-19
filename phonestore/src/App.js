import Header from './component/Header';
import Footer from './component/Footer';
import Home1 from './component/Home1';
import NotFound from './component/NotFound';
import ProductCategory from './component/ProductCategory';
import Register from './component/Register'
// import { Test, Test2 } from './component/Test';
// eslint-disable-next-line
import { Route, Router, BrowserRouter, Switch, Link, browserHistory } from 'react-router-dom';
import React from 'react';
import SliderSection from './component/SliderSection';
import Login from './component/Login';
import AuthProvider from './contexts/AuthContext';
// import Test from './component/Test';


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <Test /> */}
        <Header />
        <Switch>
          <Route exact path="/" >
            <SliderSection />
            <Home1 />
            <ProductCategory />
          </Route>
          <Route exact path="/login" >
            <Login />
          </Route>
          <Route exact path="/register" >
            <Register />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </AuthProvider>

    </BrowserRouter>
  )
}