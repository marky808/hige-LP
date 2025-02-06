import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/ebook.module.css";

const Chapter2 = () => {
    const navigate = useNavigate();

    const goBackToEbook = () => {
        navigate("/ebook");
    };
    const goToChapter1 = () => {
        navigate("/ebook/chapter1");
    };
    const goToChapter3 = () => {
        navigate("/ebook/chapter3");
    };
    return (
        <div className="bg-gray-100 h-full p-5 flex justify-center items-center px-4">
            <div className="bg-white max-w-3xl w-full shadow-md rounded-lg p-6 md:p-8 mb-8 text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-blue-800 border-b-3 border-blue-500 pb-4 mb-8 font-bold">
                    第2章 会社経営と家族経営
                </h3>
                <div className="space-y-4">
                    <p className="text-base leading-relaxed">では、次に</p>
                    <p className="text-base leading-relaxed">
                        目的を明確にする→その計画を立てる
                    </p>
                    <p className="text-base leading-relaxed">
                        ということがどれだけ大事かというお話をしていきます。
                    </p>
                    <p className="text-base leading-relaxed">
                        実は会社を経営することとライフプランニングをすることは非常に似ています。
                    </p>
                    <p className="text-base leading-relaxed">
                        家族を経営していくと考えてもいいでしょう。
                    </p>
                    <p className="text-base leading-relaxed">
                        親元を離れたところからみなさんは一家の経営者なのです。
                    </p>
                    <p className="text-base leading-relaxed">
                        実際に経営者になる人ってどんな人だと思いますか？
                    </p>
                    <p className="text-base leading-relaxed">
                        1めちゃくちゃ営業ができる人
                    </p>
                    <p className="text-base leading-relaxed">
                        2元いた会社で抜きん出た成績を出した人
                    </p>
                    <p className="text-base leading-relaxed">
                        3大きな野望がある人、チャンスを掴みたい人
                    </p>
                    <p className="text-base leading-relaxed">4変な人</p>
                    <p className="text-base leading-relaxed">
                        こんな感じのイメージじゃないですか？
                    </p>
                    <p className="text-base leading-relaxed">
                        周りにたくさん経営者がいますが概ね合ってると思います笑
                    </p>
                    <p className="text-base leading-relaxed">
                        ですが、そんな周りから見たらすごい人が挑戦しても5年後には85%が10年後には94%が20年後には99.7%が倒産します。
                    </p>
                    <p className="text-base leading-relaxed">
                        なぜ倒産してしまうのでしょうか？
                    </p>
                    <p className="text-base leading-relaxed">
                        最も大きな理由は
                    </p>
                    <p className="text-base leading-relaxed">
                        「資金繰り」と「チームビルディング」です。
                    </p>
                    <p className="text-base leading-relaxed">
                        やはりすごい能力の持ち主達なので営業力が足りなくて潰れてしまうということはあまりありません。
                    </p>
                    <p className="text-base leading-relaxed">
                        ですが、その凄い能力を周りに伝えたりするマネジメントをしてモチベーションを上げたりするチームビルディングは非常に難しいようです。
                    </p>
                    <p className="text-base leading-relaxed">
                        皆さんの周りにもめちゃくちゃ仕事できるけどこの人人の気持ちわかんないなーとかついていきたくはないなーって人いませんか？
                    </p>
                    <p className="text-base leading-relaxed">
                        人にできないことが出来る良い営業マンとできない人をできるようにする良いマネージャーでは全く別の能力ということですね。
                    </p>
                    <p className="text-base leading-relaxed">
                        良い彼氏が良い旦那になるとは限らないというのと近いような気もします。笑
                    </p>
                    <p className="text-base leading-relaxed">
                        僕自身はずっとこのマネジメント、チームビルディングに携わってきたのですがそれはまた別の機会に
                    </p>
                    <p className="text-base leading-relaxed">
                        そしてもう一つ大事なのが
                    </p>
                    <p className="text-base leading-relaxed">
                        「資金繰り」です。
                    </p>
                    <p className="text-base leading-relaxed">
                        会社を運営していく上で「事業計画書」といういつどんなお金がかかってどんなお金が入ってきてこんなことに挑戦していくという計画をしていくための非常に大切なものです。
                    </p>
                    <p className="text-base leading-relaxed">
                        これがないと何人採用して良いかもわからない、いくらくらい広告費をかけたら良いのかわからない、どんな事業をしたら良いかもわからない。
                    </p>
                    <p className="text-base leading-relaxed">
                        ということになってしまいます。
                    </p>
                    <p className="text-base leading-relaxed">
                        経営者なら当然作ってるでしょ？
                    </p>
                    <p className="text-base leading-relaxed">
                        いいえ、実は7割以上の中小企業がこの事業計画書を作らずに事業をしています。
                    </p>
                    <p className="text-base leading-relaxed">理由としては</p>
                    <p className="text-base leading-relaxed">
                        ・書き方がわからない
                    </p>
                    <p className="text-base leading-relaxed">
                        ・書いても思い通りにいかない
                    </p>
                    <p className="text-base leading-relaxed">
                        ・変化が激しく見通せない
                    </p>
                    <p className="text-base leading-relaxed">子供かっ！</p>
                    <p className="text-base leading-relaxed">
                        そう思いません？笑
                    </p>
                    <p className="text-base leading-relaxed">
                        これを読んでる方の中でもベンチャーや中小に勤めてる方もいると思いますが自分の会社がこうだったら怖くないですか？
                    </p>
                    <p className="text-base leading-relaxed">
                        そりゃあ5年で85%が潰れちゃいますよね〜
                    </p>
                    <p className="text-base leading-relaxed">
                        では家族で考えたらどうでしょうか？
                    </p>
                    <p className="text-base leading-relaxed">
                        まず会社経営と家族経営で何が違うかというと
                    </p>
                    <p className="text-base leading-relaxed">
                        ・定期的な収入(給料)がある↔会社にはない
                    </p>
                    <p className="text-base leading-relaxed">
                        ・そこまで大きな出費がない↔会社にはある可能性がある
                    </p>
                    <p className="text-base leading-relaxed">
                        ・税金を計算する必要がない(源泉徴収の場合)↔会社にはある
                    </p>
                    <p className="text-base leading-relaxed">
                        ・職を失っても次がある(転職、アルバイト)↔会社にはない
                    </p>
                    <p className="text-base leading-relaxed">
                        ・セーフティーネット(生活保護)がある↔会社にはない
                    </p>
                    <p className="text-base leading-relaxed">
                        と、家族の方が経営していくのは簡単そうです。
                    </p>
                    <p className="text-base leading-relaxed">
                        ですが、定期的な収入がなくなったら？職を失って次が見つからなかったら？想定外の大きな出費があったら？
                    </p>
                    <p className="text-base leading-relaxed">
                        今はイメージがつかないかもしれないですがこの先はそんなリスクが降りかかってくる可能性ありませんか？
                    </p>
                    <p className="text-base leading-relaxed">
                        破産(会社でいう倒産)までいかなくてもセーフティーネットにギリギリ助けてもらっている状況になってしまう可能性ありますよね？
                    </p>
                    <p className="text-base leading-relaxed">
                        現役中、仕事に子育て、一生懸命頑張ってきていざ、毎日が日曜日の老後になった時生活保護でギリギリ生きていく。
                    </p>
                    <p className="text-base leading-relaxed">
                        誰でもできるバイトでなんとか食い繋ぐ。
                    </p>
                    <p className="text-base leading-relaxed">
                        僕はそんな人生嫌です。
                    </p>
                    <p className="text-base leading-relaxed">なんでかって？</p>
                    <p className="text-base leading-relaxed">
                        人生は後半になるにつれ幸せになっていくそうです。
                    </p>
                    <p className="text-base leading-relaxed">
                        10代20代すごく楽しかった記憶があります笑
                    </p>
                    <p className="text-base leading-relaxed">
                        でも、7.80代の方が幸せみたいですよ！
                    </p>
                    <p className="text-base leading-relaxed">
                        そんな幸せを感じられる時期にお金で困りたくないし、僕は幸せになるために生きています！
                    </p>
                    <p className="text-base leading-relaxed">
                        ね？家族を経営するライフプランニングちゃんとやりましょ？
                    </p>
                </div>
                <div className="flex justify-between mt-12 pt-4 border-t border-gray-200">
                    <a
                        onClick={goToChapter1}
                        className="text-blue-800 border border-blue-800 rounded px-4 py-2 hover:bg-blue-800 hover:!text-white cursor-pointer"
                    >
                        前の章へ
                    </a>
                    <a
                        onClick={goBackToEbook}
                        className="text-blue-800 border border-blue-800 rounded px-4 py-2 hover:bg-blue-800 hover:!text-white cursor-pointer"
                    >
                        目次へ戻る
                    </a>
                    <a
                        onClick={goToChapter3}
                        className="text-blue-800 border border-blue-800 rounded px-4 py-2 hover:bg-blue-800 hover:!text-white cursor-pointer"
                    >
                        次の章へ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Chapter2;
