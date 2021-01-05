import logo from './logo.svg';
import './Nav.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const nav = [
  "Search",
  "Listen",
  "Discovery",
  "Gene",
  "Log Out",
  "Home"
];

function Home() {
  return <h2>{nav[5]}</h2>;
}

function Search() {
  return <h2>{nav[0]}</h2>;
}

function Listen() {
  return <h2>{nav[1]}</h2>;
}

function Discovery() {
  return <h2>{nav[2]}</h2>;
}

function Genere() {
  return <h2>{nav[3]}</h2>;
}

function LogOut() {
  return <h2>{nav[4]}</h2>;
}

function Nav() {
  return (
    <Router>
      <div>
        <div class='topnav'>
          
                <Link to="/">{nav[5]}</Link>

                <Link to="/search">{nav[0]}</Link>

                <Link to="/listen">{nav[1]}</Link>

                <Link to="/discovery">{nav[2]}</Link>

                <Link to="/genere">{nav[3]}</Link>

                <Link to="/log-out">{nav[4]}</Link>
                </div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/listen">
            <Listen />
          </Route>
          <Route path="/discovery">
            <Discovery />
          </Route>
          <Route path="/genere">
            <Genere />
          </Route>
          <Route path="/log-out">
            <LogOut />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;