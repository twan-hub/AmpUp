import './Discovery.css';
import React from 'react'

const genere = [
    'Hip-Hop',
    'Country',
    'Rock',
    'Alternative',
    'Classical',
    'Gospel',
    'Discovery'];

const discoveryElement=
<div class='flex-discovery'>
    <h1 class='top'>{genere[6]}</h1>
    <div>{genere[0]}</div>
    <div>{genere[1]}</div>
    <div>{genere[2]}</div>
    <div>{genere[3]}</div>
    <div>{genere[4]}</div>
    <div>{genere[5]}</div>
</div>;

function DiscoveryBody() {
    return (
        <div class='flex-discovery'>
        <div>{genere[0]}</div>
        <div>{genere[1]}</div>
        <div>{genere[2]}</div>
        <div>{genere[3]}</div>
        <div>{genere[4]}</div>
        <div>{genere[5]}</div>
        </div>
   );
}

export default DiscoveryBody;