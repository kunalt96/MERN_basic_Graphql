import React, { useState, useEffect, useRef } from 'react';

function PracRefHook() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      Hook Timer - {timer}{' '}
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
}

export default PracRefHook;
