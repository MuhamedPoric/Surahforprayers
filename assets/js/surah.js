var surah_title = [
'Ayat al-Kursi (The Throne Verse)',
'Surah Al Fil (The Elephant)',
'Surah Quraysh (Quraysh)',
'Al-Ma\’un (Neighborly Kindness)',
'Al-Kauthar (Abundance)',
'Al-Kafirun (The Unbelievers)',
'An-Nasr (Succour)',
'Al-Qadr (The Power)',
'Al Masad (The Palm Fibre)',
'Al-Ikhlas (The Sincerity)',
'Al-Falaq (The Dawn)',
'An-Náas (Mankind)',
'Al-Asr (The Time)'
]

var surah_arabic = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]

var surah_transliteration = [
    'Bismillaah ar-Rahman ar-Raheem. Allahu la illaha illa hu. Wal Hayyul Qayyum. La te huzuhu sinetun wala nawmun. Lahu ma fissemawati wa ma fil\’ardi. Men thallathiy yeshfe’u indehu illa biznih. Ya’lemu ma beyne eydiyhim. Wa ma halfehum. Wa la yuhiytune. Bishey\’in min ilmihi. Illa bima sha-a wasia kursiyyuhu semavati wal\’ard. Wa la yeuduhu hifzuhuma wa hu wal aliy ul aziym',
    'Alam tara kayfa fa\'ala rabbuka bi-as-habi al-fili. Alam yaj\'al kaydahum fi tadlilin. Wa arsala alayhim tayran ababila. Tarmihim bihijaratinm min sijjilin. Faja\'alahum ka\'asfinm ma" kul',
    'Li-eelafi qurayshin. Eelafihim rihlata alshshita-iwaalssayfi. Falya budoo rabba hatha albayti. Allathee at amahum min joo in waamanahum min khawfin.',
    'Bismillaah ar-Rahman ar-Raheem. Ara ayta ladhee ukadhibu bid Deen. Fa dhaalikal ladhee yadu’ul yateem. Wa laa yahuddu ‘alaa ta’aamil miskeen. Fa wailun lilmur salleen. Alladheena hum’ an salaatin saahuun. Alladheena hum yuraa uun. Wa yamna ‘uunal maa’uun',
    'Bismillaah ar-Rahman ar-Raheem. Innaa a’atainaakal kauthar. Fasalli li rabbika wanhar. Inna shaani’aka huwal abtar',
    'Bismillaah ar-Rahman ar-Raheem. Qul yaa ayyuhal kaafiruun. Laa ‘abudu maa t’abuduun. Walaa antum ‘aabidunna maa a’abud. Walaa ana ‘aabidun maa ‘abadttum. Walaa antum ‘aabiduuna maa a’abud. Lakum deenukum wa liya deen.',
    'Bismillaah ar-Rahman ar-Raheem. Idhaa jaa a’ nasrullaahi wal fathu. Wa ra aitan naasa yadkhuluuna fee deenil laahi afwaaja. Fasabbih bi hamdi rabbika wastaghfirhu. innahuu kaana tawaaba',
    'Bismillaahir Rahmaanir Raheem. nnaa anzalnaahu fee lailatil qadr. Wa maa adraaka ma lailatul qadr. Lailatul qadri khairum min alfee shahr. Tanaz zalul malaa-ikatu war roohu feeha bi izni-rab bihim min kulli amr. Salaamun hiya hattaa mat la\'il fajr.',
    'Tabbat Yada Abee Lahabin Watab. Ma aghna anhu maluhuwama kasab. Sayasla naran thatalahab. Wamraatuhu hammalata alhatab. Fee jeediha hablun min masad',
    'Bismillaah ar-Rahman ar-Raheem. Qul hu wal lahu ahad, allahus samad, lam yalid wa lam yulad, wa lam ya kul lahu kufuwan ahad',
    'Bismillaah ar-Rahman ar-Raheem. Qul a’uudhu birabbil falaq. Min sharri ma khalaq. Wa min sharri ghaasiqin idhaa waqab. Wa min sharrin naffaathaati fil ‘uqad. Wa min sharri haasidin idhaa hasad',
    'Bismillaah ar-Rahman ar-Raheem. Qul a’uudhi bi rabbin naas. Malikin naas. Ilaahin naas. Min sharril wawaasil khannas. Alladhee yuwaswisu fee suduurin naas. Minal Jinnati wa naas',
    'Bismillaahir Rahmaanir Raheem. Wal \'asr. Innal insaana lafee khusr. Illal lazeena aamanoo wa \'amilus saalihaati wa tawaasaw bilhaqqi wa tawaasaw bissabr'
]

