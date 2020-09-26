import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <span>I'm home</span>
    </div>
  )
}

const NotFound = () => {
  return (
    <div>
      <span>I'm not found</span>
    </div>
  )
}

const Profile = () => {
  return (
    <div>
      <span>I'm profile</span>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/perfil/:id" component={Profile} />
      </Router>
    </div>
  );
}

export default App;
