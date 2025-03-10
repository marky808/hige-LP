import React, { useState, useEffect } from "react";
import {
    TrendingUp,
    Shield,
    Clock,
    CheckCircle,
    ArrowRight,
    MessageCircle,
    HelpCircle,
    AlertTriangle,
    FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LineButton = ({ className = "", size = "normal" }) => (
    <button
        onClick={() => (window.location.href = "https://line.me/R/ti/p/@427cbszb")}
        className={`
      flex items-center justify-center space-x-2 
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
        <span>診断をスタート</span>
        <ArrowRight className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
    </button>
);

const LineButton2 = ({ className = "", size = "normal" }) => (
    <button
        onClick={() => (window.location.href = "https://line.me/R/ti/p/@427cbszb")}
        className={`
      flex items-center justify-center space-x-2 
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
        <span className="px-1">LINE登録で<br className="md:hidden" />無料診断</span>
        <ArrowRight className={size === "large" ? "w-6 h-6" : "w-5 h-5"} />
    </button>
);

const WarnBox1 = ({ className = "" }) => (
    <div
        className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg border border-red-100 transform hover:-translate-y-1 transition-transform"
    >
        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        <p className="text-gray-700 !text-lg md:text-xl text-center font-medium">
            なんとなくNISAやってます。。
        </p>
        <div className="mt-4 pt-4 border-t border-red-100">
            <p className="text-red-600 !text-base md:text-lg text-center font-bold">
                放置すると危険です
            </p>
        </div>
    </div>
);
const WarnBox2 = ({ className = "" }) => (
    <div
        className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg border border-red-100 transform hover:-translate-y-1 transition-transform"
    >
        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        <p className="text-gray-700 !text-lg md:text-xl text-center font-medium">
            銀行だけにたくさん貯金してます。。
        </p>
        <div className="mt-4 pt-4 border-t border-red-100">
            <p className="text-red-600 !text-base md:text-lg text-center font-bold">
                放置すると危険です
            </p>
        </div>
    </div>
);
const WarnBox3 = ({ className = "" }) => (
    <div
        className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-lg border border-red-100 transform hover:-translate-y-1 transition-transform"
    >
        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        <p className="text-gray-700 !text-lg md:text-xl text-center font-medium">
            保険入ってるけどどんなんだか<br className="md:hidden" />わかりません。。
        </p>
        <div className="mt-4 pt-4 border-t border-red-100">
            <p className="text-red-600 !text-base md:text-lg text-center font-bold">
                放置すると危険です
            </p>
        </div>
    </div>
);

const HigeLp = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        document.title = "ヒゲさんの資産形成";
    }, []);

    const features = [
        { icon: <Clock />, title: "2分で完了" },
        { icon: <CheckCircle />, title: "完全無料" },
        { icon: <Shield />, title: "プロ監修" },
    ];

    const benefits = [
        { title: "パーソナルリスク診断", icon: <TrendingUp /> },
        { title: "パーソナルタイプ診断", icon: <CheckCircle /> },
        { title: "資産形成ガイド", icon: <Shield /> },
    ];

    const warningPoints = [
        "なんとなくNISAやってます。。",
        "銀行だけにたくさん貯金してます。。",
        "保険入ってるけどどんなんだかわかりません。。",
    ];

    const faqs = [
        {
            q: "本当に無料ですか？課金とかないですか？",
            a: "はい、一切ありません。",
        },
        {
            q: "リスクがあった場合どうしたらいいですか？",
            a: "特典でお渡しするガイドをぜひ参考にしてください。必要であれば個別の説明会にもお申し込みください。",
        },
        {
            q: "確実に診断の通りになるということですか？",
            a: "経験に基づき監修しておりますので近しい結果が出る方がほとんどですが、確実性を保証、約束するものではありません。",
        },
    ];

    return (
        <div className="min-h-screen relative">
            <div className="fixed inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 -z-10"></div>
            <header className="fixed top-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="!text-base md:!text-xl font-bold text-gray-800">
                                ヒゲさんの<br className="md:hidden" />資産形成
                            </h1>
                        </div>
                        <LineButton2 className="!text-sm md:!text-base" />
                    </div>
                </div>
            </header>

            <main>
                <section className="relative pt-28 pb-16 px-2">
                    <div className="container mx-auto max-w-4xl">
                        <div
                            className={`transition-all duration-1000 transform ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                            }`}
                        >
                            <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
                                <div className="space-y-6 text-center">
                                    <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-1 mb-6">
                                        <div className="bg-white rounded-md px-4 py-1">
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 font-bold">
                                                たった2分で分かる
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="!text-5xl md:text-6xl font-extrabold mb-6">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                                            パーソナル
                                        </span>
                                        <br />
                                        <span className="text-gray-800">
                                            リスク診断
                                        </span>
                                    </h2>

                                    <p className="!text-xl md:text-3xl text-gray-600 font-medium max-w-2xl mx-auto">
                                        あなたの
                                        <span className="text-green-600 font-bold">
                                            資産形成のリスク
                                        </span>
                                        、<br />
                                        今すぐ診断します
                                    </p>
                                </div>
                            </div>

                            <div className="text-center mb-16">
                                <LineButton size="large" className="mx-auto" />
                            </div>

                            <div className="grid md:grid-cols-1 gap-4 md:gap-6 mb-16">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-4 shadow-lg border border-green-100"
                                    >
                                        <p className="text-lg font-bold text-gray-800 flex items-center justify-center">
                                            <span className="w-5 h-5 mr-2 text-green-600">
                                                {feature.icon}
                                            </span>
                                            {feature.title}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-red-100 via-white to-red-50 rounded-3xl shadow-lg p-2 mb-16">
                                <div className="relative">
                                    <div className="text-center mb-12">
                                        <div className="inline-block bg-red-100/50 backdrop-blur p-4 rounded-full mb-4">
                                            <AlertTriangle className="w-8 h-8 text-red-600" />
                                        </div>
                                        <h3 className="!text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                                            こんな人は要注意です
                                        </h3>
                                        <div className="bg-white/80 backdrop-blur rounded-2xl p-8 max-w-4xl mx-auto">
                                            <p className="!text-2xl md:text-4xl text-red-600 font-bold">
                                                気づかないうちに
                                                <br />
                                                <span className="!text-4xl md:text-5xl inline-block my-4 bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">
                                                    1000万円以上
                                                </span>
                                                <br />
                                                の差が生まれています
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-1 gap-6">
                                        {/* {warningPoints.map((point, index) => (
                                            <div
                                                key={index}
                                                className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg border border-red-100 transform hover:-translate-y-1 transition-transform"
                                            >
                                                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <AlertTriangle className="w-8 h-8 text-red-500" />
                                                </div>
                                                <p className="text-gray-700 !text-lg md:text-xl text-center font-medium">
                                                    {point}
                                                </p>
                                                <div className="mt-4 pt-4 border-t border-red-100">
                                                    <p className="text-red-600 !text-base md:text-lg text-center font-bold">
                                                        放置すると危険です
                                                    </p>
                                                </div>
                                            </div>
                                        ))} */}
                                        <WarnBox1 className="" />
                                        <WarnBox2 className="" />
                                        <WarnBox3 className="" />
                                    </div>

                                    <div className="mt-12 text-center">
                                        <div className="inline-block bg-white/90 backdrop-blur rounded-xl p-6 shadow-lg border border-red-100">
                                            <p className="!text-xl md:text-2xl text-red-600 font-bold flex items-center">
                                                <AlertTriangle className="w-8 h-8 mr-3" />
                                                お金を無駄にしている<br className="md:hidden" />かもしれません！
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-center mt-12">
                                        <LineButton
                                            size="large"
                                            className="mx-auto transform hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Benefits Section */}
                            <div className="bg-white rounded-3xl shadow-lg p-2 mb-16">
                                <div className="text-center mb-12">
                                    <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                                        <MessageCircle className="w-5 h-5 inline-block mr-2" />
                                        LINE登録特典
                                    </div>
                                    <h3 className="!text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                        今すぐ受け取れる
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                                            3つの無料特典
                                        </span>
                                    </h3>
                                    <p className="!text-base text-gray-600">
                                        LINE登録後、すぐにご利用いただけます
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-1 gap-8">
                                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                            <TrendingUp className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 text-center mb-4">
                                            パーソナルリスク診断
                                        </h4>
                                        <p className="text-gray-600 text-center mb-4">
                                            現在のあなたの潜在的なリスクを<br className="md:hidden" />診断できます
                                        </p>
                                        <div className="bg-white/80 rounded-lg p-3 text-center">
                                            <p className="text-green-600 font-bold">
                                                診断人数1000人突破！
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 text-center mb-4">
                                            パーソナルタイプ診断
                                        </h4>
                                        <p className="text-gray-600 text-center mb-4">
                                            あなたに最も適した資産形成を<br className="md:hidden" />知ることができます
                                        </p>
                                        <div className="bg-white/80 rounded-lg p-3 text-center">
                                            <p className="text-green-600 font-bold">
                                                失敗しない資産形成をサポート
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                            <FileText className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 text-center mb-4">
                                            E-BOOK
                                        </h4>
                                        <p className="text-gray-600 text-center mb-4">
                                            徹底解説
                                            <br />
                                            令和の最新版資産形成攻略ガイド
                                        </p>
                                        <div className="bg-white/80 rounded-lg p-3 text-center">
                                            <p className="text-green-600 font-bold">
                                                今なら無料でダウンロード可能！
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-12">
                                    <div className="inline-block bg-green-50 rounded-lg p-4 mb-8">
                                        <p className="text-lg text-green-800 font-bold">
                                            <span className="text-2xl">¥0</span>
                                            で全ての特典を受け取れます
                                        </p>
                                    </div>
                                    <div>
                                        <LineButton
                                            size="large"
                                            className="mx-auto transform hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl shadow-lg p-2 mb-16">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        よくある質問
                                    </h3>
                                </div>
                                <div className="space-y-6">
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 rounded-lg p-4"
                                        >
                                            <div className="flex items-start mb-3">
                                                <HelpCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                                                <p className="font-bold text-gray-800">
                                                    {faq.q}
                                                </p>
                                            </div>
                                            <p className="text-gray-600 ml-9">
                                                {faq.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-8">
                                    <LineButton
                                        size="large"
                                        className="mx-auto"
                                    />
                                </div>
                            </div>
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

export default HigeLp;
