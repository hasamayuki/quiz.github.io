const questions = [
    {
        question: "",
        answer: "",
        explanation: ``
    },
    {
        question: "",
        answer: "",
        explanation: ``
    },
    {
        question: "タツノオトシゴやカンガルーに見られる、まだ未熟な個体を入れて育てるための袋状の器官を何と言う？",
        answer: "育児嚢",
        explanation: ``
    },
    {
        question: "天然痘の流行時には「瘡(くさ)を食う」として縁起物にもなった、首の部分が動くように設計された、牛を象った会津若松市の郷土玩具と言えば？",
        answer: "赤べこ",
        explanation: ``
    },
    {
        question: "「衣服を着たまま全身ずぶ濡れになる」ことを、ある動物を用いて何と言う？",
        answer: "濡れ鼠",
        explanation: ``
    },
    {
        question: "繰り返すと「どちらも同じくらいであり、優劣が着けがたいさま」を表す言葉になる、言動を遮ったり、力を入れる時に用いられる感動詞は何？",
        answer: "どっこい",
        explanation: ``
    },
    {
        question: "オナガ、カケス、カササギと言えばいずれも何科の鳥？",
        answer: "カラス",
        explanation: ``
    },
    {
        question: "音声素材は小山乃舞世が務めている、2008年のエイプリルフールに架空のVOCALOIDを作る企画から誕生した、代表曲に『右に曲ガール』『吉原ラメント』『おちゃめ機能』があるキャラクターは？",
        answer: "重音テト",
        explanation: `フリーの音声合成ソフトUTAUの音源として知られるキャラクター。
　元々は2008年にネット掲示板２ちゃんねるにて、架空のVOCALOIDを作るというネタから生まれた。エイプリルフールが近かった事もあり、同年4月1日に重音テトが嘘として形となる。
　ところが、UTAU音源からVOCALOID同様に様々な楽曲が作られ、15周年迎えた2023年4月には商用ソフトである音声合成ソフトSynthesizer Vでの音源化。形は異なるものの、嘘から出た真となった。`
    },
    {
        question: "元は奇抜な演出を指す歌舞伎用語である、現代では多く「味」を伴って「はったり」や「ごまかし」の意味で用いられる言葉は？",
        answer: "外連",
        explanation: ``
    },
    {
        question: "女子英学塾を創設して近代的な女子高等教育に尽力した、2024年7月からは新五千円札の肖像にも採用された人物は？",
        answer: "津田梅子",
        explanation: "女子英学塾(現:津田塾大学)を創設し、近代的な女子高等教育に尽力した。"
    },
    {
        question: "「東西南北」の内、現在、国連加盟国の国名に使われていない物はどれでしょう？",
        answer: "西",
        explanation: "-東    :東ティモール/-南  :南アフリカ、南スーダン/-北  :北マケドニア"
    },
    {
        question: "エマヌエル・ロイツェによるデラウェア川を渡る彼の姿を描いた絵画も有名である、アメリカ初代大統領は誰？",
        answer: "ジョージ・ワシントン",
        explanation: ``
    },
    {
        question: "英語では「hourgrass」と言う、8の字型の容器を引っ繰り返して中身をちょっとずつ落とす事で時間を計る器具を、一般的に中身に用いられる物から何と言う？",
        answer: "砂時計",
        explanation: ``
    },
    {
        question: "国境、三月、行進を表すのに共通する英単語の綴りは？",
        answer: "March",
        explanation: ``
    },
    {
        question: "日光東照宮の薬師堂のものが有名である、平行に向かい合う硬い面の間で反響が繰り返されビリビリといった音が聞こえる現象を、ある架空の生き物を用いて何と言う？",
        answer: "鳴き竜",
        explanation: ``
    },
    {
        question: "雪、床、筆に共通して付く、いつまでも変わらずに同じ状態である意味を表す語は？",
        answer: "万年",
        explanation: `それぞれ、
万年雪:一年中解けない雪
万年床:ずっと敷きっぱなしにした布団
万年筆:内部のインクが継続的に出てくるペン`
    },
    {
        question: "英語では「EEZ」と略される、漁業や資源採掘などを他国に邪魔されず自由に行える、領海の基線からその外側200海里に設けられる領域を何と言う？",
        answer: "排他的経済水域",
        explanation: `英語では"Exclusive Economic Zone"。
　"Exclusive"は「排他的。独占的」の意味で、日本語と同じ。`
    },
    {
        question: "「猶予」の読みは「ゆうよ」ですが、「猶予う」の読みは？",
        answer: "いざよ",
        explanation: `「猶予」は「実行の期日を伸ばす」の他、「ぐずぐずする」という意味もある。
　「一刻の猶予も許されない」は後者の用例となる。

　「いざよう」も「ぐずぐずする。躊躇う」の意味。
　なお、「十六夜(いざよい)」の表記は有名だが、「十六夜う」とは書かれない。`
    },
    {
        question: "数表では「縦列」、新聞では「寄稿欄」を表す英単語は？",
        answer: "column",
        explanation: `「円柱」を原義とする単語。
　派生して「円柱状の物」「縦に並んだ物」も指すようになった。

「縦列」はExcelを使っている方ならCOLUMN関数で馴染み深いか。

「寄稿欄」は、「新聞の縦欄」の意味が更に派生したものだろう。`
    },
    {
        question: "英語では「面接」という意味も持つ、日本では主に「取材」の意味で用いられる英単語は？",
        answer: "interview",
        explanation: `"interview"は「面接。尋問。取材」と、相手に聞き取りを行うという意味の語。
　用例 : 就職面接 / job interview`
    },
    {
        question: "「蹄はウシ、頭はウマ、角はシカ、体はロバに似ている」と言われるものの、そのどれとも違うことからその名が付いたシカ科の動物は？",
        answer: "シフゾウ",
        explanation: `体長約2ｍ、体重150〜200kgほどのシカ科の動物。
　問題文の冒頭のように言われるものの、そのどれとも違う事から「四不像(シフゾウ)」と名付けられた。
　漢字が違うとはいえ、「シカ科」で「ゾウ」と更に紛らわしい。

　野生では一度絶滅してしまったものの、1986年には飼育下の個体を還す保護区が設けられ、現在は野生復帰が進みつつある。
　日本の動物園では、多摩動物公園、広島市安佐動物公園、熊本市動植物園で飼育されている。`
    },
    {
        question: "不正サイトへのリンクが印刷されたシールを張り付けるいう手法も問題となっている、QRコードを利用したフィッシング詐欺を何と言う？",
        answer: "クイッシング",
        explanation: `QRコードの特性上、一般的なフィッシング詐欺とは異なって、リンク策のURLが確認できなくなっているのが特徴。
        また、メールでも不正なURLならばそれに大して警告が生じるのに対し、QRコードではそれが起こらないという問題があった。`
    },
    {
        question: "盲腸、鼻血、眉毛などの絵柄もある、1984年に来日したある動物を基に設計されたロッテのお菓子は？",
        answer: "コアラのマーチ",
        explanation: `1984年10月にコアラが初来日するのに合わせて作られ、同年3月に誕生した。
　コアラの絵柄に加え、六角柱の箱はユーカリを意識している。`
    },
    {
        question: "正式名称は「船島」という、佐々木小次郎と宮本武蔵が決闘した場所として知られる、下関市にある島を一般的に何島というでしょう？",
        answer: "巌流島",
        explanation: `山口県下関市にある島。
　正式名称は「船島」と言い、巌流島の名は 佐々木小次郎の流派「巌流」が由来。
　1973年以降は無人島となっており、観光地化されている。`
    },
    {
        question: "「ドベネックの桶」の譬えでも知られる、「植物の成長は、必要な物質の内で与えられた量が最も少ない物によって決まる」という説を、それを提唱したとされるドイツの化学者の名前から「何の最小律」という？",
        answer: "リービッヒ",
        explanation: ``
    },
    {
        question: "2023年には彼女の声を基とする音声創作ソフト「音楽的同位体　星界」が発売された、『いろはに咲きて』『シリウスの心臓』などの代表曲があるバーチャルシンガーは？",
        answer: "ヰ世界情緒",
        explanation: `KAMITSUBAKI STUDIO所属のバーチャルシンガー。2019年12月に活動開始した。
　少女的でありながら芯が太い伸びやかな歌声をしている。`
    },
    {
        question: "ナイアガラの滝を構成する三つの滝と言えば、アメリカ滝、カナダ滝と残り一つは何？",
        answer: "ブライダルベール滝",
        explanation: `ナイアガラの滝は大きいものから順に、ホースシュー滝(カナダ滝としても知られる)、アメリカ滝、ブライダル ベール滝の3つの滝で構成されている。`
    },
    {
        question: "赤道が通っている国は全部で幾つある？",
        answer: "10",
        explanation: ``
    },
    {
        question: "葉に含まれるネペタラクトールには蚊を忌避したり、猫が酔っぱらったような状態にする効果がある、漢字では「木天蓼」と書く植物は？",
        answer: "マタタビ",
        explanation: ``
    },
    {
        question: "ドイツにおける国民車構想の一つとなっていた、速度無制限区間があることでも有名な、ドイツ全土を結ぶ高速道路の名前は？",
        answer: "アウトバーン",
        explanation: ``
    },
    {
        question: "330年にローマ帝国の首都としてビザンティオンに遷都した際にこの名称となった、アジアとヨーロッパの中継点として古代から東西交易の場として栄えた、現在のイスタンブールの前身となった都市は？",
        answer: "コンスタンティノープル",
        explanation: ``
    },
    {
        question: "その名前は「4」を表す単語と「テニス」を組み合わせたものである、計7種類のブロックを回転、移動、落下させることで列を作り消していくという内容の、1984年にアレクセイ・パジトノフによって開発されたパズルゲームは？",
        answer: "テトリス",
        explanation: ``
    },
    {
        question: "1986年にパズルゲーム『テトリス』を開発した、ロシアの情報工学者は誰でしょう？",
        answer: "アレクセイ・パジトノフ",
        explanation: ``
    },
    {
        question: "世界で唯一、ペルー文化省の許可を得てナスカの地上絵の学術調査を行っている大学である、鶴岡や小白川などにキャンパスを置く大学は？",
        answer: "山形大学",
        explanation: ``
    },
    {
        question: "看板商品としてミラノ風ドリアが知られる、1973年に洋食屋からイタリアンレストランに転身して生まれた、正垣泰彦が創業したファミリーレストランは？",
        answer: "サイゼリヤ",
        explanation: ``
    },
    {
        question: "中国原産のシナサルナシが品種改良されたものである、その名前は見た目がニュージーランドの国鳥に似ている事に由来するマタタビ科の植物は？",
        answer: "キウイフルーツ",
        explanation: ``
    },
    {
        question: "煩悩や妄想に縛られ自由でない事を表す、「解脱」の対語は？",
        answer: "繋縛",
        explanation: ``
    },
    {
        question: "御一新草、明治草、鉄道草などの別名がある、北アメリカ原産のキク科の植物は？",
        answer: "ヒメムカシヨモギ",
        explanation: ``
    },
    {
        question: "その有毒性から「馬食わず」や「歯欠」とも呼ばれる、実から生える白い毛が特徴的なキンポウゲ科の植物は？",
        answer: "センニンソウ",
        explanation: ``
    },
    {
        question: "建築面積の46,755平方メートルや容積の124万立方メートルは単位としても用いられがちな、読売ジャイアンツの本拠地にもなっているスタジアムの名前は？",
        answer: "東京ドーム",
        explanation: ``
    },
    {
        question: "「はい」「いいえ」「たぶんそう/部分的にそう」などの質問を重ねて、プレイヤーが思い浮かべた人物や動物をランプの魔人が当てるという内容のゲームは？",
        answer: "アキネイター",
        explanation: ``
    },
    {
        question: "白と黒で互いに15個の駒を動かし、先にその全てをゴールさせたら得点するという内容の盤上競技は？",
        answer: "バックギャモン",
        explanation: ``
    },
    {
        question: "バックギャモンの三種類ある勝ち方と言えば、ギャモン勝ち、バックギャモン勝ちと残り一つは何？",
        answer: "シングル",
        explanation: ``
    },
    {
        question: "世界幻想文学大賞の受賞作『奇術師』を執筆した小説家・プリーストと、それを2006年に『プレステージ』として映画化した監督・ノーランに共通するファーストネームは？",
        answer: "クリストファー",
        explanation: ``
    },
    {
        question: "競走馬・キングヘイローやナリタブライアンなどが装着していた、下方を見えにくくして前方に意識を集中させたり、頭を下げさせて馬を御しやすくする目的で使用される、馬の鼻先に着用するボア状の矯正馬具は？",
        answer: "シャドーロール",
        explanation: ``
    },
    {
        question: "七夕賞やオールカマーが主な勝鞍である、勝つ時は派手に勝ち、負ける時は派手に惨敗するその大逃げから「最後の個性派」とも称される競走馬は？",
        answer: "ツインターボ",
        explanation: ``
    },
    {
        question: "1992年にはマイルチャンピオンSの連覇を果たしている、口を開けて走る姿から「笑う馬」、人気が有る時は走らず、無い時は走ることから「新聞が読める馬」とも呼ばれた競走馬は？",
        answer: "ダイタクヘリオス",
        explanation: ``
    },
    {
        question: "高知競馬場で活躍していた馬であり、113戦0勝という生涯記録でも知られている競走馬は？",
        answer: "ハルウララ",
        explanation: ``
    },
    {
        question: "コモロ諸島がその最大の輸出国となっている、ティファニーやシャネルの香水にも用いられている、タガログ語で「花の中の花」を意味するバンレイシ科の植物は",
        answer: "イランイラン",
        explanation: ``
    },
    {
        question: "1960年代までは夜光塗料として時計の文字盤にも用いられたが、従業員の健康被害が続出し規制された、1898年にマリー・キュリーにより発見された原子番号88、元素記号Raの元素は？",
        answer: "ラジウム",
        explanation: ``
    },
    {
        question: "ニュージーランドの5ドル紙幣の肖像にもなっている、1953年5月29日にシェルパのテンジン・ノルゲイと共に人類で初めてエベレストに登頂した人物は誰でしょう？",
        answer: "エドモンド・ヒラリー",
        explanation: ``
    },
    {
        question: "ヌワラエリヤ、キャンディ、ウバなどの紅茶の産地として有名である、1972年に国名をセイロンから改めた、インド洋に位置する島国は",
        answer: "スリランカ",
        explanation: ``
    },
    {
        question: "2018年にはフォーブス誌による「アメリカの最も裕福なセレブ」で1位となっている、『インディ・ジョーンズ』や『スター・ウォーズ』の生みの親として知られる映画監督は",
        answer: "ジョージ・ルーカス",
        explanation: ``
    },
    {
        question: "通称「The Met」と呼ばれる、1866年のパリにてアメリカの独立記念90周年を祝う人々によって構想が提案され、1870年に創立したニューヨーク5番街にある美術館は？",
        answer: "メトロポリタン美術館",
        explanation: ``
    },
    {
        question: "鮭の身が赤く見えるのはこれに由来する、優れた抗酸化作用を持つカロテノイド系色素は？",
        answer: "アスタキサンチン",
        explanation: ``
    },
    {
        question: "現在の形のものはイギリスの薬剤師ジョン・ウォーカーによって発明された、一般的には軸木の先端にある頭薬を、容器に付けられた側薬に擦りつける事で着火する道具は",
        answer: "マッチ",
        explanation: ``
    },
    {
        question: "「栴檀は双葉より芳し」の「栴檀」は本来この植物の事である、東インドに分布する半寄生性の常緑植物は",
        answer: "ビャクダン",
        explanation: ``
    },
    {
        question: "無駄な事は「闇夜のこれ」、自らの行いを権威付ける事は「これの御旗」、出世して故郷へ帰る事は「これを飾る」。いずれも何と言う単語が入る？",
        answer: "錦",
        explanation: ``
    },
    {
        question: "生物の学名を、属名と種名で表す「二名法」を確立したことから「分類学の父」と呼ばれる、1707年5月23日生まれのスウェーデンの博物学者は",
        answer: "カール・フォン・リンネ",
        explanation: ``
    },
    {
        question: "海賊対処の為に自衛隊にとっては事実上初の海外拠点が開設されている、1977年にフランスから独立した、アデン湾と紅海を結ぶ位置にあるアフリカの国は？",
        answer: "ジブチ",
        explanation: ``
    },
    {
        question: "ロリータファッションの一種である「ゴスロリ」の「ゴス」とは何と言う単語の略？",
        answer: "ゴシック",
        explanation: ``
    },
    {
        question: "「計画された位置に所定の断面寸法をもって設けられた地下構造物で、その施工法は問わないが仕上がり断面積が2平方メートル以上のもの」と一般的に定義される、日本語では「隧道」と呼ばれる物は何？",
        answer: "トンネル",
        explanation: ``
    },
    {
        question: "現代ではこれで作られた家やホテルなどもある、貨物輸送に用いる金属製の組立式容器は？",
        answer: "コンテナ",
        explanation: ``
    },
    {
        question: "蛇が自分の尾を咥えて回っている夢を見たことから思いついたという逸話もある、ベンゼンの6角構造のことを発見者であるドイツの科学者の名前から「何構造」と言う？",
        answer: "ケクレ",
        explanation: ``
    },
    {
        question: "2006年以前は4月29日であった、「自然に親しむとともにその恩恵に感謝し、豊かな心をはぐくむ」ことを目的として名付けられた国民の祝日は？",
        answer: "みどりの日",
        explanation: ``
    },
    {
        question: "1977年に第1作目ながらエピソード4に当たる「新たなる希望」が公開された、ジョージ・ルーカス監督のスペースオペラ映画は？",
        answer: "スター・ウォーズ",
        explanation: ``
    },
    {
        question: "その名は創設者の一人であるエドワード・スミス・スタンレーの爵位名から名付けられた、第1回は1780年5月4日に行われ、現在は毎年6月にイギリスのエプソム競馬場にて開催されている競争は？",
        answer: "ダービーステークス",
        explanation: ``
    },
    {
        question: "「信仰の対象と芸術の源泉」という副題で2013年に世界文化遺産に登録されている、標高3776mと日本で一番高い山は？",
        answer: "富士山",
        explanation: ``
    },
    {
        question: "梱包物の一つは「世界で一番売れている家庭用体重計」としてギネス記録に登録されている、2007年にニンテンドーが発売したゲームは？",
        answer: "Wii Fit",
        explanation: ``
    },
    {
        question: "光棍節、聖マルティヌスの日、第一次世界大戦の終結はいずれも何月何日の出来事？",
        answer: "11/11",
        explanation: ``
    },
    {
        question: "『ブルーアーカイブ』『アークナイツ』『アズールレーン』などの運営を行っている、東京都千代田区に本社を置く会社は？",
        answer: "Yostar",
        explanation: ``
    },
    {
        question: "そこを泳ぎで横断した者は「チャネルスイマー」と呼ばれる、グレートブリテン島とフランスの間にある海峡を、一般的にイギリスの港の名前から「何海峡」という？",
        answer: "ドーバー",
        explanation: ``
    },
    {
        question: "西暦604年5月6日に制定された、その内容は役人に道徳規範を説いたものとなっている、聖徳太子が制定したとされる日本最初の憲法は？",
        answer: "十七条憲法",
        explanation: ``
    },
    {
        question: "副題として「合唱付き」と付けられることも多い、特に「恐怖のファンファーレ」と呼ばれる荒々しい導入から『歓喜の歌』へと続く第4楽章が有名である、ベートーヴェン作曲の交響曲といえば第何番？",
        answer: "9",
        explanation: ``
    },
    {
        question: "著作権を侵害したデータのやり取りやコンピューターウイルスの拡散などの悪用が起こり、開発者である金子勇が逮捕される事態となった、P2Pファイル共有ソフトは？",
        answer: "Winny",
        explanation: ``
    },
    {
        question: "ヨットレース・アメリカズカップには5回出場している、英国の紅茶ブランドの創業者として知られる、1850年5月10日にスコットランドのグラスゴーで生まれた「紅茶王」と言えば誰？",
        answer: "トーマス・リプトン",
        explanation: ``
    },
    {
        question: "在位中にフランス革命が起こりその渦中で処刑された、妻にマリー・アントワネットを持っていたことも有名である、ブルボン朝第5代フランス国王は？",
        answer: "ルイ16世",
        explanation: ``
    },
    {
        question: "天下一家の会事件を契機にこれを防止する法律が制定された、「無限連鎖講」とも呼ばれる組織形態の事を、会員の増加の仕方をある動物に譬えて何と言う？",
        answer: "ねずみ講",
        explanation: ``
    },
    {
        question: "「恥の多い生涯を送って来ました。」という一節も有名な、太宰治の遺作となった中編小説は？",
        answer: "人間失格",
        explanation: ``
    },
    {
        question: "普通選挙法と合わせて制定された、社会主義運動や労働運動を取り締まることを目的とした法律は？",
        answer: "治安維持法",
        explanation: ``
    },
    {
        question: "マラリア原虫はハマダラカによって媒介される事を解明し、その一連の業績から第2回ノーベル生理学・医学賞を受賞したイギリスの医学者は？",
        answer: "ロナルド・ロス",
        explanation: ``
    },
    {
        question: "その名はサンスクリット語で「白い山」を意味する、ヒマラヤ山脈の西部に位置する、標高8,167mと世界で7番目に高い山は？",
        answer: "ダウラギリ",
        explanation: ``
    },
    {
        question: "牡丹を「花の王」と言うのに対して「花の宰相」と呼ばれる、美女の形容として立った姿をこれに例える都々逸も有名な花といえば？",
        answer: "シャクヤク",
        explanation: ``
    },
    {
        question: "1878年に紀尾井坂の変で暗殺された、島津久光の下で公武合体運動を推進するなど明治維新の指導者となった、西郷隆盛、木戸孝允と共に「維新の三傑」に数えられる人物は？",
        answer: "大久保利通",
        explanation: ``
    },
    {
        question: "47つの有人島と113つの無人島からなる、ノグチゲラやヤンバルクイナ、イリオモテヤマネコなど多様な固有種が生息していることでも知られる、1972年に日本に復帰した都道府県は？",
        answer: "沖縄県",
        explanation: ``
    },
    {
        question: "元々はサウスランド・アイス社の氷小売販売店であった、1974年に東京都江東区にて日本1号店がオープンした、その名は開店当時の営業時間にちなむコンビニエンスストアは？",
        answer: "セブン・イレブン",
        explanation: ``
    },
    {
        question: "京都御所から下鴨神社を経て上賀茂神社へと向かう行列「路頭の儀」が見所である、毎年5月15日に開催される京都三大祭の一つは何？",
        answer: "葵祭",
        explanation: ``
    },
    {
        question: "「ヨーグルト不老長寿説」を発表したことから、彼の誕生日の5月15日は「ヨーグルトの日」とされている、食細胞の研究の業績から1908年にノーベル生理学・医学賞を受賞しているロシアの微生物学者は？",
        answer: "イリヤ・メチニコフ",
        explanation: ``
    },
    {
        question: "1975年5月16日に女性では世界で初めてエベレストを登頂し、1992年には女性で世界初の七大陸最高峰登頂者にもなった人物は？",
        answer: "田部井淳子",
        explanation: ``
    },
    {
        question: "樺太が半島か島かを確認するために現地へ派遣され、1809年に樺太とユーラシア大陸の間に海峡がある事を発見した、その海峡名にも名を残している江戸後期の探検家は？",
        answer: "間宮林蔵",
        explanation: ``
    },
    {
        question: "その花の色はウェブカラーにおいてはマゼンタと同じ色に指定されている、名前はドイツの植物学者レオンハルト・フックスに由来するアカバナ科の植物は何でしょう？",
        answer: "フクシア",
        explanation: ``
    },
    {
        question: "学術雑誌『ネイチャー』の創刊者でもある、太陽光のスペクトル線からヘリウムを発見した、イギリスの天文学者は？",
        answer: "ノーマン・ロッキャー",
        explanation: ``
    },
    {
        question: "その病症はおよそ12日間の潜伏期間を経て急激に発熱し、全身に発疹が出現する、エドワード・ジェンナーによって牛痘をワクチンとする予防接種が実現され、1980年5月にはWHOが世界根絶宣言した病気は？",
        answer: "天然痘",
        explanation: ``
    },
    {
        question: "隠花植物を研究する生物学者であると同時に、民俗学の分野における近代日本の先駆者的存在にもなっており、柳田國男からは「日本人の可能性の極限」と評された、1867年に現在の和歌山市で生まれた人物は？",
        answer: "南方熊楠",
        explanation: ``
    },
    {
        question: "建設当時の1974年では、東京スカイツリーを凌ぐ646.4mと世界一高い電波塔であったものの、1991年に塔を支えるワイヤーの交換作業中にミスが生じて倒壊した、ポーランド中部のコンスタンティヌフにあった建造物は？",
        answer: "ワルシャワラジオ塔",
        explanation: ``
    },
    {
        question: "ブリュメール18日のクーデターで権力を握り、1804年にはフランスの皇帝にまで登り詰めるも、後にワーテルローの戦いに敗れてセント・ヘレナ島へ流された人物と言えば？",
        answer: "ナポレオン・ボナパルト",
        explanation: ``
    },
    {
        question: "英語では「プリムローズ」という、ギリシャ神話では青年パラリソスが許婚を失った悲しみからやつれ死にこの花になったとされる、埼玉県と大阪府の県花にも指定されている植物は？",
        answer: "サクラソウ",
        explanation: ``
    },
    {
        question: "第11回ICOMモスクワ大会にて毎年5月18日が「国際○○の日」に制定されている、「アシュモレアン」や「スミソニアン」などが有名である、歴史や芸術、自然科学などに関する資料を収集、保管、公開する施設は？",
        answer: "博物館",
        explanation: ``
    },
    {
        question: "それを対象とした物では世界初であった「ベネラ１号」、ほぼ全面の地形を明らかにした「マゼラン」、大気の三次元的な動きを解明する為に打ち上げられた「あかつき」といえば、いずれもどの星を対象とした探査機？",
        answer: "金星",
        explanation: ``
    },
    {
        question: "その名は西園寺公望が京都御苑の自宅に開設した私塾に由来している、卒業生には『ロードス島戦記』の作者・水野良や、お笑いコンビ「サバンナ」の八木真澄と高橋茂雄などがいる大学は？",
        answer: "立命館大学",
        explanation: ``
    },
    {
        question: "別名では花槙や金宝樹、ギリシャ語で「美しい雄しべ」という意味のカリステモンなどとも呼ばれる、ある掃除用具に似た形の花を咲かせるフトモモ科の植物は？",
        answer: "ブラシノキ",
        explanation: ``
    },
    {
        question: "ショッピングセンターとして売上高で日本一を記録したこともある、1978年に開港された、旧名称を「新東京国際空港」という施設は？",
        answer: "成田空港",
        explanation: ``
    },
    {
        question: "その名は一説にはイタリアのジェノバが由来とされる、三大ブランドとしてラングラー、リー、リーバイスが世界的に知られている、一般的にインディゴで染められた青色が特徴的な服と言えば？",
        answer: "ジーンズ",
        explanation: ``
    },
    {
        question: "2002年5月20日にインドネシアから独立を果たし、21世紀初の独立国となっている、首都をディリに置く島国は？",
        answer: "東ティモール",
        explanation: ``
    },
    {
        question: "化学式C5H9NO4で表される、1908年に池田菊苗が昆布から取り出すことに成功したうま味物質は？",
        answer: "グルタミン酸",
        explanation: ``
    },
    {
        question: "JAXAの前身にあたる宇宙開発事業団の初代理事長も務めていた、生産台数が日本最大の1100両以上となった機関車「D51」を設計したことでも知られる技師は？",
        answer: "島秀雄",
        explanation: ``
    },
    {
        question: "技師・島秀雄が設計した、生産台数は1100両以上と最大となっている日本の機関車を、その形名から一般的に何という？",
        answer: "デゴイチ",
        explanation: ``
    },
    {
        question: "1999年に国内初の人工孵化に成功した、翼や尾羽の裏側の淡い橙赤色が特徴的な、学名を「Nipponia nippon」という大型の水鳥は？",
        answer: "トキ",
        explanation: ``
    },
    {
        question: "現在、マーシャル諸島の唯一の世界遺産となっている、1956年にアメリカがここで初の水爆空中投下実験を行っており、第五福竜丸が「死の灰」を浴びた事件でも知られる場所は？",
        answer: "ビキニ環礁",
        explanation: ``
    },
    {
        question: "彼の教えの真信を伝えるべく作られた「歎異抄」も知られている、法然の下で修業をし、後に浄土真宗の宗祖となった人物は？",
        answer: "親鸞",
        explanation: ``
    },
    {
        question: "アレクシス・カレルと共に世界初の人工心臓を開発した人物でもある、ニューヨークから33時間30分掛けてパリへと飛行し、史上初の飛行機による大西洋無着陸横断を成し遂げたアメリカの飛行家は？",
        answer: "チャールズ・リンドバーグ",
        explanation: ``
    },
    {
        question: "1811年には12歳で魚竜イクチオサウルスの全身骨格を、10年後には首長竜プレシオサウルスの全身骨格、更に7年後には翼竜ディモルフォドンの化石を発見した、イギリスの古生物学者は？",
        answer: "メアリー・アニング",
        explanation: ``
    },
    {
        question: "2012年に墨田区押上にて開業した、その高さは現地の旧国名である「武蔵」に掛かっている、高さ634mで「世界一高いタワー」としてギネス記録にも認定されている建造物は？",
        answer: "東京スカイツリー",
        explanation: ``
    },
    {
        question: "「最も成功した業務用ゲーム機」としてギネス記録に認定されている、「ステージ上のクッキーをゴーストの追跡をかわしながら食べ尽くす」という内容のアーケードゲームは？",
        answer: "パックマン",
        explanation: ``
    },
    {
        question: "SF小説『失われた世界』や冒険歴史小説『勇将ジェラールの回想』、推理小説『緋色の研究』などを執筆した、名探偵シャーロック・ホームズの生みの親として知られるイギリスの小説家は",
        answer: "コナン・ドイル",
        explanation: ``
    },
    {
        question: "その名は光を伝えると考えられた仮想の物質「エーテル」に由来する、1973年に当時Xerox社にいたロバート・エトカルフェが開発した、現在、世界で最も普及している有線LANの規格は？",
        answer: "イーサネット",
        explanation: ``
    },
    {
        question: "1964年のスピードスキーの大会には日本人として初めて参加し、172.084km/hで当時の世界記録を樹立している、2013年には史上最高齢となる80歳でエベレストに登頂した人物は？",
        answer: "三浦雄一郎",
        explanation: ``
    },
    {
        question: "第一回ハドソン全国キャラバンにて「名人」の称号を確立した、「ゲームは1日1時間」「16連射」といった流行語を生みだした、80年代のファミコンブームを牽引した人物は？",
        answer: "高橋名人",
        explanation: ``
    },
    {
        question: "「カオス理論」の提唱者であり、初期条件のわずかな違いによって結果に大きな差が生じる現象である「バタフライ効果」を発見したことで有名である、アメリカの気象学者は？",
        answer: "エドワード・ローレンツ",
        explanation: ``
    },
    {
        question: "1788年に合衆国憲法を批准してアメリカで8番目の州となった、南北戦争開戦の地となったサムター要塞があることでも知られる、州都をコロンビアに置く州は？",
        answer: "サウスカロライナ",
        explanation: ``
    },
    {
        question: "「Write once, Run anywhere」という思想から、処理がプラットフォームに依存しないことを特徴とする、サン・マイクロシステムズによって開発されたプログラミング言語は？",
        answer: "Java",
        explanation: ``
    },
    {
        question: "現在はポアンカレ予想のみが解決されている、2000年にクレイ数学研究所が発表した、リーマン予想やP≠NP予想などを含む、100万ドルの懸賞金が掛けられた数学の重要な7つの難問を何という？",
        answer: "ミレニアム懸賞問題",
        explanation: ``
    },
    {
        question: "完全に揃った最古の写本として藤原定実の「元永本」も知られる、延喜五年に醍醐天皇の勅命によって編纂された最初の勅撰和歌集は？",
        answer: "古今和歌集",
        explanation: ``
    },
    {
        question: "1844年の実用化実験では、これを用いてワシントンD.C.からボルチモアへと「What hath God wrought」という電報が送られた、「・」と「-」によって文字や記号を表現する電信符号は？",
        answer: "モールス符号",
        explanation: ``
    },
    {
        question: "ロシア連邦北西部のムルマンスク州に位置する半島であり、1970年の科学掘削によって出来た12,261mと地球上で最も深い人工地点がある場所は？",
        answer: "コラ半島",
        explanation: ``
    },
    {
        question: "1993年にエチオピアより独立した、無期限の徴兵や強制労働などの問題が横行しており、その強権的な政治体制から「アフリカの北朝鮮」と呼ばれることもある、首都をアスマラに置くアフリカ北東部の国は？",
        answer: "エリトリア",
        explanation: ``
    },
    {
        question: "新村出によって編纂され、1955年に初版が発売された、最新のものは第7版である岩波書店が刊行している国語辞典は？",
        answer: "広辞苑",
        explanation: ``
    },
    {
        question: "「原子を磁場の中に置いた場合、原子から放出される電磁波のスペクトルが分裂する」という現象を発見し、その功績から1902年にヘンドリック・ローレンツと共にノーベル物理学賞を受賞している、オランダの物理学者は？",
        answer: "ピーター・ゼーマン",
        explanation: ``
    },
    {
        question: "国連は5月25日を「○○デー」と定めている、大陸には世界最大のサハラ砂漠や世界最長のナイル川がある地域は？",
        answer: "アフリカ",
        explanation: ``
    },
    {
        question: "紀元前240年5月25日の『史記』のものが最古の出現記録だとされている、75.3年の周期で公転する天体を、その周期性を突き止めたイギリスの天文学者から「何彗星」という？",
        answer: "ハレー",
        explanation: ``
    },
    /*
    他のクイズを追加。
    {
        question: "",
        answer: "",
        explanation: ``
    },
    */
];

