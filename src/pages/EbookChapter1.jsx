import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/ebook.module.css";

const Chapter1 = () => {
    const navigate = useNavigate();

    const goBackToEbook = () => {
        navigate("/ebook");
    };
    const goToChapter0 = () => {
        navigate("/ebook/chapter0");
    };
    const goToChapter2 = () => {
        navigate("/ebook/chapter2");
    };
    return (
        <div className="bg-gray-100 h-full p-5 flex justify-center items-center px-4">
            <div className="bg-white max-w-3xl w-full shadow-md rounded-lg p-6 md:p-8 mb-8 text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-blue-800 border-b-3 border-blue-500 pb-4 mb-8 font-bold">
                    第0章 お金があればしあわせ？
                </h3>
                <div className="space-y-4">
                    <p className="text-base leading-relaxed">
                        資産形成に正解はある？
                    </p>
                    <p className="text-base leading-relaxed">
                        悩んだことはありませんか？
                    </p>
                    <p className="text-base leading-relaxed">
                        いろんな情報があるけど何を信じたらいいんだろう？
                    </p>
                    <p className="text-base leading-relaxed">
                        居酒屋の隣の席でこんな会話を聞いたことがあります。
                    </p>
                    <p className="text-base leading-relaxed">
                        Aくん「YouTubeでインフルエンサーが手数料の安いS&P500をNISAで買うのが最強って聞いたからそれで資産形成してるよ、保険に加入する必要はないよね！」
                    </p>
                    <p className="text-base leading-relaxed">
                        Bくん「いやいや、おれの担当のFPさんが保険で資産形成する方法を教えてくれたよ！こっちの方が無知の自分からすると担当がいて長期投資だし安心して任せられるんだ」
                    </p>
                    <p className="text-base leading-relaxed">
                        僕は横で聞いていて
                    </p>
                    <p className="text-base leading-relaxed">
                        「うーん、どっちも合ってるけどどっちも違うなー」
                    </p>
                    <p className="text-base leading-relaxed">
                        と思いながら聞いていましたが人見知りなため声をかけるのはやめておきました。笑
                    </p>
                    <p className="text-base leading-relaxed">
                        じゃあ結局どうすればいいの？
                    </p>
                    <p className="text-base leading-relaxed">
                        正解なんてないんじゃない？
                    </p>
                    <p className="text-base leading-relaxed">
                        て声が聞こえてきそうですが、正解はあります！
                    </p>
                    <p className="text-base leading-relaxed">それは</p>
                    <p className="text-base leading-relaxed">
                        [あなたの目的を達成する手段があなたの正解]
                    </p>
                    <p className="text-base leading-relaxed">
                        ということです。
                    </p>
                    <p className="text-base leading-relaxed">は？</p>
                    <p className="text-base leading-relaxed">ですよね？</p>
                    <p className="text-base leading-relaxed">
                        要は手段(NISA、iDeCo、保険…etc)から探しても絶対に正解には辿り着きません。
                    </p>
                    <p className="text-base leading-relaxed">
                        目的に即した手段ならば全て正解になるということです。
                    </p>
                    <p className="text-base leading-relaxed">
                        お金を増やしたいのはなぜですか？
                    </p>
                    <p className="text-base leading-relaxed">
                        運用したいの何のためですか？？
                    </p>
                    <p className="text-base leading-relaxed">
                        そのお金はいつ何のために使いますか？
                    </p>
                    <p className="text-base leading-relaxed">
                        老後どんな生活をしたいですか？
                    </p>
                    <p className="text-base leading-relaxed">
                        子供にどんな教育を受けさせてあげたいですか？
                    </p>
                    <p className="text-base leading-relaxed">
                        こういったことに関して胸に手を当ててよく考えてみてください。
                    </p>
                    <p className="text-base leading-relaxed">
                        正解は自分の中にあります。
                    </p>
                    <p className="text-base leading-relaxed">
                        全ての金融商品にはメリットとデメリットがあります。
                    </p>
                    <p className="text-base leading-relaxed">
                        なので、商品単位でこれが最強！
                    </p>
                    <p className="text-base leading-relaxed">
                        というものはありません。そこから探すのであれば一生正解が見つかることはないでしょう。
                    </p>
                    <p className="text-base leading-relaxed">
                        順番を変えてください
                    </p>
                    <p className="text-base leading-relaxed">
                        目的を明確にする→いくつかの手段の中から選ぶ○
                    </p>
                    <p className="text-base leading-relaxed">
                        いくつかある手段の中から何をやればいいのか選ぶ✖️
                    </p>
                    <p className="text-base leading-relaxed">
                        なので先ほどの会話も下記ならどちらも正解です。
                    </p>
                    <p className="text-base leading-relaxed">
                        Aくん「僕は金融の勉強が好きで、色々な角度から見てもアメリカ株は今後も長い目では必ず上昇していくと知ったんだ。なるべく多くの資金をそこに投じて可能ならできるだけ早くFIREして色々なことをしたいからNISAで
                        S&P500に投資してるんだ。日本には高額療養費制度もあるし保険にお金をかけるよりはいまはそこに投資をして早く資産を作りたいと思っているんだ！もし株価が乱高下することがあってもその時に新聞やニュースを見ればなんとなくその時にすべき判断はできるしね」
                    </p>
                    <p className="text-base leading-relaxed">
                        Bさん「へー。ちゃんと色々勉強しててすごいなー。僕は仕事も忙しいし休日は家族との時間とか趣味の時間にしたいから勉強する時間が取れないしそもそも難しくてあまり興味もないんだよね。かといってお金のことを考えないわけにはいかないから利率が多少低くてもこんなことをしたいとかこんなお金を貯めたいっていうのを伝えたらプランニングしてくれる担当の保険屋さんがサポートしてくれるような商品の方があってるんだよね。困ったことがあったらサポートもしてもらえるし。それでも将来的にやりたいことは叶いそうだし満足してるんだ」
                    </p>
                    <p className="text-base leading-relaxed">
                        こんな会話がもし聞こえてきたら隣で僕は
                    </p>
                    <p className="text-base leading-relaxed">
                        「この人たちわかってるなー」と感心して逆に声をかけてしまうかもしれません。笑
                    </p>
                    <p className="text-base leading-relaxed">
                        言われてみれば確かにそうだ、簡単なことだ。となることかとは思います。
                    </p>
                    <p className="text-base leading-relaxed">
                        が、こうなってしまう要因の一つとして情報源に対するリテラシーの低さがあるように感じます。
                    </p>
                    <p className="text-base leading-relaxed">
                        情報が溢れている時代なので資産形成に限らず情報の受け取り方を整理する必要がありそうです。
                    </p>
                    <p className="text-base leading-relaxed">
                        どういうことでしょうか。
                    </p>
                    <p className="text-base leading-relaxed">
                        ・情報の種類と発信者の意図
                    </p>
                    <p className="text-base leading-relaxed">
                        情報には1次情報、2次情報、3次情報があります。
                    </p>
                    <p className="text-base leading-relaxed">
                        1次情報→その道の専門家や経験者が語る体験談やアドバイス
                    </p>
                    <p className="text-base leading-relaxed">
                        2次情報→1次情報をくれた人から得た情報を別の人が語ってること
                    </p>
                    <p className="text-base leading-relaxed">
                        3次情報→どこの誰がいっているかわからない情報
                    </p>
                    <p className="text-base leading-relaxed">
                        どの情報を参考にすればいいかは明確ですね。
                    </p>
                    <p className="text-base leading-relaxed">
                        発信者の意図というのはかなり多くのパターンがあるので代表的なものだけ記しておきます
                    </p>
                    <p className="text-base leading-relaxed">
                        要はその人がなぜその情報をくれるかっていうことですね。
                    </p>
                    <p className="text-base leading-relaxed">
                        インフルエンサー→再生数やいいね数を稼ぐことが目的。インパクトのある情報を発信することが重要
                    </p>
                    <p className="text-base leading-relaxed">
                        インフルエンサーB→アフィリエイトなどでクリックすると収益が入るような仕組み。お得情報とかついついクリックしたくなるような情報が重要
                    </p>
                    <p className="text-base leading-relaxed">
                        営業マン→自分が販売できる商品を売ることが目的。危機感を煽ったり欲しくなるような情報が必要。
                    </p>
                    <p className="text-base leading-relaxed">
                        こんな感じです。
                    </p>
                    <p className="text-base leading-relaxed">
                        どれが良くてどれが悪いという話ではないですが資産形成の成功法則「目的を明確にする」ということができていなければどの情報も無意味です。
                    </p>
                    <p className="text-base leading-relaxed">
                        今は情報が溢れているので情報収集だけではなく、その収集した情報をゴミ箱に捨てるものかそうでないものかを見分ける力で大きな差がつきます。
                    </p>
                    <p className="text-base leading-relaxed">
                        今は情報が溢れているので情報収集だけではなく、その収集した情報をゴミ箱に捨てるものかそうでないものかを見分ける力で大きな差がつきます。
                    </p>
                    <p className="text-base leading-relaxed">
                        実はこれって意外と難しいんですよ。
                    </p>
                    <p className="text-base leading-relaxed">
                        いつどんなお金がかかるとか、自分で把握してるものだけじゃなかったりします。
                    </p>
                    <p className="text-base leading-relaxed">
                        もし、あなたがまずは将来の目標を明確にするライフプランニングをして貧乏になることは避けたい、将来の夢を叶えたいと思うのであれば是非無料の個別相談を受けていただければと思います^_^
                    </p>
                </div>
                <div className="flex justify-between mt-12 pt-4 border-t border-gray-200">
                    <a
                        onClick={goToChapter0}
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
                        onClick={goToChapter2}
                        className="text-blue-800 border border-blue-800 rounded px-4 py-2 hover:bg-blue-800 hover:!text-white cursor-pointer"
                    >
                        次の章へ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Chapter1;
