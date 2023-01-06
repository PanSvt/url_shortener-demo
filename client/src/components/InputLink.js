import React from "react";

const InputLink = () => {
  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input type="text" placeholder="Enter URL" />
        <button className="button" onClick={(e) => e.preventDefault()}>
          Shorten
        </button>
      </div>
    </div>
  );
};

export default InputLink;
