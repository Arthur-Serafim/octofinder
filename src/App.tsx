import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/404/404'
import SearchAll from './pages/SearchAll/SearchAll';

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" component={Navigation} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/limbo" component={NotFound} />
          <Route exact path="/perfil/:name" component={Profile} />
          <Route exact path="/procurar/:name" component={SearchAll} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    </div>
  );
}

export default App;
