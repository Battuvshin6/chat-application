import React from "react";
export default function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Friends Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="text" name="text" id="text" placeholder="Display name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button>Sign up</button>
        </form>
        <p>You don't have an account? Register now</p>
      </div>
    </div>
  );
}
