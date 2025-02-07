import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/ebook.module.css";

const Chapter0 = () => {
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const goBackToEbook = () => {
        scrollToTop();
        navigate("/ebook");
    };
    const goToChapter1 = () => {
        scrollToTop();
        navigate("/ebook/chapter1");
    };
    return (
        <div className="bg-[#f7fafc] h-full p-5 flex justify-center items-center px-4">
            <div className="max-w-3xl w-[800px] mx-auto bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#2c5282] border-b-3 border-[#4299e1] pb-4 mb-8 font-bold">
                    第0章 お金があればしあわせ？
                </h3>
                <div className="space-y-4">
                    <p className="text-base leading-relaxed">
                        そもそも大前提、お金があれば幸せなんでしょうか？
                    </p>
                    <p className="text-base leading-relaxed">
                        いいえ、それは間違いです。
                    </p>
                    <p className="text-base leading-relaxed">
                        「えーお金があれば幸せなんじゃないの？あれもこれも全部買えるしあそこだって行けるじゃん！」
                    </p>
                    <p className="text-base leading-relaxed">
                        普通そう思いますよね？
                    </p>
                    <p className="text-base leading-relaxed">
                        でも本当にお金持ちで不幸な人も沢山います。
                    </p>
                    <p className="text-base leading-relaxed">
                        事実、一般的な人よりお金持ちであるはずの経営者は、みな孤独を感じていて離婚率も圧倒的に高いです。
                    </p>
                    <p className="text-base leading-relaxed">
                        よくある話じゃないですか？
                    </p>
                    <p className="text-base leading-relaxed">
                        お金がない時から支えてくれてた奥さんを蔑ろにして若くて綺麗なお姉ちゃんとお金に物を言わせて遊びまくってる社長さん。
                    </p>
                    <p className="text-base leading-relaxed">
                        お金持ちだけど幸せなんでしょうか？
                    </p>
                    <p className="text-base leading-relaxed">
                        死ぬ時に何が残りますか？お金がなくなったら誰が相手にしてくれますか？
                    </p>
                    <p className="text-base leading-relaxed">
                        こういう人はお金を稼ぐのは上手だけどお金に支配されているんです。
                    </p>
                    <p className="text-base leading-relaxed">
                        それは幸せとは全く逆の思考です。
                    </p>
                    <p className="text-base leading-relaxed">
                        皆さんの頭の中で有名人やスポーツ選手でも誰かしら思い浮かぶんじゃないですか？
                    </p>
                    <p className="text-base leading-relaxed">
                        お金持ちになるより幸せになる方が優先です。
                    </p>
                    <p className="text-base leading-relaxed">
                        それは当たり前です。
                    </p>
                    <p className="text-base leading-relaxed">
                        「じゃあお金のことなんか考えなくてもいいんじゃない？お金がなくても幸せだよ。」
                        いいえ、それも違います。
                    </p>
                    <p className="text-base leading-relaxed">
                        お金があれば幸せとは限らないですがお金がないと不幸になる確率はぐんと上がります。
                    </p>
                    <p className="text-base leading-relaxed">
                        年収800万までは収入と幸福度は比例して上がっていきますがそこからは横ばいです。
                    </p>
                    <p className="text-base leading-relaxed">
                        ある程度はあった方がいいということですね。
                    </p>
                    <p className="text-base leading-relaxed">
                        そもそも、自分がお金のことから逃げて後回しにしていたらあなたの家族はどんな生活になりますか？
                    </p>
                    <p className="text-base leading-relaxed">
                        旦那さん、奥さんは？子供の将来は？
                    </p>
                    <p className="text-base leading-relaxed">
                        あって困る事の方が圧倒的に少ないんです。
                    </p>
                    <p className="text-base leading-relaxed">
                        資産形成だけが方法ではないかもしれませんがお金の問題を解決するのは周りの人を豊かにし、その相手を思いやる気持ちがあなたが幸せになるためのチケットだと私は思います。
                    </p>
                    <p className="text-base leading-relaxed">
                        さぁ、難しいお金の話を簡単に解説します。
                    </p>
                    <p className="text-base leading-relaxed">
                        正しい考え方を是非身につけてください。
                    </p>
                </div>
                <div className="flex justify-between mt-12 pt-4 border-t border-gray-200">
                    <a
                        onClick={goBackToEbook}
                        className="text-blue-800 border border-blue-800 rounded px-4 py-2 hover:bg-blue-800 hover:!text-white cursor-pointer"
                    >
                        目次へ戻る
                    </a>
                    <a
                        onClick={goToChapter1}
                        className="text-blue-800 border border-blue-800 rounded px-4 py-2 hover:bg-blue-800 hover:!text-white cursor-pointer"
                    >
                        次の章へ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Chapter0;
