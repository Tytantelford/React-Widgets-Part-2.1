import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let timer;
    if (mounted) {
      timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
    } else {
      hideClock(timer);
    }

    return () => hideClock(timer);
  }, [mounted]);

  const handleMountToggle = () => {
    setMounted(!mounted);
  };
  const hideClock = (timer) => {
    clearInterval(timer);
  };

  return (
    <div>
      {mounted && (
        <div>
          <p>{time.toLocaleTimeString()}</p>
        </div>
      )}
      <button onClick={handleMountToggle}>
        {mounted ? "Unmount" : "Mount"}
      </button>
    </div>
  );
};

export default Clock;
