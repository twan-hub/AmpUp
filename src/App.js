import logo from './logo.svg';
import './App.css';
import React,{Component} from'react'

export class Foo extends Component{
  render()
    {
      return <div>Hello</div>;
    }
}
// hello, World example
// function formatName(user){
//   return user.firstname + ' ' + user.lastname;
// }
// const user={
//   firstname: "Antwan",
//   lastname: "Stith"
// }
// const element= <h1>Helllo,{formatName(user)}</h1>;

// Time Example
// function tick(){
//   const element=(
//     <div>
//       <h1>Hello,{formatName(user)}</h1>
//       <h2>The time is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

// Using properties

// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>;
// }
// const element= <div>
// <Welcome name='Twan' />
// <Welcome name='Stith'/>
// </div>;

// class Toggle extends React.Component{
//   constructor
// }

// function handleClick(e) {
//   e.preventDefault();
//   console.log('The link was clicked.');
// };

const element= <button>

</button>;


function App() {
  return (
    <div>
      <form class='flex-upload'>
        <input class='upload-form' placeholder='First Name'/>
        <input class='upload-form' placeholder='Last Name'/>
        <button style={{float:'right'}}>Upload</button>
      </form>
      
    </div>
    
  );
}

export default App;
