export default function ScoreBoard(props:any){
    const {score,question} = props;

    return (
        <div>
          <h2>Score</h2>
          <p>Total Questions: {question}</p>
          <p>Score: {score}</p>
        </div>
      );

}