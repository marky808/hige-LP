import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

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

  const fadeInUpStrong = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeOutShrink = {
    hidden: { opacity: 1, scale: 1 },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleAnswer = (points) => {
    const newScore = totalScore + points;
    setTotalScore(newScore);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      localStorage.setItem("riskTotalScore", newScore);
      navigate("/result");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#e0f7e9] to-[rgb(200,240,216)] p-6">
      {questions[currentQuestionIndex].text ==
        "将来のライフイベントやリスクに対して、計画を立てていますか？" && (
        <motion.p
          variants={fadeInUpStrong}
          initial="hidden"
          animate="visible"
          className="text-[#00C300] font-bold mb-3 mt-[14px] bg-[#D8F7C5] w-full md:max-w-[700px] text-center p-3 rounded-lg"
        >
          キャッシュフローリスク
        </motion.p>
      )}
      <motion.div
        key={currentQuestionIndex}
        variants={fadeInUpStrong}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full md:max-w-[700px] bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-[#00C300] mb-4">
          {questions[currentQuestionIndex].text}
        </h2>

        <div className="space-y-3">
          <button
            onClick={() =>
              handleAnswer(questions[currentQuestionIndex].points.yes)
            }
            className="block w-full text-left !border-2 !border-[#ddd] p-4 rounded-lg !bg-[#e0f7e9] !text-black transition-transform hover:scale-102 hover:!bg-[#f5f5f5] focus:!outline-none"
          >
            はい
          </button>
          <button
            onClick={() =>
              handleAnswer(questions[currentQuestionIndex].points.no)
            }
            className="block w-full text-left !border-2 !border-[#ddd] p-4 rounded-lg !bg-[#e0f7e9] !text-black transition-transform hover:scale-102 hover:!bg-[#f5f5f5] focus:!outline-none"
          >
            いいえ
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Quiz;
