import React, { useState } from "react";
import "./style.css";

const Question = ({
  variant,
  question,
  options,
  index,
  nofQuestions,
  goNext,
  scroll,
  setFinish,
}) => {
  const [selectedOption, setSelectedOption] = useState(undefined);

  return (
    <div className="question-container">
      <p className="qno">QUESTION {index + 1}</p>
      <h1>{question}</h1>
      {variant === "text" ? (
        <div className="options-container">
          {options.map((val, index) => (
            <p
              className={`option ${
                selectedOption === index ? "active" : "inactive"
              }`}
              onClick={() => setSelectedOption(index)}
            >
              {val}
            </p>
          ))}
        </div>
      ) : (
        <div className="options-container-image">
          {options.map((val, index) => (
            <img
              alt={index}
              className={`option ${
                selectedOption === index ? "active" : "inactive"
              }`}
              src={val}
              onClick={() => setSelectedOption(index)}
            />
          ))}
        </div>
      )}
      <div
        className={`answer-button ${
          selectedOption === undefined ? "inactive" : "active"
        }`}
        onClick={
          selectedOption === undefined
            ? void 0
            : nofQuestions === index + 1
            ? setFinish
            : goNext
        }
      >
        {nofQuestions === index + 1 ? "Submit and show results" : "Submit"}
      </div>
    </div>
  );
};

export default Question;
