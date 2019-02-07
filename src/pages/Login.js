import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class LoginPage extends Component {

   constructor(props) {
      super(props);
      this.state = {
        userValue: '',
        passValue: '',
        authFailed: false
      };

      this.handleChangePass = this.handleChangePass.bind(this);
      this.handleChangeUser = this.handleChangeUser.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      if(this.props.isAuthed){
         this.props.redirect();
      }
   }
   handleChangeUser(event) {
      console.log(event.target);
    this.setState({userValue: event.target.value});
   }
   handleChangePass(event) {
      //console.log(event);
    this.setState({passValue: event.target.value});
   }
   // handleChangeUser(event) {
   //  this.setState({value: event.target.value});
   // }
   handleSubmit(event) {
      alert('U: ' + this.state.userValue);
      alert('P: ' + this.state.passValue);
      var authSucces = this.props.authenticate(this.state.userValue, this.state.passValue);
      if (authSucces){
         this.props.redirect();
      }
      else{
         this.setState({authFailed: true});

      }
      event.preventDefault();

   }



  render() {
    return (
      <div className="LoginPage">
        LoginPage 
      <form onSubmit={this.handleSubmit}>
            <div style={{display: this.state.authFailed ? "block" : "none"}}>Authentication Failed</div>

            <label>
               Username:
               <input type="text" value={this.state.userValue} placeholder="John" onChange={this.handleChangeUser} />
            </label>
            <label>
               Password:
               <input type="password" value={this.state.passValue} onChange={this.handleChangePass} />
            </label>
            <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default LoginPage;
