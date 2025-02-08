import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/ebook.module.css";

const Chapter3 = () => {
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
    const goToChapter2 = () => {
        scrollToTop();
        navigate("/ebook/chapter2");
    };
    return (
        <div className="bg-[#f7fafc] h-full p-5 flex justify-center items-center px-4">
            <div className="bg-white max-w-3xl w-[800px] shadow-md rounded-lg p-5 md:p-8 mb-8 text-left">
                <h3 className="text-xl sm:text-2xl md:text-[4vw] lg:text-[32px] text-[#2c5282] border-b-3 border-[#4299e1] pb-4 mb-8 font-bold">
                    第3章 よくある失敗例と伝えたいこと
                </h3>
                <div className="space-y-4 !text-[#213547]">
                    <p className="text-base leading-relaxed">
                        最後によくある失敗例についてお伝えします。
                    </p>
                    <p className="text-base leading-relaxed">
                        とはいえ、今までかなりの数のコンサルをしてきましたが正解の資産形成を出来てる方はほとんど会ったことがないです。
                    </p>
                    <p className="text-base leading-relaxed">
                        (僕のところに相談に来る方は悩んでる方だからかもしれませんが)
                    </p>
                    <p className="text-base leading-relaxed">
                        かくいう僕も正解とはなにかずっと悩みながら答えを模索してきました。
                    </p>
                    <p className="text-base leading-relaxed">
                        失敗例、箇条書きにしますね。
                    </p>
                    <p className="text-base leading-relaxed">
                        ・保険や積立を開始してから5年以上放置している
                    </p>
                    <p className="text-base leading-relaxed">
                        ・なんとなくNISA、iDeCoをやっている
                    </p>
                    <p className="text-base leading-relaxed">
                        ・友達や家族が保険屋だから任せている
                    </p>
                    <p className="text-base leading-relaxed">
                        ・自分が加入している理由を明確に言えない
                    </p>
                    <p className="text-base leading-relaxed">・親に相談する</p>
                    <p className="text-base leading-relaxed">
                        ・知識が完璧になるまでなにもしない
                    </p>
                    <p className="text-base leading-relaxed">
                        ・銀行にしか貯蓄をしていない
                    </p>
                    <p className="text-base leading-relaxed">
                        ・ライフプランニングをせずに商品を選んだ
                    </p>
                    <p className="text-base leading-relaxed">
                        他にもたくさんありますがよく出会うパターンで言うとこんな感じでしょうか？
                    </p>
                    <p className="text-base leading-relaxed">
                        当てはまるものがあれば見直しや無料相談を検討してみてもいいかも^_^
                    </p>
                    <p className="text-base leading-relaxed">
                        なぜ、こんなにも身近で大事なお金のことでこんなにもたくさんの方が失敗するのでしょうか？
                    </p>
                    <p className="text-base leading-relaxed">
                        僕が出した答えは２つです。
                    </p>
                    <p className="text-base leading-relaxed">
                        1.金融業界は宗教的な要素がある
                    </p>
                    <p className="text-base leading-relaxed">
                        2.自分でやるか任せるか決めていない
                    </p>
                    <p className="text-base leading-relaxed">
                        それぞれ解説します。
                    </p>
                </div>
                <br />
                <h3 className="text-lg sm:text-xl md:text-[3vw] lg:text-xl text-[#2c5282] border-b-3 border-blue-500 pb-4 mb-8 font-bold">
                    1.金融業界は宗教的な要素がある
                </h3>
                <div className="space-y-4 !text-[#213547]">
                    <p className="text-base leading-relaxed">
                        なんか怖いですか？笑
                    </p>
                    <p className="text-base leading-relaxed">
                        全く怖い話ではないんですよ。
                    </p>
                    <p className="text-base leading-relaxed">
                        要は色々な意見、宗派がありどの意見も正しくもあり間違っていたりする部分もある、ということです。
                    </p>
                    <p className="text-base leading-relaxed">例えば…</p>
                    <p className="text-base leading-relaxed">
                        手数料の安さが重要という宗派
                    </p>
                    <p className="text-base leading-relaxed">
                        →運用益は不確定だが手数料はなるべく安い方がいい。インデックス投資やネット証券でやるのがベスト。インフルエンサーに多い意見ですね。自分で全てできる人にとっては正解でしょう。
                    </p>
                    <p className="text-base leading-relaxed">
                        誰から入るかが重要という宗派
                    </p>
                    <p className="text-base leading-relaxed">
                        →金融庁に認可されている商品であればそこまで大きな差はないから信頼できる担当者から入った方がいい。これは保険屋さんなどの自社商品を売りたい人に多い意見。信頼できる担当者からと言っているくらいなので信頼される努力をしている。自分では出来ないと言う人には正解でしょう
                    </p>
                    <p className="text-base leading-relaxed">
                        色々な商品を組み合わせて入るべきという宗派
                    </p>
                    <p className="text-base leading-relaxed">
                        →世の中に完璧な商品はないのだからメリットで他の商品のデメリットを補うように加入しましょうと言う意見。独立系FPと言われる人に多い意見。色々な商品を取り扱っている。一見よさそうに見えますが一つ一つの商品への理解が薄かったり企業規模が小さいことが多いのでそこは注意が必要。
                    </p>
                </div>
                <br />
                <h3 className="text-lg sm:text-xl md:text-[3vw] lg:text-xl text-[#2c5282] border-b-3 border-blue-500 pb-4 mb-8 font-bold">
                    2.自分でやるか任せるか
                </h3>
                <div className="space-y-4 !text-[#213547]">
                    <p className="text-base leading-relaxed">
                        これが中途半端な人は失敗します。
                    </p>
                    <p className="text-base leading-relaxed">例えば</p>
                    <p className="text-base leading-relaxed">
                        保険に関しては担当者に任せるけど資産形成は自分でやろう。
                    </p>
                    <p className="text-base leading-relaxed">とか</p>
                    <p className="text-base leading-relaxed">
                        不動産投資の担当者と保険の担当者が別にいて自分ではなんとなくNISAをやっている
                    </p>
                    <p className="text-base leading-relaxed">とかです。</p>
                    <p className="text-base leading-relaxed">
                        資産形成や投資、保険は全て繋がっています。
                    </p>
                    <p className="text-base leading-relaxed">
                        要は自分の将来の目標や夢に向かって今のお金を余らせてお金をかける行為なのでそれをさまざまな角度からアドバイスされたらバランスを崩して成功するものも失敗します。
                    </p>
                </div>
                <br />
                <h3 className="text-lg sm:text-xl md:text-[3vw] lg:text-xl text-[#2c5282] border-b-3 border-blue-500 pb-4 mb-8 font-bold">
                    資産形成に成功する(可能性が高い)人の特徴はズバリこの２つ！
                </h3>
                <div className="space-y-4 !text-[#213547]">
                    <p className="text-base leading-relaxed">①賢い人</p>
                    <p className="text-base leading-relaxed">
                        →お金や金融は社会の血液なんて呼ばれたりしています。
                    </p>
                    <p className="text-base leading-relaxed">
                        この資本主義社会を正しい目で捉えると必ずそこにはお金が絡んできます。投資とは資本主義社会に参加し、貢献する行為です。
                    </p>
                    <p className="text-base leading-relaxed">
                        賢い人は金融業界の人じゃなくても世の中がどう成り立っているか知っています。
                    </p>
                    <p className="text-base leading-relaxed">
                        これをしっかりと理解して自分の人生、ライフイベント、キャッシュフローに落とし込むことができる知見がある賢い方は変動が激しい経済情勢の中でも正しく世の中を見極め資産形成に成功することができるでしょう。本質を見極める目を養うことです。
                    </p>
                    <p className="text-base leading-relaxed">
                        ただし、道のりは非常に険しく並大抵の努力や経験では身につきません。
                    </p>
                    <p className="text-base leading-relaxed">②素直な人</p>
                    <p className="text-base leading-relaxed">
                        ①は自分には無理だ、目指せないという人も安心してください。①をできるのは僕の経験上10%にも満たない、1%もいないかもしれません。
                    </p>
                    <p className="text-base leading-relaxed">
                        そんな方は信頼できるプロを頼ってください。
                    </p>
                    <p className="text-base leading-relaxed">
                        自分は将来こうしたい、こうなりたくない、プロにそんなわがままを言ってみてください。
                    </p>
                    <p className="text-base leading-relaxed">
                        一般的な収入があり、ものすごい浪費癖がなければ達成できるケースがほとんどです。
                    </p>

                    <div className="profile bg-[#ebf8ff] p-6 rounded-lg mt-8">
                        <h3 className="text-lg md:text-[3vw] lg:text-xl text-[#2c5282] border-b-3 border-[#4299e1] pb-4 mb-4 font-bold">
                            著者プロフィール
                        </h3>
                        <h3 className="text-lg font-semibold">ヒゲさん</h3>
                        <p className="text-base leading-relaxed mt-6">
                            Reach The Target
                            をスローガンに目標達成に重きを置いたライフプランコンサルティングが大人気。
                        </p>
                        <p className="text-base leading-relaxed mt-4">
                            不動産、保険、投資信託など幅広い金融に関する知識があり顧客数は老若男女問わず約3000名。
                        </p>
                        <p className="text-base leading-relaxed mt-4">
                            人気の経済セミナーも週1回開催中
                        </p>
                        <p className="text-base leading-relaxed mt-4">
                            今は金融機関の立ち上げにも関わり、FPの育成も過去50名以上。
                        </p>
                        <p className="text-base leading-relaxed mt-4">
                            どんな悩みもまずはご相談ください！
                        </p>
                        <p className="text-base leading-relaxed mt-4">
                            月5名限定で無料個別相談をお受け致します！
                        </p>
                    </div>
                </div>
                <div className="flex justify-between mt-12 pt-4 border-t border-gray-200">
                    <a
                        onClick={goToChapter2}
                        className="!text-[#2c5282] border border-[#2c5282] rounded px-4 py-2 hover:bg-[#2c5282] hover:!text-white cursor-pointer"
                    >
                        前の章へ
                    </a>
                    <a
                        onClick={goBackToEbook}
                        className="!text-[#2c5282] border border-[#2c5282] rounded px-4 py-2 hover:bg-[#2c5282] hover:!text-white cursor-pointer"
                    >
                        目次へ戻る
                    </a>
                </div>
                <footer className="text-center py-6 md:py-8 text-gray-600 text-sm">
                    <p className="text-base">※本E-bookの無断転載・共有は禁止させていただきます。</p>
                    <p className="text-base mt-6">Copyright © 2025 All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Chapter3;
