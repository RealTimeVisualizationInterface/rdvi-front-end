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
        <div>
          <Link to="/" >Home</Link>
          <Link to="/login" >Login</Link>
        </div>
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
