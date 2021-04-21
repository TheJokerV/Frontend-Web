import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="boardDiv">
      <header className="boardHead">
        <h2>{content}</h2>
      </header>

      <img 
    
    src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2018/02/shutterstock_531384298.jpg?w=780&h=408&crop=1"
    alt="profile-img"
    className="profile-img-card2"
    />

    </div>

  
  );
};

export default BoardUser;