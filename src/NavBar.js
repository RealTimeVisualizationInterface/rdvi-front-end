import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  renderUsername(){
   if (this.props.UserLoggedIn){
      return (<div>
         User: {this.props.username}
      </div>);
   }
   else{
      return (
         <Link to="/login" >Login</Link>
      );
   }
  }
  render() {
    return ( 
      <div className="NavBar">
        navbar {this.renderUsername()}
      </div>
    );
  }
}

export default NavBar;
// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>