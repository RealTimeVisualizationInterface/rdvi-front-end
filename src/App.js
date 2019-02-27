import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import NavBar from './NavBar';
import Home from './pages/home/Home'
import LoginPage from './pages/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const backendAPI = "https://rdvi.coderpunch.com/api/auth"
const deployLocation = "" 
class App extends Component {

   constructor(props) {
      super(props);

      this.state = {
        redirectLocation: '',
        redirectLocationSet: false,
        authenticated: false//,
        //requestResponse: []
      };

   }


   checkIfAuth(){

   }

   authenticateAsChild(muser, mpass){
      //authenticate
      console.log("authenticating");
      console.log(muser);
      console.log(mpass);

      // const Url="https";
      const Data={
         username: muser,
         password: mpass
      };
      const otherParam={
         heathers:{
            "content-type":"application/json; charset=UTF-8"
         },
         body: Data,
         method: "POST"
      };


      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
      fetch(backendAPI, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        username: muser,
        password: mpass,
      })})
      .then(response => response.json())
      .then(data => this.dad.setState({requestResponse: data})); 
      //unusual use of this and dad, but somehow this is what makes it happy
      console.log(this.dad.state.requestResponse );
      // while(this.dad.state.requestResponse == []){
      //    console.log(this.dad.state.requestResponse)
      // console.log("in")

      //    //this.props.dad.setState({requestResponse: []})
      // }



      // var resp = this.dad.state.requestResponse
      // if(typeof resp !== 'undefined' && typeof resp. )
      //          console.log(this.dad.state.requestResponse)

      // console.log("out")

      return true;
   }
   logout(){

   }
   // redirectToLast(){
   //    if(this.state.redirectLocationSet){
   //       console.log("redirect location set, redirecting "+ this.state.setRedirectLocation)
   //       this.setState({redirectLocationSet: false});
   //       //redirect(redirectlocation)
   //    }
   //    else{
   //       this.setState({redirectLocationSet: false});
   //       console.log("redirect location not set, redirecting home")
   //       //redirect(home);
   //    }
   // }  
   // setRedirectLocation(loc){
   //    this.setState({redirectLocationSet: true});
   //    this.setState({setRedirectLocation: loc});

   // }
  render() {
   const { response } = this.state;

    return (
      <div className="App">
         <Router basename={process.env.PUBLIC_URL}>
            <div>
               <header className="App-header">
                  <NavBar isAuthed={this.state.authenticated} username="john"/>
               </header>
               
               <Switch>
                  <Route path="/login" render={(props) => <LoginPage {...props} dad={this} isAuthed={this.state.authenticated} authenticate={this.authenticateAsChild} />}/>
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


//redirect={this.redirectToLast} 