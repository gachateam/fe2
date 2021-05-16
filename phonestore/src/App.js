// import logo from '../public/img/1.png';
import Header from './component/Header';
import Test from './component/Test';
import { Switch, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/:id" component={Test} />
    </Switch>
  );
}

export default App;


// import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import UserPage from './pages/UserPage'

// export default function App() {
//   return (
//     <Switch>
//       <Route exact path="/" component={HomePage} />
//       <Route path="/:id" component={UserPage} />
//     </Switch>
//   )
// }