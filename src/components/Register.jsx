import React from "react";
import "../styles/Register.css";
export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Friends Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" name="text" id="text" placeholder="Display name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input type="file" name="file" id="file" placeholder="File" />
          <label htmlFor="file">
            <img
              src="/images/addAvatar.jpg"
              className="avatar-img"
              alt="avatar-icon"
            />
            Add an avatar
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}
