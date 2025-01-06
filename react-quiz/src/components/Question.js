import Options from "./Options";
function Question({ question, answer, dispatch }) {
  const {
    id,
    question: questionText,
    options,
    correctOption,
    points,
  } = question;
  return (
    <div>
      <h4>{questionText}</h4>
      <Options
        options={options}
        answer={answer}
        dispatch={dispatch}
        correctOption={correctOption}
      />
    </div>
  );
}

export default Question;
