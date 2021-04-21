import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
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
    
    src="https://thumbs.dreamstime.com/b/bienvenido-texto-del-español-de-la-recepción-112222019.jpg"
    alt="profile-img"
    className="profile-img-card2"
    />

    </div>
  );
};

export default Home;