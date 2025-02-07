import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

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
  {
    text: "12. 投資や保険に関する知識を自ら身につけたいと思いますか？",
    points: { yes: 7, no: 0 },
  },
  {
    text: "13. 資産運用中の大きな下落にも冷静に対応できますか？",
    points: { yes: 7, no: 0 },
  },
  {
    text: "14. ライフステージの変化に合わせ、資産を見直すことができますか？",
    points: { yes: 7, no: 0 },
  },
  { text: "15. 全て自分で解決したいと思いますか？", points: { yes: 7, no: 0 } },
  {
    text: "16. リスクはあっても早く大きく資産が増える投資に魅力を感じますか？",
    points: { yes: 7, no: 0 },
  },
  {
    text: "17. 100倍になる可能性がある投資は魅力的ですか？",
    points: { yes: 7, no: 0 },
  },
  {
    text: "18. 投資で損失が出ても自己責任で受け入れられますか？",
    points: { yes: 7, no: 0 },
  },
  {
    text: "19. 投資に失敗しても取り返すチャンスがあると思いますか？",
    points: { yes: 7, no: 0 },
  },
  { text: "20. 自分の資産を客観的に扱えますか？", points: { yes: 7, no: 0 } },
];

const PersonalTypePageQuiz = () => {
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
    setTotalScore(totalScore + points);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      localStorage.setItem("typeTotalScore", totalScore);
      navigate("/personal-type/result"); // Redirect to result page
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#e0f7e9] to-[rgb(200,240,216)] p-6">
      <div
        className="flex flex-col items-center min-h-screen p-6 animated-quiz"
        style={{ animationDelay: "0.2s" }}
      >
        {questions[currentQuestionIndex].text ==
          "1. 現在ご結婚されてますか？" && (
          <motion.p
            variants={fadeInUpStrong}
            initial="hidden"
            animate="visible"
            className="text-[#00C300] font-bold mt-7 mb-3 bg-[#D8F7C5] w-full md:max-w-2xl text-center p-3 rounded-lg"
          >
            家族
          </motion.p>
        )}
        {questions[currentQuestionIndex].text ==
          "6. 現在500万以上の資産はありますか？" && (
          <motion.p
            variants={fadeInUpStrong}
            initial="hidden"
            animate="visible"
            className="text-[#00C300] font-bold mt-7 mb-3 bg-[#D8F7C5] w-full md:max-w-2xl text-center p-3 rounded-lg"
          >
            資金
          </motion.p>
        )}
        {questions[currentQuestionIndex].text ==
          "11. あなたは金融について詳しいですか？" && (
          <motion.p
            variants={fadeInUpStrong}
            initial="hidden"
            animate="visible"
            className="text-[#00C300] font-bold mt-7 mb-3 bg-[#D8F7C5] w-full md:max-w-2xl text-center p-3 rounded-lg"
          >
            自分
          </motion.p>
        )}
        {questions[currentQuestionIndex].text ==
          "16. リスクはあっても早く大きく資産が増える投資に魅力を感じますか？" && (
          <motion.p
            variants={fadeInUpStrong}
            initial="hidden"
            animate="visible"
            className="text-[#00C300] font-bold mt-7 mb-3 bg-[#D8F7C5] w-full md:max-w-2xl text-center p-3 rounded-lg"
          >
            リスク
          </motion.p>
        )}
        <motion.div
          key={currentQuestionIndex}
          variants={fadeInUpStrong}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-[#00C300] mb-4">
            {questions[currentQuestionIndex].text}
          </h2>
          <div className="space-y-3 ">
            <button
              onClick={() =>
                handleAnswer(questions[currentQuestionIndex].points.yes)
              }
              className="block w-full text-left !border-2 !border-[#ddd] p-4 rounded-lg bg-[#e0f7e9]  transition-transform hover:scale-102 hover:!bg-[#f5f5f5] focus:!outline-none"
            >
              はい
            </button>
            <button
              onClick={() =>
                handleAnswer(questions[currentQuestionIndex].points.no)
              }
              className="block w-full text-left !border-2 !border-[#ddd] p-4 rounded-lg bg-[#e0f7e9]  transition-transform hover:scale-102 hover:!bg-[#f5f5f5] focus:!outline-none"
            >
              いいえ
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalTypePageQuiz;
