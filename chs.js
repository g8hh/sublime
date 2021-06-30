/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    'Save File Empty.': '存档是空的',
    'Collect Limes': '收集酸橙',
    'Limes': '酸橙',
    'Main Square': '主广场',
    'Market': '市场',
    'Max Juicers': '榨汁机上限',
    'Max Peelers': '削皮器上限',
    'Mega Coins': '超级硬币',
    'More Land': '更多土地',
    'Maxed Purchases Shown': '显示的最大购买次数',
    'Multitasking': '多任务处理',
    'Nourishment': '营养',
    'Info': '信息',
    'Intelligence': '智力',
    'Inventory': '库存',
    'Juice': '果汁',
    'John McLime': '约翰·麦克莱姆',
    'Keen Eye': '敏锐的目光',
    'Lime Inc.': '酸橙公司',
    'Look Around': '环视四周',
    'Decrease': '减少',
    'Decrease Juice Sold': '减少果汁销售',
    'On Limes': '酸橙',
    'Options': '选项',
    'Patrician Area': '贵族区',
    'Option to deliver maximum juice': '提供最大果汁的选项',
    'Peeled Limes': '去皮酸橙',
    'Pay Employee Their Wages': '支付员工工资',
    'Skills': '技能',
    'Start Task': '开始任务',
    'Stats': '统计',
    'Coins': '硬币',
    'Click the application to accept.': '单击应用程序以接受。',
    'Check Results': '检查结果',
    'Convert Coins': '转换硬币',
    'Completed Skills Shown': '显示完成的技能',
    'Collect limes without the pesky clicking': '无需烦人的点击即可收集酸橙',
    'Collect as many limes as possible before time runs out!': '在时间用完之前收集尽可能多的酸橙！',
    'Couldn\'t find any limes...': '找不到任何酸橙...',
    'Credit Score': '信用评分',
    'Currency Brokers': '货币经纪人',
    'Buy Shoes': '购买鞋子',
    'Buy More Land': '购买更多土地',
    'Buy Another Map': '购买另一张地图',
    'Buy Big Gloves': '购买大手套',
    'Buy Manuscripts': '购买手稿',
    'Click the \'Teach\' button to start a timer.': '单击“教学”按钮以启动计时器。',
    'Convert Coins to Alpha Coins': '将硬币转换为阿尔法硬币',
    'Convince the country that juice can be added to anything!': '说服这个国家果汁可以添加到任何东西中！',
    'Decrease Lakes': '减少湖泊',
    'Eat Food': '吃食物',
    'Earn Respect': '赢得尊重',
    'Export Code': '导出代码',
    'Export Game': '导出存档',
    'Express Delivery': '快速传送',
    'Science': '科学',
    'Sell Juice': '出售果汁',
    'Sell Max Juice': '出售最大果汁',
    'Sell Your Limes': '出售你的酸橙',
    'Search For Specialised Workers': '寻找专业工人',
    'Sharper Peelers': '更锋利的削皮器',
    'Use Peeler': '使用削皮器',
    'Use Knife': '使用刀',
    'Wallet': '钱包',
    'Watertight Seal': '防水密封',
    'You can only spend this money once you arrive': '这些钱只能在你到达之后才能花',
    'You are in a lime forest.': '你在一片酸橙林中。',
    'Your employee learns from your abilities.': '你的员工从你的能力中学习。',
    'Disease Control': '疾病控制',
    'No Symbols': '无符号',
    'Small': '小',
    'Large': '大',
    'Symbols': '符号',
    'Better Transport': '更好的运输',
    'Big Gloves': '大手套',
    'Bigger Map': '更大的地图',
    'Benevolence': '善心',
    'Bigger Wallet': '更大的钱包',
    'Billboard': '广告牌',
    'Respect +50': '尊重 +50',
    'Respect increase': '尊重增加',
    'Respect Milestones': '尊重里程碑',
    'Robe': '长袍',
    'Rotten Limes': '烂酸橙',
    'Rotten Wisdom': '腐烂的智慧',
    'Rule': '规则',
    'Rule: Random empty spot': '规则：随机空位',
    'Upgrades': '升级',
    'Use Juicer': '使用榨汁机',
    'Unlock currency brokers': '解锁货币经纪人',
    'Unlock Permanance': '解锁永久',
    'Unlock Pinning Actions': '解锁固定操作',
    'Unlock the ability to hire currency brokers in the Hiring Area.': '解锁在招聘区域雇用货币经纪人的能力。',
    'Unlock Swamp Area': '解锁沼泽区域',
    'Unlock something special for completing this!': '解锁一些特别的东西来完成这个！',
    'You found something!': '你发现了什么！',
    'Auto Collect': '自动收集',
    'Auto': '自动',
    'Applicant Speed': '申请人速度',
    'Applicant Fee': '申请人费用',
    'Alpha Version': 'Alpha版本',
    'Advertising Manager': '广告经理',
    'Access the Currency Exchange market': '进入货币兑换市场',
    'The knife isnt gonna \'cut\' it': '刀不会“切”它',
    'The more you raise the price, the more it takes to convince the customer to still buy': '提价越多，就越需要说服客户继续购买',
    'The search gets more difficult the more you find': '你找到的越多，搜索就越困难',
    'There must be more *than* this town...': '一定有*多于*这个镇......',
    'There must be more to this town...': '这个小镇一定还有更多……',
    'Think about those less fortuanate than you - unlocks Benevolence.': '想想那些比你不幸的人——解锁仁慈。',
    'This fee seems a little unfair!': '这个收费好像有点不公平！',
    'Tome': '巨著',
    'Tomes can teach you new skills!': '巨著可以教你新技能！',
    'Trade': '贸易',
    'Transfer Alpha Coins': '转账阿尔法硬币',
    'Transfer Coins': '转账硬币',
    'Reset': '重置',
    'Reset Game': '重置游戏',
    'Research': '研究',
    'You use 1 food point per skill level.': '每升一级，你使用 1 个食物点。',
    'You Will Be Rewarded 1 Coin': '您将获得 1 个硬币的奖励',
    'You Will Get 1 Coins': '您将获得 1 硬币',
    'Add a new delivery type': '添加新的交付类型',
    'Add a new rule for your advertising manager': '为您的广告经理添加新规则',
    'Advertise your lime business': '宣传您的酸橙业务',
    'All purchases with red buttons stay with you after travels': '旅行后所有带有红色按钮的购买都会留在您身边',
    'Allow the toggling of skills': '允许切换技能',
    'Alpha Coins': '阿尔法硬币',
    'And if transfer amount is under 5': '如果转账金额低于 5',
    'Applicant Alpha Coin Transfer Amount': '申请阿尔法币转账金额',
    'Aquire Researchers': '收购研究人员',
    'Auto advertise if speed is over 30 seconds': '如果速度超过 30 秒，则自动做广告',
    'Map Of The Town': '城镇地图',
    'Manuscripts': '手稿',
    'Learn A New Skill': '学习一项新技能',
    'Juicer': '榨汁机',
    'Juice Price Permanance': '果汁价格不变',
    'Increase Lakes': '增加湖泊',
    'Juice price is saved after travelling.': '旅行后保存果汁价格。',
    'Standard Delivery': '标准交付',
    'Smarter Advertising Manager': '更智能的广告经理',
    'Research Better Advertising Methods': '研究更好的广告方法',
    'Quit': '退出',
    'Purchase a warehouse for your tools': '为您的工具购买仓库',
    'Plebian Area': '平民区',
    'Peeler': '削皮器',
    'Maybe I should keep looking around...': '也许我应该继续四处看看......',
    'Extreme Bulk Buying': '极端批量购买',
    'Doubles advertising speed': '广告速度翻倍',
    'Double auto collect rate': '双倍自动收集率',
    'Decrease Minimum': '减少最小值',
    'Decrease Maximum': '减少最大值',
    'Decreases peeled limes needed to make juice by 1.': '将制作果汁所需的去皮酸橙减少 1。',
    'You see a nearby market.': '你看到附近的一个市场。',
    'Triples advertising speed': '三倍广告速度',
    'Travelling': '旅行中',
    'Travel': '旅行',
    'Teach Employee': '教员工',
    'Tasks': '任务',
    'Surveying': '测量',
    'Take on a manager to help you advertise for brokers': '聘请经理帮助您为经纪人做广告',
    'The civilians in the swamp have lime disease too!': '沼泽里的平民也有酸橙病！',
    'Transfer money to a bank account in the next town': '转账到隔壁镇的银行账户',
    'Pin applications here': '在此处固定应用程序',
    'Pay with mega coins': '用超级硬币支付',
    'On Peeled Limes': '在去皮的酸橙上',
    'Nutritionist': '营养师',
    'Modern': '现代',
    'Knife': '刀',
    'Increase Maximum': '增加最大值',
    'Increase Minimum': '增加最小值',
    'Increase Juice Sold': '提高果汁销售',
    'Increase Juice Price': '提高果汁价格',
    'Increase eating speed': '提高进食速度',
    'You find a merchant willing to buy limes.': '你找到一个愿意购买酸橙的商人。',
    'Travel To Next Village': '前往下一个村庄',
    'Start Simulation': '开始模拟',
    'Peelers can slice faster!': '削皮器可以更快地切片！',
    'Pay the entry fee to become a bulk buyer': '支付入场费成为大宗买家',
    'Normal bulk buying isn\'t enough!': '普通的批量购买是不够的！',
    'National Juice Marketing': '全国果汁营销',
    'Make currency conversion a togglable task': '使货币转换成为可切换的任务',
    'Make \'Increase juice price\' stay after travelling!': '旅行后留下“提高果汁价格”！',
    'Limebidextrous': '酸橙灵巧',
    'Knifebidextrous': '灵巧的刀法',
    'Increase': '增加',
    'Increase auto collect duration': '增加自动收集持续时间',
    'In Desktop Mode': '在桌面模式下',
    'Import Game': '导入存档',
    'Hiring Area': '招聘区域',
    'Hide Rotten Limes': '隐藏腐烂的酸橙',
    'Hire A Nutritionist': '聘请营养师',
    'You find a merchant selling various items.': '你找到一个商人出售各种物品。',
    'You Need 2 Coins For Delivery': '您需要 2 枚硬币才能交付',
    'Get double the nutrition from eating': '从饮食中获得双倍的营养',
    'Get instant access to mega coins': '即时访问超级硬币',
    'Giant Map': '巨型地图',
    'Guaranteed to make you look rich!': '保证让你看起来很有钱！',
    'Hand Out Leaflets': '分发传单',
    'Help the citizens quarantine from Lime Disease': '帮助公民隔离酸橙病',
    'Helps you pick up double limes!': '帮你捡起双倍酸橙！',
    'Increase Credit Score': '提高信用评分',
    'Increase respect change from helping civilians with more lakes.': '通过帮助拥有更多湖泊的平民来增加尊重变化。',
    'Forest': '森林',
    'General Store': '杂货店',
    'Get better at finding limes / rotten limes.': '更好地寻找酸橙/腐烂的酸橙。',
    'Increase disease tiles by 1.': '将疾病板块增加 1。',
    'Auto advertise unless speed is under 30 seconds.': '自动广告，除非速度低于 30 秒。',
    'Increases max Mega Coins in the bank.': '增加银行中的最大超级硬币。',
    'Auto Converter': '自动转换器',
    'Auto Place A Civilian': '自动放置一个平民',
    'Automatically collects limes at 1': '在 1 时自动收集酸橙',
    'Bachelors Degree In Finance': '金融学学士学位',
    'Bar Percent Hidden': '隐藏百分比栏',
    'Bar Percent Shown': '显示百分比栏',
    'Basic Employees': '基本员工',
    'Basket': '篮子',
    'Baskets collect 5 Limes per minute each.': '每个篮子每分钟收集 5 个酸橙。',
    'Baskets collect up to 25 Limes each.': '每个篮子最多可收集 25 个酸橙。',
    'Better Training': '更好的培训',
    'Bulk Buying': '批量购买',
    'Bulk Peelers Storage': '散装去皮机存储',
    'Bulk Juicers Storage': '散装榨汁机存储',
    'Bulk Storage': '大容量存储',
    'Buy a conscience': '买一个良心',
    'Delivery Manager': '交付经理',
    'Disables the Collect Limes button': '禁用收集酸橙按钮',
    '\'Earn\' A Bachelors Degree In Finance': '“获得”金融学士学位',
    '\'Squeeze\' more money from your customers': '从客户那里“榨取”更多的钱',
    'You Learned Intelligence!': '你学会了 智力！',
    'You Learned Limebidextrous!': '你学会了 酸橙灵巧！',
    'Store 5x as many juicers': '存储 5 倍的榨汁机',
    'Store 5x as many peelers': '存储 5 倍的削皮器',
    'Store up to +1,000,000 coins': '最多可存储 +1,000,000 个硬币',
    'Pick up 2 limes rather than 1: +2% Chance.': '捡起 2 个酸橙而不是 1 个：+2% 几率。',
    'Pick up limes rather than rotten limes: +2% Chance.': '捡起酸橙而不是腐烂的酸橙：+2% 几率。',
    'Can collect limes.': '可以收集酸橙。',
    'Increases maximum juicers and peelers.': '增加最大榨汁机和削皮机。',
    'Increases maximum juicers by 500': '最大榨汁机数量增加 500',
    'Increases maximum peelers by 2,500': 'Increases maximum peelers by 2,500',
    'Keep 1,000 respect milestone after travelling': '旅行后保持 1,000 尊重里程碑',
    'Leave your items behind in search of a better town': '留下您的物品，寻找更好的城镇',
    'Reach level 100 to be able to toggle two actions at once.': '达到 100 级可以同时切换两个动作。',
    'Stop Actions': '停止操作',
    'Sublime by Becky': '酸橙经营者 by Becky',
    'Yes, i made a skill without a lime pun.': '是的，我创造了一项没有酸橙双关语的技能。',
    'Ambidextrous': '灵巧',
    'Chance to peel 2 limes rather than 1: +5%.': '剥 2 个酸橙而不是 1 个的几率：+5%。',
    'Change zoom size': '更改缩放大小',
    'Don\'t Confirm x5 Storage': '不确认 x5 存储',
    'Lime Disease': '酸橙病',
    'Dont let it spread from any civilian to any other': '不要让它从任何平民传播到任何其他人',
    'Doubles food points from eating.': '吃的食物点数翻倍。',
    'Employee is idle.': '员工处于闲置状态。',
    'Empty Baskets': '空篮子',
    'Find places only the rich can go': '寻找只有富人才能去的地方',
    'For every lake used, gain / lose +1 respect': '每使用一个湖泊，获得/失去 +1 尊重',
    'Fork': '叉子',
    '5 Peeled Limes -> 1 Juice': '5 去皮酸橙 -> 1 果汁',
    'You Need 5 Coins For Delivery': '您需要 5 枚硬币才能交付',
    'Automatically collects limes at 2': '自动收集酸橙2',
    'Can Collect Limes.': '可以收集酸橙。',
    'Allows your baskets to collect limes while you\'re away (offline).': '允许您的篮子在您离开（离线）时收集酸橙。',
    'Export Game (Plain': '导出存档（普通',
    'Increase the chance of finding limes rather than rotten limes.': '增加找到酸橙而不是腐烂酸橙的机会。',
    'Increase the chance of finding something rather than nothing when collecting limes.': '在收集酸橙时，增加找到东西的机会，而不是一无所有。',
    'Increase the chance of picking up double limes.': '增加捡到双酸橙的机会。',
    'Scarecrow': '稻草人',
    'Switch Variable Colors': '切换可变颜色',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //树游戏
    'Loading...': '加载中...',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Currently: ": "当前: ",
    "Current Employees: ": "当前员工: ",
    'Buy A ': '购买一个 ',
    "Current increase: ": "当前增加: ",
    "Current maximum: ": "当前最大值：",
    "Current speed: ": "当前速度：",
    "Disease Tiles: ": "疾病瓷砖：",
    "Disease Tiles ": "疾病瓷砖",
    "Skilling speed: ": "技能速度：",
    "Skills: ": "技能: ",
    "Speed: ": "速度: ",
    "Aesthetic: ": "审美：",
    "Total Price: ": "总价: ",
    "Transfer Fee: ": "转账费: ",
    "You Need: ": "你需要: ",
    "Doubles juice sale price": "果汁销售价格翻倍",
    "Goal: ": "目标: ",
    "Hunger: ": "饥饿：",
    "Increases maximum applicant speed by ": "增加了最大申请人速度",
    "Increases maximum coin storage by ": "将最大硬币存储量增加",
    "Price: ": "价格: ",
    "Level ": "等级 ",
    "Number of civilians:": "平民人数：",
    "Number of Civilians:": "平民人数：",
    "Number Of Civilians:": "平民人数：",
    "Transfer times: ": "转账次数: ",
    "Wage: ": "工资：",
    "Wages: ": "工资：",
    "Current Speed: ": "当前速度: ",
    "Disease type: ": "疾病类型：",
    'Estimated Time: ': '预计的时间：',
    "Exchange Rate: ": "汇率：",
    "Working time left:": "工作时间剩余:",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.,]+)$/,
    /^ ([\d\.,]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^[\u4E00-\u9FA5]+$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^ ([\d\.,]+) \/ ([\d\.,]+) minutes.$/, ' $1 \/ $2 分钟。'],
    [/^([\d\.,]+) limes per minute.$/, '$1 酸橙每分钟。'],
    [/^([\d\.,]+)\% Profit$/, '$1\% 利润'],
    [/^([\d\.,]+) Limes Per Second.$/, '$1 酸橙每秒。'],
    [/^([\d\.,]+) Coins Per Minute.$/, '$1 硬币每分钟。'],
    [/^([\d\.,]+) seconds.$/, '$1 秒。'],
    [/^([\d\.,]+) Tiles$/, '$1 瓷砖'],
    [/^([\d\.,]+) Basket$/, '$1 篮子'],
    [/^([\d\.,]+) Juicers$/, '$1 榨汁机'],
    [/^([\d\.,]+) Mega Coin$/, '$1 超级硬币'],
    [/^([\d\.,]+) Peeler$/, '$1 削皮器'],
    [/^([\d\.,]+) Respect: (.+)$/, '$1 尊重: $2'],
    [/^([\d\.,]+) Alpha Coins$/, '$1 阿尔法硬币'],
    [/^([\d\.,]+) Mega Coins$/, '$1 超级硬币'],
    [/^([\d\.,]+) Coins.$/, '$1 硬币。'],
    [/^([\d\.,]+) Coins$/, '$1 硬币'],
    [/^([\d\.,]+) Coin$/, '$1 硬币'],
    [/^([\d\.,]+) Limes$/, '$1 酸橙'],
    [/^([\d\.,]+)\% Of What I\'m Taught.$/, '我所教内容的 $1\%。'],
    [/^([\d\.,]+) Limes \-> ([\d\.,]+) Juice$/, '$1 酸橙 \-> $2 果汁'],
    [/^([\d\.,]+) Coins \-> ([\d\.,]+) Mega Coins in the bank$/, '$1 硬币 \-> $2 银行里的超级硬币'],
    [/^([\d\.,]+) Coins \-> ([\d\.,]+) Alpha Coin$/, '$1 硬币 \-> $2 阿尔法硬币'],
    [/^([\d\.,]+) Coins \-> ([\d\.,]+) Mega Coin now$/, '$1 硬币 \-> $2 超级硬币现在'],
    [/^([\d\.,]+) Alpha Coins \-> ([\d\.,]+) Mega Coin$/, '$1 阿尔法硬币 \-> $2 超级硬币'],
    [/^([\d\.,]+) \/ ([\d\.,]+) Peelers$/, '$1 \/ $2 削皮器'],
    [/^([\d\.,]+) \/ ([\d\.,]+) Baskets$/, '$1 \/ $2 篮子'],
    [/^([\d\.,]+) \/ ([\d\.,]+) Juicers$/, '$1 \/ $2 榨汁机'],
    [/^([\d\.,]+) \/ ([\d\.,]+) Mega Coins In Bank$/, '$1 \/ $2 银行里的超级硬币'],
    [/^Collect ([\d\.,]+) Coins.$/, '收集 $1 硬币。'],
    [/^Price: ([\d\.,]+) Coins$/, '价格: $1 硬币'],
    [/^Price: ([\d\.,]+) Alpha Coins$/, '价格: $1 阿尔法硬币'],
    [/^Price: ([\d\.,]+) Mega Coins$/, '价格: $1 超级硬币'],
    [/^Store up to (.+) Mega Coins in your bank account$/, '在您的银行账户中存储多达 $1 超级硬币'],
    [/^You Need (.+) Juice$/, '你需要 $1 果汁'],
    [/^You Need (.+) Limes$/, '你需要 $1 酸橙'],
    [/^You Will Deliver (.+) Juice$/, '您将提供 $1 果汁'],
    [/^Currently (.+) \- (.+) Alpha Coins$/, '当前 $1 \- $2 阿尔法硬币'],
    [/^Currently (.+) \- (.+) Coins$/, '当前 $1 \- $2 硬币'],
    [/^Currently (.+) \- (.+) Seconds$/, '当前 $1 \- $2 秒'],
    [/^([\d\.]+) Respect$/, '$1 尊重'],
    [/^([\d\.]+) baskets fit under the current tree.$/, '当前树下可容纳 $1 个篮子。'],
    [/^([\d\.]+) Researchers$/, '$1 研究人员'],
    [/^([\d\.]+) Mega Coins In Bank$/, '$1 银行里的超级硬币'],
    [/^([\d\.]+) Limes$/, '$1 酸橙'],
    [/^([\d\.]+) Lakes$/, '$1 湖泊'],
    [/^([\d\.]+) Limes.$/, '$1 酸橙。'],
    [/^([\d\.]+) Limes per minute.$/, '$1 酸橙每分钟。'],
    [/^(.+)\% Chance$/, '$1\% 几率'],
    [/^(.+)\% Faster$/, '$1\% 更快'],
    [/^You Will Get (.+) Coins$/, '你将获得 $1 硬币'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);