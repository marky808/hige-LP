import React from "react";
import { useNavigate } from "react-router-dom";

const EBook = () => {
    const navigate = useNavigate();
    const handleNavigation = (chapter) => {
        navigate(`/ebook/${chapter}`);
    };
    return (
        <div className="w-200 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-blue-900 mb-4 pb-2">
                        徹底解説
                    </h3>
                    <h3 className="text-3xl font-semibold text-blue-900 pb-1">
                        令和の最新版資産形成攻略ガイド
                    </h3>
                    <div className="border-b-4 border-blue-700 w-full mx-auto mt-4"></div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6 text-left">
                        目次
                    </h3>
                    <ul className="space-y-4 text-left pl-6">
                        <li
                            className="text-lg text-blue-800 hover:text-blue-600 transition-colors"
                        >
                            <a onClick={() => handleNavigation('chapter0')}>第0章 お金があればしあわせ？</a>
                        </li>
                        <li
                            className="text-lg text-blue-800 hover:text-blue-600 transition-colors"
                        >
                            <a onClick={() => handleNavigation('chapter1')}>第1章 資産形成に正解はあるか？</a>
                        </li>
                        <li
                            className="text-lg text-blue-800 hover:text-blue-600 transition-colors"
                        >
                            <a onClick={() => handleNavigation('chapter2')}>第2章 会社経営と家族経営</a>
                        </li>
                        <li
                            className="text-lg text-blue-800 hover:text-blue-600 transition-colors"
                        >
                            <a onClick={() => handleNavigation('chapter3')}>第3章 よくある失敗例と伝えたいこと</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EBook;
