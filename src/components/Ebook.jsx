// src/components/Ebook.jsx
import React from 'react';

const Ebook = () => {
    return (
        <div className="container">
            <div className="book-content">
                {/* タイトル */}
                <div className="title">
                    <h1>徹底解説<br />令和の最新版資産形成攻略ガイド</h1>
                </div>

                {/* 目次 */}
                <div className="toc">
                    <h2>目次</h2>
                    <ul>
                        <li><a href="chapter0.html">第0章 お金があればしあわせ？</a></li>
                        <li><a href="chapter1.html">第1章 資産形成に正解はあるか？</a></li>
                        <li><a href="chapter2.html">第2章 会社経営と家族経営</a></li>
                        <li><a href="chapter3.html">第3章 よくある失敗例と伝えたいこと</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Ebook;