var surah_eng = [
    'In the name of Allah, the Beneficent, the Merciful. Allah! There is no God but He, the Living, the Self-subsisting, the Eternal. No slumber can seize Him, nor sleep. All things in heaven and earth are His. Who could intercede in His presence without His permission? He knows what appears in front of and behind His creatures. Nor can they encompass any knowledge of Him except what he wills. His throne extends over the heavens and the earth, and He feels no fatigue in guarding and preserving them, for He is the Highest and Most Exalted.',
    'Seest thou not how thy Lord dealt with the Companions of the Elephant?. Did He not make their treacherous plan go astray? And He sent against them Flights of Birds, Striking them with stones of baked clay. Then did He make them like an empty field of stalks and straw, (of which the corn) has been eaten up',
    'It is a great Grace and Protection from Allah), for the taming of the Quraish, (And with all those Allah’s Grace and Protections for their taming, We cause) the (Quraish) caravans to set forth safe in winter (to the south), and in summer (to the north without any fear), So let them worship (Allah) the Lord of this House (the Ka’bah in Makkah). (He) Who has fed them against hunger, and has made them safe from fear.',
    'In the name of Allah, the Beneficent, the Merciful. Do you see the one who denies the reckoning? Who shuns the orphan and forgets the hungry? Who worships mindlessly and only to be seen, and fails in neighborly kindness?',
    'In the name of Allah, the Beneficent, the Merciful. Truly, We have given you abundance. So turn to your Lord in prayer and sacrifice. It is those who oppose you who are in loss.',
    'In the name of Allah, the Beneficent, the Merciful. Say: Oh you who turn away. I do not worship what you worship, nor do you worship what I worship. And I will not worship what you worship, Nor will you worship what I worship. Your way is yours, and my way is mine.',
    'In the name of Allah, the Beneficent, the Merciful. When God’s succor comes, and victory and thou seest people enter God’s religion in hosts, extol thy Sustainer’s limitless glory, and praise Him, and seek His forgiveness: for, behold, He is ever an acceptor of repentance.',
    'In the name of Allah, Most Gracious, Most Merciful. We have indeed revealed this (Message) in the Night of Power: And what will explain to thee what the night of power is? The Night of Power is better than a thousand months. Therein come down the angels and the Spirit by Allah´s permission, on every errand: Peace!...This until the rise of morn!',
    'Perish the hands of the Father of Flame! Perish he! No profit to him from all his wealth, and all his gains! Burnt soon will he be in a Fire of Blazing Flame! His wife shall carry the (crackling) wood – As fuel! A twisted rope of palm-leaf fibre round her (own) neck!',
    'In the name of Allah, the Beneficent, the Merciful. Say: He is Allah, the One. He is Allah, the Eternal, Who was never born, nor ever gave birth. The One beyond compare.',
    'In the name of Allah, the Beneficent, the Merciful. Say: I seek refuge with the Lord of the Dawn, from anything harmful in Creation, from the evil of darkness as it spreads, from the evil of knotted spells, from the evil of the envier when he envies.',
    'In the name of Allah, the Beneficent, the Merciful. Say: I take refuge in the Lord of mankind, the Master of mankind, the God of mankind, from the evil of the secret tempter. Who whispers in the hearts of men, of the jinns and men.',
    'In the name of Allah, Most Gracious, Most Merciful. By (the Token of) Time (through the ages), Verily Man is in loss, Except such as have Faith, and do righteous deeds, and (join together) in the mutual teaching of Truth, and of Patience and Constancy.'
]

object.onload = function() {

    var randomNumber = Math.floor(Math.random() * (surah_title.lenght));
    document.getElementById('surah_title').innerHTML = surah_title[randomNumber];

}