const quizContainer = document.getElementById('quizText');
const quizAnswer = document.getElementById('quizAnswer');

let currentQuestionIndex = 0;
let currentIndex = 0;
let intervalId;

// クイズの順番をランダムに入れ替える関数
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleQuestions(questions);

function displayNextCharacter() {
    const quizText = questions[currentQuestionIndex].question;
    document.getElementById("result").textContent = "";
    document.getElementById("explanation").textContent = "";
    document.getElementById("answer").value = "";
    
    if (currentIndex < quizText.length) {
        quizContainer.textContent += quizText.charAt(currentIndex);
        currentIndex++;
    } else {
        clearInterval(intervalId);
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.answer.toLowerCase()) {
        document.getElementById("result").textContent = "正解！";
    } else {
        document.getElementById("result").textContent = "残念！";
    }

    //クイズの解説、全文、答えを表示
    document.getElementById("explanation").textContent = currentQuestion.explanation;
    quizContainer.textContent = currentQuestion.question;
    quizAnswer.textContent = currentQuestion.answer;

    // 「Next」ボタンに変更
    const submitButton = document.querySelector("button");
    submitButton.textContent = "Next";
    submitButton.onclick = nextQuestion; // 次の質問に進む関数を設定
}

function nextQuestion() {
    // 「Next」ボタンを「Submit Answer」ボタンに戻す
    
    const submitButton = document.querySelector("button");
    submitButton.textContent = "Submit Answer";
    submitButton.onclick = checkAnswer; // 答えをチェックする関数を設定

    // Move to the next question or end the quiz
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        currentIndex = 0;
        
        //表示されたクイズの文章と答えを消す。
        quizContainer.textContent = "";
        quizAnswer.textContent = "";
        
        intervalId = setInterval(displayNextCharacter, 125);
        displayNextCharacter();
    } else {
        document.getElementById("question").textContent = "クイズ終了！";
        document.getElementById("answer").style.display = "none";
        submitButton.textContent = "Continue"; // 「Continue」ボタンに変更
        submitButton.onclick = restartQuiz; // クイズを最初から始める関数を設定
    }
}

// クイズの文章を一文字ずつ表示するインターバルを設定
intervalId = setInterval(displayNextCharacter, 125);
