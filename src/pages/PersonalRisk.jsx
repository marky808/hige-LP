import { useEffect } from "react";
import { FaHeart, FaShieldAlt } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PersonalRisk = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "パーソナルリスク診断 - あなたの未来を守る";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#D0F2DD]">
      <div className="w-11/12 max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeInUp">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#00c300] to-[#009900] text-white text-center !py-[40px] !px-6">
          <p className="text-4xl font-bold mb-6">パーソナルタイプ診断</p>
          <p className="text-lg">あなたの未来を守るための第一歩</p>
        </header>
        {/* Main Content */}
        <main className="px-4 py-8 text-center">
          <div className="flex justify-around flex-wrap space-y-4 md:space-y-0">
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
                  <FaShieldAlt />
                </div>
              }
              text="リスク評価"
            />
            <Feature
              icon={
                <div className="text-[#00C300] text-4xl">
                  <FaHeart />
                </div>
              }
              text="無料で安心"
            />
          </div>

          <p className="text-gray-700 my-6">
            今すぐあなたのキャッシュフローのリスクをチェックし、将来の不安要素を解消しましょう。
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/quiz")}
            className="!bg-[#00c300] text-white font-semibold !py-4 !px-8 !rounded-full shadow-lg hover:bg-[#009900] transition-all focus:!outline-none"
          >
            診断を始める
          </button>
        </main>

        {/* Footer */}
        <footer className="text-center py-4 text-gray-500 text-sm">
          &copy; 2025 パーソナルリスク診断 All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default PersonalRisk;

function Feature({ icon, text }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      {icon}
      {/* <i className={`fas fa-${icon} text-green-500 text-4xl`}></i> */}
      <span className="text-[#00C300] font-medium">{text}</span>
    </div>
  );
}
