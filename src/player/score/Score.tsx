interface CurrentScore {
  score: number;
}
const Score = ({ score }: CurrentScore) => {
  return (
    <div className="bg-red-500 p-5 w-96 rounded-lg flex flex-col items-center justify-center">
      <span className="text-white uppercase tracking-wider font-bold text-lg mb-4">
        Current
      </span>
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
        <span className="text-xl font-semibold">{score}</span>
      </div>
    </div>
  );
};

export default Score;
