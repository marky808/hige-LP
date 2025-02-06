import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PersonalRisk = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "パーソナルリスク診断 - あなたの未来を守る";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-11/12 max-w-xl bg-white rounded-lg shadow-lg overflow-hidden animate-fadeInUp">
        {/* Header */}
        <header className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center py-10">
          <h1 className="text-3xl font-bold">パーソナルリスク診断</h1>
          <p className="text-lg">あなたの未来を守るための第一歩</p>
        </header>

        {/* Main Content */}
        <main className="p-8 text-center">
          <div className="flex justify-around flex-wrap space-y-4 md:space-y-0">
            <Feature icon="bolt" text="即時診断" />
            <Feature icon="shield-alt" text="リスク評価" />
            <Feature icon="heart" text="無料で安心" />
          </div>

          <p className="text-gray-700 my-6">
            今すぐあなたのキャッシュフローのリスクをチェックし、将来の不安要素を解消しましょう。
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/quiz")}
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition-all"
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
      <i class="fa-solid fa-bolt fa-fw fa-2x"></i>
      {/* <i className={`fas fa-${icon} text-green-500 text-4xl`}></i> */}
      <span className="text-green-700 font-medium">{text}</span>
    </div>
  );
}
