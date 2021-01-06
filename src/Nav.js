import logo from './logo.svg';
import './Nav.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Genere from './Genere';
import DiscoveryBody from './Discovery';
import SearchBody from './Search';
import App from './App';


const nav = [
  "Search",
  "Playlist",
  "Discovery",
  "Genre",
  "Log Out",
  "Upload"
];

function Upload() {
  const element=<h1 class='top'>{nav[5]}</h1>
  return element;
}

function Search() {
  return <h1 class='top'>{nav[0]}</h1>;
}

function Playlist() {
  return <h1 class='top'>{nav[1]}</h1>;
}

function Discovery() {
  return <h1 class='top'>{nav[2]}</h1>;
}

function Genre() {
  return <h1 class='top'>{nav[3]}</h1>;
}

function LogOut() {
  return <h1 class='top'>{nav[4]}</h1>;
}

function Nav() {
  return (
    <Router>
      <div>
        <div class='topnav'>
          
                <Link to="/">{nav[5]}</Link>

                <Link to="/search">{nav[0]}</Link>

                <Link to="/playlist">{nav[1]}</Link>

                <Link to="/discovery">{nav[2]}</Link>

                <Link to="/genre">{nav[3]}</Link>

                <Link to="/log-out" style={{float:'right'}}>{nav[4]}</Link>
                </div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search />
            <SearchBody/>
          </Route>
          <Route path="/playlist">
            <Playlist/>
          </Route>
          <Route path="/discovery">
            <Discovery />
            <DiscoveryBody/>
          </Route>
          <Route path="/genre">
            <Genre />
            <Genere/>
          </Route>
          <Route path="/log-out">
            <LogOut />
          </Route>
          <Route path="/">
            <Upload />
            <App/>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;