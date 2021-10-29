import { Component } from 'react';
import './App.css';

import Card from "./components/Card";

// const Button=()=>{
//   return (
//     <button>Click me</button>
//   )
// }

// class Button extends Component{
//   constructor(){
//     super();
//     this.word = "Happy Halloween";
//   }
//   render() {
//     return <button>Click me! { this.word }</button>
//   }
// }

function NavBar(){
  return <div>Navbar</div>
}

function UserProfile(){

}

function Post(){

}

function Posts(){
  return <Post />
}

function Contacts(){
  
}

const App=()=>{
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  );
}

export default App;


// class BookList extends Component {
//   constructor() {
//     super()

//     this.titles = ["moby dick", "the great gatsby", "of mice and men"]
//   }
//   render() {
//     return (
//       <ul className="book-titles">
//         {this.titles.map(title => <li>{title}</li>)}
//       </ul>
//     )
//   }
// }

// function BookList(){
//   const titles = [ "moby dick", "the great gatsby", "of mice and men" ];

//   return (
//     <ul className="book-titles">
//         { titles.map(title => <li>{title}</li>) }
//     </ul>
//   )
// }


