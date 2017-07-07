//=========================//
//           清單
//=========================//
// 資料來源
// 2017.07 New TV Animation
// https://imgur.com/85WkAcz
// 2017年7月夏季新番放送列表
// https://goo.gl/Gr4h6l
// wikipedia
// https://zh.wikipedia.org
// 百度百科
// https://baike.baidu.com/
// 巴哈姆特
// https://www.gamer.com.tw/
// 萌娘百科 (by-nc-sa)
// https://zh.moegirl.org/
Anime = [
    // 格式
    // ['動畫名稱', '星期', '撥出時間', '改編', '日文原文', '圖片', '介紹'],
    // 星期  Sun  Mon Tue  Wed  Thu  Fri  Sat
    //      日   一   二   三    四   五   六
    // 改編  Comic   Novel   Game     Original
    //      漫畫     小說     遊戲     原創或其他
    // 資料存取範例
    // -> Anime[0][0]
    // <- DIVE!!跳水男孩
    ['DIVE!!跳水男孩', 'Thu', '2017年7月6日（四）24：55', 'Novel', 'DIVE!!', 'https://i.imgur.com/rq5l04T.jpg', '坂井知季常去的跳台跳水俱樂部由於負債經營陷入危機。為說服打算關閉 MDC 的母公司，新教練·麻木夏陽子提出讓俱樂部繼續存在的條件「來年奧林匹克運動會由 MDC 送出日本代表選手」。面向選拔會，知季與朋友們開始了嚴酷練習的每天。'],
    ['猜謎王', 'Tue', '2017年7月4日（二）25：59', 'Comic', 'ナナマル サンバツ', 'https://i.imgur.com/Fh4K8rr.png', '高中一年級的越山識， 在入學後立刻受到詭異學長勸募， 希望他參加旗下的「猜謎研究會」。 原本只是個內向書蟲的識， 被同學真理拉了一把， 就此踏入競爭只在 0.1 秒間的猜謎搶答世界──'],
    ['地獄少女 宵伽', 'Fri', '2017年7月14日（五）24：00', 'Original', '地獄少女 宵伽', 'https://i.imgur.com/pPsspr6.png', '在都市的青少年中，有著這樣一個傳言：只要在深夜零時登錄「地獄通信」，將​​所怨恨人的名字寫下來，且你的怨恨達到了可以委託的程度，地獄少女就會出現，立即把你怨恨的人帶入地獄。然而讓人意想不到的是，這個傳言是真的......。'],
    ['海天使之光', 'Wed', '2017年7月12日（三）20：20', 'Novel', 'クリオネの灯り', 'https://i.imgur.com/3HLL8mZ.jpg', '海天使之光以當今社會中備受關注的“欺凌”為主題的作品。講述由於體弱多病且父母雙亡而遭受欺負的少女實，與希望看到實的笑容的方和杏子之間的感人故事。'],
    ['天使的3Ｐ！', 'Mon', '2017年7月10日（一）20：00', 'Novel', '天使の3P！', 'https://i.imgur.com/1JKyGmP.jpg', '拒絕上學的高中生貫井響喜歡用歌唱軟體製作歌曲並上傳到網路上。某一天響收到了一封想和他見面的郵件，而當響前去赴約時，沒想到和他見面的卻是五島潤、紅葉谷希美、金城空三名小學五年級的女生。'],
    ['活擊 刀劍亂舞', 'Sat', '2017年7月1日（六）24：30', 'Game', '活撃/刀剣乱舞', 'https://i.imgur.com/B0EjcHX.jpg', '遊戲原作故事描述西元 2205 年時的政府為了對抗目的為干涉過去歷史的「歷史修正主義者」，擁有將刀劍喚醒的力量的審神者以及刀劍的付喪神「刀劍男士」送往各個時代展開戰役。'],
    ['最遊記 RELOAD BLAST', 'Wed', '2017年7月5日（三）22：30', 'Comic', '最遊記 RELOAD', 'https://i.imgur.com/fKJpRJX.jpg', '《最遊記》是日本漫畫家峰倉和也於一迅社連載的漫畫作品，故事套用中國神怪小說《西遊記》的人物名稱，但是劇情方面並沒有任何關聯。全書畫風唯美頹靡，劇中主角都背負黑暗的過去。'],
    ['辣妹與我的第一次', 'Wed', '2017年7月12日（三）23：00', 'Comic', 'はじめてのギャル', 'https://i.imgur.com/xzyjMYO.jpg', '為了脫離童貞而煩惱的高中生羽柴純一，有一天他聽從「只要跪下拜託辣妹的話就能從童貞畢業」這個迷信，跪下向班裡的辣妹八女告白並成功，但她每天都把羽柴玩弄在手中…'],
    ['捏造 TRAP–NTR', 'Wed', '2017年7月5日（三）20：00', 'Comic', '捏造トラップ-NTR-', 'https://i.imgur.com/RHAAvYA.jpg', '由真第一次跟男生交往，不知道怎麼辦，就去找她的總角之交水科螢商量。結果螢卻取笑她太純真，而且不知為什麼還吻了她。她們和彼此的男朋友一起舉行雙重約會，結果螢在約會途中開始對由真上下其手，還對由真做了連她男朋友都還沒對她做過的事⋯'],
    ['戰鬥女子學園', 'Sun', '2017年7月2日（日）24：30', 'Game', 'バトルガール ハイスクール', 'https://i.imgur.com/FKdoHuU.jpg', '遊戲將時間設定在西元2045年，地球上因為外來物種「伊洛斯」侵略，已經幾乎沒有人類存在，人類在宇宙（宇宙殖民地、月冠和火星共同體）建立新的居所，只有就讀神樹峰女子學園的18位少女和4位老師擔任著星守者們的工作，聯同星之方舟保護著這個星球。'],
    ['舞動青春', 'Sat', '2017年7月8日（六）26：08', 'Comic', 'ボールルームへようこそ', 'https://i.imgur.com/wIc1diU.png', '富士田多多良原本是個沒有特殊喜好，對未來也沒有期許的中學生。某天，有位神秘的安全帽男解救了被欺凌的多多良，並強行帶他到「小笠原舞蹈教室」學習社交舞。原先與跳舞無緣的多多良在觀看了珠紀偷偷借給他的國標舞大賽光碟，以及雫與兵藤的舞姿後，決定踏上他的舞蹈之路。'],
    ['單蠢女孩', 'Tue', '2017年7月4日（二）23：00', 'Comic', 'アホガール', 'https://i.imgur.com/G5ZiQcY.jpg', '《單蠢女孩》是由日本漫畫家ヒロユキ作畫的四格漫畫，在《周刊少年Magazine》2012年52號上開始連載。描寫冷酷高中生阿久津明與笨蛋女高中生花畑佳子的學校日常生活的搞笑喜劇作品。'],
    ['戀愛與謊言', 'Mon', '2017年7月3日（一）24：00', 'Comic', '恋と嘘', 'https://i.imgur.com/AdVUivZ.jpg', '故事發生於未來的日本，在超少子化對策基本法的規限下，少年少女們在16歲後便會失去自由戀愛的權利，政府會基於國民的遺傳因子資料強制指定他們的結婚對象，並且會保證兩人之間的契合度，而大家都欣然接受這種「幸福」。'],
    ['潔癖男子！青山君', 'Sun', '2017年7月2日（日）24：00', 'Comic', '潔癖男子！青山くん', 'https://i.imgur.com/vShHUng.jpg', '潔癖男子青山為日本足球代表選手的天才美少年，連踢球時也是充滿「潔癖」。頭槌、鏟球當然不可能，界外球？戴上手套的話就還算能接受。這樣的男生真的沒問題？無菌系攻擊型足球社喜劇，一塵不染地閃亮登場！！'],
    ['梵諦岡奇蹟調查官', 'Fri', '2017年7月7日（五）22：30', 'Novel', 'バチカン奇跡調査官', 'https://i.imgur.com/NJs0W2d.jpg', '在梵蒂岡內，有一個專門受理全球的「神蹟申請」並負責檢證其真偽的機關——「聖座（聖徒の座）」，而隸屬聖座的神父則會被稱作奇蹟調查官。天才科學家平賀·約瑟夫·庚及暗號解讀專家羅貝多·尼可拉斯均是聖座的奇蹟調查官，他們經常調查在世界各地所發生的神蹟。但在調查期間，卻逐漸揭露一些被隱藏的事件及陰謀。'],
    ['徒然 CHILDREN', 'Tue', '2017年7月4日（二）23：15', 'Comic', 'AKIBA’S TRIP -THE ANIMATION-　', 'https://i.imgur.com/SIgsb55.jpg', '故事講述了青梅竹馬之間、學生會長與不良少女之間、前輩與後輩之間、同學之間等多種不同角色的戀愛群像劇。'],
    ['騎士＆魔法', 'Sun', '2017年7月2日（日）21：00', 'Novel', 'ナイツ＆マジック', 'https://i.imgur.com/JhISYmK.jpg', '因為交通事故而過世的機械宅倉田翼，其靈魂轉生到了一個以「幻晶騎士」為主力戰力的異世界。轉生之後依然對機械充滿熱情的他，決定要製作屬於自己的幻晶騎士。'],
    ['狂賭之淵', 'Sat', '2017年7月1日（六）26：38', 'Comic', '賭ケグルイ', 'https://i.imgur.com/h4o0PfY.jpg', '故事背景是以貴族子女為主要學生的名門學校「私立百花王學園」，這是一所以賭博能力決定地位高低的學校，能力最差的一百名被稱為「家畜」，是學校中最低劣的學生，許多學生權利都遭剝奪，在校內也不被當人看待，而家畜只有一次挑戰任何人的翻身機會，稱為「公式戰」。'],
    ['帶著智慧型手機闖蕩異世界', 'Tue', '2017年7月11日（二）20：30', 'Novel', '異世界はスマートフォンとともに。', 'https://i.imgur.com/SS3x3SM.jpg', '因為神明的失誤，望月冬夜死去後在異世界開啟了第二人生。擁有了被神明提高能力的身體，以及在異世界中也能使用的手機，冬夜發揮善良的天性，與許多人們相遇、認識重要摯友，並在過程中不知不覺得知了世界的秘密。手拿智慧型手機，在異世界展開的溫馨冒險故事。'],
    ['機動戰士鋼彈 Twilight AXIS', 'Fri', '2017年6月23（五）網路播送', 'Novel', '機動戦士ガンダム Twilight AXIS', 'https://i.imgur.com/ixmvxM7.jpg', '宇宙世紀0096年，在經歷過圍繞『拉普拉斯之盒』的戰爭——拉普拉斯之亂後數個月，對於在先前戰役中讓MS發出超乎想像的能力、對戰鬥局勢起到關鍵作用的精神感應框架感到威脅的地球連邦政府，派遣特殊部隊「莫斯提馬」(Mansemat マスティマ)到在第二次新吉翁抗爭中變成廢墟的小行星「阿克西斯」進行調查。 吉翁出身的雅萊特·艾露美琪與丹頓·海勒格作為平民與莫斯提馬一同前往，卻在阿克西斯內遭到自稱「伯納姆」(Birnam バーナム)的武裝團體襲擊……'],
    ['THE REFLECTION WAVE ONE', 'Sat', '2017年7月22日（六）23：00', 'Original', 'THE REFLECTION WAVE ONE', 'https://i.imgur.com/01uEVm5.jpg', '邪惡的黑煙籠罩了天空，許多人因此喪命，但是一些倖存下來的人卻因此發生了變異。巨大謎團也由此誕生，一些新的英雄站了出來，開始和黑暗進行戰鬥。'],
    ['18if', 'Fri', '2017年7月7日（五）22：00', 'Game', '18if', 'https://i.imgur.com/weYJHkp.jpg', '這裡是夢世界。是慾望、希望、絕望成形的，意識與無意識的夾縫間。在總是做夢的自己的房間裡，再次陷入睡眠的月城遙人，偶然進入了他人的夢境。那是，心靈被囚禁在這夢世界裡的魔女們的夢。陷入拒絕現實、逃往夢境、持續睡眠的“睡美人病”當中的，她們的夢的姿態。迷失在魔女的夢世界中的遙人，尋找著出口的門，並和她們打著招呼。'],
    ['RWBY Volume 1-3: The Beginning', 'Fri', '2017年7月7日（五）25：05', 'Original', 'RWBY Volume 1-3: The Beginning', 'https://i.imgur.com/VR10jmY.jpg', '本作的背景設定在同時具有高科技和超自然力量的世界。此世界有四個「王國」以及在王國外的聚落、兩個智慧人種（人類和獸人 Faunus）、以及稱為魔獸（Grimm）的怪獸；大部份的科技是用稱為塵晶Dust的物質運作，這是人們得以對抗魔獸的力量來源之一。'],
    ['將國戡亂記', 'Fri', '2017年7月7日（五）26：25', 'Comic', '将国のアルタイル', 'https://i.imgur.com/9kHbcXn.jpg', '戰爭硝煙迫近的時刻，飛揚起勇猛的羽翼！漫畫以遊牧民族國家特魯齊亞與軍事大國巴魯特萊茵的摩擦衝突為開端，講述了少年將軍穆夫穆托的成長，以及席捲全大陸的盧梅里亞納大戰爭的始末。'],
    ['KAITO X ANSA', 'Wed', '2017年7月12日（三）20：10', 'Original', 'カイトアンサ', 'https://i.imgur.com/KKAcKu2.jpg', '距離立川消滅還有5小時。被選中為救世主「Q Former」，深愛立川的熱血男人阿園魁斗及其好友有進杏茶，背負起了解放閃耀的能量結晶「Q Stone」，拯救立川消滅的危機的使命。與前輩Q Former網野解音以及元氣JK寶川日向一起，向敵人的使者16臣封所出的16道「解謎」發起挑戰的兩人。他們究竟能否答對全部的問題！？拯救立川！拜託了！魁斗、杏茶！'],
    ['Fate/Apocrypha', 'Sat', '2017年7月1日（六）24：00', 'Novel', 'Fate/Apocrypha', 'https://i.imgur.com/jmeoNcI.jpg', '在第三次聖杯戰爭過後，愛因茲貝倫、遠坂、馬基里御三家處於虛弱無力的狀態，大聖杯系統因而被納粹勢力所奪取，後來又被其他的魔術師搬運至別處。冬木市的聖杯戰爭也迎來了終結，是原作遊戲的平行世界。聖杯戰爭的資訊被公布，此後在世界各地都發生了聖杯戰爭的「亞種」，召喚英靈變得稀鬆平常。然而這些亞種的聖杯戰爭召喚的英靈數量有限，且無法到達根源。'],
    ['妖怪公寓的優雅日常', 'Mon', '2017年7月3日（一）23：00', 'Comic', '妖怪アパートの幽雅な日常', 'https://i.imgur.com/sbNPF9S.png', '我，稻葉夕士，東條商校一年級新生。人類。升入寄宿制高中的我，終於可以擺脫一直以來寄人籬下的悲慘生活了！與大親友依依惜別之後回到家，卻聽到噩耗——學校宿舍被大火燒毀了！天無絕人之路，在莫名出現的房屋中介的幫助下，我幸運地住進了一棟租金便宜但失修已久的破舊公寓——“壽莊”奇妙的生活就此展開……'],
    ['來自深淵', 'Fri', '2017年7月7日（五）21：30', 'Comic', 'メイドインアビス', 'https://i.imgur.com/bAk6DcN.jpg', '故事講述在一個萬物已被探知的世界，於一千九百年前位於南海貝奧魯斯卡的某孤島上，發現直徑約一公里的巨形深淵。其深淵有著某未知磁場，人類無法用任何手段從洞外探測，只能親身進入深淵中進行探險。而於孤兒院生活的莉子，其願望是成為白笛，前往母親出事所在的深淵層數，而在莉子某天的探險中，她發現了一個機器人。'],
    ['Gamers 電玩咖！', 'Thu', '2017年7月13日（四）23：30', 'Novel', 'ゲーマーズ！', 'https://i.imgur.com/MZw8qtI.jpg', '興趣是遊戲。除此之外毫無顯眼的特徵，但對於平凡的日常也並無熱愛，真正意義上的龍套高中生，雨野景太。這樣的他沒有突然在學生會做出後宮宣言，也沒有被關進雖然是遊戲但不是鬧着玩的MMO的世界，但……。「……和我交往，試着加入遊戲部怎樣？」他遭遇了被學園第一的美少女同時也是遊戲部部長天道花憐搭話，這種驚人的戀愛喜劇套路展開。本以為會與喜愛遊戲的美少女們展開戀愛喜劇，然而！？亂成一團的遊戲玩家們帶來的錯綜複雜青春喜劇開幕！'],
    ['戰姬絕唱 SYMPHOGEAR AXZ', 'Sat', '2017年7月1日（六）25：00', 'Original', '戦姫絶唱シンフォギアAXZ', 'https://i.imgur.com/J1751z8.jpg', '於未來的某個時間和地方，人氣歌唱組合「雙翼」舉行了風靡萬千歌迷的演唱會，豈料演唱第一首歌曲以後，會場就突然被大量謎之敵人Noise攻擊。「雙翼」的成員風鳴翼和天羽奏等不及總部發出命令，果斷地展現出她們最根本的SYMPHOCAL戰鬥形態……其中一名歌迷立花響見證整件事的發生，亦因此牽連在內，成就了兩年後完全不同的她……'],
    ['直覺 X 算法', 'Mon', '2017年7月 網路放送', 'Original', '直感×アルゴリズム♪', 'https://i.imgur.com/bgHaefG.jpg', '兩人可以成為偶像嗎!?作為首次“直播動漫”的娛樂紀錄片，本節目將展示給大家虛擬偶像挑戰困難的真實成長過程！ ！ ！正因為是“直播”，所以難免發生碰撞和火花！正因為是“直播”，所以節目將會傳達您的聲音！這是一個中日同步播放的節目！歡迎大家參與，共同為兩人的成功而聲援吧！ !'],
    ['Princess Principal', 'Sun', '2017年7月9日（日）23：00', 'Original', 'プリンセス・プリンシパル', 'https://i.imgur.com/LTAMrBE.jpg', '19世紀末，阿爾比昂王國的首都倫敦被巨大的牆壁斷開以致東西分隔。而在倫敦內，有五位少女就讀於一所傳統與禮儀的名門學校·梅菲爾女王學校。她們偽裝成一般的女高中生，並在這個城市內展開間諜活動。少女們活用各自的能力，在影之世界來回飛奔'],
    ['時間支配者', 'Fri', '2017年7月7日（五）24：30', 'Comic', '時間の支配者', 'https://i.imgur.com/23SPg8S.jpg', '失去記憶的主人公和夥伴，為了找和他簽訂契約的「計」而旅行，動畫由project NO.9製作，預定於2017年放送。'],
    ['咕嚕咕嚕魔法陣', 'Tue', '2017年7月11日（二）1：35', 'Comic', '魔法陣グルグル 新シリーズ', 'https://i.imgur.com/EzdEXDd.jpg', '故事內容為，300年前被封印的魔王吉利再次復活，主角尼克和柯柯麗須合力再次把吉利封印。沿途上二人路經不同的村落，接觸不同的人，並透過修行提升等級。'],
    ['Robomasters：The Animated Series', 'Mon', '2017年7月預定', 'Original', 'Robomasters：The Animated Series', 'https://i.imgur.com/p38jxhH.jpg', '大學的新學期伊始。心無雜念頭腦裡只想著如何改良自己做的無人機，KAKA的單單在熱鬧非凡的各大社團招新人海中，略顯得有些格格不入。在單單從校舍後方的廣場向延綿海岸扔出飛碟，進行無人機KAKA的捕捉測試時因為海風的影響飛碟不小心飛到了一名女生的身上。 ，這突如其來的事故，卻變為了使原本有些自閉的單單逐漸成長的契機。'],
    ['半獸人的煩惱', 'Sun', '2017年7月9日（日）22：00', 'Comic', 'セントールの悩み', 'https://i.imgur.com/HFpfCdH.jpg', '故事主要講述一個基於非現實人類形態的人類世界，一群女高中生們的日常生活故事。'],
    ['庭球社 S9', 'Mon', '2017年7月12日（三）22：40', 'Comic', 'てーきゅう 9期', 'https://i.imgur.com/u6D95cV.png', '故事以虛構的龜井戶高校為舞台，雖然題材是網球，卻不著重在描寫網球部部員的練習和比賽。漫畫和電視動畫雙方的官方網站宣傳語均為「幾乎沒有網球要素的網球漫畫」（テニスをほとんどしないテニス漫畫），每話均為獨立故事。通常以每月2話的形式在《Comic Earth Star》上連載。每話標題均是「第x面」（x為話數）和「先輩と（電影標題）」。'],
    ['獨佔我的英雄', 'Sat', '2017年7月8日（六）23：30', 'Comic', 'ひとりじめマイヒーロー', 'https://i.imgur.com/ZTi0J3a.jpg', '《獨佔我的英雄》是一部描繪不良高中老師x廢柴不良少年的日常戀愛BL漫畫。講述崇拜康介老師的勢多川，總是被老師的一舉一動耍的團團轉，但內心對老師的感情卻日漸高漲...'],
    ['異世界食堂', 'Mon', '2017年7月3日（一）25：35', 'Comic', '異世界食堂', 'https://i.imgur.com/CPrpc9O.jpg', '在商業區附近的某條商店街角落，有棟掛著狗招牌的住商混合大樓，那間店就在那裡的地下一樓。門上畫了貓咪圖案的餐館──「貓咪西餐廳」。創業五十年以來，一直持續滿足商業區上班族們的胃。雖然是西餐廳，但西餐以外的菜單也非常豐富，是間只有這點勉強稱得上特徵的普通餐廳。這麼一間不起眼的小餐廳，在每週六都會對外公休，但是其實在這天都要迎接「異世界客人」的光顧：每到這天，店內的牆上就會出現一道門，這群客人不論是人族、魔族、鬼族、精靈族、蜥蜴人族、吸血鬼族、獸人、傳說的魔龍（！？），都會從「門內」光臨！'],
    ['動作英雄 CheerFruit', 'Thu', '2017年7月6日（四）26：28', 'Original', 'アクションヒロイン チアフルーツ', 'https://i.imgur.com/cERq1Y4.jpg', '某個都市的在地英雄戰士突然暴紅並成為風靡全國的巨星，導致各地爭相模仿推出專屬於當地的英雄角色，這些英雄的表演秀目前已是國民性演出活動。沒有搭上首波英雄風潮的「陽菜野市」，在熱愛這城市的少女「城根御崎」及她擔任縣知事的叔母的推動之下，終於決定推出當地英雄戰士！'],
    ['便利店男友', 'Thu', '2017年7月6日（四）25：58', 'Comic', 'コンビニカレシ', 'https://i.imgur.com/2glesvF.jpg', '三島春來與好友·本田塔羽，一同升入了青希空高中。雖然他們各自都有了在意的女生，卻仍然沒有戀愛的跡象。在笨拙地度日的同時，他們與同級生佐佐木凪瑳，以及學長明日海夏、中島帝、櫻小路正宗等人相遇，各自的想法開始相互交錯。任何人都走過一次的道路，爽快地跑過那一瞬間的純愛物語。一如往常的電車。一如往常的上學路。一如往常的便利店。一如往常不變的風景，從明天開始，也許會稍微有所不同呢。'],
    ['歡迎來到實力至上主義的教室', 'Wed', '2017年7月12日（三）11：30', 'Novel', 'ようこそ実力至上主義の教室へ', 'https://i.imgur.com/ABef4Mb.jpg', '對希望的升學、就業目標有著近乎百分之百的達成率，全國屈指可數的名門學校·高度育成高中。使用最新式的設備當然不用說，每月發放相當於十萬元的點數，髮型和私有物的攜帶也完全自由，有如真正的樂園般的學校，但是它的真面目卻是只有優秀的人才能受到好待遇的實力至上主義學校。'],
    ['雛邏輯～from Luck & Logic～', 'Sat', '2017年7月1日（六）22：30', 'Game', 'ひなろじ～from Luck & Logic～', 'https://i.imgur.com/CR6H2y7.jpg', '在L.C.922年，人們正在面對空前的危機。在神話世界的百年戰爭結束後，在神話世界中戰敗的魔神為了在地上尋求新的安居之所，開始向人類世界襲來。背負著守護街區宿命的警察特殊機關阿爾卡（ALCA），旗下年輕的盟約者被強制與擁有特殊能力的異世界女神合體，並進而投身戰場之中。'],
    ['尋找身體', 'Mon', '2017年7月（）', 'Comic', 'カラダ探し', 'https://i.imgur.com/hafn92x.jpg', '《尋找身體》描述一個在校園裡面流傳的傳說，在放學後的校園裡面落單，就會碰到恐怖的「紅人」，並且被捲入恐怖的詛咒裡面、身體被大卸八塊，而被詛咒的人會出現在大家的面前拜託幫他「尋找身體」'],
    ['野良和皇女和野貓之心', 'Wed', '2017年7月12日（三）22：45', 'Game', 'ノラと皇女と野良猫ハート', 'https://i.imgur.com/vwFnVCO.jpg', '居住在櫻之淵市的主角反田野良，某日在公園碰見了一名自稱要毀滅地表，來自冥界的皇女「派翠西亞」。然而，在因緣巧合下野良親吻了派翠西亞，卻因此變成了一隻貓？！'],
    ['裙子下的野獸', 'Sun', '2017年7月2日（日）25：00', 'Comic', 'スカートの中はケダモノでした。', 'https://i.imgur.com/g3UIamk.jpg', '有恐男症的女主角「小南靜歌」聚會後都會自行離去，但在聯誼時卻遇到一位超美的大姐姐「霧島涼」，相談之下發現兩人很合拍，就在靜歌有點喝醉後被帶去開房間～'],
    ['狐妖小紅娘', 'Sat', '2017年7月1日（六）21：00', 'Comic', '結びの妖狐ちゃん', 'https://i.imgur.com/r5nX3ER.jpg', '圍繞人與妖之間的愛情展開。根據古典小說記載，世上有人有妖，妖會與人相戀，妖壽命千萬年，人的壽命有限，人死了，妖活著。人會投胎轉世，但投胎以後，不記得上輩子的愛。妖如果癡情的話，就去找狐妖「購買」一項服務，讓投胎轉世的人，回憶起前世的愛。'],
]