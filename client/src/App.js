import { useState } from "react";
import "./App.css";
import InputLink from "./components/InputLink";
import ShortenerResult from "./components/ShortenerResult";
import BackgroundAnimate from "./utils/BackgroundAnimate";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputLink setInputValue={setInputValue} />
      <ShortenerResult inputValue={inputValue} />
      <BackgroundAnimate />
    </div>
  );
}

export default App;
