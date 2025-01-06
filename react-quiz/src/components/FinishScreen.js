function FinishScreen({points, maxPOssiblePoints, highscore}) {
  const percentage = (points / maxPOssiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPOssiblePoints} (
        {Math.ceil(percentage)}% )
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
}
export default FinishScreen;
