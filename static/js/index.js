(function(window, document) {
	var LOL = function(options) {

		if (!(this instanceof LOL)) {
			return new LOL(options)
		}
		this.localValue = {
			ele: '',
			all: '',
			true: '',
			false: '',
			reset: '',
			search: '',
		}

		this.opt = this.extend(this.localValue, options, true)

		this.champions = [
	      { "name": "暗裔剑魔", "key": "Aatrox", "img": "spc82-0", "status": false},
	      { "name": "九尾妖狐", "key": "Ahri", "img": "spc82-1", "status": false},
	      { "name": "暗影之拳", "key": "Akali", "img": "spc82-2", "status": false},
	      { "name": "牛头酋长", "key": "Alistar", "img": "spc82-3", "status": false},
	      { "name": "殇之木乃伊", "key": "Amumu", "img": "spc82-4", "status": false},
	      { "name": "冰晶凤凰", "key": "Anivia", "img": "spc82-5", "status": false},
	      { "name": "黑暗之女", "key": "Annie", "img": "spc82-6", "status": false},
	      { "name": "残月之肃", "key": "Aphelios", "img": "spc82-7", "status": false},
	      { "name": "寒冰射手", "key": "Ashe", "img": "spc82-8", "status": false},
	      { "name": "铸星龙王", "key": "AurelionSol", "img": "spc82-9", "status": false},
	      { "name": "沙漠皇帝", "key": "Azir", "img": "spc82-10", "status": false},
	      { "name": "星界游神", "key": "Bard", "img": "spc82-11", "status": false},
	      { "name": "蒸汽机器人", "key": "Blitzcrank", "img": "spc82-12", "status": false},
	      { "name": "复仇焰魂", "key": "Brand", "img": "spc82-13", "status": false},
	      { "name": "弗雷尔卓德之心", "key": "Braum", "img": "spc82-14", "status": false},
	      { "name": "皮城女警", "key": "Caitlyn", "img": "spc82-15", "status": false},
	      { "name": "青钢影", "key": "Camille", "img": "spc82-16", "status": false},
	      { "name": "魔蛇之拥", "key": "Cassiopeia", "img": "spc82-17", "status": false},
	      { "name": "虚空恐惧", "key": "Chogath", "img": "spc82-18", "status": false},
	      { "name": "英勇投弹手", "key": "Corki", "img": "spc82-19", "status": false},
	      { "name": "诺克萨斯之手", "key": "Darius", "img": "spc82-20", "status": false},
	      { "name": "皎月女神", "key": "Diana", "img": "spc82-21", "status": false},
	      { "name": "荣耀行刑官", "key": "Draven", "img": "spc82-22", "status": false},
	      { "name": "祖安狂人", "key": "DrMundo", "img": "spc82-23", "status": false},
	      { "name": "时间刺客", "key": "Ekko", "img": "spc82-24", "status": false},
	      { "name": "蜘蛛女皇", "key": "Elise", "img": "spc82-25", "status": false},
	      { "name": "痛苦之拥", "key": "Evelynn", "img": "spc82-26", "status": false},
	      { "name": "探险家", "key": "Ezreal", "img": "spc82-27", "status": false},
	      { "name": "末日使者", "key": "Fiddlesticks", "img": "spc82-28", "status": false},
	      { "name": "无双剑姬", "key": "Fiora", "img": "spc82-29", "status": false},
	      { "name": "潮汐海灵", "key": "Fizz", "img": "spc82-30", "status": false},
	      { "name": "正义巨像", "key": "Galio", "img": "spc82-31", "status": false},
	      { "name": "海洋之灾", "key": "Gangplank", "img": "spc82-32", "status": false},
	      { "name": "德玛西亚之力", "key": "Garen", "img": "spc82-33", "status": false},
	      { "name": "迷失之牙", "key": "Gnar", "img": "spc82-34", "status": false},
	      { "name": "酒桶", "key": "Gragas", "img": "spc82-35", "status": false},
	      { "name": "法外狂徒", "key": "Graves", "img": "spc82-36", "status": false},
	      { "name": "战争之影", "key": "Hecarim", "img": "spc82-37", "status": false},
	      { "name": "大发明家", "key": "Heimerdinger", "img": "spc82-38", "status": false},
	      { "name": "海兽祭司", "key": "Illaoi", "img": "spc82-39", "status": false},
	      { "name": "刀锋意志", "key": "Irelia", "img": "spc82-40", "status": false},
	      { "name": "翠神", "key": "Ivern", "img": "spc82-41", "status": false},
	      { "name": "风暴之怒", "key": "Janna", "img": "spc82-42", "status": false},
	      { "name": "德玛西亚皇子", "key": "JarvanIV", "img": "spc82-43", "status": false},
	      { "name": "武器大师", "key": "Jax", "img": "spc82-44", "status": false},
	      { "name": "未来守护者", "key": "Jayce", "img": "spc82-45", "status": false},
	      { "name": "戏命师", "key": "Jhin", "img": "spc82-46", "status": false},
	      { "name": "暴走萝莉", "key": "Jinx", "img": "spc82-47", "status": false},
	      { "name": "虚空之女", "key": "Kaisa", "img": "spc82-48", "status": false},
	      { "name": "复仇之矛", "key": "Kalista", "img": "spc82-49", "status": false},
	      { "name": "天启者", "key": "Karma", "img": "spc82-50", "status": false},
	      { "name": "死亡颂唱者", "key": "Karthus", "img": "spc82-51", "status": false},
	      { "name": "虚空行者", "key": "Kassadin", "img": "spc82-52", "status": false},
	      { "name": "不祥之刃", "key": "Katarina", "img": "spc82-53", "status": false},
	      { "name": "审判天使", "key": "Kayle", "img": "spc82-54", "status": false},
	      { "name": "影流之镰", "key": "Kayn", "img": "spc82-55", "status": false},
	      { "name": "狂暴之心", "key": "Kennen", "img": "spc82-56", "status": false},
	      { "name": "虚空掠夺者", "key": "Khazix", "img": "spc82-57", "status": false},
	      { "name": "永猎双子", "key": "Kindred", "img": "spc82-58", "status": false},
	      { "name": "暴怒骑士", "key": "Kled", "img": "spc82-59", "status": false},
	      { "name": "深渊巨口", "key": "KogMaw", "img": "spc82-60", "status": false},
	      { "name": "诡术妖姬", "key": "Leblanc", "img": "spc82-61", "status": false},
	      { "name": "盲僧", "key": "LeeSin", "img": "spc82-62", "status": false},
	      { "name": "曙光女神", "key": "Leona", "img": "spc82-63", "status": false},
	      { "name": "含羞蓓蕾", "key": "Lillia", "img": "spc82-64", "status": false},
	      { "name": "冰霜女巫", "key": "Lissandra", "img": "spc82-65", "status": false},
	      { "name": "圣枪游侠", "key": "Lucian", "img": "spc82-66", "status": false},
	      { "name": "仙灵女巫", "key": "Lulu", "img": "spc82-67", "status": false},
	      { "name": "光辉女郎", "key": "Lux", "img": "spc82-68", "status": false},
	      { "name": "熔岩巨兽", "key": "Malphite", "img": "spc82-69", "status": false},
	      { "name": "虚空先知", "key": "Malzahar", "img": "spc82-70", "status": false},
	      { "name": "扭曲树精", "key": "Maokai", "img": "spc82-71", "status": false},
	      { "name": "无极剑圣", "key": "MasterYi", "img": "spc82-72", "status": false},
	      { "name": "赏金猎人", "key": "MissFortune", "img": "spc82-73", "status": false},
	      { "name": "齐天大圣", "key": "MonkeyKing", "img": "spc82-74", "status": false},
	      { "name": "铁铠冥魂", "key": "Mordekaiser", "img": "spc82-75", "status": false},
	      { "name": "堕落天使", "key": "Morgana", "img": "spc82-76", "status": false},
	      { "name": "唤潮鲛姬", "key": "Nami", "img": "spc82-77", "status": false},
	      { "name": "沙漠死神", "key": "Nasus", "img": "spc82-78", "status": false},
	      { "name": "深海泰坦", "key": "Nautilus", "img": "spc82-79", "status": false},
	      { "name": "万花通灵", "key": "Neeko", "img": "spc82-80", "status": false},
	      { "name": "狂野女猎手", "key": "Nidalee", "img": "spc82-81", "status": false},
	      { "name": "永恒梦魇", "key": "Nocturne", "img": "spc82-82", "status": false},
	      { "name": "雪人骑士", "key": "Nunu", "img": "spc82-83", "status": false},
	      { "name": "狂战士", "key": "Olaf", "img": "spc82-84", "status": false},
	      { "name": "发条魔灵", "key": "Orianna", "img": "spc82-85", "status": false},
	      { "name": "山隐之焰", "key": "Ornn", "img": "spc82-86", "status": false},
	      { "name": "战争之王", "key": "Pantheon", "img": "spc82-87", "status": false},
	      { "name": "圣锤之毅", "key": "Poppy", "img": "spc82-88", "status": false},
	      { "name": "血港鬼影", "key": "Pyke", "img": "spc82-89", "status": false},
	      { "name": "元素女皇", "key": "Qiyana", "img": "spc82-90", "status": false},
	      { "name": "德玛西亚之翼", "key": "Quinn", "img": "spc82-91", "status": false},
	      { "name": "幻翎", "key": "Rakan", "img": "spc82-92", "status": false},
	      { "name": "披甲龙龟", "key": "Rammus", "img": "spc82-93", "status": false},
	      { "name": "虚空遁地兽", "key": "RekSai", "img": "spc82-94", "status": false},
	      { "name": "镕铁少女", "key": "Rell", "img": "spc82-95", "status": false},
	      { "name": "荒漠屠夫", "key": "Renekton", "img": "spc82-96", "status": false},
	      { "name": "傲之追猎者", "key": "Rengar", "img": "spc82-97", "status": false},
	      { "name": "放逐之刃", "key": "Riven", "img": "spc82-98", "status": false},
	      { "name": "机械公敌", "key": "Rumble", "img": "spc82-99", "status": false},
	      { "name": "符文法师", "key": "Ryze", "img": "spc82-100", "status": false},
	      { "name": "沙漠玫瑰", "key": "Samira", "img": "spc82-101", "status": false},
	      { "name": "北地之怒", "key": "Sejuani", "img": "spc82-102", "status": false},
	      { "name": "涤魂圣枪", "key": "Senna", "img": "spc82-103", "status": false},
	      { "name": "星籁歌姬", "key": "Seraphine", "img": "spc82-104", "status": false},
	      { "name": "腕豪", "key": "Sett", "img": "spc82-105", "status": false},
	      { "name": "恶魔小丑", "key": "Shaco", "img": "spc82-106", "status": false},
	      { "name": "暮光之眼", "key": "Shen", "img": "spc82-107", "status": false},
	      { "name": "龙血武姬", "key": "Shyvana", "img": "spc82-108", "status": false},
	      { "name": "炼金术士", "key": "Singed", "img": "spc82-109", "status": false},
	      { "name": "亡灵战神", "key": "Sion", "img": "spc82-110", "status": false},
	      { "name": "战争女神", "key": "Sivir", "img": "spc82-111", "status": false},
	      { "name": "水晶先锋", "key": "Skarner", "img": "spc82-112", "status": false},
	      { "name": "琴瑟仙女", "key": "Sona", "img": "spc82-113", "status": false},
	      { "name": "众星之子", "key": "Soraka", "img": "spc82-114", "status": false},
	      { "name": "诺克萨斯统领", "key": "Swain", "img": "spc82-115", "status": false},
	      { "name": "解脱者", "key": "Sylas", "img": "spc82-116", "status": false},
	      { "name": "暗黑元首", "key": "Syndra", "img": "spc82-117", "status": false},
	      { "name": "河流之王", "key": "TahmKench", "img": "spc82-118", "status": false},
	      { "name": "岩雀", "key": "Taliyah", "img": "spc82-119", "status": false},
	      { "name": "刀锋之影", "key": "Talon", "img": "spc82-120", "status": false},
	      { "name": "瓦洛兰之盾", "key": "Taric", "img": "spc82-121", "status": false},
	      { "name": "迅捷斥候", "key": "Teemo", "img": "spc82-122", "status": false},
	      { "name": "魂锁典狱长", "key": "Thresh", "img": "spc82-123", "status": false},
	      { "name": "麦林炮手", "key": "Tristana", "img": "spc82-124", "status": false},
	      { "name": "巨魔之王", "key": "Trundle", "img": "spc82-125", "status": false},
	      { "name": "蛮族之王", "key": "Tryndamere", "img": "spc82-126", "status": false},
	      { "name": "卡牌大师", "key": "TwistedFate", "img": "spc82-127", "status": false},
	      { "name": "瘟疫之源", "key": "Twitch", "img": "spc82-128", "status": false},
	      { "name": "兽灵行者", "key": "Udyr", "img": "spc82-129", "status": false},
	      { "name": "无畏战车", "key": "Urgot", "img": "spc82-130", "status": false},
	      { "name": "惩戒之箭", "key": "Varus", "img": "spc82-131", "status": false},
	      { "name": "暗夜猎手", "key": "Vayne", "img": "spc82-132", "status": false},
	      { "name": "邪恶小法师", "key": "Veigar", "img": "spc82-133", "status": false},
	      { "name": "虚空之眼", "key": "Velkoz", "img": "spc82-134", "status": false},
	      { "name": "皮城执法官", "key": "Vi", "img": "spc82-135", "status": false},
	      { "name": "破败之王", "key": "Viego", "img": "spc82-136", "status": false},
	      { "name": "机械先驱", "key": "Viktor", "img": "spc82-137", "status": false},
	      { "name": "猩红收割者", "key": "Vladimir", "img": "spc82-138", "status": false},
	      { "name": "雷霆咆哮", "key": "Volibear", "img": "spc82-139", "status": false},
	      { "name": "祖安怒兽", "key": "Warwick", "img": "spc82-140", "status": false},
	      { "name": "逆羽", "key": "Xayah", "img": "spc82-141", "status": false},
	      { "name": "远古巫灵", "key": "Xerath", "img": "spc82-142", "status": false},
	      { "name": "德邦总管", "key": "XinZhao", "img": "spc82-143", "status": false},
	      { "name": "疾风剑豪", "key": "Yasuo", "img": "spc82-144", "status": false},
	      { "name": "封魔剑魂", "key": "Yone", "img": "spc82-145", "status": false},
	      { "name": "牧魂人", "key": "Yorick", "img": "spc82-146", "status": false},
	      { "name": "魔法猫咪", "key": "Yuumi", "img": "spc82-147", "status": false},
	      { "name": "生化魔人", "key": "Zac", "img": "spc82-148", "status": false},
	      { "name": "影流之主", "key": "Zed", "img": "spc82-149", "status": false},
	      { "name": "爆破鬼才", "key": "Ziggs", "img": "spc82-150", "status": false},
	      { "name": "时光守护者", "key": "Zilean", "img": "spc82-151", "status": false},
	      { "name": "暮光星灵", "key": "Zoe", "img": "spc82-152", "status": false},
	      { "name": "荆棘之兴", "key": "Zyra", "img": "spc82-153", "status": false}


	    ]
		this.i = 0;
		this.x = 0;
		this.y = 0;
		this.listItem = new Array();
		this.listItemBox = new Array();
		this.listItemBoxImage = new Array();
		this.listItemBoxImageI = new Array();
		this.listItemBoxName = new Array();
		this.listItemBoxStauts = new Array();

		if ((typeof options.ele) === "string") {
			this.opt.ele = document.querySelector(options.ele)
		} else {
			this.opt.ele = options.ele
		}

		if ((typeof options.all) === "string") {
			this.opt.all = document.querySelector(options.all)
		} else {
			this.opt.all = options.all
		}

		if ((typeof options.true) === "string") {
			this.opt.true = document.querySelector(options.true)
		} else {
			this.opt.true = options.true
		}

		if ((typeof options.false) === "string") {
			this.opt.false = document.querySelector(options.false)
		} else {
			this.opt.false = options.false
		}

		if ((typeof options.reset) === "string") {
			this.opt.reset = document.querySelector(options.reset)
		} else {
			this.opt.reset = options.reset
		}

		if ((typeof options.search) === "string") {
			this.opt.search = document.querySelector(options.search)
		} else {
			this.opt.search = options.search
		}

		this.initDom();
	}

	LOL.prototype = {
		constructor: this,
		initDom: function() {
			this.createListItem()

			var _this = this
			_this.opt.all.onclick = function() {
				_this.createAllListItem()
			}

			_this.opt.true.onclick = function() {
				_this.createTrueListItem()
			}

			_this.opt.false.onclick = function() {
				_this.createFalseListItem()
			}

			_this.opt.reset.onclick = function() {
				_this.resetStatus()
			}

			_this.opt.search.oninput = function() {
				_this.search()
			}
			console.log('My github: https://github.com/cuuuuuirz')
		},

		extend: function(o,n,override) {
		    for(var key in n){
		        if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
		            o[key] = n[key]
		        }
		    }
		    return o
		},

		search: function (){
			this.opt.ele.innerHTML = ""
			var name = this.opt.search.value.trim()
			var champions = this.hasLStorage('LOLChampions') ? JSON.parse(this.getLStorage('LOLChampions')) : this.champions
			if(name.length == 0) {
				this.createAllListItem()
			}
			for(var i = 0; i < champions.length; i++){
				if(champions[i].name.indexOf(name) != -1) {
			        this.listItem[i] = document.createElement('div')
					this.listItem[i].className = 'list-item'

					this.listItemBox[i] = document.createElement('a')
					this.listItemBox[i].href = 'javascript:;'
					this.listItem[i].appendChild(this.listItemBox[i])

					this.listItemBoxImage[i] = document.createElement('div')
					this.listItemBoxImage[i].className = 'list-item-image'
					this.listItemBox[i].appendChild(this.listItemBoxImage[i])

					this.listItemBoxImageI[i] = document.createElement('i')
					this.listItemBoxImageI[i].className = 'sprite spc82 spc82-' + i
					this.listItemBoxImageI[i].setAttribute('data-id', i)
					this.listItemBoxImage[i].appendChild(this.listItemBoxImageI[i])

					this.listItemBoxName[i] = document.createElement('div')
					this.listItemBoxName[i].className = 'list-item-name'
					this.listItemBoxName[i].innerHTML  = champions[i].name
					this.listItemBox[i].appendChild(this.listItemBoxName[i])

					this.listItemBoxStauts[i] = document.createElement('img')
					this.listItemBoxStauts[i].className = 'list-item-true'
					this.listItemBoxStauts[i].src = 'static/images/true.png'
					this.listItemBox[i].appendChild(this.listItemBoxStauts[i])
					if(champions[i].status == false) {
						this.listItemBoxStauts[i].style.display = "none"
					}
					if(champions[i].status == true) {
						this.listItemBoxStauts[i].style.display = "block"
					}

					var _this = this
				    _this.listItemBoxImageI[i].onclick = function(event) {
				    	_this.changeStatus(event)
				    }
					this.opt.ele.appendChild(this.listItem[i])
				}
			}
		},

		createListItem: function () {
			this.opt.ele.innerHTML = ""
			var champions = this.hasLStorage('LOLChampions') ? JSON.parse(this.getLStorage('LOLChampions')) : this.champions
			for(var i = 0; i < champions.length; i++){
		        this.listItem[i] = document.createElement('div')
				this.listItem[i].className = 'list-item'

				this.listItemBox[i] = document.createElement('a')
				this.listItemBox[i].href = 'javascript:;'
				this.listItem[i].appendChild(this.listItemBox[i])

				this.listItemBoxImage[i] = document.createElement('div')
				this.listItemBoxImage[i].className = 'list-item-image'
				this.listItemBox[i].appendChild(this.listItemBoxImage[i])

				this.listItemBoxImageI[i] = document.createElement('i')
				this.listItemBoxImageI[i].className = 'sprite spc82 spc82-' + i
				this.listItemBoxImageI[i].setAttribute('data-id', i)
				this.listItemBoxImage[i].appendChild(this.listItemBoxImageI[i])

				this.listItemBoxName[i] = document.createElement('div')
				this.listItemBoxName[i].className = 'list-item-name'
				this.listItemBoxName[i].innerHTML  = champions[i].name
				this.listItemBox[i].appendChild(this.listItemBoxName[i])

				this.listItemBoxStauts[i] = document.createElement('img')
				this.listItemBoxStauts[i].className = 'list-item-true'
				this.listItemBoxStauts[i].src = 'static/images/true.png'
				this.listItemBox[i].appendChild(this.listItemBoxStauts[i])

				if(champions[i].status == false) {
					this.listItemBoxStauts[i].style.display = "none"
					this.x++
				} else {
					this.listItemBoxStauts[i].style.display = "block"
					this.y++
				}

				var _this = this
			    _this.listItemBoxImageI[i].onclick = function(event) {
			    	_this.changeStatus(event)
			    }
				this.opt.ele.appendChild(this.listItem[i])
			}
			this.listItem = new Array()
			this.opt.all.innerHTML = '全部【' + (this.x + this.y) + '】'
			this.opt.true.innerHTML = '已完成【' + this.y + '】'
			this.opt.false.innerHTML = '未完成【' + this.x + '】'
		},

		createAllListItem: function () {
			this.opt.ele.innerHTML = ""
			var champions = this.hasLStorage('LOLChampions') ? JSON.parse(this.getLStorage('LOLChampions')) : this.champions
			for(var i = 0; i < champions.length; i++){
		        this.listItem[i] = document.createElement('div')
				this.listItem[i].className = 'list-item'

				this.listItemBox[i] = document.createElement('a')
				this.listItemBox[i].href = 'javascript:;'
				this.listItem[i].appendChild(this.listItemBox[i])

				this.listItemBoxImage[i] = document.createElement('div')
				this.listItemBoxImage[i].className = 'list-item-image'
				this.listItemBox[i].appendChild(this.listItemBoxImage[i])

				this.listItemBoxImageI[i] = document.createElement('i')
				this.listItemBoxImageI[i].className = 'sprite spc82 spc82-' + i
				this.listItemBoxImageI[i].setAttribute('data-id', i)
				this.listItemBoxImage[i].appendChild(this.listItemBoxImageI[i])

				this.listItemBoxName[i] = document.createElement('div')
				this.listItemBoxName[i].className = 'list-item-name'
				this.listItemBoxName[i].innerHTML  = champions[i].name
				this.listItemBox[i].appendChild(this.listItemBoxName[i])

				this.listItemBoxStauts[i] = document.createElement('img')
				this.listItemBoxStauts[i].className = 'list-item-true'
				this.listItemBoxStauts[i].src = 'static/images/true.png'
				this.listItemBox[i].appendChild(this.listItemBoxStauts[i])
				if(champions[i].status == false) {
					this.listItemBoxStauts[i].style.display = "none"
				}
				if(champions[i].status == true) {
					this.listItemBoxStauts[i].style.display = "block"
				}

				var _this = this
			    _this.listItemBoxImageI[i].onclick = function(event) {
			    	_this.changeStatus(event)
			    }
				this.opt.ele.appendChild(this.listItem[i])
			}
			this.opt.all.parentNode.classList.add('active')
			this.opt.true.parentNode.classList.remove('active')
			this.opt.false.parentNode.classList.remove('active')
			this.opt.search.value = ""
		},

		createTrueListItem: function () {
			this.opt.ele.innerHTML = ""
			var champions = this.hasLStorage('LOLChampions') ? JSON.parse(this.getLStorage('LOLChampions')) : this.champions
			for(var i = 0; i < champions.length; i++){
				if(champions[i].status == true) {
			        this.listItem[i] = document.createElement('div')
					this.listItem[i].className = 'list-item'

					this.listItemBox[i] = document.createElement('a')
					this.listItemBox[i].href = 'javascript:;'
					this.listItem[i].appendChild(this.listItemBox[i])

					this.listItemBoxImage[i] = document.createElement('div')
					this.listItemBoxImage[i].className = 'list-item-image'
					this.listItemBox[i].appendChild(this.listItemBoxImage[i])

					this.listItemBoxImageI[i] = document.createElement('i')
					this.listItemBoxImageI[i].className = 'sprite spc82 spc82-' + i
					this.listItemBoxImageI[i].setAttribute('data-id', i)
					this.listItemBoxImage[i].appendChild(this.listItemBoxImageI[i])

					this.listItemBoxName[i] = document.createElement('div')
					this.listItemBoxName[i].className = 'list-item-name'
					this.listItemBoxName[i].innerHTML  = champions[i].name
					this.listItemBox[i].appendChild(this.listItemBoxName[i])

					this.listItemBoxStauts[i] = document.createElement('img')
					this.listItemBoxStauts[i].className = 'list-item-true'
					this.listItemBoxStauts[i].src = 'static/images/true.png'
					this.listItemBox[i].appendChild(this.listItemBoxStauts[i])
					if(champions[i].status == false) {
						this.listItemBoxStauts[i].style.display = "none"
					}
					if(champions[i].status == true) {
						this.listItemBoxStauts[i].style.display = "block"
					}

					var _this = this
				    _this.listItemBoxImageI[i].onclick = function(event) {
				    	_this.changeStatus(event)
						_this.createTrueListItem()
				    }
					this.opt.ele.appendChild(this.listItem[i])
				}
			}
			this.opt.all.parentNode.classList.remove('active')
			this.opt.true.parentNode.classList.add('active')
			this.opt.false.parentNode.classList.remove('active')
			this.opt.search.value = ""
		},

		createFalseListItem: function () {
			this.opt.ele.innerHTML = ""
			var champions = this.hasLStorage('LOLChampions') ? JSON.parse(this.getLStorage('LOLChampions')) : this.champions
			for(var i = 0; i < champions.length; i++){
				if(champions[i].status == false) {
			        this.listItem[i] = document.createElement('div')
					this.listItem[i].className = 'list-item'

					this.listItemBox[i] = document.createElement('a')
					this.listItemBox[i].href = 'javascript:;'
					this.listItem[i].appendChild(this.listItemBox[i])

					this.listItemBoxImage[i] = document.createElement('div')
					this.listItemBoxImage[i].className = 'list-item-image'
					this.listItemBox[i].appendChild(this.listItemBoxImage[i])

					this.listItemBoxImageI[i] = document.createElement('i')
					this.listItemBoxImageI[i].className = 'sprite spc82 spc82-' + i
					this.listItemBoxImageI[i].setAttribute('data-id', i)
					this.listItemBoxImage[i].appendChild(this.listItemBoxImageI[i])

					this.listItemBoxName[i] = document.createElement('div')
					this.listItemBoxName[i].className = 'list-item-name'
					this.listItemBoxName[i].innerHTML  = champions[i].name
					this.listItemBox[i].appendChild(this.listItemBoxName[i])

					this.listItemBoxStauts[i] = document.createElement('img')
					this.listItemBoxStauts[i].className = 'list-item-true'
					this.listItemBoxStauts[i].src = 'static/images/true.png'
					this.listItemBox[i].appendChild(this.listItemBoxStauts[i])
					if(champions[i].status == false) {
						this.listItemBoxStauts[i].style.display = "none"
					}
					if(champions[i].status == true) {
						this.listItemBoxStauts[i].style.display = "block"
					}

					var _this = this
				    _this.listItemBoxImageI[i].onclick = function(event) {
				    	_this.changeStatus(event)
						_this.createFalseListItem()
				    }
					this.opt.ele.appendChild(this.listItem[i])
				}
			}
			this.opt.all.parentNode.classList.remove('active')
			this.opt.true.parentNode.classList.remove('active')
			this.opt.false.parentNode.classList.add('active')
			this.opt.search.value = ""
		},

		resetStatus: function() {
			var flag = confirm("是否归零？");
			if(flag == true) {
				this.rmLStorage('LOLChampions')
				window.location.reload()
			}
		},

		changeStatus: function (event) {
			var m = event.target.getAttribute('data-id');
			var champions = this.hasLStorage('LOLChampions') ? JSON.parse(this.getLStorage('LOLChampions')) : this.champions
			if(champions[m].status == true) {
				champions[m].status = false
				this.listItemBoxStauts[m].style.display = "none"
				this.x++
				this.y--
			} else {
				champions[m].status = true
				this.listItemBoxStauts[m].style.display = "block"
				this.x--
				this.y++
			}
			this.opt.all.innerHTML = '全部【' + (this.x + this.y) + '】'
			this.opt.true.innerHTML = '已完成【' + this.y + '】'
			this.opt.false.innerHTML = '未完成【' + this.x + '】'
			this.setLStorage('LOLChampions', JSON.stringify(champions))
			this.opt.search.value = ""
		},

		// 是否支持localstorage
		lStorage: function () {
			// localStorage
			if (window.localStorage) {
				return true;
			} else {
				alert('你的浏览器不支持LocalStorage，无法使用！')
				return false;
			}
		},

		// 是否有对应的storage_name 的本地存储
		hasLStorage: function (storage_name) {
			var _this = this
			if (this.lStorage) {
				return !(window.localStorage.getItem(storage_name) === 'undefind' || window.localStorage.getItem(storage_name) === null)
			} else {
				return false
			}
		},

		// 设置本地存储
		setLStorage: function (key, value) {
			if (this.lStorage) {
				window.localStorage.setItem(key, value)
				return true
			}
		},

		// 获取本地存储
		getLStorage: function (key) {
			if (this.lStorage) {
				var getLs = window.localStorage.getItem(key)
				return getLs
			} else {
				return ''
			}
		},

		// 清除单个本地存储
		rmLStorage: function (key) {
			if (this.lStorage) {
				window.localStorage.removeItem(key)
			}
		},

		// 清除所有本地存储
		clearLStorage: function () {
			if (this.lStorage) {
				window.localStorage.clear()
			}
		},

	}

	window.LOL = LOL;
})(window, document)