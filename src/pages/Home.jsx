import { useState } from "react";
import { Link } from "react-router-dom";
import Practice from "./Practice";

function Home() {
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

  const handleMinValueChange = (event) => {
    setMinValue(event.target.value);
  };

  const handleMaxValueChange = (event) => {
    setMaxValue(event.target.value);
  };

  return (
    <>
      <h1>What range would you like to practice?</h1>
      <p>
        Min: <input value={minValue} onChange={handleMinValueChange} />
      </p>
      <p>
        Max: <input value={maxValue} onChange={handleMaxValueChange} />
      </p>
      <Link to={`/practice?minValue=${minValue}&maxValue=${maxValue}`}>
        <button>Start</button>
      </Link>
    </>
  );
}

export default Home;
