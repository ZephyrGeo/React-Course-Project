import Options from "./Options";
function Question({ question }) {
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
      <Options options={options} />
    </div>
  );
}

export default Question;
