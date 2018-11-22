import React, { Component } from "react";
class Login extends Component {
  state = {};
  render() {
    return (
      <>
        <form action="">
          <label htmlFor="email">email</label>
          <input type="email"   id="email"/>
          <label htmlFor="password" id>password</label>
          <input type="password" id="password" />
        </form>
      </>
    );
  }
}

export default Login;
