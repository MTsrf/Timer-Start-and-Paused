import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(true);
  const [check, setCheck] = useState(true);
  useEffect(() => {
    let interval = null;
    if (active && paused == false) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [active, paused]);
  const start = () => {
    if (check) {
      setActive(true);
      setPaused(false);
    } else {
      setPaused(!paused);
    }
    setCheck(!check);
  };
  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={start}>{check ? "Start" : "Pause"}</button>
    </div>
  );
}
