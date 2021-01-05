import './Genere.css';
import React from 'react'
import {Foo} from './App.js'

const genere = ['Hip-Hop',
'Country',
'Rock',
'Alternative',
'Classical',
'Gospel'];

const element=
<div class='flex-container'>
    <Foo/>
    <div>{genere[0]}</div>
    <div>{genere[1]}</div>
    <div>{genere[2]}</div>
    <div>{genere[3]}</div>
    <div>{genere[4]}</div>
    <div>{genere[5]}</div>
</div>;

function Genere() {
    return (
      element
   );
}

export default Genere;