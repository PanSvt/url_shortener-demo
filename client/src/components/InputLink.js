import { useState } from "react";

const InputLink = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter URL"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="button" onClick={handleClick}>
          Shorten
        </button>
      </div>
    </div>
  );
};

export default InputLink;
