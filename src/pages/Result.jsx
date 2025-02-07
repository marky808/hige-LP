import { useEffect, useState } from "react";
import { FaLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const [totalScore, setTotalScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({ title: "", description: "" });

  useEffect(() => {
    setTimeout(() => {
      const score = parseInt(localStorage.getItem("riskTotalScore"), 10) || 0;
      setTotalScore(score);
      let title = "";
      let description = "";

      if (score >= 30) {
        title = "非常に安心できる状態です";
        description =
          "計画もしっかりできており、将来のリスクにも十分備えられています。";
      } else if (score >= 20) {
        title = "比較的安心できる状態です";
        description = "現状はまずまずですが、定期的な見直しをおすすめします。";
      } else if (score >= 10) {
        title = "注意が必要な状態です";
        description =
          "キャッシュフローの見直しが必要です。早急な対策を検討しましょう。";
      } else {
        title = "非常にリスクが高い状態です";
        description = "今すぐ専門家に相談し、抜本的な対策を検討してください。";
      }
      setResult({ title, description });
      setLoading(false);
    }, 2000); // Simulating loading time
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[600px] min-h-[300px] text-center">
        {loading ? (
          <button type="button" className="!bg-indigo-500 ..." disabled>
            <svg
              className="mr-3 -ml-1 size-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="100"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing…
          </button>
        ) : (
          //   <div className="text-xl font-bold text-green-600 animate-pulse">
          //     診断結果を計算中...
          //   </div>
          <>
            <h1 className="!text-4xl font-semibold text-[#00c300] mb-8">
              {result.title}
            </h1>
            <div className="text-lg font-semibold text-[#007700] mb-8">
              あなたの得点: {totalScore} 点
            </div>
            <p className="text-gray-600 mb-4">{result.description}</p>
            <button
              onClick={() => navigate("/personal-risk")}
              className="inline-flex items-center !bg-[#00c300] hover:!bg-[#007700] text-white !py-4 !px-8 !rounded-full shadow-lg transition-transform transform hover:-translate-y-1 underline !text-xl"
            >
              <div className="mr-2 text-2xl font-bold">
                <FaLine />
              </div>
              LINEに戻る
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
