import { useEffect, useState } from "react";
import { FaLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PersonalTypePageResult = () => {
  const navigate = useNavigate();
  const [totalScore, setTotalScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({
    title: "",
    description1: "",
    description2: "",
  });

  useEffect(() => {
    setTimeout(() => {
      const score = parseInt(localStorage.getItem("typeTotalScore"), 10) || 0;
      setTotalScore(score);
      let title = "";
      let description1 = "";
      let description2 = "";

      if (score > 30) {
        title = "できることからコツコツタイプ";
        description1 =
          "謙虚で現実的なあなたは、小さな努力の積み重ねが将来大きな成果へとつながるはずです。";
        description2 =
          "向いている投資→ライフプランニングの作成、支出の削減、保険の見直し、転職、副業";
      } else if (score >= 20) {
        title = "できることからコツコツタイプ";
        description1 =
          "謙虚で現実的なあなたは、小さな努力の積み重ねが将来大きな成果へとつながるはずです。";
        description2 =
          "向いている投資→ライフプランニングの作成、支出の削減、保険の見直し、転職、副業";
      } else if (score >= 10) {
        title = "できることからコツコツタイプ";
        description1 =
          "謙虚で現実的なあなたは、小さな努力の積み重ねが将来大きな成果へとつながるはずです。";
        description2 =
          "向いている投資→ライフプランニングの作成、支出の削減、保険の見直し、転職、副業";
      } else {
        title = "できることからコツコツタイプ";
        description1 =
          "謙虚で現実的なあなたは、小さな努力の積み重ねが将来大きな成果へとつながるはずです。";
        description2 =
          "向いている投資→ライフプランニングの作成、支出の削減、保険の見直し、転職、副業";
      }
      setResult({ title, description1, description2 });
      setLoading(false);
    }, 1000); // Simulating loading time
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center hover:!border-none bg-[#EEF2F6] p-5">
      <div className="">
        {loading ? (
          <button
            type="button"
            className="!text-2xl text-[#00c300] flex flex-col justify-center items-center !bg-[#EEF2F6]"
            disabled
          >
            <svg
              className="size-10 animate-spin "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            診断中...
          </button>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg md:w-[600px] md:min-h-[300px] text-center -mt-36">
            <h1 className="!text-3xl font-semibold text-[#00c300] mb-8">
              {result.title}
            </h1>
            <div className="text-2xl font-semibold text-[#007700] mb-8">
              【家族】×　【資金】×　【自分】×　【リスク】×
            </div>
            <p className="text-gray-600 mb-4">{result.description1}</p>
            <p className="text-gray-600 mb-4">{result.description2}</p>
            <button
              onClick={() => navigate("/personal-type")}
              className="inline-flex items-center !bg-[#00c300] hover:!bg-[#007700] text-white !py-4 !px-8 !rounded-full shadow-lg transition-transform transform hover:-translate-y-1 underline !text-xl focus:!outline-none"
            >
              <div className="mr-2 text-2xl font-bold">
                <FaLine />
              </div>
              LINEに戻る
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalTypePageResult;
