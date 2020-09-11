import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import NavBar from './Components/Layout/NavBar';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/about' component={About} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
