import './Search.css';
import React from 'react'
import {Foo} from './App.js'

function SearchBody(){
  return (
    <div class='flex-search'>
      <input placeholder='Search your favorite genre...' class='searchBar'/>
      <button class='search-submit'>Find Music</button>
    </div>
  
);
}

export default SearchBody;