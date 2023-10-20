import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Practice() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [userMessage, setUserMessage] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [queryParameters] = useSearchParams();

  const min = parseInt(queryParameters.get("minValue"));
  const max = parseInt(queryParameters.get("maxValue"));

  useEffect(() => {
    const num1 = getRndInteger(min, max);
    const num2 = getRndInteger(min, max);

    setFirstNumber(num1);
    setSecondNumber(num2);

    const answer = num1 * num2;

    setCorrectAnswer(answer);
  }, []);

  const submitAnswer = () => {
    if (parseInt(currentAnswer) === correctAnswer) {
      setUserMessage("Correct!");
    } else {
      setUserMessage(`Incorrect, the correct answer was ${correctAnswer}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submitAnswer();
    }
  };

  const handleInput = (event) => {
    setCurrentAnswer(event.target.value);
  };

  return (
    <>
      <h1>
        What is {firstNumber} &#215; {secondNumber}?
      </h1>
      <input autoFocus onKeyDown={handleKeyPress} onChange={handleInput} />
      <p>{userMessage}</p>
    </>
  );
}

function getRndInteger(min, max) {
  max += 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

export default Practice;
