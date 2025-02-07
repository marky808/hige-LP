import { useEffect } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "../assets/css/animation.css";

const PersonalType = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "パーソナルリスク診断 - あなたの未来を守る";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#D0F2DD] animated">
      <div className="w-11/12 max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <header
          className="bg-gradient-to-r from-[#00c300] to-[#009900] text-white text-center !py-[40px] !px-6 animated"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-4xl font-bold mb-6">パーソナルタイプ診断</p>
          <p className="text-lg">
            あなたの個性を見抜き、未来への道しるべを発見しよう
          </p>
        </header>
        {/* Main Content */}
        <main className="px-4 py-8 text-center">
          <div
            className="flex justify-around flex-wrap space-y-4 md:space-y-0 animated"
            style={{ animationDelay: "0.4s" }}
          >
            <Feature
              icon={
                <div className="text-[#00C300] text-4xl">
                  <FaBolt />
                </div>
              }
              text="即時診断"
            />
            <Feature
              icon={
                <div className="text-[#00C300] text-4xl">
                  <FaUser />
                </div>
              }
              text="16タイプ解析"
            />
            <Feature
              icon={
                <div className="text-[#00C300] text-4xl">
                  <FaHeart />
                </div>
              }
              text="無料で体験"
            />
          </div>

          <p className="text-gray-700 my-6">
            あなたのライフスタイルや価値観、行動パターンに基づいて16通りのタイプに分類します。
          </p>
          <p className="text-gray-700 my-6">
            自分自身の強みや改善点を把握し、より良い未来への第一歩を踏み出しましょう。
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/personal-type/quiz")}
            className="!bg-[#00c300] text-white font-semibold !py-4 !px-8 !rounded-full shadow-lg hover:bg-[#009900] transition-all focus:!outline-none animated"
            style={{ animationDelay: "0.6s" }}
          >
            診断を始める
          </button>
        </main>

        {/* Footer */}
        <footer
          className="text-center py-4 text-gray-500 text-sm animated"
          style={{ animationDelay: "0.8s" }}
        >
          &copy; 2025 パーソナルタイプ診断 All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default PersonalType;

function Feature({ icon, text }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      {icon}
      {/* <i className={`fas fa-${icon} text-green-500 text-4xl`}></i> */}
      <span className="text-[#00C300] font-medium">{text}</span>
    </div>
  );
}
