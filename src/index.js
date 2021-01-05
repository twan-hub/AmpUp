import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Nav';
import Genere from './Genere';
import reportWebVitals from './reportWebVitals';





ReactDOM.render(
  <Nav/>,
  document.getElementById('nav')
);

// ReactDOM.render(
//   <Genere/>,
//   document.getElementById('genere')
// );
// const element = <h1>Hello, world</h1>;

// ReactDOM.render(
//     element,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
