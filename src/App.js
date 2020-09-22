import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Drink from './Components/Pages/Drink';
import Alcohol from './Components/Pages/Alcohol'

import NavBar from './Components/Layout/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/drink/:id' component={Drink}/>
          <Route exact path='/baseliquor/alcohol' component={Alcohol}/>

          {/* <Route exact path='/about' component={About} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
