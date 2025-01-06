function Options({ options, answer, correctOption, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className="options">
        {options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""}`}
            key={option}
            disabled={answer !== null}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
