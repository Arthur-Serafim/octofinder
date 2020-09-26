import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/404/404'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/perfil/:id" component={Profile} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
