import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Practice() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [queryParameters] = useSearchParams();

  const min = parseInt(queryParameters.get("minValue"));
  const max = parseInt(queryParameters.get("maxValue"));

  useEffect(() => {
    setFirstNumber(getRndInteger(min, max));
    setSecondNumber(getRndInteger(min, max));
    setCorrectAnswer(firstNumber * secondNumber);
  }, []);

  const submitAnswer = () => {

  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      submitAnswer();
    }
  }

  return (
    <>
      <h1>
        What is {firstNumber} &#215; {secondNumber}?
      </h1>
      <input autoFocus onKeyDown={handleKeyPress} />
    </>
  );
}

function getRndInteger(min, max) {
  max = max + 1
  return Math.floor(Math.random() * (max - min)) + min;
}

export default Practice;
