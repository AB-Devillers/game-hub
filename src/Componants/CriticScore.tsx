interface props {
  score: number;
}

const CriticScore = ({ score }: props) => {
  const color =
    score > 80 ? "text-green-300" : score > 60 ? "text-yellow-700" : "";
  return (
    <span
      className={`bg-gray-500 w-6 h-5 rounded ${color} text-sm 
    flex items-center justify-center`}
    >
      {score}
    </span>
  );
};

export default CriticScore;
