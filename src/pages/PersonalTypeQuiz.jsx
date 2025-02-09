import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const questions = [
  {
    category: "家族",
    text: "現在ご結婚されてますか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "家族",
    text: "未成年のお子さんはいらっしゃいますか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "家族",
    text: "あなたの収入がないと家計が成り立ちませんか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "家族",
    text: "自分にもしものことがあった時、家族の生活が不安ですか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "家族",
    text: "自宅はあなた名義の持ち家ですか？",
    points: { yes: 7, no: 0 } },
  {
    category: "資金",
    text: "現在500万以上の資産はありますか？",
    points: { yes: 7, no: 0 } },
  {
    category: "資金",
    text: "世帯年収は1000万円以上ですか？",
    points: { yes: 7, no: 0 } },
  {
    category: "資金",
    text: "特に大きな出費がない月は毎月5万円以上の貯蓄はできますか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "資金",
    text: "いまの収入は安定していますか？",
    points: { yes: 7, no: 0 } },
  {
    category: "資金",
    text: "職場が潰れても一年以内には収入に戻せますか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "自分",
    text: "あなたは金融について詳しいですか？",
    points: { yes: 7, no: 0 } },
  {
    category: "自分",
    text: "投資や保険に関する知識を自ら身につけたいと思いますか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "自分",
    text: "資産運用中の大きな下落にも冷静に対応できますか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "自分",
    text: "ライフステージの変化に合わせ、資産を見直すことができますか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "自分",
    text: "全て自分で解決したいと思いますか？",
    points: { yes: 7, no: 0 } },
  {
    category: "リスク",
    text: "リスクはあっても早く大きく資産が増える投資に魅力を感じますか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "リスク",
    text: "100倍になる可能性がある投資は魅力的ですか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "リスク",
    text: "投資で損失が出ても自己責任で受け入れられますか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "リスク",
    text: "投資に失敗しても取り返すチャンスがあると思いますか？",
    points: { yes: 7, no: 0 },
  },
  {
    category: "リスク",
    text: "自分の資産を客観的に扱えますか？",
    points: { yes: 7, no: 0 }
  },
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
      navigate("/personal-type/result");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#e0f7e9] to-[rgb(200,240,216)] p-6">
      <div
        className="flex flex-col items-center min-h-screen p-6 animated-quiz"
        style={{ animationDelay: "0.2s" }}
      >
        <motion.p
          variants={fadeInUpStrong}
          initial="hidden"
          animate="visible"
          className="text-[#00C300] font-bold mt-7 mb-3 bg-[#D8F7C5] w-full md:max-w-2xl text-center p-3 rounded-lg"
        >
          {questions[currentQuestionIndex].category}
        </motion.p>

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
          <div className="space-y-3 ">
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

        <motion.p
          variants={fadeInUpStrong}
          initial="hidden"
          animate="visible"
          className="text-[#00C300] font-bold mb-3 mt-[14px] bg-[#D8F7C5] w-full md:max-w-[700px] text-center p-3 rounded-lg"
        >
          {currentQuestionIndex + 1} / {questions.length}
        </motion.p>
      </div>
    </div>
  );
};

export default PersonalTypePageQuiz;
