import React from "react";
export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Friends Chat</span>
      <div className="user">
        <img
          src="https://www.morrislab.ai/static/eca44dcab00ae9532e4020d26f0b040e/10998/hussein.jpg"
          alt=""
        />
        <span className="user-name">Kaze</span>
        <button>logout</button>
      </div>
    </div>
  );
}
