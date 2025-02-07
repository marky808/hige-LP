import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    text: "1. 現在ご結婚されてますか？",
    points: { yes: 7, no: 0 },
  },
  {
    text: "2. 未成年のお子さんはいらっしゃいますか？",
    points: { yes: 7, no: 0 },
  },
  {
    text: "3. あなたの収入がないと家計が成り立ちませんか？",
    points: { yes: 7, no: 0 },
  },
  {
    text: "4. 自分にもしものことがあった時、家族の生活が不安ですか？",
    points: { yes: 7, no: 0 },
  },
  { text: "5. 自宅はあなた名義の持ち家ですか？", points: { yes: 7, no: 0 } },
  { text: "6. 現在500万以上の資産はありますか？", points: { yes: 7, no: 0 } },
  { text: "7. 世帯年収は1000万円以上ですか？", points: { yes: 7, no: 0 } },
  {
    text: "8. 特に大きな出費がない月は毎月5万円以上の貯蓄はできますか？",
    points: { yes: 7, no: 0 },
  },
  { text: "9. いまの収入は安定していますか？", points: { yes: 7, no: 0 } },
  {
    text: "10. 職場が潰れても一年以内には収入に戻せますか？",
    points: { yes: 7, no: 0 },
  },
  { text: "11. あなたは金融について詳しいですか？", points: { yes: 7, no: 0 } },
  { text: "5. 自宅はあなた名義の持ち家ですか？", points: { yes: 7, no: 0 } },
  { text: "5. 自宅はあなた名義の持ち家ですか？", points: { yes: 7, no: 0 } },
  { text: "5. 自宅はあなた名義の持ち家ですか？", points: { yes: 7, no: 0 } },
  { text: "5. 自宅はあなた名義の持ち家ですか？", points: { yes: 7, no: 0 } },
  { text: "5. 自宅はあなた名義の持ち家ですか？", points: { yes: 7, no: 0 } },
  { text: "5. 自宅はあなた名義の持ち家ですか？", points: { yes: 7, no: 0 } },
  { text: "5. 自宅はあなた名義の持ち家ですか？", points: { yes: 7, no: 0 } },
  { text: "5. 自宅はあなた名義の持ち家ですか？", points: { yes: 7, no: 0 } },
  { text: "5. 自宅はあなた名義の持ち家ですか？", points: { yes: 7, no: 0 } },
];

const PersonalTypePageQuiz = () => {
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
        "1. 現在ご結婚されてますか？" && (
        <p className="text-[#00C300] font-bold my-7">家族</p>
      )}
      {questions[currentQuestionIndex].text ==
        "6. 現在500万以上の資産はありますか？" && (
        <p className="text-[#00C300] font-bold my-7">資金</p>
      )}
      {questions[currentQuestionIndex].text ==
        "11. あなたは金融について詳しいですか？" && (
        <p className="text-[#00C300] font-bold my-7">自分</p>
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
            className="block w-full text-left border p-4 rounded-lg bg-green-200  transition-transform hover:scale-102 hover:bg-gray-200 focus:!outline-none"
          >
            はい
          </button>
          <button
            onClick={() =>
              handleAnswer(questions[currentQuestionIndex].points.no)
            }
            className="block w-full text-left p-4 rounded-lg bg-[#e0f7e9]  transition-transform hover:scale-102 hover:!bg-[#f5f5f5] focus:!outline-none"
          >
            いいえ
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalTypePageQuiz;
