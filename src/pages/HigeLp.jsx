import React, { useState, useEffect } from "react";
import {
    TrendingUp,
    ArrowRight,
    MessageCircle,
    CheckCircle,
    AlertTriangle,
    FileText,
    HelpCircle,
} from "lucide-react";

const LineButton = ({ className = "", size = "normal" }) => (
    <button
    className={`
      flex items-center justify-center space-x-3
      ${size === "large" ? "px-8 py-4 !text-xl" : "px-6 py-3 text-base"}
      !bg-green-500 hover:bg-green-600 
      text-white font-bold !rounded-full 
      shadow-lg hover:shadow-xl 
      transform hover:scale-105 
      border-2 border-transparent hover:!border-green-500
      focus:!outline-none
      transition-all duration-300
      ${className}
  `}
    >
        <MessageCircle className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
        <span>LINE登録で無料診断</span>
        <ArrowRight className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
    </button>
);

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const faqs = [
        {
            question: "本当に無料ですか？課金とかないですか？",
            answer: "はい、一切ありません",
        },
        {
            question: "リスクがあった場合どうしたらいいですか？",
            answer: "特典でお渡しするガイドをぜひ参考にしてください。必要であれば個別の説明会にもお申し込みください",
        },
        {
            question: "確実に診断の通りになるということですか？",
            answer: "経験に基づき監修しておりますので近しい結果が出る方がほとんどですが、確実性を保証、約束するものではありません",
        },
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
            {/* Fixed Header */}
            <header className="fixed top-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-xl font-bold text-gray-800">
                                ヒゲさんの資産形成
                            </h1>
                        </div>
                        <LineButton />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 pt-24 pb-16">
                <section className="max-w-4xl mx-auto mb-20">
                    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-3xl shadow-xl p-8 md:p-12">
                        <div className="text-center space-y-6">
                            <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-1">
                                <div className="bg-white rounded-md px-4 py-1">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 font-bold">
                                        たった2分で分かる
                                    </span>
                                </div>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-extrabold">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                                    パーソナル
                                </span>
                                <br />
                                <span className="text-gray-800">
                                    リスク診断
                                </span>
                            </h2>
                            <p className="text-xl md:text-3xl text-gray-600 font-medium max-w-2xl mx-auto">
                                あなたの
                                <span className="text-green-600 font-bold">
                                    資産形成のリスク
                                </span>
                                、
                                <br className="md:hidden" />
                                今すぐ診断します
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <LineButton size="large" className="mx-auto" />
                    </div>
                </section>

                {/* Part 2 */}
                <section className="max-w-4xl mx-auto mb-20">
                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
                                何を診断できるの？
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <p className="text-gray-700 text-lg">
                                        業界歴10年の私が作成したいくつかの質問に答えていただくだけであなたの資産形成や貯蓄の仕方を無料で採点し、リスクを把握することができます
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                    <p className="text-gray-700 text-lg">
                                        リスクがあることを知っていれば節約したり副業したり、貯蓄したりさまざまな対策を打つことができます
                                    </p>
                                </div>
                                <div className="flex items-start space-x-4 p-6 bg-yellow-50 rounded-xl">
                                    <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                                    <p className="text-gray-700 text-lg">
                                        将来「知らなかった…」とならないようにこの診断を提供しています
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <LineButton size="large" className="mx-auto" />
                    </div>
                </section>

                {/* Part 3 */}
                <section className="max-w-4xl mx-auto mb-20">
                    <div className="bg-gradient-to-br from-red-100 via-white to-red-50 rounded-3xl shadow-lg p-8 md:p-12">
                        <div className="text-center mb-12">
                            <div className="inline-block bg-red-100/50 backdrop-blur p-4 rounded-full mb-4">
                                <AlertTriangle className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                                こんな人は要注意です
                            </h3>
                            <p className="text-3xl md:text-4xl text-red-600 font-bold">
                                気づかないうちに <br />
                                <span className="text-4xl md:text-5xl inline-block my-4 bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">
                                    1000万円以上
                                </span>{" "}
                                の差が生まれています
                            </p>
                        </div>
                    </div>
                </section>

                {/* Part 4 */}
                <section className="max-w-4xl mx-auto mb-20">
                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                        <div className="text-center mb-12">
                            <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                                <MessageCircle className="w-5 h-5 inline-block mr-2" />
                                LINE登録特典
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                今すぐ受け取れる
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                                    3つの無料特典
                                </span>
                            </h3>
                            <p className="text-xl text-gray-600">
                                LINE登録後、すぐにご利用いただけます
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                "パーソナルリスク診断",
                                "パーソナルタイプ診断",
                                "E-BOOK",
                            ].map((title, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all"
                                >
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                        {index === 0 ? (
                                            <TrendingUp className="w-8 h-8 text-green-600" />
                                        ) : index === 1 ? (
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        ) : (
                                            <FileText className="w-8 h-8 text-green-600" />
                                        )}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800 text-center mb-4">
                                        {title}
                                    </h4>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <LineButton
                                size="large"
                                className="mx-auto transform hover:scale-110"
                            />
                        </div>
                    </div>
                </section>

                {/* Part 5 */}
                <section className="max-w-4xl mx-auto mb-20">
                    <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                よくある質問
                            </h3>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-lg p-6"
                                    >
                                        <div className="flex items-start mb-3">
                                            <HelpCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                                            <p className="font-bold text-gray-800">
                                                {faq.question}
                                            </p>
                                        </div>
                                        <p className="text-gray-600 ml-9">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <LineButton size="large" className="mx-auto" />
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                            <TrendingUp className="w-6 h-6 text-gray-800" />
                        </div>
                        <p className="text-lg font-bold">ヒゲさんの資産形成</p>
                    </div>
                    <p className="text-sm text-gray-400">
                        &copy; 2025 All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
