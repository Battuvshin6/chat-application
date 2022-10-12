import React from "react";

export default function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          name=""
          id=""
          className="searchFormInput"
          placeholder="find a user"
        />
      </div>
      <div className="userChat">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLFJbTrVFnOBgjYC_-vGIIM4aQwuYco1Xww&usqp=CAU"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jim</span>
        </div>
      </div>
    </div>
  );
}
