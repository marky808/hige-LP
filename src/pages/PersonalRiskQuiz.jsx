import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const questions = [
  {
    category: "自分のキャッシュフローについて",
    text: "将来のライフイベントやリスクに対して計画を立てている",
    options: [
      { label: "しっかり立てている", point: 7 },
      { label: "なんとなく立てている", point: 3 },
      { label: "全く立てていない", point: 0 }
    ]
  },
  {
    category: "自分のキャッシュフローについて",
    text: "毎月の収入や支出がどのくらいなのか",
    options: [
      { label: "しっかり把握している", point: 7 },
      { label: "なんとなく把握している", point: 3 },
      { label: "把握していない", point: 0 }
    ]
  },
  {
    category: "自分のキャッシュフローについて",
    text: "毎月貯蓄をする金額は",
    options: [
      { label: "しっかり決めている", point: 7 },
      { label: "余った分は貯蓄している", point: 3 },
      { label: "あまりできていない", point: 0 }
    ]
  },
  {
    category: "投資について(NISA、イデコ、積立保険等)",
    text: "銀行以外の毎月の貯蓄の選択肢は",
    options: [
      { label: "積立をしている", point: 7 },
      { label: "検討している", point: 2 },
      { label: "何もしていない", point: 0 }
    ]
  },
  {
    category: "投資について(NISA、イデコ、積立保険等)",
    text: "銀行以外の預金の置き場所は",
    options: [
      { label: "銀行以外にも資産があり運用している", point: 7 },
      { label: "検討している", point: 2 },
      { label: "銀行のみ", point: 0 }
    ]
  },
  {
    category: "投資について(NISA、イデコ、積立保険等)",
    text: "いましている投資を選んだ理由",
    options: [
      { label: "明確になんのためと回答することができる", point: 7 },
      { label: "なんとなく選んでいる", point: 2 },
      { label: "何もしていない", point: 0 }
    ]
  },
  {
    category: "投資について(NISA、イデコ、積立保険等)",
    text: "投資に関してわからないことや困ったことがある時",
    options: [
      { label: "信頼して相談できる相手がいる", point: 7 },
      { label: "自分で解決できる", point: 5 },
      { label: "相談できる人もいないし知識もない", point: 0 }
    ]
  },
  {
    category: "保険について",
    text: "今加入している保険の内容は",
    options: [
      { label: "掛け金や保障額を明確に回答できる(明確に加入の不要性を回答できる)", point: 7 },
      { label: "よくわからない", point: 2 },
      { label: "加入していない", point: 0 }
    ]
  },
  {
    category: "保険について",
    text: "今加入している保険の目的は",
    options: [
      { label: "なんの目的か明確に回答できる(明確に加入の不要性を回答できる)", point: 7 },
      { label: "なんとなく回答できる", point: 3 },
      { label: "加入していない", point: 0 }
    ]
  },
  {
    category: "保険について",
    text: "今加入している保険を見直していない期間は",
    options: [
      { label: "0〜3年(明確な理由があり加入していない)", point: 7 },
      { label: "4〜10年", point: 4 },
      { label: "それ以上", point: 2 },
      { label: "加入していない", point: 0 }
    ]
  },
  {
    category: "その他",
    text: "情報をアップデートする時の手段は",
    options: [
      { label: "その道の専門家やプロ", point: 7 },
      { label: "新聞、ニュース、書籍", point: 5 },
      { label: "YouTubeやインスタなどの SNS", point: 1 }
    ]
  },
  {
    category: "その他",
    text: "お金や将来のことに対して",
    options: [
      { label: "プロと相談して考えている", point: 7 },
      { label: "自分で責任を持って全て判断する", point: 6 },
      { label: "妻や夫に任せている", point: 4 },
      { label: "親や友人など誰かに相談しないと決められない", point: 1 },
      { label: "考えたことがない", point: 0 }
    ]
  },
  {
    category: "その他",
    text: "仕事以外の時間は",
    options: [
      { label: "勉強や副業をする時間", point: 7 },
      { label: "家族との時間や自分の体を癒やす時間", point: 5 },
      { label: "友人との時間や自分の趣味などの娯楽時間", point: 1 }
    ]
  },
  {
    category: "その他",
    text: "将来への不安は",
    options: [
      { label: "すでに対策をしている", point: 7 },
      { label: "全く不安はない", point: 3 },
      { label: "漠然とした不安はあるが放置している", point: 0 }
    ]
  }
];

const PersonalRiskQuiz = () => {
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
      <motion.p
          variants={fadeInUpStrong}
          initial="hidden"
          animate="visible"
          className="text-[#00C300] font-bold mb-3 mt-[14px] bg-[#D8F7C5] w-full md:max-w-[700px] text-center p-3 rounded-lg"
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

        <div className="space-y-3">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() =>
                handleAnswer(option.point)
              }
              className="block w-full text-left !border-2 !border-[#ddd] p-4 rounded-lg !bg-[#e0f7e9] !text-black transition-transform hover:scale-102 hover:!bg-[#f5f5f5] focus:!outline-none"
            >
              {option.label}
            </button>
          ))}
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
  );
};

export default PersonalRiskQuiz;
