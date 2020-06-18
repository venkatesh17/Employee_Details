import React from "react";

import  User from "../tools/user-service";


import { connect } from "react-redux";
import {
  userNameChange,
  userPasswordChange,
  userLoginSubmit
} from "../includes/actions.js";



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username:'',
      password:'',
    }
  }


  isLogin() {
    if (User.isLogin()) {
      this.props.history.push("/dashboard");
    }
  }
  componentDidUpdate() {
    this.isLogin();
  }
  componentWillMount() {
    this.isLogin();
  }
  handleChange = event => {

    this.setState({
      [event.target.name]:event.target.value
    })
    if (event.target.name === "username") {
      this.props.onUserNameChange(event.target.value);
    } else if (event.target.name === "password") {
      this.props.onUserPasswordChange(event.target.value);
    }
  };
  onClick=(event)=> {
    event.preventDefault();
    this.props.onLoginSubmit(
      this.props.login.username,
      this.props.login.password
    );
  }

  render() {
  
  
    return (
   
      <div className="back">
      
      <div className="div-center content">
        <h2>Login</h2>  
        <input type="text" 
               name="username"
               value={this.state.username} 
               placeholder="User Name"
               onChange={this.handleChange} />
        <br/>       

        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <br/>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={this.onClick}
        >
          Sign In
        </button>
        <p>Note:- Please Enter username and password as admin and admin</p>
      </div>
      </div>
    );
  }
}


const mapStateToProps = state => {

  return state;
};

const mapDispatchToProps = {
  onUserNameChange: userNameChange,
  onUserPasswordChange: userPasswordChange,
  onLoginSubmit: userLoginSubmit
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
