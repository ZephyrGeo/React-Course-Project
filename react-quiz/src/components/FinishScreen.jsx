function FinishScreen({ points, maxPOssiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPOssiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPOssiblePoints} (
        {Math.ceil(percentage)}% )
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
export default FinishScreen;
