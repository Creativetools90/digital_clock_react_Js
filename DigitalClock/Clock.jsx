import { useState, useEffect } from "react";
import "./Clock.css";
function CLockJs() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const midium = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${min}:${sec} ${midium}`;
  }
  return (
    <>
      <div className="digitalCLockContainer">
        <div className="clock">
          <span className="c_span">{formatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default CLockJs;
