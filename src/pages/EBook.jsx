import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/ebook.module.css";

const EBook = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "E-BOOK";
      }, []);
    const handleNavigation = (chapter) => {
        navigate(`/ebook/${chapter}`);
    };
    return (
        <div className="bg-[#f7fafc] min-h-screen p-5 flex justify-center items-start px-4">
            <div className="max-w-3xl w-[800px] mx-auto bg-white rounded-lg shadow-lg p-2 md:p-8 pt-4 md:pt-16">
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-[#2c5282] mb-4 pb-2">
                        徹底解説
                    </h3>
                    <h3 className="text-3xl font-semibold text-[#2c5282] pb-1">
                        令和の最新版資産形成攻略ガイド
                    </h3>
                    <div className="border-b-3 border-[#4299e1] w-full mx-auto mt-4"></div>
                </div>

                <div className="bg-[#f8f9fa] p-2 md:p-6 rounded-lg">
                    <h3 className="text-2xl font-bold text-[#2c5282] mb-8 text-left">
                        目次
                    </h3>
                    <ul className="space-y-8 text-left pl-2 md:pl-6">
                        <li
                            className="transition-colors"
                        >
                            <a className="text-lg !text-[#2c5282] hover:!text-blue-600 cursor-pointer" onClick={() => handleNavigation("chapter0")}>第0章 お金があればしあわせ？</a>
                        </li>
                        <li
                            className="transition-colors"
                        >
                            <a className="text-lg !text-[#2c5282] hover:!text-blue-600 cursor-pointer" onClick={() => handleNavigation("chapter1")}>第1章 資産形成に正解はあるか？</a>
                        </li>
                        <li
                            className="transition-colors"
                        >
                            <a className="text-lg !text-[#2c5282] hover:!text-blue-600 cursor-pointer" onClick={() => handleNavigation("chapter2")}>第2章 会社経営と家族経営</a>
                        </li>
                        <li
                            className="transition-colors"
                        >
                            <a className="text-lg !text-[#2c5282] hover:!text-blue-600 cursor-pointer" onClick={() => handleNavigation("chapter3")}>第3章 よくある失敗例と伝えたいこと</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EBook;
