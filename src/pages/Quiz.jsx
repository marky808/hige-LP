import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    text: "将来のライフイベントやリスクに対して、計画を立てていますか？",
    points: { yes: 7, no: 0 },
  },
  { text: "毎月の収支をしっかり把握していますか？", points: { yes: 7, no: 0 } },
  { text: "毎月の貯蓄額を決めていますか？", points: { yes: 7, no: 0 } },
  { text: "銀行以外の貯蓄手段を利用していますか？", points: { yes: 7, no: 0 } },
  { text: "自宅以外に資産運用の拠点がありますか？", points: { yes: 7, no: 0 } },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (points) => {
    setTotalScore(totalScore + points);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      localStorage.setItem("riskTotalScore", totalScore);
      navigate("/result"); // Redirect to result page
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#e0f7e9] to-[rgb(200,240,216)] p-6">
      {questions[currentQuestionIndex].text ==
        "将来のライフイベントやリスクに対して、計画を立てていますか？" && (
        <p className="text-[#00C300] font-bold mb-7">キャッシュフローリスク</p>
      )}
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg animate-fadeInUp">
        <h2 className="text-2xl font-bold text-[#00C300] mb-4">
          {questions[currentQuestionIndex].text}
        </h2>

        <div className="space-y-3">
          <button
            onClick={() =>
              handleAnswer(questions[currentQuestionIndex].points.yes)
            }
            className="block w-full text-left !border p-4 rounded-lg bg-green-50  transition-transform hover:scale-102 hover:bg-gray-200 "
          >
            はい
          </button>
          <button
            onClick={() =>
              handleAnswer(questions[currentQuestionIndex].points.no)
            }
            className="block w-full text-left p-4 rounded-lg bg-gray-50  transition-transform hover:scale-102 hover:bg-gray-200"
          >
            いいえ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
