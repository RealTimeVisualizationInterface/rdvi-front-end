import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import NavBar from './NavBar';
import Home from './pages/Home'
import LoginPage from './pages/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
        redirectLocation: '',
        redirectLocationSet: false,
        authenticated: false
      };

   }

   authenticate(user, pass){
      //authenticate
      console.log("authenticating");
      console.log(user);
      console.log(pass);
      return true;
   }
   logout(){

   }
   redirectToLast(){
      if(this.state.redirectLocationSet){
         console.log("redirect location set, redirecting "+ this.state.setRedirectLocation)
         this.setState({redirectLocationSet: false});
         //redirect(redirectlocation)
      }
      else{
         this.setState({redirectLocationSet: false});
         console.log("redirect location not set, redirecting home")
         //redirect(home);
      }
   }  
   setRedirectLocation(loc){
      this.setState({redirectLocationSet: true});
      this.setState({setRedirectLocation: loc});

   }
  render() {
    return (
      <div className="App">
         <Router>
            <div>
               <header className="App-header">
                  <NavBar isAuthed={this.state.authenticated} username="john"/>
               </header>
               <Switch>
                  <Route path="/login" render={(props) => <LoginPage {...props} isAuthed={this.state.authenticated} authenticate={this.authenticate} redirect={this.redirectToLast} />}/>
                  <Route path="/" exact component={Home}/>
                  <Route path="" component={Home}/>
               </Switch>
            </div>
        </Router>
      </div> 
    );
  }
}

export default App;
