import React from "react";
import Sidebar from "./sub-content/Sidebar";
import Chat from "./sub-content/Chat";
import "../styles/Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
