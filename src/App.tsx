import { useState } from "react";
import "./App.css";
import { VOICE_LINES } from "./constants";

function App() {
  const [voiceLine, setVoiceLine] = useState<string>("Click button to get new voice line");

  const fetchNewVoiceLine = () => {
    const randomIndex = Math.floor(Math.random() * (VOICE_LINES.length - 0 + 1));
    setVoiceLine(() => VOICE_LINES[randomIndex]);
  };

  return (
    <>
      <h1>{voiceLine}</h1>
      <div className="card">
        <button onClick={fetchNewVoiceLine}>get new voice line</button>
      </div>
    </>
  );
}

export default App;
