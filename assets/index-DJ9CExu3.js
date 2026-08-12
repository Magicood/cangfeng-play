import{n as e,r as t,t as n}from"./vendor-CdTLCmMN.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=t(),i=e();function a(e){let t=1779033703^e.length;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),3432918353),t=t<<13|t>>>19;return t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),(t^=t>>>16)>>>0}var o=class e{state;seed;calls=0;constructor(e){this.seed=e,this.state=a(e)}next(){this.calls++,this.state=this.state+1831565813|0;let e=this.state;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this.next()<e}pick(e){if(e.length===0)throw Error(`pick() 于空数组`);return e[Math.floor(this.next()*e.length)]}weighted(e,t){let n=t.reduce((e,t)=>e+t,0);if(n<=0)throw Error(`weighted() 权重和为 0`);let r=this.next()*n;for(let n=0;n<e.length;n++)if(r-=t[n]??0,r<=0)return e[n];return e[e.length-1]}gaussian(e=0,t=1){let n=1-this.next(),r=this.next();return e+t*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*r)}fork(t){return new e(`${this.seed}:${t}:${this.calls}`)}snapshot(){return{seed:this.seed,state:this.state,calls:this.calls}}static restore(t){let n=new e(t.seed);return n.state=t.state,n.calls=t.calls,n}},s=e=>Math.log(e)/Math.log(8),c={1:100,2:200,3:500,4:1200,5:3e3,6:8e3,7:2e4,8:5e4,9:1e5},l={1:140,2:260,3:800,4:2e3,5:4500,6:12e3,7:3e4,8:7e4,9:1e5},u={1:6,2:12,3:24,4:120,5:300,6:1200,7:4800,8:12e3,9:12e3},d={正道:{speed:1,power:1,note:`传承完整，天劫温和，但受制于人`},魔道:{speed:1.5,power:1.15,note:`战斗中吸纳煞气，长期不战会反噬`},鬼道:{speed:1.2,power:.95,note:`肉身非必需，神魂极强，畏阳畏佛`},妖修:{speed:1.3,power:1.25,note:`肉身极强，化形前不能用人类功法法宝`},佛道:{speed:.9,power:.75,note:`不吃灵根，心魔免疫，戒律削减选项`},儒道:{speed:1,power:.85,note:`言出法随，依附王朝气运`},武道:{speed:.7,power:.7,note:`凡人可修，根基天然纯净，前六阶落后`},散修:{speed:.85,power:1,note:`自由杂修，无人指点，领悟型瓶颈 +40%`}},f={graceTicks:3,damagePerTick:.04},p={tiers:[1,6],mult:.7},m={单灵根:3,异灵根:3,变异灵根:2.2,双灵根:1.8,三灵根:1.2,四灵根:.8,五灵根:.5,无灵根:0},h={单灵根:15,异灵根:40,变异灵根:8,双灵根:3,三灵根:0,四灵根:0,五灵根:0,无灵根:0},ee=.7,g=`极品`,te=e=>e>=10?2.1:.7+(e-1)*.15,_=e=>e>=10,v={打坐吐纳:{speed:1,perfection:0,risk:0,daoxin:.4},聚灵阵辅修:{speed:1.6,perfection:0,risk:0,costStones:20,daoxin:.2},洞天闭关:{speed:2.5,perfection:2,risk:0,blocksEvents:!0,daoxin:.15},悟道:{speed:.6,perfection:8,risk:0,needsInsight:!0,daoxin:2.2},历练突破:{speed:1.8,perfection:-6,risk:.08,daoxin:.8},丹药速成:{speed:3,perfection:-10,risk:.03,toxin:6,daoxin:-1},双修:{speed:2.2,perfection:3,risk:0,needsPartner:!0,daoxin:.5},吞噬夺取:{speed:5,perfection:-25,risk:.12,corruption:8,daoxin:-3},香火愿力:{speed:1.4,perfection:5,risk:.02,daoxin:1.2},献祭:{speed:4,perfection:-18,risk:.15,corruption:12,daoxin:-2},苦修锻体:{speed:.8,perfection:6,risk:.02,daoxin:1.5},借残魂指点:{speed:2,perfection:0,risk:0,possession:8,daoxin:-.2}},y={breakthroughPenaltyAt:30,breakthroughPenalty:.15,perfectionCapAt:60,perfectionCap:70,deathRiskAt:90,deathRiskPerTick:.05},b={功法:{min:.55,max:1.9},法宝:{min:.7,max:1.75},状态:{min:.4,max:1.45},灵宠:{min:.95,max:1.35},伙伴:{min:.9,max:1.4},道侣:{min:1,max:1.25},情报:{min:.85,max:1.3}},x={defaultScale:12,combatScale:.35,luckShift:.15,pClamp:[.02,.98],critBand:.05},S={sigmaBase:.02,sigmaLuckCoef:.25},C={tierCoef:[1,1.4,2,3,4.5,7],gain:{越阶战斗:3,强夺气运:8,读档回溯:5,逆天行为:20},decayBase:2,bands:[{at:0,difficulty:1,hunted:0,desc:`无事`},{at:21,difficulty:1.1,hunted:0,desc:`天气异常，修炼时心悸`},{at:51,difficulty:1.2,hunted:.05,desc:`天机阁开始推演你`},{at:101,difficulty:1.35,hunted:.12,desc:`天罚使者`},{at:201,difficulty:1.6,hunted:.2,desc:`天地压制，属性 −20%`},{at:351,difficulty:2,hunted:.3,desc:`无妄之灾`}],smiteAt:351,smiteChance:.08},w=[{at:0,speed:1,power:1,mishap:0,death:0,threat:0,label:`守律`},{at:16,speed:1.3,power:1.1,mishap:.03,death:0,threat:.55,label:`☠死亡谷`},{at:46,speed:2,power:1.35,mishap:.07,death:0,threat:.75,label:`强邪`},{at:76,speed:3.2,power:1.7,mishap:.09,death:.02,threat:1,label:`邪极带`},{at:89,speed:4.5,power:2.1,mishap:.12,death:.05,threat:1.3,label:`失控临界`},{at:100,speed:0,power:0,mishap:0,death:1,threat:0,label:`入魔`}],T={transcendBand:[76,88],transcendDriftTolerance:40,reflectionTiers:[3,5,7],reflectionTarget:30,tribulationMult:2.2,inheritanceCutoffTier:6},E={base:45,hiddenRealmBonus:25,weights:{1:1,2:1.5,3:2.5,4:2,5:2,6:1.5,7:1.5,8:1.5,9:2},orthodox:{根基纯净:15,功法契合:10,道心一致:10,心魔残留:-20,捷径惩罚:-30},corrupt:{堕度稳定:20,意志强度:15,禁忌贯彻:10,失控每次:-12,被净化:-20}},ne={真仙:{perfection:95,transgression:50,needAllHidden:!0,needTier:9},堕仙:{perfection:90,corruptionBand:[76,88],needReflections:3,needTier:9},位面主宰:{perfection:80,transgression:200,needTier:9},地方大佬:{perfection:0,minTier:3},以凡证道:{perfection:95,path:`武道`,needTier:9}},D={2:95,3:150,4:215,5:300,6:400,7:520,8:660,9:820,10:1150},re={normal:{sublevelLoss:.35,daoxinLoss:4},critical:!0},ie={2:{name:`道基劫`,outcome:`道基裂损，退回练气`,branch:null,recoverable:!0,perfectionLoss:20},3:{name:`结丹劫`,outcome:`金丹碎裂，退回筑基`,branch:null,recoverable:!0,gradeCapLoss:2},4:{name:`婴变劫`,outcome:`婴死体存`,branch:`守尸人`,recoverable:`partial`},5:{name:`神识劫`,outcome:`神识裂解，人格破碎`,branch:`痴儿`,recoverable:`partial`},6:{name:`虚空劫`,outcome:`被虚空吞噬`,branch:`虚空漂流`,recoverable:!0,cannotReturn:!0},7:{name:`融合劫`,outcome:`道体崩解，只余残魂`,branch:`残魂`,recoverable:`partial`},8:{name:`三灾九难`,outcome:`道消，执念缚于死地`,branch:`地缚灵`,recoverable:!1},9:{name:`九重天劫`,outcome:`形神俱灭`,branch:null,recoverable:!1}},O={minEventWeight:10,maxResolvePerTick:2,lethalMinForeshadow:2,lethalMinWindow:1,defaultMatureWindow:[30,120]},ae={secrets:[`金手指`,`残魂`,`真实血脉`,`真实修为`,`杀过某人`,`身世`],witnessWeight:.5,publicUseWeight:1,overTierArtifact:15,revealAt:100},k={faceSlapMultMax:2.5,decayBonusMax:1,resourcePenaltyMax:.45},oe=[{id:`凡俗`,weight:550,reveal:`线索集齐`},{id:`上古血脉后裔`,weight:80,reveal:`血脉共鸣`},{id:`遗孤`,weight:60,reveal:`信物/仇家`},{id:`转世重修者`,weight:50,reveal:`顿悟闪回`},{id:`棋子`,weight:50,reveal:`发现机缘被安排`},{id:`气运之子`,weight:40,reveal:`首次死里逃生`},{id:`天煞孤星`,weight:40,reveal:`第三位亲近者身死`},{id:`容器`,weight:30,reveal:`夺舍者上门`},{id:`罪裔`,weight:30,reveal:`被追讨`},{id:`双生`,weight:20,reveal:`双生感应`},{id:`无名`,weight:10,reveal:`天机阁推演失败`},{id:`归来者`,weight:5,reveal:`见到上一局遗物`}],A={luckBonus:25,boonMult:1.8,deathExemptPerTier:1},j={maxTier:18,guidanceByGap:[{gap:5,level:`全面指导`,speedBonus:1,canAct:!0},{gap:3,level:`有效指导`,speedBonus:.6,canAct:!1},{gap:1,level:`经验参考`,speedBonus:.25,canAct:!1},{gap:0,level:`只能陪伴`,speedBonus:0,canAct:!1},{gap:-1,level:`反向求教`,speedBonus:0,canAct:!1}],soulThreshold:40,possessionPerGuidance:8},M={tierMult:[1,1.3,1.7,2.4,3.5,5],corruptMult:3,transcendMult:10,noSystemMult:8,difficultyMult:{凡人:.5,修士:1,天骄:1.5,逆天:2,天道:3}},N={eventChance:.62},se=[`下品`,`中品`,`上品`,`极品`],P={下品:1,中品:100,上品:1e4,极品:1e6},ce=[`下品`,`中品`,`上品`],le=[{id:`粗布袋`,slots:6,minTier:1,price:0,holdsLiving:!1,searchable:!0,note:`出门就得取舍：带丹药还是带干粮`},{id:`储物袋`,slots:20,minTier:1,price:300,holdsLiving:!1,searchable:!0,note:`解放，但会被搜身 —— 被抓即身家全失`},{id:`大储物袋`,slots:40,minTier:2,price:3e3,holdsLiving:!1,searchable:!0,note:`装得下货，倒卖玩法从此开启`},{id:`储物戒`,slots:100,minTier:3,price:6e4,holdsLiving:!1,searchable:!1,note:`认主，搜不走 —— 于是敌人改砍手；死后掉落，可被抢`},{id:`芥子空间`,slots:300,minTier:4,price:9e5,holdsLiving:!0,searchable:!1,note:`可放活物：藏人、藏灵宠、偷运`},{id:`洞天`,slots:9999,minTier:5,price:0,holdsLiving:!0,searchable:!1,note:`可种植、有时间流速，进入经营玩法`}],ue=`粗布袋`;function de(e){return le.find(t=>t.id===e)??le[0]}var F=(e,t,n)=>Math.min(n,Math.max(t,e)),I=e=>(e.气运-50)/100;function fe(e,t,n=0){let r=t.scale??x.defaultScale,i=F(1/(1+Math.exp(-(t.power-t.dc)/r))+n*x.luckShift+(t.bonus??0),x.pClamp[0],x.pClamp[1]),a=e.next(),o=x.critBand*(1+n),s=x.critBand*(1-n);return a<o?`CRIT_SUCCESS`:a>1-s?`CRIT_FAIL`:a<i?`SUCCESS`:`FAIL`}function pe(e,t=0){let n=e.scale??x.defaultScale;return F(1/(1+Math.exp(-(e.power-e.dc)/n))+t*x.luckShift+(e.bonus??0),x.pClamp[0],x.pClamp[1])}function me(e,t,n){let r=F(n+.5,0,1),i=S.sigmaBase+S.sigmaLuckCoef*(1-r);return F(t+e.gaussian(0,i),0,1)}function he(e){let t=w[0];for(let n of w)e>=n.at&&(t=n);return t}function ge(e){let t=C.bands[0];for(let n of C.bands)e>=n.at&&(t=n);return t}function _e(e){let t=e.tier+e.sublevel;e.goldenCoreGrade>0&&(t+=s(te(e.goldenCoreGrade)));let n=d[e.path];t+=s(n.power),e.path===`武道`&&e.tier>=p.tiers[0]&&e.tier<=p.tiers[1]&&(t+=s(p.mult));for(let n of Object.keys(b))t+=s(e.factors[n]);return t+=s(he(e.堕度).power),ge(e.僭越).at>=201&&(t+=s(.8)),t}function ve(e){let t=_e(e);return t<=0?0:F((t-e.锋芒)/t,0,1)}function ye(e,t,n,r=0){return fe(e,{power:_e(t)+r,dc:n,scale:x.combatScale},I(t))}function L(){return{功法:.7,法宝:.75,状态:1,灵宠:.95,伙伴:.9,道侣:1,情报:.85}}var be=class extends Error{},xe=[`凡品`,`灵品`,`宝品`,`仙品`,`秘藏`,`极品`],Se=e=>xe[e-1]??`凡品`,Ce=[`下品`,`中品`,`上品`,`极品`],we={1:.7,2:1,3:1.35,4:1.8},Te={1:1.8,2:1,3:.8,4:.7},Ee=new Set([`丹毒`,`业障`,`僭越`,`堕度`,`暴露`]);function De(e,t){return Ee.has(e)||e.startsWith(`expose.`)?t>0:t<0}var Oe={1:.5,2:1,3:2.2,4:6},ke={1:35,2:45,3:18,4:2},Ae=e=>Ce[e-1];function je(e){let t=Ce.indexOf(e);return t>=0?t+1:void 0}function R(e){return e.stone!==void 0||e.grade===6}function z(e){let t=e.quality;return t===1||t===3||t===4?t:2}function Me(e){let t=ke[1]+ke[2]+ke[3]+ke[4],n=e.next()*t;for(let e of[1,2,3])if(n-=ke[e],n<0)return e;return 4}function Ne(e,t){if(R(e))return e.name;let n=t??2;return n===2?e.name:`${Ae(n)}·${e.name}`}var Pe=[`本命`,`主器`,`随身`];function Fe(e){return B(e)}function B(e){let t=e.equip!==void 0||e.container!==void 0,n=e.stackMax??(t?1:99);return{id:e.id,name:e.name,category:e.category,grade:e.grade,desc:e.desc,stackable:n>1,stackMax:n,slots:e.slots??1,value:e.value??1,use:e.use,consumable:e.consumable??(e.use!==void 0||e.container!==void 0),equip:e.equip,stone:e.stone,talisman:e.talisman,container:e.container}}var Ie=[B({id:`ls_xia`,name:`下品灵石`,category:`灵石`,grade:1,stone:`下品`,desc:`拇指大的一块，灵气糙而薄。市井里论块算，一百块换一枚中品。`,stackMax:999,value:P.下品}),B({id:`ls_zhong`,name:`中品灵石`,category:`灵石`,grade:2,stone:`中品`,desc:`成色透亮。掏出这个付账，摊主会多看你两眼。`,stackMax:999,value:P.中品}),B({id:`ls_shang`,name:`上品灵石`,category:`灵石`,grade:3,stone:`上品`,desc:`一枚可抵万块下品。当众拿出来，等于当众说「我值得抢」。`,stackMax:999,value:P.上品}),B({id:`ls_ji`,name:`极品灵石`,category:`灵石`,grade:6,stone:`极品`,desc:`灵气凝成了液，在石心里慢慢转。这种东西不从矿里出 —— 它是某个人拿命换来、又转手给了你的。谁给的，为什么给，你迟早要还。`,stackMax:999,value:P.极品}),B({id:`dan_bigu`,name:`辟谷丹`,category:`丹药`,grade:1,value:4,stackMax:30,desc:`一粒管十日不饥。味同嚼蜡，但省下的是命。`,use:[`道心 +1`]}),B({id:`dan_huiqi`,name:`回气丹`,category:`丹药`,grade:1,value:12,stackMax:30,desc:`入口一线暖流下丹田。散修行囊里最常见的东西。`,use:[`factors.状态 +0.04`,`丹毒 +1`]}),B({id:`dan_liaoshang`,name:`疗伤丹`,category:`丹药`,grade:1,value:20,stackMax:30,desc:`血止得快，疤留得丑。`,use:[`factors.状态 +0.06`,`丹毒 +2`]}),B({id:`dan_jiedu`,name:`解毒丹`,category:`丹药`,grade:2,value:60,stackMax:20,desc:`苦得人打颤。药王谷的方子，专拔积在经脉里的药渣。`,use:[`丹毒 -8`]}),B({id:`dan_ningshen`,name:`凝神丹`,category:`丹药`,grade:2,value:80,stackMax:20,desc:`服后神识清明半日，正好用来画符或者认人。`,use:[`神魂 +2`,`丹毒 +2`]}),B({id:`dan_juqi`,name:`聚气散`,category:`丹药`,grade:2,value:100,stackMax:20,desc:`把周遭灵气硬拽进经脉。快，但拽进来的东西不挑干净与否。`,use:[`sublevel +0.02`,`丹毒 +3`]}),B({id:`dan_xisui`,name:`洗髓丹`,category:`丹药`,grade:3,value:400,stackMax:10,desc:`连着三日排出黑汗，人像被剥了一层。根骨是真的换了。`,use:[`根骨 +3`,`丹毒 +4`]}),B({id:`dan_zhuji`,name:`筑基丹`,category:`丹药`,grade:3,value:800,stackMax:10,desc:`练气修士毕生所求的一粒。也是无数人被灭门的理由。`,use:[`sublevel +0.12`,`丹毒 +8`]}),B({id:`dan_jinyuan`,name:`金元丹`,category:`丹药`,grade:4,value:6e3,stackMax:5,desc:`丹成有纹。吃下去那一刻，天上像有什么东西低头看了你一眼。`,use:[`sublevel +0.2`,`丹毒 +12`,`僭越 +3`]}),B({id:`dan_jiuzhuan`,name:`九转还魂丹`,category:`丹药`,grade:5,value:12e4,stackMax:3,desc:`传说能从阎王手里抢人。传说而已 —— 但抢过。`,use:[`lifespan +30`,`factors.状态 +0.2`,`丹毒 +6`,`僭越 +8`]}),B({id:`dan_jia`,name:`不知名丹药`,category:`丹药`,grade:1,value:6,stackMax:20,desc:`瓶上没标签。黑市里二成二的货是这样的 —— 你敢吃吗？`,use:[`丹毒 +5`,`道心 -2`]}),B({id:`bao_tiejian`,name:`铁剑`,category:`法宝`,grade:1,value:30,desc:`开过锋的凡铁。它唯一的优点是从不认主，谁拿都好使。`,equip:{slot:`主器`,factors:{法宝:.05}}}),B({id:`bao_qingfeng`,name:`青锋剑`,category:`法宝`,grade:2,value:500,desc:`剑身有一道细纹，是上一任主人替它挡下的那一击。`,equip:{slot:`主器`,factors:{法宝:.12}}}),B({id:`bao_lingwen`,name:`灵纹飞剑`,category:`法宝`,grade:3,value:9e3,desc:`需以神识御使。第一次放出去，收回来时手会抖。`,equip:{slot:`主器`,factors:{法宝:.25},minTier:2}}),B({id:`bao_chixiao`,name:`赤霄宝剑`,category:`法宝`,grade:4,value:15e4,slots:2,desc:`出鞘一寸，三丈内草木自焦。带着它就别想再装作练气小修士。`,equip:{slot:`主器`,factors:{法宝:.4,状态:.05},minTier:3}}),B({id:`bao_yufu`,name:`护身玉符`,category:`法宝`,grade:1,value:60,desc:`家里给的。说是能挡一次灾 —— 挡不挡得住，谁也没回来说过。`,equip:{slot:`随身`,factors:{状态:.05}}}),B({id:`bao_xuangui`,name:`玄龟甲`,category:`法宝`,grade:2,value:900,desc:`贴身穿着沉，挨打时才知道值。`,equip:{slot:`随身`,factors:{状态:.1}}}),B({id:`bao_xunlong`,name:`寻龙盘`,category:`法宝`,grade:2,value:1200,desc:`针总往灵气浓的地方偏。摸金的人管它叫「良心」。`,equip:{slot:`随身`,factors:{情报:.12}}}),B({id:`bao_bihuo`,name:`避火罩`,category:`法宝`,grade:3,value:12e3,desc:`南离州的炼器师说，这东西最好用不上。`,equip:{slot:`随身`,factors:{状态:.16},minTier:2}}),B({id:`bao_qinglian`,name:`青莲灯`,category:`法宝`,grade:4,value:2e5,slots:2,desc:`本命之物，与神魂共生。它碎，你也碎 —— 所以敌人专打它。`,equip:{slot:`本命`,factors:{法宝:.2,功法:.08},minTier:3}}),B({id:`fu_zhuohuo`,name:`灼火符`,category:`符箓`,grade:1,value:25,stackMax:20,talisman:`黄阶`,desc:`一张纸换练气一击。贵是贵，可你打不过的时候它不贵。`,use:[`flag 符箓·黄阶`]}),B({id:`fu_liekong`,name:`裂空符`,category:`符箓`,grade:2,value:260,stackMax:20,talisman:`玄阶`,desc:`撕开的一瞬间有风声。那是别人替你修的筑基一击。`,use:[`flag 符箓·玄阶`]}),B({id:`fu_fentian`,name:`焚天符`,category:`符箓`,grade:3,value:4500,stackMax:10,talisman:`地阶`,desc:`妖血符墨画的。金丹一击封在纸里，纸比人贵。`,use:[`flag 符箓·地阶`]}),B({id:`fu_yinni`,name:`隐匿符`,category:`符箓`,grade:2,value:300,stackMax:20,desc:`行动不留痕。干完事，没人知道是你 —— 藏拙流的命脉。`,use:[`expose.真实修为 -10`,`expose.杀过某人 -5`]}),B({id:`fu_dunzou`,name:`遁走符`,category:`符箓`,grade:2,value:350,stackMax:20,desc:`打不过就跑。在这世道，能跑掉是极高的本事。`,use:[`flag 遁走符已用`]}),B({id:`fu_mihun`,name:`迷魂符`,category:`符箓`,grade:3,value:2e3,stackMax:10,desc:`抹掉目击者的一段记忆。不杀人，也能把嘴堵上。`,use:[`expose.杀过某人 -12`,`expose.真实血脉 -6`]}),B({id:`fu_tishen`,name:`替身符`,category:`符箓`,grade:4,value:3e4,stackMax:5,desc:`抵一次必死，还留下一具假尸 —— 「假死脱身」的第一件材料。`,use:[`flag 替身在身`]}),B({id:`cai_lingcao`,name:`灵草`,category:`材料`,grade:1,value:5,desc:`一把三文。丹方最下面那一行写的就是它。`}),B({id:`cai_fuzhi`,name:`符纸`,category:`材料`,grade:1,value:8,desc:`空白的。画坏一张，材料全废。`}),B({id:`cai_fumo`,name:`妖血符墨`,category:`材料`,grade:2,value:150,stackMax:20,desc:`腥气压不住。地阶以上的符，非它不可。`}),B({id:`cai_jingjin`,name:`精金`,category:`材料`,grade:3,value:1800,stackMax:20,desc:`西金州出的料。炼器师见了眼睛发直。`}),B({id:`cai_yaodan`,name:`妖丹`,category:`材料`,grade:3,value:2200,stackMax:20,desc:`从某只东西身体里挖出来的。还热着。`}),B({id:`cai_yaowang`,name:`千年药王`,category:`材料`,grade:4,value:4e4,stackMax:5,desc:`拔出来时根须像手一样收了一下。药王谷为这个死过人。`}),B({id:`gf_tuna`,name:`基础吐纳诀`,category:`功法`,grade:1,value:50,desc:`外门人手一本。写得笨，但没写错。`,use:[`factors.功法 +0.05`]}),B({id:`gf_qingmu`,name:`青木长生功`,category:`功法`,grade:2,value:1500,desc:`木属功法，修得慢，活得久。`,use:[`factors.功法 +0.12`,`悟性 +1`]}),B({id:`gf_liehuo`,name:`烈火焚天诀`,category:`功法`,grade:3,value:2e4,desc:`越练脾气越坏。契合不上的人练它，走火只是迟早。`,use:[`factors.功法 +0.22`,`道心 -2`]}),B({id:`gf_taishang`,name:`太上忘情篇·残卷`,category:`功法`,grade:4,value:26e4,desc:`后半部被人撕走了 —— 撕得很急。留下的这半部已经够改命。`,use:[`factors.功法 +0.35`,`道心 +5`,`僭越 +5`]}),B({id:`za_ganliang`,name:`干粮`,category:`杂物`,grade:1,value:1,stackMax:20,desc:`硬得硌牙。没辟谷之前，这就是命。`,use:[`道心 +1`]}),B({id:`za_yupei`,name:`旧玉佩`,category:`杂物`,grade:1,value:20,desc:`娘留下的。不值钱，但当了就再也赎不回来。`}),B({id:`za_quanpu`,name:`家传拳谱`,category:`杂物`,grade:1,value:15,desc:`纸都黄了，字歪歪扭扭，是自家人一笔笔抄的。`,use:[`根骨 +1`]}),B({id:`za_ditu`,name:`残破地图`,category:`杂物`,grade:1,value:30,desc:`半张，边角烧了。烧掉的那半才是要紧的。`,use:[`factors.情报 +0.03`]}),B({id:`za_shaodaozi`,name:`烧刀子`,category:`杂物`,grade:1,value:3,stackMax:10,desc:`凡人的酒。修士喝了没用，但有时候人要的就是没用的东西。`,use:[`道心 +1`]}),B({id:`za_chuwudai`,name:`储物袋`,category:`杂物`,grade:2,value:300,container:`储物袋`,desc:`内里三尺见方。从此不必在城门口丢东西了。`}),B({id:`za_dachuwudai`,name:`大储物袋`,category:`杂物`,grade:3,value:3e3,container:`大储物袋`,desc:`装得下一车货。倒卖这行的入场券。`}),B({id:`za_chuwujie`,name:`储物戒`,category:`杂物`,grade:4,value:6e4,container:`储物戒`,desc:`滴血认主，谁也搜不走 —— 所以他们改砍手。`}),B({id:`bao_taia`,name:`太阿·断`,category:`法宝`,grade:6,value:3e6,slots:2,desc:`断口齐得像被人一口咬下去。铸它的人姓什么已无人记得，只记得它斩过的最后一个是它自己的主人。握住的一刻，你听见有人在很远的地方叫了一声名字 —— 不是你的名字。`,equip:{slot:`本命`,factors:{法宝:.5,功法:.1},minTier:4}}),B({id:`bao_mengmei`,name:`蒙昧珠`,category:`法宝`,grade:6,value:15e5,desc:`珠子是灰的，照不出人影。天机阁推演了三百年也没推出它在哪 —— 因为它就是用来让人推不出的。带着它，天看不见你；可你也从此看不清自己的命。`,equip:{slot:`随身`,factors:{情报:.26,状态:.05},minTier:3}}),B({id:`bao_danying`,name:`炉中婴`,category:`法宝`,grade:6,value:2e6,desc:`开炉时它坐在丹里，像睡着了。它认你，跟着你，替你挡过一次刀 ——代价是每一年立春，它要喝一口血。你的血。`,equip:{slot:`随身`,factors:{灵宠:.3,状态:.08},minTier:3}}),B({id:`dan_zijin`,name:`九转紫金丹`,category:`丹药`,grade:6,value:26e5,stackMax:1,desc:`丹上九道纹，纹里有紫气游走。药王谷的老人说，这一炉三千年只成过两粒，另一粒是给天子送葬用的。吃下去，你会多活很久 —— 久到该死的人都死光了。`,use:[`lifespan +260`,`sublevel +0.25`,`道心 +6`,`丹毒 +20`,`僭越 +30`]}),B({id:`za_jiezihu`,name:`芥子壶`,category:`杂物`,grade:6,value:2e6,container:`芥子空间`,desc:`壶口三寸，壶里是一片天。前主人在里头养了三十年的东西还没死透 ——你搬进去之前，最好先把它请出来。`})],Le=new Map;function Re(e){if(e.equip&&e.stackMax!==1)throw new be(`可装备物品 '${e.id}' 不得堆叠`);if(e.container&&e.stackMax!==1)throw new be(`容器物品 '${e.id}' 不得堆叠`);Le.set(e.id,e)}for(let e of Ie)Re(e);function ze(e){for(let t of e)Re(t)}function V(e){return Le.get(e)}function Be(e){let t=Le.get(e);if(!t)throw new be(`未知物品 id '${e}'`);return t}var Ve={下品:`ls_xia`,中品:`ls_zhong`,上品:`ls_shang`,极品:`ls_ji`};function He(e){let t=V(e.defId);if(!t)return 0;let n=R(t)?1:Oe[z(e)];return t.value*e.qty*n}function Ue(e=ue){return{container:e,stacks:[]}}function We(e){if(!e||typeof e!=`object`)return Ue();let t=e,n=le.some(e=>e.id===t.container)?t.container:ue,r=[],i=new Set;for(let e of Array.isArray(t.stacks)?t.stacks:[]){if(!e||typeof e!=`object`)continue;let t=V(String(e.defId));if(!t)continue;let n=Math.floor(Number(e.qty));if(!Number.isFinite(n)||n<=0)continue;let a={defId:t.id,qty:Math.min(n,t.stackMax)},o=e.quality;!R(t)&&(o===1||o===3||o===4)&&(a.quality=o);let s=e.equipped;s&&t.equip&&Pe.includes(s)&&!i.has(s)&&(i.add(s),a.equipped=s,a.applied={...e.applied}),r.push(a)}return{container:n,stacks:r}}function H(e){let t=e.inventory;return(!t||typeof t!=`object`||!Array.isArray(t.stacks)||!le.some(e=>e.id===t.container))&&(e.inventory=We(t)),e.inventory}function Ge(e){return de(e.container).slots}function Ke(e){let t=0;for(let n of e.stacks)t+=V(n.defId)?.slots??1;return t}function qe(e){return Math.max(0,Ge(e)-Ke(e))}function Je(e){let t=[];for(let n of e.stacks){let e=V(n.defId);e&&t.push({stack:n,def:e})}return t}function Ye(e,t){let n=0;for(let r of e.stacks)r.defId===t&&(n+=r.qty);return n}function Xe(e,t){let n=0;for(let r of e.stacks)r.defId===t&&!r.equipped&&(n+=r.qty);return n}function Ze(e,t,n=1,r={}){let i=Be(t),a=R(i)?void 0:r.quality??(r.rng?Me(r.rng):2),o=Math.max(0,Math.floor(n)),s=o,c=0;for(let n of e.stacks){if(s<=0)break;if(n.defId!==t||n.equipped||z(n)!==(a??2))continue;let e=i.stackMax-n.qty;if(e<=0)continue;let r=Math.min(e,s);n.qty+=r,s-=r,c+=r}for(;s>0&&qe(e)>=i.slots;){let n=Math.min(i.stackMax,s),r={defId:t,qty:n};a!==void 0&&a!==2&&(r.quality=a),e.stacks.push(r),s-=n,c+=n}return{requested:o,added:c,overflow:s,full:s>0,quality:a}}function Qe(e,t,n=1){let r=Math.max(0,Math.floor(n)),i=0,a=e.stacks.filter(e=>e.defId===t&&!e.equipped).sort((e,t)=>z(e)-z(t));for(let e of a){if(r<=0)break;let t=Math.min(e.qty,r);e.qty-=t,r-=t,i+=t}return e.stacks=e.stacks.filter(e=>e.qty>0),i}function $e(e){let t=null;for(let n of Je(e))n.stack.equipped||(!t||He(n.stack)<He(t.stack))&&(t=n);return t}function et(e,t){return t===2?[...e]:e.map(e=>{let n=e.trim().split(/\s+/);if(n.length!==2)return e;let r=n[1];if(!/^[+-]?\d+(\.\d+)?$/.test(r))return e;let i=Number(r),a=De(n[0],i)?Te[t]:we[t],o=Math.round(i*a*1e6)/1e6;return`${n[0]} ${o>=0?`+`:``}${o}`})}function tt(e,t){let n=H(e),r=Be(t),i=n.stacks.filter(e=>e.defId===t&&!e.equipped).sort((e,t)=>z(e)-z(t))[0];if(!i)return{ok:!1,reason:`身上没有${r.name}`,effects:[],consumed:0};let a=R(r)?void 0:z(i);if(r.container){let i=de(r.container),o=de(n.container);return i.slots<=o.slots?{ok:!1,reason:`${o.id}比${i.id}还宽敞，换了是往回走`,effects:[],consumed:0}:e.tier<i.minTier?{ok:!1,reason:`神识撑不开${i.id}，还差些火候`,effects:[],consumed:0}:(Qe(n,t,1),n.container=i.id,{ok:!0,effects:[],consumed:1,quality:a,note:`换用${i.id}，可装 ${i.slots} 格 —— ${i.note}`})}if(!r.use||r.use.length===0)return{ok:!1,reason:`${r.name}不能直接使用`,effects:[],consumed:0};let o=r.consumable?Qe(n,t,1):0;return{ok:!0,effects:et(r.use,a??2),consumed:o,quality:a}}function nt(e,t){let n=R(e)?2:z(t),r={};for(let t of Object.keys(e.equip?.factors??{})){let i=e.equip.factors[t]??0,a=De(t,i)?Te[n]:we[n];r[t]=Math.round(i*a*1e6)/1e6}return r}function rt(e,t,n){let r={};for(let i of Object.keys(t)){let a=(t[i]??0)*n,o=b[i],s=e.factors[i],c=F(s+a,o.min,o.max);e.factors[i]=c,r[i]=c-s}return r}function it(e,t){let n=H(e),r=Be(t);if(!r.equip)return{ok:!1,reason:`${r.name}不是能佩在身上的东西`};let i=n.stacks.filter(e=>e.defId===t&&!e.equipped).sort((e,t)=>z(t)-z(e))[0];if(!i)return{ok:!1,reason:`身上没有${r.name}`};let a=r.equip.slot,o,s=n.stacks.find(e=>e.equipped===a);s&&(at(e,a),o=s.defId);let c=rt(e,nt(r,i),1);return i.equipped=a,i.applied=c,{ok:!0,slot:a,replaced:o,applied:c,quality:R(r)?void 0:z(i),overTier:r.equip.minTier!==void 0&&e.tier<r.equip.minTier}}function at(e,t){let n=H(e).stacks.find(e=>e.equipped===t);if(!n)return{ok:!1,reason:`${t}位上没有东西`};let r=V(n.defId);return rt(e,n.applied??(r?.equip?nt(r,n):{}),-1),delete n.equipped,delete n.applied,{ok:!0,slot:t}}function ot(e,t){let n=H(e).stacks.find(e=>e.defId===t&&e.equipped);return n?at(e,n.equipped):{ok:!1,reason:`这件东西没有装备在身上`}}function st(e){let t={下品:0,中品:0,上品:0,极品:0};for(let n of se)t[n]=Ye(e,Ve[n]);return t}function ct(e){let t=0;for(let n of se)t+=Ye(e,Ve[n])*P[n];return t}function lt(e,t){let n=new Set(Object.values(Ve));e.stacks=e.stacks.filter(e=>!n.has(e.defId));for(let n of se){let r=t[n];for(;r>0;){let t=Math.min(999,r);e.stacks.push({defId:Ve[n],qty:t}),r-=t}}}function ut(e,t){let n=Math.max(0,Math.floor(t));if(n===0)return!0;let r=st(e),i=ct(e);if(i<n)return!1;let a=i-n,o={下品:0,中品:0,上品:0,极品:0};o.极品=Math.min(r.极品,Math.floor(a/P.极品)),a-=o.极品*P.极品;for(let e of[...ce].reverse()){if(e===`下品`){o.下品=a,a=0;break}let t=Math.floor(a/P[e]);o[e]=t,a-=t*P[e]}for(let e=1;e<ce.length;e++){let t=ce[e-1],n=ce[e];if(o[n]<=0||o[t]<=0)continue;let r=o[n]*(P[n]/P[t])+o[t];r>999||(o[t]=r,o[n]=0)}return lt(e,o),!0}var dt=[{id:`tianshu`,desc:`九宗环拱的首善之城。规矩最多，路也最多。`,name:`天枢城`,region:`中州`,qiDensity:72,elementWeights:{土:.3,金:.2,木:.2,水:.15,火:.15},mutationPool:[`雷`],mutationRate:.06,pathPool:[`正道`,`儒道`,`武道`]},{id:`yaowang`,desc:`满谷药香，丹修的摇篮 —— 也是药人的产地。`,name:`药王谷`,region:`东林州`,qiDensity:88,elementWeights:{木:.78,水:.12,土:.1},pathPool:[`正道`,`儒道`]},{id:`huoshan`,desc:`地火昼夜不熄。炼器师的圣地，脾气和火一样。`,name:`火山邑`,region:`南离州`,qiDensity:80,elementWeights:{火:.82,土:.13,金:.05},mutationPool:[`火`],mutationRate:.1,pathPool:[`正道`,`魔道`]},{id:`jianzhong`,desc:`万剑埋骨之地。剑修视为圣地，旁人避之不及。`,name:`剑冢外围`,region:`西金州`,qiDensity:68,elementWeights:{金:.8,土:.12,火:.08},pathPool:[`正道`,`武道`],bonus:{根骨:10}},{id:`bingyuan`,desc:`极北苦寒。修出来的都硬，冻死的更多。`,name:`冰渊边`,region:`北溟州`,qiDensity:64,elementWeights:{水:.75,金:.15,土:.1},mutationPool:[`冰`],mutationRate:.18,pathPool:[`正道`,`鬼道`]},{id:`nanjiang`,desc:`瘴雨蛊虫，魔修与蛊寨杂处。强者才配有名字。`,name:`十万大山`,region:`南疆`,qiDensity:70,elementWeights:{木:.45,毒:.35,水:.2},mutationPool:[`毒`],mutationRate:.22,pathPool:[`魔道`,`妖修`]},{id:`wangxiang`,desc:`幽冥边上的河镇，家家做渡亡的营生。夜里别看对岸。`,name:`望乡镇`,region:`幽冥边界`,qiDensity:58,elementWeights:{水:.5,暗:.35,土:.15},mutationPool:[`暗`],mutationRate:.15,pathPool:[`鬼道`,`正道`],bonus:{神魂:25}},{id:`baigu`,desc:`北荒妖蛮部落。无宗门无月钱，爪牙就是道理。`,name:`白骨部`,region:`北荒`,qiDensity:40,elementWeights:{土:.4,火:.3,金:.3},pathPool:[`妖修`,`武道`],bonus:{根骨:40}},{id:`fudao`,desc:`散修的天堂与坟场。什么都买得到 —— 包括你。`,name:`东海浮岛`,region:`东海`,qiDensity:66,elementWeights:{水:.55,风:.25,木:.2},mutationPool:[`风`],mutationRate:.1,pathPool:[`散修`],bonus:{气运:8}},{id:`juelin`,desc:`天下最穷的灵脉，修不了仙。所以这里的人只信拳头。`,name:`绝灵谷`,region:`中州边陲`,qiDensity:5,elementWeights:{土:1},pathPool:[`武道`,`散修`],hiddenBodyRate:3e-4}],ft={tianshu:[[`ls_zhong`,1],[`ls_xia`,20],[`bao_yufu`,1],[`za_ganliang`,3]],yaowang:[[`ls_xia`,15],[`dan_huiqi`,3],[`cai_lingcao`,6],[`za_ganliang`,2]],huoshan:[[`ls_xia`,18],[`bao_tiejian`,1],[`cai_jingjin`,1],[`za_ganliang`,2]],jianzhong:[[`ls_xia`,12],[`bao_tiejian`,1],[`za_quanpu`,1],[`za_ganliang`,2]],bingyuan:[[`ls_xia`,10],[`dan_liaoshang`,2],[`za_ganliang`,4]],nanjiang:[[`ls_xia`,8],[`dan_jiedu`,2],[`cai_fumo`,1],[`za_ganliang`,2]],wangxiang:[[`ls_xia`,10],[`cai_fuzhi`,5],[`za_yupei`,1],[`za_ganliang`,2]],baigu:[[`ls_xia`,4],[`za_quanpu`,1],[`za_ganliang`,5]],fudao:[[`ls_xia`,25],[`za_ditu`,1],[`dan_jia`,1],[`za_ganliang`,2]],juelin:[[`ls_xia`,3],[`za_quanpu`,1],[`za_ganliang`,2]]},pt=[[`ls_xia`,5],[`za_ganliang`,2]];function mt(e){let t=Ue();for(let[n,r]of ft[e]??pt)Ze(t,n,r);return t}function ht(e,t){return e===0?`无灵根`:t?`变异灵根`:[`单灵根`,`双灵根`,`三灵根`,`四灵根`,`五灵根`][e-1]??`五灵根`}function gt(e,t){let n=.15+t.qiDensity/130;if(!e.chance(n)){let r=!!t.hiddenBodyRate&&e.chance(t.hiddenBodyRate/n);return{hiddenBody:r,talent:{root:`无灵根`,elements:[`无`],purity:r?100:0,悟性:F(e.int(35,75)+(t.bonus?.悟性??0),1,100),根骨:F(e.int(35,70)+(t.bonus?.根骨??0),1,100),神魂:F(e.int(35,70)+(t.bonus?.神魂??0),1,100)}}}let r=t.qiDensity/100,i=[1,2,3,4,5],a=[2*r**3,12*r**2,30*r,32,24],o=e.weighted(i,a),s=Object.entries(t.elementWeights),c=[],l=[...s];for(let t=0;t<o&&l.length>0;t++){let t=l.map(([,t])=>t*.6+e.next()*.4),n=t.indexOf(Math.max(...t));c.push(l[n][0]),l.splice(n,1)}let u=!1;t.mutationPool&&t.mutationRate&&e.chance(t.mutationRate)&&(c[0]=e.pick(t.mutationPool),u=!0);let d=F(40+t.qiDensity*.4+e.gaussian(0,6)-(o-1)*6,5,100);return{hiddenBody:!1,talent:{root:ht(o,u),elements:c,purity:d,悟性:F(e.int(30,80)+(t.bonus?.悟性??0),1,100),根骨:F(e.int(30,75)+(t.bonus?.根骨??0),1,100),神魂:F(e.int(30,75)+(t.bonus?.神魂??0),1,100)}}}function _t(e){return e.weighted(oe.map(e=>e.id),oe.map(e=>e.weight))}function vt(e,t={}){let n=t.birthplace??e.pick(dt),{talent:r,hiddenBody:i}=gt(e,n),a=_t(e),o=t.path??n.pathPool[0];r.root===`无灵根`&&!i&&o!==`武道`&&o!==`佛道`&&(o=n.pathPool.includes(`武道`)?`武道`:`佛道`);let s=50+(n.bonus?.气运??0)+(a===`气运之子`?A.luckBonus:0)+(a===`天煞孤星`?-10:0),l={id:`player`,name:t.name??`无名`,path:o,tier:1,sublevel:0,goldenCoreGrade:0,hiddenRealms:[],talent:r,origin:a,originRevealed:!1,originClues:0,ageMonths:192,lifespanYears:c[1],alive:!0,气运:F(s+e.gaussian(0,8),0,100),道心:F(50+e.gaussian(0,10),0,100),功德:0,业障:0,僭越:h[r.root]??0,堕度:0,丹毒:0,名望:0,锋芒:1,secrets:{金手指:0,残魂:0,真实血脉:0,真实修为:0,杀过某人:0,身世:0},factors:L(),inventory:mt(n.id),perfectionByTier:{},goldFingerTier:t.goldFingerTier??-1,souls:[],deathExemptions:a===`气运之子`?A.deathExemptPerTier:0,tribulationAttempts:{}};for(let e of l.inventory.stacks){let t=V(e.defId);t?.equip&&!e.equipped&&it(l,t.id)}return l}var yt={正道:[`练气`,`筑基`,`金丹`,`元婴`,`化神`,`炼虚`,`合体`,`大乘`,`渡劫`],魔道:[`聚煞`,`魔基`,`魔丹`,`魔婴`,`化魔`,`炼狱`,`魔身`,`大魔`,`魔劫`],鬼道:[`凝魂`,`阴煞`,`鬼将`,`鬼王`,`幽冥`,`阴神`,`冥主`,`鬼帝`,`鬼仙劫`],妖修:[`开智`,`化形`,`妖丹`,`妖将`,`妖王`,`大妖`,`妖圣`,`妖帝`,`妖皇劫`],佛道:[`入门`,`沙弥`,`比丘`,`罗汉`,`菩萨`,`明王`,`尊者`,`古佛`,`涅槃`],儒道:[`开蒙`,`秀才`,`举人`,`进士`,`大儒`,`亚圣`,`文圣`,`至圣`,`立言`],武道:[`淬体`,`洗髓`,`罡气`,`化劲`,`抱丹`,`宗师`,`武圣`,`武神`,`破凡`],散修:[`练气`,`筑基`,`金丹`,`元婴`,`化神`,`炼虚`,`合体`,`大乘`,`渡劫`]},bt={正道:`金丹`,魔道:`魔丹`,鬼道:`鬼将印`,妖修:`妖丹`,佛道:`舍利`,儒道:`文心`,武道:`丹劲`,散修:`金丹`};function U(e,t){return t>=10?`飞升`:(yt[e]??yt.正道)[t-1]??`位阶${t}`}function xt(e,t){let n=bt[e]??`金丹`;return!Number.isFinite(t)||t<=0?`未结${n}`:_(t)?`${g}${n}`:`${n}${Math.min(Math.floor(t),9)}品`}function St(e){return!Number.isFinite(e)||e<=0?`未结`:_(e)?g:`${Math.floor(e)}品`}var Ct=.95,wt=[{name:`前期`,at:0},{name:`中期`,at:.3},{name:`后期`,at:.65},{name:`大圆满`,at:Ct}];function Tt(e){let t=Number.isFinite(e)?e:0,n=0;for(let e=0;e<wt.length;e++)t>=wt[e].at&&(n=e);return n}function Et(e){return wt[Tt(e)].name}function Dt(e,t,n){return t>=10?U(e,t):`${U(e,t)}${Et(n)}`}function Ot(e){return(m[e.talent.root]??0)*(e.talent.purity/100)**ee}function kt(e){let t=w[0];for(let n of w)e>=n.at&&(t=n);return t}function At(e){return 100*1.55**(e-1)}function jt(e,t){let n=e.actor,r=v[t],i=u[n.tier]??12,a=Tt(n.sublevel),o=(n.path===`佛道`||n.path===`武道`?1:Ot(n))*d[n.path].speed*r.speed*kt(n.堕度).speed;ge(n.僭越).at>=201&&(o*=.8),n.path===`魔道`&&t!==`历练突破`&&(o*=1-f.damagePerTick);let s=o*i*.5;n.sublevel=F(n.sublevel+s/At(n.tier),0,1);let c=`toxin`in r?r.toxin:0;n.丹毒=F(n.丹毒+c,0,100),n.道心=F(n.道心+r.daoxin,0,100);let l=r.risk+kt(n.堕度).mishap,p=e.rng.chance(l);p&&(n.sublevel=Math.max(0,n.sublevel-.15),n.道心=F(n.道心-5,0,100));let m=Tt(n.sublevel)>a?Dt(n.path,n.tier,n.sublevel):null;return{progress:s,mishap:p,toxinGained:c,ready:n.sublevel>=Ct,stageUp:m}}function Mt(e){let t=D[e.tier+1]??D[9],n=e.goldFingerTier>=0?C.tierCoef[e.goldFingerTier]??1:1,r=e.堕度>=T.transcendBand[0]?T.tribulationMult:1,i=e.hiddenRealms.includes(8)?.7:1,a=1+(e.tribulationAttempts[e.tier]??0)*.15;return t*(1+e.僭越/100)*(1-F(e.功德,0,250)/300)*n*r*i*a}function Nt(e){return e.道心*1+e.talent.根骨*.5+e.talent.神魂*.5+e.talent.悟性*.3+At(e.tier)*.14+e.hiddenRealms.length*30+Math.max(0,_e(e)-e.tier)*60+e.factors.状态*20+(e.丹毒>y.breakthroughPenaltyAt?-25:0)}function Pt(e,t={}){let n=e.actor,r=n.tier+1,i=Nt(n),a=Mt(n);n.tribulationAttempts[n.tier]=(n.tribulationAttempts[n.tier]??0)+1;let o=fe(e.rng,{power:i,dc:a,scale:Math.max(20,a*.2)},I(n)),s=o===`SUCCESS`||o===`CRIT_SUCCESS`,u=n.goldenCoreGrade;if(s&&r===3){let r=3+(t.coreGradeInvest??0)*4+(n.talent.purity-50)/25+(n.道心-50)/30-n.丹毒/25+I(n)*2;u=F(Math.round(r+e.rng.gaussian(0,1.1)),1,9),o===`CRIT_SUCCESS`&&u===9&&n.talent.elements.length>=5&&(u=10)}let d=!1;if(s&&t.hiddenAttempt){let t=fe(e.rng,{power:n.道心+n.talent.悟性+(100-n.丹毒)+n.hiddenRealms.length*8+(n.perfectionByTier[n.tier-1]??60)*.35,dc:190+n.tier*18,scale:14},I(n));d=t===`SUCCESS`||t===`CRIT_SUCCESS`,d&&n.hiddenRealms.push(n.tier)}let f=Ft(n,d);if(n.perfectionByTier[n.tier]=f,!s){if(o!==`CRIT_FAIL`)return n.sublevel=Math.max(0,1-re.normal.sublevelLoss),n.道心=F(n.道心-re.normal.daoxinLoss,0,100),delete n.perfectionByTier[n.tier],{outcome:o,newTier:n.tier,hiddenAchieved:!1,goldenCoreGrade:u,perfection:f};let e=ie[n.tier],t=e?{name:e.name,outcome:e.outcome,branch:`branch`in e?e.branch:null,recoverable:e.recoverable}:void 0;return t?.recoverable===!0&&n.tier>1?(--n.tier,n.sublevel=.5,`perfectionLoss`in e&&(n.perfectionByTier[n.tier]=F((n.perfectionByTier[n.tier]??E.base)-e.perfectionLoss,0,100))):n.sublevel=.7,{outcome:o,newTier:n.tier,hiddenAchieved:!1,goldenCoreGrade:u,failure:t,perfection:f}}return n.tier=r,n.sublevel=0,n.goldenCoreGrade=u,n.lifespanYears=(d?l[r]:c[r])??n.lifespanYears,n.僭越+=C.gain.越阶战斗*.5,{outcome:o,newTier:r,hiddenAchieved:d,goldenCoreGrade:u,perfection:f}}function Ft(e,t){let n=e.堕度>=46,r=E.base+(t?E.hiddenRealmBonus:0);if(n){let t=E.corrupt,n=e.堕度>=T.transcendBand[0]&&e.堕度<=T.transcendBand[1];r+=(n?1:.3)*t.堕度稳定,r+=F(e.道心/100,0,1)*t.意志强度,r+=F((e.堕度-45)/55,0,1)*t.禁忌贯彻}else{let t=E.orthodox;r+=F((100-e.丹毒)/100,0,1)*t.根基纯净,r+=F(e.factors.功法/1.9,0,1)*t.功法契合,r+=F(e.道心/100,0,1)*t.道心一致,r+=F(e.业障/100,0,1)*t.心魔残留,r+=F(e.堕度/45,0,1)*t.捷径惩罚}let i=e.丹毒>y.perfectionCapAt?y.perfectionCap:100;return F(r,0,i)}function It(e){let t=Object.entries(e.perfectionByTier);if(t.length===0)return 0;let n=0,r=0;for(let[e,i]of t){let t=Number(e),a=E.weights[t]??1;n+=a*Math.log(Math.max(i,.5)),r+=a}return Math.exp(n/r)}function Lt(e){return e>=95?`无瑕无垢，可期大道`:e>=88?`其基醇厚，几近圆满`:e>=80?`根基扎实，尚有余地`:e>=70?`其基醇厚，其行有瑕`:e>=58?`瑕瑜互见，前路难料`:e>=45?`根基已污，恐难登顶`:`道基溃烂，止步在即`}function Rt(e){let t=e.actor;switch(t.origin){case`气运之子`:return!t.originRevealed&&e.rng.chance(.06)?`又一次恰好躲开。你开始觉得有点不对劲。`:null;case`天煞孤星`:return e.rng.chance(.04)?(e.flags.add(`孤星应验`),`你身边又少了一个人。这已经是第几个了？`):null;case`上古血脉后裔`:return t.tier>=3&&!t.originRevealed&&e.rng.chance(.08)?(t.originClues++,`血液里有什么东西在响应，像是隔着很厚的石头。`):null;case`转世重修者`:return e.rng.chance(.05)?(t.talent.悟性=F(t.talent.悟性+1,1,100),`一段不属于这一世的记忆闪过，快得抓不住。`):null;case`罪裔`:return t.业障+=.3,null;case`无名`:for(let e of Object.keys(t.secrets))t.secrets[e]=Math.max(0,t.secrets[e]-1);return null;case`容器`:return t.tier>=3&&e.rng.chance(.05)?(t.originClues++,`有人在打听你的生辰八字，问得很细。`):null;default:return null}}function zt(e,t=1){e.actor.originClues+=t}function Bt(e){let t=e.actor;return t.originRevealed||t.originClues<4?null:(t.originRevealed=!0,t.secrets.身世=F(t.secrets.身世+20,0,100),{origin:t.origin,text:Ut(t.origin)})}function Vt(e){let t=e.actor;return t.deathExemptions<=0?!1:(t.deathExemptions--,t.originRevealed||(t.originRevealed=!0,t.originClues=4),!0)}function Ht(e){e.actor.origin===`气运之子`&&(e.actor.deathExemptions=A.deathExemptPerTier)}function Ut(e){switch(e){case`凡俗`:return`查到最后，什么也没有。你父母是普通人，祖上也是。
没有血脉，没有遗命，没有谁在暗中安排。走到今天的每一步，都是你自己走的。`;case`气运之子`:return`「难怪。」那位老者盯着你看了很久，「原来你是。」
他说的时候，语气里没有羡慕，只有一点说不清的怜悯。`;case`上古血脉后裔`:return`祖祠地底那口棺材是空的。棺盖内侧刻着一个名字，和你的姓氏一样。`;case`转世重修者`:return`你在梦里第无数次走到那扇门前，这次推开了。里面站着的人回过头 —— 是你。`;case`天煞孤星`:return`「命硬。」相师收了钱，「硬到旁人挨不住。你活得越久，身边越空。」`;case`棋子`:return`你把这些年的机缘一件件排开，发现它们连成了一条线。
而线的那一头，有人一直在等你走到这里。`;case`容器`:return`那个人打量你的方式，像是在看一件快要熟的东西。
「养得不错，」他说，「再等等。」`;case`遗孤`:return`那枚旧玉佩终于对上了。有人认出了它，脸色瞬间变了。`;case`双生`:return`你在千里之外受伤的那天，另一个人也在同一处疼。你们从未见过。`;case`罪裔`:return`族谱上那一页被撕掉了。撕掉的地方，纸背还留着压痕 —— 你能认出那几个字。`;case`无名`:return`天机阁推了三次，三次都是空白。掌事的手在抖：「你……是从哪儿来的？」`;case`归来者`:return`你在一具无名尸骸旁停下。它手上戴的储物戒，和你梦里那枚一模一样。`}}function Wt(e){let t=oe.find(t=>t.id===e);if(!t)return 1;let n=oe.reduce((e,t)=>e+t.weight,0);return Math.round(n/t.weight*10)/10}function Gt(e,t){let n=e.actor,r=qt(t),i=r===0?.5:1-F(t.unusedWindows.length/r,0,1),a=F(n.道心/100,0,1),o=F((n.名望+100)/400,0,1);return F(i*.6+a*.25+o*.15,0,1)}function Kt(e,t){let n=e.actor,r=Gt(e,t),i=_e(n)+.9-r*1.5+e.rng.range(-.2,.2),a=ye(e.rng,n,i),o=t.target,s=Math.floor(e.year-t.createdYear),c=`${s} 年前的「${t.type}」找上门 —— ${o}`;if(a===`CRIT_SUCCESS`)return t.resolved=!0,t.resolvedBy=`了结`,{kind:`反杀`,outcome:a,readiness:r,death:null,text:`${o}来了，带着${s}年的恨意。你早知道他会来 —— 所以这一场，你赢得干脆。`};if(a===`SUCCESS`)return t.resolved=!0,t.resolvedBy=`了结`,{kind:`挡下`,outcome:a,readiness:r,death:null,text:`${o}的旧账找上门来。你挡住了。这一段因果，就此了结。`};let l=r<.2;return a===`FAIL`&&!l?(n.factors.状态=F(n.factors.状态-.28,.1,3),n.lifespanYears=Math.max(0,n.lifespanYears-40),n.sublevel=F(n.sublevel-.25,0,1),n.道心=F(n.道心-8,0,100),t.resolved=!0,t.resolvedBy=`补偿`,{kind:`重伤`,outcome:a,readiness:r,death:null,text:`${o}到底还是找上了门。你没能全身而退 ——一身修为塌了小半，寿元也折了几十年。但你还站着，账也算清了。`}):Vt(e)?(t.resolved=!0,t.resolvedBy=`化解`,{kind:`逃生`,outcome:a,readiness:r,death:null,text:`你本该死在那里。可你没有。你开始怀疑自己身上有什么不对劲。`}):(t.resolved=!0,{kind:`致死`,outcome:a,readiness:r,death:{id:`death_${t.id}`,kind:`因果致死`,lethal:!0,karmaId:t.id,description:c},text:`${o}找上门来。${l?`这些年的天象、传闻、脚下不认得的红泥，都在提醒你这一天会到 —— 你一次也没当回事。`:`你尽了力。可有些账，尽了力也还不上。`}`})}function qt(e){let t=0;for(let n of e.hooks)for(let e of n.foreshadow??[])e.window&&t++;return t}function Jt(e,t){let n=e.karmaLedger.filter(e=>!e.resolved&&e.weight>=10).sort((e,t)=>Yt(t)-Yt(e))[0];return n?(n.resolved=!0,n.resolvedBy=t,n.unusedWindows=[],n):null}function Yt(e){return e.weight+(e.hooks.some(e=>e.lethal)?60:0)+(e.unusedWindows.length>0?40:0)-e.matureAt*.01}function Xt(e,t){let n=0;for(let t of e){let e=Number(/^k_(\d+)_/.exec(t.id)?.[1]??NaN);Number.isFinite(e)&&e>n&&(n=e)}return`k_${n+1}_${t}`}function Zt(e){for(let t of e.hooks){if(!t.lethal)continue;let n=t.foreshadow??[];if(n.length<O.lethalMinForeshadow)throw Error(`[铁律二] 因果钩子「${t.id}」标记 lethal 但只有 ${n.length} 条预警（需 ≥${O.lethalMinForeshadow}）。来源：${e.source}`);if(n.filter(e=>e.window).length<O.lethalMinWindow)throw Error(`[铁律二] 因果钩子「${t.id}」缺少可干预窗口（需 ≥${O.lethalMinWindow} 个 window:true）。来源：${e.source}`)}}function Qt(e,t){Zt(t);let n=t.matureWindow??[...O.defaultMatureWindow],r=e.year+e.rng.range(n[0],n[1]),i={id:Xt(e.karmaLedger,t.type),type:t.type,source:t.source,actor:t.actor,target:t.target,weight:t.weight,polarity:t.polarity,createdYear:e.year,matureWindow:n,chainParent:t.chainParent??null,resolved:!1,hooks:t.hooks,matureAt:r,foreshadowsSent:[],unusedWindows:[]};return e.karmaLedger.push(i),i}function $t(e,t){let n=e.karmaLedger.find(e=>!e.resolved&&e.target===t.target&&e.type===t.type);return n?(n.weight+=t.weight,n):Qt(e,t)}function en(e,t){let n=[],r=0;for(let i of e.karmaLedger){if(i.resolved||i.weight<O.minEventWeight)continue;let a=tn(e,i);if(a){for(let r of a.foreshadow??[]){let o=i.matureAt+r.at;!i.foreshadowsSent.includes(r.evt)&&e.year>=o&&e.year-t<o+t&&(i.foreshadowsSent.push(r.evt),r.window&&i.unusedWindows.push(r.evt),n.push({kind:r.window?`window`:`foreshadow`,karma:i,hook:a,evtId:r.evt,lethal:!!a.lethal}))}if(e.year>=i.matureAt&&r<O.maxResolvePerTick){let o=i.foreshadowsSent.length;if(a.lethal&&o<O.lethalMinForeshadow){i.matureAt=e.year+Math.max(2,t);continue}r++,i.resolved=!0,n.push({kind:`mature`,karma:i,hook:a,evtId:a.id,lethal:!!a.lethal})}}}return n}function tn(e,t){if(t.hooks.length===0)return;let n=t.polarity<0?0:Math.min(t.hooks.length-1,1);return t.hooks[n]??t.hooks[0]}function nn(e,t){let n=new Map(e.map(e=>[e.id,e])),r=[],i=n.get(t),a=new Set;for(;i&&!a.has(i.id);)a.add(i.id),r.unshift(i),i=i.chainParent?n.get(i.chainParent):void 0;return r}function rn(e){return e.filter(e=>!e.resolved).sort((e,t)=>t.weight-e.weight)}function an(e){return e.reduce((e,t)=>e+t.polarity*t.weight,0)}var on=class extends Error{};function sn(e,t){let n=t.karmaId?nn(e.karmaLedger,t.karmaId):[];if(n.length===0&&t.kind!==`寿元`)throw new on(`[铁律三] 死因「${t.id}」(${t.kind}) 无因果链，无法向玩家解释。`);let r=n.flatMap(e=>e.foreshadowsSent);if(t.lethal&&t.kind!==`寿元`&&r.length<O.lethalMinForeshadow)throw new on(`[铁律二] 死因「${t.id}」只投放了 ${r.length} 条预警（需 ≥${O.lethalMinForeshadow}）。`);let i=n.flatMap(e=>e.unusedWindows);return e.actor.alive=!1,{cause:t,chain:n,warnings:r,missedWindows:i,atYear:Math.floor(e.year),atTier:e.actor.tier,atPath:e.actor.path}}function cn(e){return e.actor.ageMonths/12<e.actor.lifespanYears?null:{id:`death_lifespan`,kind:`寿元`,lethal:!0,description:`寿元耗尽，坐化于第 ${Math.floor(e.year)} 年`}}function ln(e){let t=e.actor.lifespanYears-e.actor.ageMonths/12;return t>10||t<=0?null:`寿元将尽，尚余 ${t.toFixed(1)} 年`}function un(e,t){let n=e.tier-t;for(let e of j.guidanceByGap)if(n>=e.gap)return{level:e.level,speedBonus:e.speedBonus,canAct:e.canAct,gap:n};return{level:j.guidanceByGap[j.guidanceByGap.length-1].level,speedBonus:0,canAct:!1,gap:n}}function dn(e,t){let n=e.actor.souls.find(e=>e.id===t&&!e.dissipated);if(!n)return null;let r=un(n,e.actor.tier);if(r.speedBonus<=0)return r;let i=j.possessionPerGuidance*(1+r.gap*.08)*(1-e.actor.道心/250);return n.possession=F(n.possession+i,0,100),n.favor=F(n.favor+1,-100,100),r}function fn(e){let t=[];for(let n of e.actor.souls)if(!n.dissipated){if(n.possession>=100){t.push({soul:n,fate:`夺舍成功`}),e.actor.alive=!1;continue}if(Math.max(0,n.tier-e.actor.tier)<=0&&e.rng.chance(.02)){n.dissipated=!0,t.push({soul:n,fate:`消散`});continue}n.favor=F(n.favor-.15,-100,100)}return t}function pn(e,t){let n=e.actor.souls.find(e=>e.id===t&&!e.dissipated);if(!n)return{ok:!1,text:`并无此魂`};let r=55+n.tier*4+n.possession*.3;return e.actor.道心<r?(n.possession=100,e.actor.alive=!1,{ok:!1,text:`你伸手去抓那缕残魂，却被它顺着手臂爬了进来。`}):(n.dissipated=!0,e.actor.factors.功法=F(e.actor.factors.功法+.25,.55,1.9),e.actor.业障+=25,e.actor.道心=F(e.actor.道心-12,0,100),{ok:!0,text:`你吞下了他。他毕生所学成了你的，连同他没来得及说完的那句话。`})}function mn(e,t){let n=e.actor.souls.find(e=>e.id===t&&!e.dissipated);return n?n.favor<80?{ok:!1,text:`他还不信你。`}:(n.dissipated=!0,e.actor.功德+=40,e.actor.道心=F(e.actor.道心+8,0,100),{ok:!0,text:`他松开了。最后那点光散进风里，往下面去了。`}):{ok:!1,text:`并无此魂`}}function hn(e,t){let n=e.actor.souls.find(e=>e.id===t&&!e.dissipated);return n?n.favor<90?{ok:!1,text:`他还没打算把自己交出去。`}:(n.dissipated=!0,e.actor.talent.神魂=F(e.actor.talent.神魂+15,1,100),e.actor.factors.功法=F(e.actor.factors.功法+.18,.55,1.9),e.flags.add(`融合_${t}`),{ok:!0,text:`从此你分不清哪些念头是自己的，哪些是他的。他好像也不在意了。`}):{ok:!1,text:`并无此魂`}}var gn=[`金手指`,`残魂`,`真实血脉`,`真实修为`,`杀过某人`,`身世`];function _n(e,t,n,r){e.actor.secrets[t]=F(e.actor.secrets[t]+n,0,100),r&&!e.knowers.some(e=>e.npc===r&&e.secret===t)&&e.knowers.push({npc:r,secret:t,risk:F(n/20,.05,.9)})}function vn(e){_n(e,`真实修为`,ae.overTierArtifact)}function yn(e){let t=e.actor,n=ge(t.僭越),r=ve(t);n.hunted>0&&(t.secrets.金手指=F(t.secrets.金手指+n.hunted*4,0,100),t.secrets.真实修为=F(t.secrets.真实修为+n.hunted*2,0,100));for(let n of e.knowers)e.rng.chance(n.risk*.06)&&(t.secrets[n.secret]=F(t.secrets[n.secret]+6,0,100));let i=.8+r*2.2;for(let e of gn)t.secrets[e]=Math.max(0,t.secrets[e]-i)}function bn(e){return gn.filter(t=>e.actor.secrets[t]>=ae.revealAt)}function xn(e,t){let n=e.knowers.filter(e=>e.npc===t).map(e=>e.secret);e.knowers=e.knowers.filter(e=>e.npc!==t);for(let t of n)e.actor.secrets[t]=Math.max(0,e.actor.secrets[t]-18);return e.actor.业障+=12+n.length*5,e.actor.道心=F(e.actor.道心-3,0,100),n}function Sn(e,t){let n=e.knowers.findIndex(e=>e.npc===t);if(n<0)return!1;let r=e.knowers[n];return e.actor.secrets[r.secret]=Math.max(0,e.actor.secrets[r.secret]-10),e.knowers.splice(n,1),e.actor.业障+=2,!0}function Cn(e){let t=e.actor;t.僭越=0,t.名望=0,t.锋芒=0;for(let e of gn)t.secrets[e]=0;e.knowers=[],t.factors.情报=.85,t.factors.伙伴=.9,t.factors.道侣=1,e.flags.add(`假死脱身`)}function wn(e){let t=ve(e.actor);return{faceSlapMult:1+t*(k.faceSlapMultMax-1),decayBonus:t*k.decayBonusMax,resourcePenalty:t*k.resourcePenaltyMax}}function Tn(e){let{decayBonus:t}=wn(e),n=1+F(e.actor.功德,0,300)/600;e.actor.僭越=Math.max(0,e.actor.僭越-C.decayBase*(1+t)*n)}var En=[[`练气`,1],[`筑基`,2],[`金丹`,3],[`元婴`,4],[`化神`,5],[`炼虚`,6],[`合体`,7],[`大乘`,8]];function Dn(e,t){if(t===`正道`||t===`散修`)return e;let n=e;for(let[e,r]of En){if(!n.includes(e))continue;let i=r===3&&/金丹(碎|裂|散|毁)/.test(n)?bt[t]:U(t,r);n=n.split(e).join(i)}return n}var On={守尸人:{name:`婴死体存 · 守尸人`,grade:`凡碑`,mult:.8,text:`肉身还在，元婴没了。往后的日子靠药和阵撑着，等一个「借婴」的法子。`},痴儿:{name:`神识裂解 · 痴儿`,grade:`凡碑`,mult:.9,text:`修为还在，人不在了。你在山里走来走去，见谁都笑，谁的名字都想不起来。`},虚空漂流:{name:`虚空吞噬 · 漂流者`,grade:`灵碑`,mult:1.1,text:`虚空裂开的那一瞬间你没抓住任何东西。此后你还活着，只是再也回不去了。`},残魂:{name:`道体崩解 · 化为残魂`,grade:`玄碑`,mult:1.4,text:`肉身尽毁，只余一缕。你飘在原地，看着自己的洞府积灰 —— 你终于成了你当年遇到的那种东西。`},地缚灵:{name:`道消 · 地缚`,grade:`凡碑`,mult:.7,text:`执念缚在这片死地上。偶尔有人路过，你想说话，他们听不见。`}},kn={药王谷:`药王谷谷主`,东海:`东海岛主`,中州:`一城之主`,山野:`山野散人`,宗门:`太上长老`,北荒:`妖蛮部落王`,西域:`佛国住持`,坊市:`坊市巨商`,剑冢:`剑冢守墓人`};function An(e){let t=e.actor,n=It(t),r=ne;if(e.death&&e.death.cause.kind!==`寿元`){let n=e.death.cause.kind;return{id:`death_${n}`,name:`夭折 · ${n}`,tier:`夭折`,grade:`凡碑`,fruitMult:.3+t.tier*.08,text:e.death.cause.description}}if(e.failedBranch){let n=e.failedBranch.branch?On[e.failedBranch.branch]:void 0;return n?{id:`branch_${e.failedBranch.branch}`,name:Dn(n.name,t.path),tier:`夭折`,grade:n.grade,fruitMult:n.mult+t.tier*.1,text:Dn(n.text,t.path)}:{id:`tribulation_failed`,name:`${e.failedBranch.name} · ${Dn(e.failedBranch.outcome,t.path)}`,tier:`夭折`,grade:`凡碑`,fruitMult:.6+t.tier*.1,text:Dn(e.failedBranch.outcome,t.path)}}if(t.souls.some(e=>e.possession>=100))return{id:`possessed`,name:`被夺舍 · ${t.souls.find(e=>e.possession>=100).name}`,tier:`夭折`,grade:`凡碑`,fruitMult:.5,text:`你最后的念头是：他早就说过的。`};if(t.堕度>=100)return{id:`possessed_by_demon`,name:`入魔失控`,tier:`夭折`,grade:`血道碑`,fruitMult:1.2,text:`你还在，但那个「你」已经不在了。往后有人会用你的名字，做你不会做的事。`};if(t.tier>=10)return t.path===`武道`&&t.talent.root===`无灵根`&&n>=r.以凡证道.perfection?{id:`mortal_ascend`,name:`以凡证道`,tier:`隐藏`,grade:`无字碑`,fruitMult:M.noSystemMult,text:`你从头到尾都是个凡人。然后你打赢了神仙。`}:n>=r.真仙.perfection&&t.僭越<r.真仙.transgression&&t.hiddenRealms.length>=9&&e.jieXian?{id:`true_immortal`,name:`真仙`,tier:`飞升`,grade:`道碑`,fruitMult:6,text:`云开，天梯落下。你回头看了一眼这座你活了千年的山，然后走了上去。`}:t.堕度>=T.transcendBand[0]&&t.堕度<=T.transcendBand[1]&&n>=r.堕仙.perfection&&(e.reflections??0)>=3?{id:`fallen_immortal`,name:`堕仙 · 魔祖证道`,tier:`飞升`,grade:`血道碑`,fruitMult:M.transcendMult,text:`此道自我而始，亦自我而终。后来者，勿效。`}:{id:`ascend`,name:`飞升 · 上位面一员`,tier:`飞升`,grade:`天碑`,fruitMult:3,text:`天梯尽头是另一片天。你抬头，发现上面还有人在往上走。`};if(e.steppedDown){let r=kn[e.rootedAt??`山野`]??`一方之主`,i=n>=80?`玄碑`:`灵碑`;return{id:`local_${e.rootedAt??`山野`}`,name:`偏安一隅 · ${r}`,tier:`偏安`,grade:i,fruitMult:1+t.tier*.15+n/100,text:`你在这里住了下来。后来有人问起你是谁，你说，就是个种药的。`}}return!e.death&&t.tier>=5&&t.功德>200&&t.僭越<20&&n>=85?{id:`seclusion`,name:`归隐`,tier:`隐藏`,grade:`无字碑`,fruitMult:4,text:`你把修为散了。散得干干净净，像从来没修过一样。`}:t.tier>=9?n>=r.位面主宰.perfection&&t.僭越<r.位面主宰.transgression?{id:`plane_sovereign`,name:`位面主宰`,tier:`主宰`,grade:`地碑`,fruitMult:2.2,text:`这一界之内，再无人能让你抬头。而你抬头时，看见的还是那层没破的天。`}:{id:`stuck_at_9`,name:`止步渡劫期`,tier:`主宰`,grade:`玄碑`,fruitMult:1.6,text:`你在渡劫期停了下来。天劫还在上面等着，你知道自己过不去。`}:t.tier>=5?{id:`elder_${t.tier}`,name:`一方尊长 · 老死于此界`,tier:`偏安`,grade:n>=80?`玄碑`:`灵碑`,fruitMult:.9+t.tier*.14+n/150,text:`你没能再往上走一步。但这一界之内，认得你名字的人已经不多了 —— 比你年长的都死光了。`}:t.tier>=3?{id:`mortal_end_${t.tier}`,name:`碌碌一生 · 尚有薄名`,tier:`偏安`,grade:`灵碑`,fruitMult:.6+t.tier*.12,text:`结了丹，也就到此为止了。山下的人还记得你，山上的人已经忘了。`}:{id:`mortal_end_${t.tier}`,name:`碌碌一生`,tier:`偏安`,grade:`凡碑`,fruitMult:.5+t.tier*.12,text:`没什么可说的。这样的人，这座山上每年都要埋掉几十个。`}}function jn(e,t,n={}){let r=It(e),i=e.tier*10+r*.6,a=t.fruitMult;n.noSystem&&(a*=M.noSystemMult/3),e.堕度>=46&&(a*=M.corruptMult/2),e.goldFingerTier>=0&&(a*=M.tierMult[e.goldFingerTier]??1),a*=M.difficultyMult[n.difficulty??`修士`]??1;let o=e.锋芒>0?Math.max(0,1-e.锋芒/Math.max(e.tier,1)):1;return a*=1+o*.35,Math.round(i*a)}function Mn(e){return e.tier>=ne.地方大佬.minTier&&e.alive}function Nn(e,t,n){return{tick:t,year:Math.floor(n),tier:e.tier,道心:Math.round(e.道心),僭越:Math.round(e.僭越),堕度:Math.round(e.堕度),气运:Math.round(e.气运),名望:Math.round(e.名望),perfection:Math.round(It(e))}}function Pn(e,t,n){let r=Math.max(1,Math.floor(n-t.createdYear)),i=t.resolved;if(t.polarity>0)return e.pick([`后来他活得不错，只是再没见过你。他跟人提起过一次，说当年有个人帮过他，可惜没问名字。`,`他记了你一辈子。临终前把这件事讲给了孙辈听，讲得添油加醋。`,`他后来也修出了点名堂。有人问他师承何处，他说，是一个只见过一面的人。`,`他没等到还这份人情的机会。你死的消息传到他那儿时，他沉默了很久。`]);if(t.polarity<0){if(i){let n=[`这笔账在第 ${Math.floor(t.createdYear)+Math.floor(r*.6)} 年了了。之后再没人提起。`,`他死在了你前面。死因与你无关，但也不能说全无关系。`,`你们最后一次见面时谁也没说话。这事就这么过去了。`];return e.pick(n)}let n=[`他等了你 ${r} 年，等到你死也没等来。这口气他带进了棺材。`,`他把这笔账留给了后人。你的名字被写在一张纸上，压在他家祠堂的供桌下面。`,`他后来做了和你一样的事，对另一个人。`,`他一直在找你。你死那年，他刚好走到离你三百里的地方。`];return e.pick(n)}return`此后各自行路，再无交集。`}function Fn(e){switch(e.type){case`救助`:case`施恩`:return`你救过/帮过的人`;case`杀戮`:return`死在你手上的人`;case`背叛`:return`被你辜负的人`;case`夺取`:return`被你拿走过东西的人`;case`受辱`:return`欺负过你的人`;case`毁诺`:return`你食言过的人`;case`欺骗`:return`被你骗过的人`;case`传承`:return`把东西留给你的人`;case`放走`:return`你放过一马的人`;case`灭门`:return`被你灭门的人`;case`立誓`:return`你许过诺的人`}}function In(e){let{actor:t,ledger:n,death:r,ending:i}=e,a=new o(`${e.seed}:chronicle`),s=n.filter(e=>e.resolved),c=rn(n),l=new Set,u=[...n].sort((e,t)=>t.weight-e.weight).slice(0,12).map(t=>{let n=Pn(a,t,e.diedAtYear);for(let r=0;r<3&&l.has(n);r++)n=Pn(a,t,e.diedAtYear);return l.add(n),{name:t.target,relation:Fn(t),whatYouDid:`第 ${Math.floor(t.createdYear)} 年 · ${t.type}（因果重 ${t.weight}）`,afterward:n}}),d=[...e.flags].filter(e=>e.startsWith(`道·`)||e.startsWith(`结丹·`)||[`无系统`,`得系统`,`拒绝过系统`,`假死脱身`,`手上有人命`,`已立威`].includes(e)),f=It(t);return{timeline:e.milestones,deathChain:r?Ln(r):null,missedWindows:r?.missedWindows??[],karmaResolved:s,karmaUnresolved:c,karmaNet:Math.round(an(n)),people:u,curve:e.curve,forks:d,verdict:Rn(t,n,i,e.diedAtYear),unfinished:c.slice(0,8).map(e=>`第 ${Math.floor(e.createdYear)} 年欠下的「${e.type}」—— ${e.target}（重 ${e.weight}）`),name:t.name,path:t.path,origin:t.origin,originRarity:Wt(t.origin),tier:t.tier,lifespan:Math.floor(t.ageMonths/12),perfection:Math.round(f*10)/10,concealment:Math.round(ve(t)*100)/100,ending:i}}function Ln(e){return e.chain.map((e,t)=>`${t+1}. 第 ${Math.floor(e.createdYear)} 年 · ${e.type} · ${e.target}（重 ${e.weight}）`).join(`
`)}function Rn(e,t,n,r){let i=It(e),a=t.filter(e=>e.type===`杀戮`).length,o=t.filter(e=>e.type===`救助`||e.type===`施恩`).length,s=t.filter(e=>e.type===`毁诺`).length,c=t.filter(e=>e.type===`立誓`).length,l=e.origin===`凡俗`?`生于微末，无所凭恃`:e.originRevealed?`身负「${e.origin}」之命`:`生而不知其所以生`,u=e.souls.length>0?`得残魂而起`:n.tier===`隐藏`&&n.id===`mortal_ascend`?`不假外物`:`独行至此`,d=ve(e)>.6?`一世藏锋，未尝显名`:e.名望>200?`声名赫赫，四海皆闻`:`半明半晦，不为人知`,f=i>=95?`无瑕无垢`:i>=80?`其行有瑕，其志不移`:i>=60?`瑕瑜互见`:`根基已污`,p=[];a&&p.push(`杀${Vn(a)}人`),o&&p.push(`救${Vn(o)}人`),s&&p.push(`负${Vn(s)}诺`),c&&p.push(`践${Vn(c)}誓`);let m=zn(e,n,i);return[`${l}，${u}，${d}。`,`${f}。${p.length?p.join(`，`)+`。`:``}`,`寿${Vn(Math.floor(e.ageMonths/12))}载，终于${Math.floor(r)}年。`,`——「${m}」`].join(`
`)}function zn(e,t,n){return t.id===`true_immortal`?`道无捷径，唯诚而已。`:t.id===`fallen_immortal`?`此道自我而始，亦自我而终。`:t.id===`mortal_ascend`?`凡骨亦可撼天，只是无人肯信。`:t.id===`seclusion`?`知其可为而不为，是为大智。`:t.tier===`夭折`&&e.tier<=2?`此山每年埋人数十，其名多不可考。`:t.tier===`夭折`?`知其不可为而为之，是为道心；知其不可留而留之，是为执念。`:t.tier===`偏安`?`止于所当止，亦是一种圆满。`:n<60?`路是自己选的，账也是自己欠的。`:`行至水穷，坐看云起。`}var Bn=[`零`,`一`,`二`,`三`,`四`,`五`,`六`,`七`,`八`,`九`];function Vn(e){return e<10?Bn[e]:e<20?`十${e%10?Bn[e%10]:``}`:e<100?`${Bn[Math.floor(e/10)]}十${e%10?Bn[e%10]:``}`:e<1e4?String(e):`${Math.floor(e/1e4)}万${e%1e4?String(e%1e4):``}`}function Hn(e){let t=[],n=e=>{t.push(``,`── ${e} ──`)};t.push(`═`.repeat(66)),t.push(`《一生录》 · ${e.name}`),t.push(`═`.repeat(66)),t.push(`${e.path} · 位阶 ${e.tier} · 寿 ${e.lifespan} 载`),t.push(`身世「${e.origin}」（约 ${e.originRarity} 局一见）· 道途完满度 ${e.perfection}「${Lt(e.perfection)}」`),t.push(`藏拙 ${e.concealment} · 因果净极性 ${e.karmaNet}`),t.push(``),t.push(`【${e.ending.name}】${e.ending.text}`),n(`① 生平`);for(let n of e.timeline.slice(0,24))t.push(`  ${String(n.year).padStart(5)}年  ${n.text}`);if(e.timeline.length>24&&t.push(`  …另有 ${e.timeline.length-24} 条`),e.deathChain&&(n(`② 死因链`),t.push(e.deathChain),e.missedWindows.length)){t.push(``,`  你本可以在这些时刻改变结局：`);for(let n of e.missedWindows)t.push(`  · ${n}`)}n(`③ 因果`),t.push(`  已了结 ${e.karmaResolved.length} 条 · 未了结 ${e.karmaUnresolved.length} 条`),n(`④ 人物志`);for(let n of e.people.slice(0,6))t.push(`  【${n.name}】${n.relation}`),t.push(`    ${n.whatYouDid}`),t.push(`    ${n.afterward}`),t.push(``);if(e.forks.length&&(n(`⑥ 岔路`),t.push(`  ${e.forks.join(` · `)}`)),n(`⑦ 判词`),t.push(e.verdict.split(`
`).map(e=>`  ${e}`).join(`
`)),e.unfinished.length){n(`⑧ 未竟之事`);for(let n of e.unfinished)t.push(`  · ${n}`);t.push(``,`  （这些会跟着你，进入下一局。）`)}return t.push(``),t.join(`
`)}function Un(e){return e.tier===3&&e.goldenCoreGrade>0?xt(e.path,e.goldenCoreGrade):e.tier>=10?U(e.path,e.tier):Dt(e.path,e.tier,e.sublevel)}var Wn=`甲乙丙丁戊己庚辛壬癸`,Gn=`子丑寅卯辰巳午未申酉戌亥`,Kn=[`零`,`壹`,`贰`,`叁`,`肆`,`伍`,`陆`,`柒`,`捌`,`玖`];function qn(e){return`${Wn[e%10]}${Gn[e%12]}·${String(e).split(``).map(e=>Kn[Number(e)]).join(``)}`}function Jn(e,t){let n=Math.max(1,Math.floor(e.createdYear-t+16)),r=n<100?`${n}岁`:`${Math.floor(e.createdYear)}年`,i=e.target;switch(e.type){case`杀戮`:return`${r}，杀${i}${e.weight>45?`，血溅五步`:``}。`;case`救助`:return`${r}，救${i}于危难。`;case`施恩`:return`${r}，施恩于${i}，未求报。`;case`背叛`:return`${r}，负${i}。`;case`夺取`:return`${r}，取${i}之物，其人不甘。`;case`受辱`:return`${r}，为${i}所辱，未即报。`;case`毁诺`:return`${r}，毁与${i}之约。`;case`欺骗`:return`${r}，绐${i}。`;case`传承`:return`${r}，得${i}之遗泽。`;case`放走`:return`${r}，纵${i}去。`;case`立誓`:return`${r}，与${i}立誓。`;case`灭门`:return`${r}，屠${i}满门。`}}function Yn(e){let{actor:t,ledger:n,ending:r}=e,i=[...n].sort((e,t)=>t.weight-e.weight).slice(0,5).sort((e,t)=>e.createdYear-t.createdYear).map(t=>Jn(t,e.birthYear)),a=[`生${t.path===`武道`?`而无灵根`:`具${t.talent.root}`}，${t.origin===`凡俗`?`无所凭恃`:t.originRevealed?`身负「${t.origin}」`:`来历不明`}。`,...i];a.length<6&&a.push(`终，${r.name}。`);let o=It(t),s=Xn(r.grade)+ +(o>=95);return{serial:qn(e.serialIndex),seed:e.seed,grade:r.grade,ending:r.name,daoName:t.name,finalRealm:Un(t),perfection:Math.round(o*10)/10,verdictShort:e.verdictShort,lifespan:Math.floor(t.ageMonths/12),inscription:a,marks:{僭越:Math.round(t.僭越),因果:Math.round(n.reduce((e,t)=>e+t.polarity*t.weight,0)),功德:Math.round(t.功德),业障:Math.round(t.业障),藏拙:Math.round(ve(t)*100)/100,堕度:Math.round(t.堕度)},goldFingers:e.goldFingers,rarity:s,createdAtYear:Math.floor(e.diedAtYear)}}function Xn(e){switch(e){case`凡碑`:return 1;case`灵碑`:return 2;case`玄碑`:return 3;case`地碑`:return 4;case`天碑`:return 4;case`血道碑`:return 5;case`道碑`:return 5;case`无字碑`:return 5}}function Zn(e){let t=[];t.push(`┌`+`─`.repeat(60)+`┐`);let n=(e=``)=>{t.push(`│ `+e.padEnd(58)+` │`)};n(`${e.grade}  ${`★`.repeat(e.rarity)}`),n(`编号 ${e.serial}`),n(),n(`【${e.ending}】`),n(`${e.daoName} · ${e.finalRealm}`),n(`寿 ${e.lifespan} 载 · 完满度 ${e.perfection}`),n(`「${e.verdictShort}」`),n();for(let t of e.inscription)n(t);return n(),n(`僭越 ${e.marks.僭越} · 因果 ${e.marks.因果} · 功德 ${e.marks.功德}`),n(`业障 ${e.marks.业障} · 藏拙 ${e.marks.藏拙} · 堕度 ${e.marks.堕度}`),n(`金手指：${e.goldFingers.length?e.goldFingers.join(`、`):`无`}`),n(),n(`世界种子 ${e.seed}`),t.push(`└`+`─`.repeat(60)+`┘`),t.join(`
`)}function Qn(){return{version:1,entries:[],steleCount:0,daoFruit:0,unlockedSystems:[]}}function $n(e){switch(e.tier){case`飞升`:return`飞升`;case`主宰`:return e.id===`plane_sovereign`?`主宰`:null;case`夭折`:return e.id===`possessed_by_demon`?`魔头`:`尸骸`;case`偏安`:return e.id.startsWith(`local_`)?`传承`:null;case`隐藏`:return e.id===`seclusion`?`隐世`:`飞升`}}function er(e,t){e.steleCount++,e.daoFruit+=t.daoFruit;let n=$n(t.ending);if(!n)return null;let r={kind:n,id:t.stele.serial,daoName:t.actor.name,path:t.actor.path,tier:t.actor.tier,realm:t.stele.finalRealm,inscription:t.stele.inscription,signature:t.signature,place:t.place,relics:t.relics,unfinished:t.unfinished,seed:t.stele.seed,atYear:t.stele.createdAtYear,steleGrade:t.stele.grade};return e.entries.push(r),r}function tr(e,t){return e.entries.filter(e=>(e.kind===`飞升`||e.kind===`隐世`)&&e.tier<=t)}function nr(e){return e.entries.filter(e=>e.kind===`魔头`||e.kind===`主宰`)}function rr(e){return e.entries.filter(e=>e.kind===`尸骸`&&e.relics.length>0)}function ir(e){return e.entries.filter(e=>e.kind===`传承`)}function ar(e){switch(e.kind){case`飞升`:return`一缕残魂自称「${e.daoName}」，说他当年也是从这座山走出去的。\n  「${e.signature}」`;case`主宰`:return`${e.place}的主宰之位上坐着「${e.daoName}」，${e.realm}。已在位 ${e.atYear} 年。`;case`魔头`:return`魔头「${e.daoName}」盘踞${e.place}，用的是一套你莫名眼熟的功法。\n  「${e.signature}」`;case`传承`:return`${e.place}有一处旧洞府，主人姓名已不可考，只留下几个字：「${e.signature}」`;case`尸骸`:return`${e.place}的乱石堆里有一具枯骨，手上戴着一枚储物戒。\n  戒中有：${e.relics.join(`、`)}`;case`隐世`:return`据说${e.place}深处住着一位散功的老者，从不见客。`}}var or=[`&&`,`||`,`>=`,`<=`,`==`,`!=`,`>`,`<`,`!`,`+`,`-`,`*`,`/`],sr=class extends Error{};function cr(e){let t=[],n=0;for(;n<e.length;){let r=e[n];if(/\s/.test(r)){n++;continue}if(r===`(`){t.push({kind:`lparen`,value:r,pos:n++});continue}if(r===`)`){t.push({kind:`rparen`,value:r,pos:n++});continue}if(r===`,`){t.push({kind:`comma`,value:r,pos:n++});continue}if(r===`'`||r===`"`){let i=r,a=n+1,o=``;for(;a<e.length&&e[a]!==i;)o+=e[a++];if(a>=e.length)throw new sr(`字符串未闭合 @${n}: ${e}`);t.push({kind:`str`,value:o,pos:n}),n=a+1;continue}if(/[0-9]/.test(r)){let r=``;for(;n<e.length&&/[0-9.]/.test(e[n]);)r+=e[n++];t.push({kind:`num`,value:r,pos:n});continue}let i=or.find(t=>e.startsWith(t,n));if(i){t.push({kind:`op`,value:i,pos:n}),n+=i.length;continue}if(/[\p{L}_]/u.test(r)){let r=``;for(;n<e.length&&/[\p{L}\p{N}_.]/u.test(e[n]);)r+=e[n++];t.push({kind:`ident`,value:r,pos:n});continue}throw new sr(`无法识别的字符 '${r}' @${n}: ${e}`)}return t.push({kind:`eof`,value:``,pos:n}),t}var lr=class{toks;i=0;constructor(e){this.toks=cr(e)}peek(){return this.toks[this.i]}next(){return this.toks[this.i++]}eat(e,t){let n=this.peek();if(n.kind!==e||t!==void 0&&n.value!==t)throw new sr(`期望 ${t??e}，实际 '${n.value}' @${n.pos}`);return this.next()}parse(){let e=this.or();return this.eat(`eof`),e}or(){let e=this.and();for(;this.peek().value===`||`;)this.next(),e={t:`bin`,op:`||`,a:e,b:this.and()};return e}and(){let e=this.cmp();for(;this.peek().value===`&&`;)this.next(),e={t:`bin`,op:`&&`,a:e,b:this.cmp()};return e}cmp(){let e=this.add();for(;[`>`,`>=`,`<`,`<=`,`==`,`!=`].includes(this.peek().value);)e={t:`bin`,op:this.next().value,a:e,b:this.add()};return e}add(){let e=this.mul();for(;[`+`,`-`].includes(this.peek().value);)e={t:`bin`,op:this.next().value,a:e,b:this.mul()};return e}mul(){let e=this.unary();for(;[`*`,`/`].includes(this.peek().value);)e={t:`bin`,op:this.next().value,a:e,b:this.unary()};return e}unary(){return[`!`,`-`].includes(this.peek().value)?{t:`un`,op:this.next().value,a:this.unary()}:this.primary()}primary(){let e=this.peek();if(e.kind===`lparen`){this.next();let e=this.or();return this.eat(`rparen`),e}if(e.kind===`num`)return this.next(),{t:`lit`,v:Number(e.value)};if(e.kind===`str`)return this.next(),{t:`lit`,v:e.value};if(e.kind===`ident`){if(this.next(),e.value===`true`)return{t:`lit`,v:!0};if(e.value===`false`)return{t:`lit`,v:!1};if(e.value===`null`)return{t:`lit`,v:null};if(this.peek().kind===`lparen`){this.next();let t=[];if(this.peek().kind!==`rparen`)for(t.push(this.or());this.peek().kind===`comma`;)this.next(),t.push(this.or());return this.eat(`rparen`),{t:`call`,name:e.value,args:t}}return{t:`path`,p:e.value}}throw new sr(`意外的记号 '${e.value}' @${e.pos}`)}};function ur(e){return e!==null&&e!==!1&&e!==0&&e!==``}function W(e,t){switch(e.t){case`lit`:return e.v;case`path`:return t.get(e.p);case`call`:return t.call(e.name,e.args.map(e=>W(e,t)));case`un`:{let n=W(e.a,t);return e.op===`!`?!ur(n):-(Number(n)||0)}case`bin`:{if(e.op===`&&`)return ur(W(e.a,t))?ur(W(e.b,t)):!1;if(e.op===`||`)return ur(W(e.a,t))?!0:ur(W(e.b,t));let n=W(e.a,t),r=W(e.b,t);switch(e.op){case`==`:return n===r;case`!=`:return n!==r;case`>`:return Number(n)>Number(r);case`>=`:return Number(n)>=Number(r);case`<`:return Number(n)<Number(r);case`<=`:return Number(n)<=Number(r);case`+`:return typeof n==`string`||typeof r==`string`?String(n)+String(r):Number(n)+Number(r);case`-`:return Number(n)-Number(r);case`*`:return Number(n)*Number(r);case`/`:return Number(r)===0?0:Number(n)/Number(r);default:throw new sr(`未知运算符 ${e.op}`)}}}}var dr=new Map;function fr(e){let t=dr.get(e);if(t)return t;let n=new lr(e).parse();return dr.set(e,n),n}function pr(e,t){return W(fr(e),t)}function mr(e,t){return!e||e==="default"||ur(pr(e,t))}var hr={tier:e=>e.actor.tier,sublevel:e=>e.actor.sublevel,path:e=>e.actor.path,goldenCoreGrade:e=>e.actor.goldenCoreGrade,hiddenRealmCount:e=>e.actor.hiddenRealms.length,道心:e=>e.actor.道心,气运:e=>e.actor.气运,功德:e=>e.actor.功德,业障:e=>e.actor.业障,僭越:e=>e.actor.僭越,堕度:e=>e.actor.堕度,丹毒:e=>e.actor.丹毒,名望:e=>e.actor.名望,锋芒:e=>e.actor.锋芒,藏拙:e=>ve(e.actor),"talent.root":e=>e.actor.talent.root,"talent.purity":e=>e.actor.talent.purity,"talent.悟性":e=>e.actor.talent.悟性,"talent.根骨":e=>e.actor.talent.根骨,"talent.神魂":e=>e.actor.talent.神魂,"factors.功法":e=>e.actor.factors.功法,"factors.法宝":e=>e.actor.factors.法宝,"factors.状态":e=>e.actor.factors.状态,"factors.灵宠":e=>e.actor.factors.灵宠,"factors.伙伴":e=>e.actor.factors.伙伴,"factors.道侣":e=>e.actor.factors.道侣,"factors.情报":e=>e.actor.factors.情报,"expose.金手指":e=>e.actor.secrets.金手指,"expose.残魂":e=>e.actor.secrets.残魂,"expose.真实修为":e=>e.actor.secrets.真实修为,"expose.身世":e=>e.actor.secrets.身世,"expose.杀过某人":e=>e.actor.secrets.杀过某人,origin:e=>e.actor.origin,originRevealed:e=>e.actor.originRevealed,originClues:e=>e.actor.originClues,year:e=>Math.floor(e.year),tick:e=>e.tick,age:e=>Math.floor(e.actor.ageMonths/12),lifespanLeft:e=>e.actor.lifespanYears-e.actor.ageMonths/12,location:e=>e.location,effectiveTier:e=>_e(e.actor),daoPerfection:e=>It(e.actor),knowerCount:e=>e.knowers.length,maxExpose:e=>Math.max(...Object.values(e.actor.secrets))},gr={hasSystem:(e,[t])=>e.systems.includes(String(t)),hasAnySystem:e=>e.systems.length>0,hasSoul:(e,[t])=>e.actor.souls.some(e=>e.id===t&&!e.dissipated),soulFavor:(e,[t])=>e.actor.souls.find(e=>e.id===t)?.favor??0,soulPossession:(e,[t])=>e.actor.souls.find(e=>e.id===t)?.possession??0,flag:(e,[t])=>e.flags.has(String(t)),karmaWith:(e,[t])=>e.karmaLedger.filter(e=>!e.resolved&&e.target===t).reduce((e,t)=>e+t.polarity*t.weight,0),unresolvedEvil:e=>e.karmaLedger.filter(e=>!e.resolved&&e.polarity<0).length,seen:(e,[t])=>e.eventHistory.has(String(t)),seenCount:(e,[t])=>e.eventCounts.get(String(t))??0,realmAtLeast:(e,[t])=>e.actor.tier>=Number(t),stage:e=>Et(e.actor.sublevel),knows:(e,[t])=>e.knowers.some(e=>e.npc===t),openWindows:e=>e.karmaLedger.reduce((e,t)=>e+(!t.resolved&&t.hooks.some(e=>e.lethal)?t.unusedWindows.length:0),0),heaviestKarma:e=>e.karmaLedger.reduce((e,t)=>t.resolved?e:Math.max(e,t.weight),0),has:(e,[t,n])=>Ye(H(e.actor),String(t))>=(n===void 0?1:Number(n)),stones:e=>ct(H(e.actor)),bagFree:e=>qe(H(e.actor)),equipped:(e,[t])=>Je(H(e.actor)).some(e=>e.stack.defId===String(t)&&!!e.stack.equipped),chance:(e,[t])=>e.rng.next()<Number(t),min:(e,t)=>Math.min(...t.map(Number)),max:(e,t)=>Math.max(...t.map(Number))};function _r(e){return{get(t){let n=hr[t];if(!n)throw new sr(`未知的字段 '${t}'（不在 scope.ts 白名单内）`);return n(e)},call(t,n){let r=gr[t];if(!r)throw new sr(`未知的函数 '${t}()'（不在 scope.ts 白名单内）`);return r(e,n)}}}Object.keys(hr),Object.keys(gr);var vr=[`凡品`,`灵品`,`宝品`,`仙品`,`秘藏`,`极品`],yr={凡品:620,灵品:280,宝品:82,仙品:16,秘藏:2,极品:.1},G={minTier:3,minLuck:45,luckCoef:8};function br(e,t=0){let n=F((e-50)/50,-1,1)+t;return{凡品:yr.凡品*(1-n*.45),灵品:yr.灵品*(1+n*.1),宝品:yr.宝品*(1+n*.85),仙品:yr.仙品*(1+n*1.9),秘藏:yr.秘藏*(1+n*3.2),极品:Math.max(0,yr.极品*(1+n*G.luckCoef))}}var xr={threshold:10,softStep:.09};function Sr(){return{pity:{},count:{},seenSecret:!1,supremeTaken:!1}}function Cr(e,t){let n=H(e),r=[];if(t.stones&&t.stones>0){let e=ct(n);e<t.stones&&r.push({kind:`stones`,label:`下品灵石`,need:t.stones,have:e,text:`尚缺 ${t.stones-e} 块下品灵石`})}for(let[e,i]of t.consume??[]){let t=Be(e),a=Xe(n,e);a<i&&r.push({kind:`item`,label:t.name,need:i,have:a,text:`尚缺${t.name} ${i-a} 份`})}for(let e of t.hold??[]){let t=e.qty??1,i=e.anyOf.reduce((e,t)=>e+Ye(n,t),0);if(i<t){let n=e.anyOf.map(e=>Be(e).name).join(`、`);r.push({kind:`hold`,label:e.label,need:t,have:i,text:`没有${e.label}（${n} 任一即可）`})}}return r}function wr(e,t){let n=Cr(e,t);if(n.length)return n;let r=H(e);t.stones&&t.stones>0&&ut(r,t.stones);for(let[e,n]of t.consume??[])Qe(r,e,n);return[]}function Tr(e){let t=[];e.stones&&t.push(`${e.stones} 下品灵石`);for(let[n,r]of e.consume??[])t.push(`${Be(n).name}×${r}`);for(let n of e.hold??[])t.push(`须带${n.label}`);for(let n of e.effects??[])t.push(n);return t.join(` · `)||`无`}function Er(e,t,n){let r=[];return n.supremeTaken&&r.push(`此生已得过一件独一无二之物，天不予二`),e.tier<G.minTier&&r.push(`修为未至（须${G.minTier}阶以上）`),e.气运<G.minLuck&&r.push(`气运不足（须 ${G.minLuck} 以上）`),n.seenSecret||r.push(`尚未亲见过一件秘藏`),t.prizes.极品?.length||r.push(`${t.name}里没有这样的东西`),{ok:r.length===0,reasons:r}}function Dr(e,t,n,r){let i=br(e.气运,r),a=Er(e,t,n).ok?vr:vr.filter(e=>e!==`极品`);return{list:a,weights:a.map(e=>e===`极品`?i.极品:Math.max(.01,i[e]))}}function Or(e,t,n,r){let i=r.pity[n.id]??0,a=(r.count[n.id]??0)+1;r.count[n.id]=a;let o=i*xr.softStep+(n.luckBonus??0),s=i>=xr.threshold,c;if(s){let n=br(t.气运,o);c=e.weighted([`宝品`,`仙品`,`秘藏`],[n.宝品,n.仙品,n.秘藏])}else{let{list:i,weights:a}=Dr(t,n,r,o);c=e.weighted(i,a)}let l=n.prizes[c],u=vr.indexOf(c);for(;(!l||l.length===0)&&u>0;)u--,c=vr[u],l=n.prizes[c];if(!l||l.length===0)throw Error(`奖池「${n.id}」没有任何奖品`);let d=e.pick(l);return c===`秘藏`&&(r.seenSecret=!0),c===`极品`&&(r.supremeTaken=!0,r.seenSecret=!0),r.pity[n.id]=c===`凡品`||c===`灵品`?i+1:0,{prize:d,rarity:c,byPity:s,pityAfter:r.pity[n.id],count:a}}function kr(e,t,n){let{list:r,weights:i}=Dr(e,t,n,(n.pity[t.id]??0)*xr.softStep+(t.luckBonus??0)),a=i.reduce((e,t)=>e+t,0),o={};for(let e of vr)o[e]=0;return r.forEach((e,t)=>{o[e]=(i[t]??0)/a}),o}function Ar(e,t){return Math.max(0,xr.threshold-(t.pity[e.id]??0))}function K(e,t,n,r){return{id:e,rarity:`凡品`,name:t,desc:n,effects:r}}function jr(e){for(let t of Object.keys(e))for(let n of e[t])n.rarity=t;return e}var Mr={stones:10,effects:[`僭越 +1.5`]},Nr={consume:[[`za_ganliang`,2]],hold:[{label:`护身之物`,anyOf:[`bao_yufu`,`bao_xuangui`,`bao_bihuo`,`fu_tishen`,`bao_qinglian`]},{label:`摸金的行当`,anyOf:[`bao_xunlong`,`za_ditu`,`fu_yinni`]}],effects:[`业障 +3`,`factors.状态 -0.05`,`僭越 +2`]};function Pr(e){return{stones:e.has(`丹炉`)?0:40,consume:[[`cai_lingcao`,3]],effects:[`丹毒 +1`,`sublevel -0.004`]}}var Fr=[{id:`oracle`,name:`问天签`,costLabel:Tr(Mr),prizes:jr({凡品:[K(`o_kong`,`空签`,`签筒晃了半晌，落出一支无字的。卦师摊手：「天机不予。」`,[`道心 +1`]),K(`o_xiaocai`,`小财`,`「近日有小得。」三日后你在旧衣夹层里摸出四块灵石。`,[`give ls_xia 4`]),K(`o_pingan`,`平安签`,`「无事。」——这年头，无事就是好事。`,[`道心 +2`]),K(`o_zaqi`,`杂气`,`一缕说不清来路的灵气钻进经脉，不痛不痒。`,[`sublevel +0.008`])],灵品:[K(`o_zhiyin`,`指引`,`卦师在残图上圈了个方位：「往那边走，三日内。」图归你了。`,[`give za_ditu 1`]),K(`o_dingshen`,`定神`,`一句偈语落进心里，心浮气躁忽然平了。`,[`道心 +5`]),K(`o_qiyun`,`转运`,`「你近来该顺一顺了。」他把签折断，扔进火里。`,[`气运 +3`]),K(`o_canfang`,`残方`,`半张丹方，字迹被水泡过 —— 他顺手抓了几株对得上的草给你。`,[`give cai_lingcao 3`,`悟性 +1`])],宝品:[K(`o_jinjue`,`进境`,`一句话点破你卡了半年的关窍。`,[`sublevel +0.06`,`悟性 +2`]),K(`o_baoqi`,`宝器缘`,`「西市第三家当铺，去问死当的架子。」你去了，青锋剑就挂在那儿。`,[`give bao_qingfeng 1`]),K(`o_guiren`,`贵人`,`他给了你一个名字。那人后来帮了你一次大忙。`,[`factors.情报 +0.1`,`名望 +8`]),K(`o_bimo`,`护身`,`「去城南铁铺报我的名字。」那副玄龟甲他压了三年没卖出去。`,[`give bao_xuangui 1`])],仙品:[K(`o_tianji`,`窥天机`,`卦师脸色变了。他说的每一个字，往后十年都应验了。`,[`气运 +8`,`factors.情报 +0.15`,`僭越 +6`]),K(`o_gufa`,`古法`,`签上浮出一段古文，他照着抄了一本给你 —— 早已失传的行气法。`,[`give gf_qingmu 1`,`悟性 +2`]),K(`o_yuanshou`,`延寿`,`「你本该短命的。」他叹了口气，「现在不是了。」`,[`lifespan +12`])],秘藏:[K(`o_daoyun`,`道韵`,`那一瞬你听见了什么。醒来时，天光已亮，而你的道基变了。`,[`sublevel +0.15`,`道心 +10`,`悟性 +5`,`气运 +5`,`僭越 +12`])],极品:[K(`o_ji_wuzi`,`无字签`,`签筒底下压着一支从未有人抽出过的黑签。卦师看了很久，说：「这不是我给你的。」他咬破手指在签上写了个字，人就老了二十岁 —— 他把自己剩下的命数，换成了你的。`,[`气运 +14`,`道心 +8`,`悟性 +4`,`lifespan +120`,`业障 +30`,`僭越 +55`,`expose.身世 +10`,`flag 极品·无字签·欠卦师一条命`]),K(`o_ji_mengmei`,`蒙昧珠`,`「有人要我把这个交给你。」灰扑扑的一颗珠子，照不出人影。天机阁推演了三百年没找到它 —— 因为它生来就是让人推不出的。带着它，天看不见你；可你也从此看不清自己的命。`,[`give bao_mengmei 1`,`expose.真实修为 -25`,`expose.金手指 -20`,`expose.身世 -15`,`僭越 +35`,`气运 -6`,`flag 极品·蒙昧珠·天机阁索珠`])]})},{id:`relic`,name:`探古藏`,costLabel:Tr(Nr),luckBonus:.18,prizes:jr({凡品:[K(`r_kutu`,`枯土`,`挖开是一层灰。除了呛鼻子，什么也没有。`,[`factors.状态 -0.03`]),K(`r_suipian`,`碎片`,`一块认不出是什么的碎瓷，握在手里凉得反常。`,[`业障 +1`]),K(`r_jiugu`,`旧骨`,`一副蜷着的骸骨，手指还扣在石壁上。`,[`道心 -2`,`业障 +2`])],灵品:[K(`r_lingshi`,`灵石囊`,`一只烂了半边的储物袋，里面还剩十几块下品灵石。`,[`give ls_xia 15`]),K(`r_canjuan`,`残卷`,`半部吐纳诀，后面被人撕走了 —— 撕得很急。`,[`give gf_tuna 1`]),K(`r_yuping`,`玉瓶`,`瓶塞是蜡封的，里头两粒回气丹居然没化。`,[`give dan_huiqi 2`])],宝品:[K(`r_faqi`,`古法器`,`一柄制式古拙的飞剑，灵纹至今未断。`,[`give bao_lingwen 1`]),K(`r_zhenpan`,`阵盘`,`一只寻龙盘，针还活着，往灵气浓处偏。`,[`give bao_xunlong 1`]),K(`r_yiyan`,`遗言`,`石壁上刻着一段话。你看完，很久没说话。`,[`道心 +8`,`originClues +1`])],仙品:[K(`r_chuancheng`,`传承玉`,`玉里封着一段影像：一个人在演一门焚天的功法，从头到尾，一遍。`,[`give gf_liehuo 1`,`悟性 +3`,`expose.真实修为 +6`]),K(`r_bmqi`,`本命残器`,`前主人的本命青莲灯。它还认得主人的死法。`,[`give bao_qinglian 1`,`业障 +10`,`expose.真实修为 +8`])],秘藏:[K(`r_jinqi`,`禁器`,`赤霄宝剑。你不该拿的。但你拿了。`,[`give bao_chixiao 1`,`业障 +25`,`僭越 +20`,`expose.真实修为 +15`])],极品:[K(`r_ji_taia`,`太阿·断`,`棺里没有尸首，只有半柄剑，断口齐得像被一口咬下去。你握住的一刻，听见很远的地方有人叫了一声名字 —— 不是你的名字，是它上一任主人的。它斩过的最后一个人，就是那个人。`,[`give bao_taia 1`,`factors.功法 +0.05`,`lifespan -60`,`业障 +45`,`僭越 +40`,`expose.真实修为 +30`,`名望 +25`,`flag 极品·太阿·前主人的仇家仍在`]),K(`r_ji_jiezi`,`芥子壶`,`壶口三寸，探进神识却是一片天。壶里有座荒了三十年的园子，园子中央坐着一个人形的东西，背对着你 —— 前主人「养」的。它听见你进来了。`,[`give za_jiezihu 1`,`业障 +25`,`僭越 +25`,`道心 -6`,`flag 极品·芥子壶·园中人未死透`])]})},{id:`alchemy`,name:`开炉`,costLabel:Tr(Pr(new Set)),prizes:jr({凡品:[K(`a_zhalu`,`炸炉`,`砰的一声。你从灰里爬出来，眉毛少了半边。`,[`factors.状态 -0.08`,`道心 -1`]),K(`a_feidan`,`废丹`,`成了，但是黑的。闻着像糊掉的药渣 —— 敢不敢吃是你的事。`,[`give dan_jia 1`]),K(`a_cidan`,`次丹`,`勉强能吃。药性冲，但确实是丹。`,[`give dan_huiqi 1`])],灵品:[K(`a_juqi`,`聚气散`,`成色一般，好在够用。`,[`give dan_juqi 1`]),K(`a_liaoshang`,`疗伤丹`,`一炉出了两粒，收口比预想的干净。`,[`give dan_liaoshang 2`]),K(`a_ningshen`,`凝神丹`,`开盖时满室清苦气。用来画符或者认人正好。`,[`give dan_ningshen 1`])],宝品:[K(`a_zhuji`,`筑基丹`,`丹成三转，纹路清晰。这一炉值了。`,[`give dan_zhuji 1`]),K(`a_xisui`,`洗髓丹`,`丹色青白。传闻服下三日排黑汗，根骨是真换。`,[`give dan_xisui 1`]),K(`a_qingdu`,`解毒丹`,`两粒解毒丹 —— 专拔积在经脉里的药渣。`,[`give dan_jiedu 2`])],仙品:[K(`a_jinyuan`,`金元丹`,`丹成有纹。开炉那一刻，天上像有什么东西低头看了你一眼。`,[`give dan_jinyuan 1`,`僭越 +3`]),K(`a_jiuzhuan`,`九转还魂`,`丹上有九道纹。老一辈说，这种丹能从阎王手里抢人。`,[`give dan_jiuzhuan 1`])],秘藏:[K(`a_zaohua`,`造化一炉`,`开炉那日天有异象。丹成之时，满室药香三日不散 —— 而且是一炉双成。`,[`give dan_jiuzhuan 1`,`give dan_xisui 2`,`悟性 +3`,`气运 +5`,`僭越 +10`])],极品:[K(`a_ji_zijin`,`九转紫金丹`,`丹上九道纹，纹里有紫气自己在走。药王谷的老人说这一炉三千年只成过两粒，另一粒是给天子送葬用的。药香飘了三日，方圆百里但凡有鼻子的都闻见了。`,[`give dan_zijin 1`,`僭越 +30`,`业障 +10`,`expose.真实修为 +25`,`名望 +30`,`flag 极品·紫金丹·药香引客`]),K(`a_ji_danying`,`炉中婴`,`丹没成，成了别的。开盖时它坐在炉底，像睡着了，睁眼先看的是你。它认你 —— 而认主这件事，从来是双向的。`,[`give bao_danying 1`,`神魂 +4`,`lifespan -40`,`道心 -8`,`业障 +20`,`僭越 +25`,`flag 极品·炉中婴·立春索血`])]})}],Ir={oracle:{cond:e=>e>=1,cost:()=>Mr,hint:`坊市街口的卦摊，一卦十块下品灵石。问得多了，天也会烦。`},relic:{cond:e=>e>=2,cost:()=>Nr,hint:`荒山野岭的旧坟古洞。带够口粮、护身与摸金的行当再进去 —— 前人的东西好拿，前人的账也跟着来。`},alchemy:{cond:e=>e>=2,cost:e=>Pr(e),hint:`自己开炉。药材真烧、炉子真要有 —— 没有自家炉子，就得掏钱借人家的丹房。`}},q=class extends Error{},Lr={道心:{get:e=>e.actor.道心,set:(e,t)=>{e.actor.道心=F(t,0,100)}},气运:{get:e=>e.actor.气运,set:(e,t)=>{e.actor.气运=F(t,0,100)}},功德:{get:e=>e.actor.功德,set:(e,t)=>{e.actor.功德=Math.max(0,t)}},业障:{get:e=>e.actor.业障,set:(e,t)=>{e.actor.业障=Math.max(0,t)}},僭越:{get:e=>e.actor.僭越,set:(e,t)=>{e.actor.僭越=Math.max(0,t)}},堕度:{get:e=>e.actor.堕度,set:(e,t)=>{e.actor.堕度=F(t,0,100)}},丹毒:{get:e=>e.actor.丹毒,set:(e,t)=>{e.actor.丹毒=F(t,0,100)}},名望:{get:e=>e.actor.名望,set:(e,t)=>{e.actor.名望=F(t,-100,1e3)}},锋芒:{get:e=>e.actor.锋芒,set:(e,t)=>{e.actor.锋芒=Math.max(0,t)}},sublevel:{get:e=>e.actor.sublevel,set:(e,t)=>{e.actor.sublevel=F(t,0,1)}},lifespan:{get:e=>e.actor.lifespanYears,set:(e,t)=>{e.actor.lifespanYears=Math.max(0,t)}},age:{get:e=>e.actor.ageMonths/12,set:(e,t)=>{e.actor.ageMonths=Math.max(0,t*12)}},originClues:{get:e=>e.actor.originClues,set:(e,t)=>{e.actor.originClues=Math.max(0,Math.floor(t))}},悟性:{get:e=>e.actor.talent.悟性,set:(e,t)=>{e.actor.talent.悟性=F(t,1,100)}},根骨:{get:e=>e.actor.talent.根骨,set:(e,t)=>{e.actor.talent.根骨=F(t,1,100)}},神魂:{get:e=>e.actor.talent.神魂,set:(e,t)=>{e.actor.talent.神魂=F(t,1,100)}},纯度:{get:e=>e.actor.talent.purity,set:(e,t)=>{e.actor.talent.purity=F(t,5,100)}}};for(let e of Object.keys(b))Lr[`factors.${e}`]={get:t=>t.actor.factors[e],set:(t,n)=>{t.actor.factors[e]=F(n,b[e].min,b[e].max)}};for(let e of[`金手指`,`残魂`,`真实血脉`,`真实修为`,`杀过某人`,`身世`])Lr[`expose.${e}`]={get:t=>t.actor.secrets[e],set:(t,n)=>{t.actor.secrets[e]=F(n,0,100)}};function J(e,t){let n=e.itemNotices??=[];n.push(t),n.length>64&&n.splice(0,n.length-64)}function Rr(e,t){if(e===void 0)return 1;let n=Number(e);if(!Number.isFinite(n)||!Number.isInteger(n)||n<=0)throw new q(`数量必须是正整数 '${e}'：${t}`);return n}function zr(e,t){let n,r;for(let i of e.slice(2)){let e=je(i);if(e!==void 0){if(r!==void 0)throw new q(`成色只能写一个：${t}`);r=e;continue}if(!/^[+-]?\d+$/.test(i))throw new q(`give 的参数 '${i}' 既不是数量也不是成色（成色须为 ${Ce.join(`/`)}）：${t}`);if(n!==void 0)throw new q(`数量只能写一个：${t}`);n=Rr(i,t)}return{qty:n??1,quality:r}}function Br(e,t,n,r){Y(n[1],r);let i=Be(n[1]),a=H(e.actor);switch(t){case`give`:{let{qty:t,quality:o}=zr(n,r);if(o!==void 0&&R(i))throw new q(`'${i.name}' 不参与成色（灵石与独一件恒为本名）：${r}`);let s=Ze(a,i.id,t,{quality:o,rng:e.rng});if(s.added>0&&J(e,`得${Ne(i,s.quality)}×${s.added}`),s.overflow>0){e.flags.add(`背包已满`);let t=$e(a),n=t?`（最不值钱的是${t.def.name}，丢掉可腾一格）`:``;J(e,`${Ne(i,s.quality)}×${s.overflow} 没处放，只能留在原地 —— ${a.container}统共 ${Ge(a)} 格，已经装满${n}`)}else e.flags.delete(`背包已满`);return}case`take`:{let t=Rr(n[2],r);if(i.stone){let n=t*P[i.stone];ut(a,n)?J(e,`付了${n} 下品灵石`):J(e,`掏不出 ${n} 下品灵石（囊中只有 ${ct(a)}）`);return}let o=Qe(a,i.id,t);o>0&&J(e,`失${i.name}×${o}`),o<t&&J(e,`${i.name}不够拿（要 ${t}，只有 ${o}；装备在身上的不算）`);return}case`useItem`:{let t=tt(e.actor,i.id);if(!t.ok){J(e,t.reason??`用不了${i.name}`);return}J(e,t.note??`用了${Ne(i,t.quality)}`);for(let n of t.effects)Vr(e,n);return}case`equip`:{let t=it(e.actor,i.id);if(!t.ok){J(e,t.reason??`佩不上${i.name}`);return}let n=t.replaced?`，换下${V(t.replaced)?.name??t.replaced}`:``;J(e,`佩上${Ne(i,t.quality)}（${t.slot}位${n}）`),t.overTier&&(vn(e),J(e,`${i.name}远超你此刻的境界 —— 拿出来用，等于自报家门`));return}case`unequip`:{let t=ot(e.actor,i.id);J(e,t.ok?`卸下${i.name}`:t.reason??`${i.name}不在身上`);return}}}function Vr(e,t){let n=t.trim();if(!n)return;let r=n.split(/\s+/),i=r[0];switch(i){case`flag`:Y(r[1],n),e.flags.add(r[1]);return;case`unflag`:Y(r[1],n),e.flags.delete(r[1]);return;case`move`:Y(r[1],n),e.location=r[1];return;case`bind.system`:{Y(r[1],n);let t=r[1];e.systems.includes(t)||e.systems.push(t);return}case`bind.soul`:{Y(r[1],n);let t=r[1];e.actor.souls.some(e=>e.id===t)||e.actor.souls.push({id:t,name:t,tier:Math.min(Number(r[2]??9),j.maxTier),favor:0,possession:0,dissipated:!1});return}case`devourSoul`:{Y(r[1],n);let t=pn(e,r[1]);e.flags.add(t.ok?`吞魂成功_${r[1]}`:`吞魂失败_${r[1]}`);return}case`reincarnateSoul`:Y(r[1],n),mn(e,r[1]).ok&&e.flags.add(`送归转世_${r[1]}`);return;case`mergeSoul`:Y(r[1],n),hn(e,r[1]).ok&&e.flags.add(`融合共生_${r[1]}`);return;case`witness`:{Y(r[1],n),Y(r[2],n);let t=r[2];if(!gn.includes(t))throw new q(`未知的秘密类型 '${r[2]}'：${n}`);_n(e,t,8,r[1]);return}case`silence`:Y(r[1],n),xn(e,r[1]);return;case`eraseMemory`:Y(r[1],n),Sn(e,r[1]);return;case`fakeDeath`:Cn(e);return;case`stepDown`:e.flags.add(`止步`);return;case`settle`:{Y(r[1],n);let t=r[1];if(!Wr.includes(t))throw new q(`未知的了结方式 '${t}'：${n}`);let i=Jt(e,t);i&&e.flags.add(`已结·${i.type}`);return}case`give`:case`take`:case`useItem`:case`equip`:case`unequip`:Br(e,i,r,n);return;case`draw`:{Y(r[1],n);let t=Fr.find(e=>e.id===r[1]);if(!t)throw new q(`未知的奖池 '${r[1]}'：${n}`);let i=e.gacha??={pity:{},count:{}},a=Or(e.rng,e.actor,t,i);for(let t of a.prize.effects)Vr(e,t);e.flags.add(`机缘·${a.rarity}`),e.lastPrize=`${a.rarity}·${a.prize.name} —— ${a.prize.desc}`;return}}if(i.startsWith(`soul.`)){let t=i.split(`.`);if(t.length!==3)throw new q(`残魂效果格式应为 soul.<id>.<favor|possession>：${n}`);let[,a,o]=t,s=e.actor.souls.find(e=>e.id===a);if(!s)return;let c=Ur(r[1],n);if(o===`favor`)s.favor=F(s.favor+c,-100,100);else if(o===`possession`)s.possession=F(s.possession+c,0,100);else throw new q(`残魂无此字段 '${o}'：${n}`);return}let a=Lr[i];if(!a)throw new q(`未知的效果目标 '${i}'（不在 effects.ts 白名单内）：${n}`);let o=r[1];if(o===void 0)throw new q(`缺少数值：${n}`);o.startsWith(`=`)?a.set(e,Number(o.slice(1))):a.set(e,a.get(e)+Ur(o,n))}function Hr(e,t){for(let n of t??[])Vr(e,n)}function Y(e,t){if(!e)throw new q(`缺少参数：${t}`)}function Ur(e,t){if(e===void 0)throw new q(`缺少数值：${t}`);let n=Number(e);if(Number.isNaN(n))throw new q(`数值无法解析 '${e}'：${t}`);return n}var Wr=[`了结`,`补偿`,`化解`,`剪断`,`转嫁`],Gr=[`flag`,`unflag`,`move`,`bind.system`,`bind.soul`,`devourSoul`,`reincarnateSoul`,`mergeSoul`,`silence`,`eraseMemory`,`draw`,`settle`],Kr=[`fakeDeath`,`stepDown`],qr=[`give`,`take`,`useItem`,`equip`,`unequip`];[...Object.keys(Lr),...Gr,...Kr,...qr];var Jr=`凡俗`,Yr=1,Xr=10,Zr={境界:{kind:`境界`,offset:0,abs:null},下境:{kind:`境界`,offset:1,abs:null},上境:{kind:`境界`,offset:-1,abs:null},境界·期:{kind:`境界期`,offset:0,abs:null},结丹物:{kind:`结丹物`,offset:0,abs:null},道统:{kind:`道统`,offset:0,abs:null}};function Qr(e){let t=Zr[e];if(t)return t;let n=/^境界([+\-=])(\d{1,2})$/.exec(e);if(!n)return null;let r=Number(n[2]);return n[1]===`=`?r>=Yr&&r<=Xr?{kind:`境界`,offset:0,abs:r}:null:r<1||r>9?null:{kind:`境界`,offset:n[1]===`+`?r:-r,abs:null}}function $r(e,t){return t<Yr?Jr:U(e,Math.min(t,Xr))}function ei(e,t,n,r=0){return e.kind===`道统`?t:e.kind===`结丹物`?bt[t]??bt.正道:e.kind===`境界期`?n<Yr?Jr:Dt(t,n,r):$r(t,e.abs??n+e.offset)}function ti(e,t,n,r=0){return e.includes(`〔`)?e.replace(/〔([^〕〔]*)〕/g,(e,i)=>{let a=Qr(i);return a?ei(a,t,n,r):e}):e}function ni(e,t){return ti(t,e.actor.path,e.actor.tier,e.actor.sublevel)}function ri(e,t,n,r){if(t.location&&t.location!==r||t.mutexGroup&&e.flags.has(`互斥·${t.mutexGroup}`))return!1;let i=e.eventHistory.get(t.id);return i!==void 0&&(t.once||t.cooldown&&e.tick-i<t.cooldown)?!1:mr(t.cond,n)}function ii(e,t,n={}){let r=_r(e),i=n.location??e.location,a=[];for(let o of t.events.values())n.excludeTags?.length&&o.tags?.some(e=>n.excludeTags.includes(e))||ri(e,o,r,i)&&a.push(o);return a}var ai={window:80,floor:.06,countDecay:.2,countFloor:.02};function oi(e,t){let n=e.eventCounts.get(t.id)??0;if(n===0)return 1;let r=e.eventHistory.get(t.id),i=r===void 0?ai.window:e.tick-r,a=Math.min(1,Math.max(0,i/ai.window));return(ai.floor+(1-ai.floor)*a)*Math.max(ai.countFloor,ai.countDecay**n)}function si(e,t,n={}){let r=di(e,t,n);if(r)return r;let i=ii(e,t,n);if(i.length===0)return null;let a=I(e.actor),o=i.map(t=>{let r=Math.max(.01,t.weight*(1+a*.25));return n.noRepeatSuppression?r:r*oi(e,t)});return e.rng.weighted(i,o)}var ci={defaultAfter:[2,6],defaultPatience:12,maxQueue:16};function li(e,t,n){let r=e.sequels??=[];if(r.some(e=>e.event===n.event)||r.length>=ci.maxQueue)return!1;let[i,a]=n.after??ci.defaultAfter,o=Math.max(1,Math.floor(i)),s=Math.max(o,Math.floor(a)),c=e.tick+e.rng.int(o,s),l=Math.max(1,Math.floor(n.patience??ci.defaultPatience)),u={event:n.event,from:t,dueTick:c,expireTick:c+l};return n.cond&&(u.cond=n.cond),r.push(u),!0}function ui(e,t,n,r){if(n)for(let i of Array.isArray(n)?n:[n])i?.event&&li(e,t,i)&&r.push(i.event)}function di(e,t,n={}){let r=e.sequels;if(!r||r.length===0)return null;for(let n=r.length-1;n>=0;n--){let i=r[n];(!t.events.has(i.event)||e.tick>i.expireTick)&&r.splice(n,1)}let i=_r(e),a=n.location??e.location,o=r.map((e,t)=>({s:e,i:t})).sort((e,t)=>e.s.dueTick-t.s.dueTick||e.i-t.i);for(let{s:n}of o){if(e.tick<n.dueTick)continue;let o=t.events.get(n.event);if(ri(e,o,i,a)&&!(n.cond&&!mr(n.cond,i)))return r.splice(r.indexOf(n),1),o}return null}function fi(e,t){if(typeof t.text==`string`)return ni(e,t.text);if(t.text.length===0)return``;let n=e.eventCounts.get(t.id)??0;return ni(e,t.text[n%t.text.length])}function pi(e,t){let n=_r(e);return t.choices.filter(e=>mr(e.require,n)).map(t=>t.text.includes(`〔`)?{...t,text:ni(e,t.text)}:t)}function mi(e,t,n){return!n||n===`none`?null:$t(e,{type:n.type,source:t.id,actor:`player`,target:n.target,weight:n.weight,polarity:n.polarity??-1,matureWindow:n.matureWindow,hooks:n.hooks}).id}function hi(e,t,n,r){if(!n)return{text:``,goto:null,karma:null};Hr(e,n.effects);let i=mi(e,t,n.karma);return ui(e,t.id,n.sequel,r),{text:n.text?ni(e,n.text):``,goto:n.goto??null,karma:i}}function gi(e,t,n){e.eventHistory.set(t.id,e.tick),e.eventCounts.set(t.id,(e.eventCounts.get(t.id)??0)+1),t.mutexGroup&&e.flags.add(`互斥·${t.mutexGroup}`);let r=mi(e,t,n.karma),i=[];if(!n.check){Hr(e,n.effects);let a=hi(e,t,n.then,i);return ui(e,t.id,n.sequel,i),{outcome:null,text:a.text,goto:a.goto,karmaCreated:a.karma??r,planted:i}}let a=_r(e),o=Number(pr(n.check.actor,a)),s=Number(pr(n.check.dc,a)),c=fe(e.rng,{power:o,dc:s,scale:n.check.scale,bonus:n.check.bonus},I(e.actor)),l=hi(e,t,c===`CRIT_SUCCESS`?n.onCritSuccess??n.onSuccess:c===`SUCCESS`?n.onSuccess:c===`FAIL`?n.onFail:n.onCritFail??n.onFail,i);return ui(e,t.id,n.sequel,i),{outcome:c,text:l.text,goto:l.goto,karmaCreated:l.karma??r,planted:i}}var _i={你:`亲历（你）`,我:`自述（我）`,他:`说书（道号）`};function vi(e,t,n=`他`){return t===`你`?e:e.split(`
`).map(e=>e.split(/(「[^」]*」|〔[^〕]*〕)/).map(e=>e.startsWith(`「`)||e.startsWith(`〔`)?e:t===`我`?e.replace(/你们/g,`我们`).replace(/你/g,`我`):e.replace(/你们/g,`几人`).replace(/你/g,n)).join(``)).join(`
`)}var yi=[`零`,`一`,`二`,`三`,`四`,`五`,`六`,`七`,`八`,`九`];function X(e){if(e<10)return yi[e];if(e<20)return`十${e%10?yi[e%10]:``}`;if(e<100)return`${yi[Math.floor(e/10)]}十${e%10?yi[e%10]:``}`;if(e<1e3){let t=e%100;return`${yi[Math.floor(e/100)]}百${t===0?``:t<10?`零${yi[t]}`:X(t)}`}return String(e)}function bi(e,t,n){if(e<2)return null;let r=Math.floor(e);return r<4?[`转过年去，又是一年。`,`两三年一晃而过。`,`此后两年，山中无事。`][r%3]:r<12?`此后${X(r)}年，无事。`:r<50?`一晃，便是${X(r)}年。`:t>=4?`这一坐，便是${X(r)}年。出关那日，${n}认得的凡人，坟头草都换了几茬。`:`${X(r)}年过去了。山下已经换了人间。`}var xi=new Set([`危机`,`冲突`,`战争`,`渡劫`,`心魔`,`怪谈`,`长期敌对`,`打脸`]),Si=new Set([`日常`,`市井`,`人情`,`人间`,`江湖`,`修行`,`修炼`]);function Ci(e){return e.some(e=>xi.has(e))?`tight`:e.some(e=>Si.has(e))?`loose`:`neutral`}var wi=[`话音未落——`,`这事没完。`,`一波未平，一波又起。`,`事情赶着事情来。`],Ti=[`不过数日。`,`转过月来。`,`一晃，月余。`],Ei=e=>[`不过数日，你已到了${e}。`,`一路晓行夜宿，你到了${e}。`,`你离了旧处，落脚${e}。`],Di=[`转过年去。`,`一晃两年。`,`第二年上，诸事平平。`],Oi=(e,t)=>[`第二年开春你离了${e}，一路到了${t}。`,`这两年你换了地方，如今落脚在${t}。`,`转过年去，你已在${t}住下。`];function ki(e,t,n){let r=[`此后${X(t)}年，无事。`,`一晃，便是${X(t)}年。`];return t>=12&&r.push(`${X(t)}年过去了。山下已经换了人间。`),t>=12&&n>=4&&r.push(`这一坐，便是${X(t)}年。出关那日，你认得的凡人，坟头草都换了几茬。`),e.pick(r)}var Ai=e=>[`再动身时，你已在${e}。`,`出来走动这一趟，你到了${e}。`],ji=[`这天夜里——`,`偏在这时，出了事。`,`变故来得没有一点声响。`,`这一日，祸事寻上门来。`],Mi=[`日子照旧过。这天，有桩事寻到你面前。`,`这天，来了个不速之客。`,`闲事一桩，却也躲不开。`],Ni=[`这天，有件事找到你头上。`,`又有一桩事，寻上门来。`,`该来的，总会来。`],Pi=[`丹田里那点东西，再也压不住了。`,`气机满盈，关口就在眼前。`,`这一夜，周天转到极处——关口到了。`];function Fi(e,t){if(t.chained)return e.pick(wi);let n=t.from!==t.to,r=Math.floor(Math.max(0,t.gapYears)),i;t.gapYears<1?i=n?e.pick(Ei(t.to)):e.pick(Ti):r<=3?i=n?e.pick(Oi(t.from,t.to)):e.pick(Di):(i=ki(e,r,t.tier),n&&(i+=e.pick(Ai(t.to))));let a=Ci(t.nextTags),o=t.nextKind===`breakthrough`?e.pick(Pi):a===`tight`?e.pick(ji):a===`loose`?e.pick(Mi):e.pick(Ni);return`${i}${o}`}function Ii(e,t){return vi(e,`他`,t)}var Li=3;function Ri(e){let t=[],n={title:`起于微末`,beats:[]};for(let r of e){let e=r.isMajor&&(r.kind===`scene`||r.kind===`milestone`);e&&n.beats.length>=Li?(t.push(n),n={title:r.title??r.text.slice(0,12),beats:[r]}):(e&&n.beats.length<Li&&r.title&&(n.title=n.beats.length===0?r.title??n.title:`${n.title} · ${r.title}`),n.beats.push(r))}return n.beats.length&&t.push(n),t}function zi(e,t,n){let r=e.text.trim();if(!r)return null;switch(e.kind){case`scene`:return vi(r,t,n);case`choice`:return r.startsWith(`「`)?r.replace(/^「【[^】]*】/,`「`):`—— ${vi(r,t,t===`我`?`我`:`他`)}`;case`outcome`:case`notice`:return vi(r,t,t===`我`?`我`:`他`);case`transition`:return vi(r,t,n);case`milestone`:return`是年，${vi(r,t,n)}${/[。！？」]$/.test(r)?``:`。`}`}}function Bi(e){let t=new Set,n=[],r=!1;for(let i=0;i<e.length;i++){let a=e[i];if(a.kind===`transition`){let o=e[i+1];if(o&&o.kind===`scene`&&o.evId&&t.has(o.evId)&&!o.isMajor)continue;r=!1,n.push(a);continue}if(a.kind===`scene`){if(a.evId&&t.has(a.evId)&&!a.isMajor){r=!0;continue}a.evId&&t.add(a.evId),r=!1,n.push(a);continue}(a.kind===`choice`||a.kind===`outcome`)&&r||((a.kind===`milestone`||a.kind===`notice`)&&(r=!1),n.push(a))}return n}function Vi(e){let{daoName:t,chronicle:n,stele:r}=e,i=e.pov??`他`,a=[];a.push(`# 藏锋录 · ${t}${i===`我`?`自述`:`卷`}`),a.push(``),a.push(`> ${e.signature}`),a.push(`>`),a.push(`> —— ${t}${n.origin!==`凡俗`&&n.ending.tier!==`夭折`?`，${n.origin}`:``}，寿${X(n.lifespan)}载`),a.push(``);let o=Ri(Bi(e.beats)),s=null,c=null,l=i===`我`?`我`:t;if(o.forEach((e,n)=>{a.push(`## 第${X(n+1)}回 · ${e.title}`),a.push(``);for(let n of e.beats){if(s!==null&&n.kind===`scene`&&c!==`transition`){let e=bi(n.year-s,n.tier,l);e&&(a.push(e),a.push(``))}let e=zi(n,i,t);e&&(a.push(e),a.push(``)),s=n.year,c=n.kind}}),a.push(`## 终 · ${n.ending.name}`),a.push(``),i===`我`&&(a.push(`*（自述至此而止。以下数页为后人所补。）*`),a.push(``)),a.push(Ii(n.ending.text,t)),a.push(``),n.deathChain){a.push(`后来有人翻起这段公案，把前因后果排了出来：`),a.push(``);for(let e of n.deathChain.split(`
`))a.push(`> ${e}`);n.missedWindows.length&&(a.push(`>`),a.push(`> 局中人未曾察觉的是，有${X(n.missedWindows.length)}次，事情本可以不是这样。`)),a.push(``)}a.push(`---`),a.push(``),a.push(`## 跋`),a.push(``);for(let e of n.verdict.split(`
`))a.push(`> ${e}`);if(a.push(``),n.people.length){a.push(`### 书中诸人，后来`),a.push(``);for(let e of n.people.slice(0,8))a.push(`**${e.name}**（${Ii(e.relation,t)}）`),a.push(``),a.push(Ii(e.afterward,t)),a.push(``)}if(n.unfinished.length){a.push(`### 未了之事`),a.push(``);for(let e of n.unfinished)a.push(`- ${e}`);a.push(``),a.push(`（这些账没有随他入土。它们还在世上走动，等下一个人。）`),a.push(``)}return a.push(`### 碑拓`),a.push(``),a.push("```"),a.push(Zn(r)),a.push("```"),a.push(``),a.push(`*此书由一局真实的推演自动写成。世界种子 \`${e.seed}\` —— 持此种子者，可入同一世界，另写一卷。*`),a.push(``),a.join(`
`)}function Hi(e){return e.replace(/[#>*`\-\s]/g,``).length}function Ui(e){return[...e.effects??[],...e.onCritSuccess?.effects??[],...e.onSuccess?.effects??[],...e.onFail?.effects??[],...e.onCritFail?.effects??[]]}function Wi(e,t){let n=[],r=new Set,i=(e,t)=>{r.has(e)||(r.add(e),n.push({text:e,level:t}))};e.tags?.includes(`岔路`)&&i(`人生岔路 · 落子无悔`,`grave`);let a=t.karma;a&&a!==`none`&&(a.hooks?.some(e=>e.lethal)?i(`或招杀身之祸`,`grave`):a.weight>=40&&i(`结下重因果`,`warn`));for(let e of Ui(t)){let t=e.trim();t.startsWith(`fakeDeath`)?i(`假死脱身 · 尽弃身份人脉`,`grave`):t.startsWith(`stepDown`)?i(`就此止步 · 不再求进`,`grave`):t.startsWith(`devourSoul`)?i(`反吞残魂 · 败则身死`,`grave`):t.startsWith(`mergeSoul`)?i(`魂魄相融 · 不可分离`,`grave`):t.startsWith(`silence`)?i(`灭口 · 业障加身`,`grave`):t.startsWith(`bind.soul`)&&i(`引魂入体 · 祸福难料`,`warn`);let n=/^堕度 \+(\d+(?:\.\d+)?)/.exec(t);n&&Number(n[1])>=8&&i(`堕入邪道`,`grave`),n=/^lifespan -(\d+(?:\.\d+)?)/.exec(t),n&&Number(n[1])>=5&&i(`折寿${n[1]}载`,`grave`),n=/^僭越 \+(\d+(?:\.\d+)?)/.exec(t),n&&Number(n[1])>=8&&i(`僭越大增 · 天道侧目`,`warn`),n=/^业障 \+(\d+(?:\.\d+)?)/.exec(t),n&&Number(n[1])>=20&&i(`业障深重`,`warn`),n=/^expose\.[^ ]+ \+(\d+(?:\.\d+)?)/.exec(t),n&&Number(n[1])>=15&&i(`大损隐秘`,`warn`)}return n}function Gi(e,t){return Wi(e,t).some(e=>e.level===`grave`)}function Ki(e,t){let n={player:[],auto:[],loose:[],transition:null,nextScene:null},r=new Map,i=[];for(let t of e){if(t.episodeId==null){n.loose.push(t);continue}let e=r.get(t.episodeId);if(e)e.beats.push(t);else{let e={episodeId:t.episodeId,auto:!!t.auto,beats:[t]};r.set(t.episodeId,e),i.push(e)}}for(let e of i){let t=e.beats.length===1?e.beats[0]:null;if(t?.kind===`transition`){n.transition&&n.loose.push(n.transition),n.transition=t;continue}(e.auto?n.auto:n.player).push(e)}let a=n.player[n.player.length-1];return t&&a&&a.beats.every(e=>e.kind===`scene`)&&a.beats[0].evId===t&&(n.nextScene=a,n.player.pop()),n}var qi={外门:{monthly:2,dutyEvery:3,patience:5,duty:`劈柴挑水，兼扫丹房`},内门:{monthly:10,dutyEvery:4,patience:6,duty:`守山门，轮值三班`},真传:{monthly:30,dutyEvery:5,patience:6,duty:`代师授业，兼查外门功课`},执事:{monthly:60,dutyEvery:5,patience:7,duty:`押粮、点卯、断门内的官司`},长老:{monthly:140,dutyEvery:6,patience:8,duty:`坐镇一堂，议事时须到`},掌门:{monthly:180,dutyEvery:7,patience:8,duty:`山门岁供进账，也轮到你发别人的俸`}},Ji=[`外门`,`内门`,`真传`,`执事`,`长老`],Z={paidMonthsCap:24,payEveryMonths:12,dutyCost:.004,meritMin:-60,meritMax:60,suspendAt:3,suspendTicks:4,dismissAt:6,arrearsMonthsCap:36,backPayMonths:36},Yi={1:10,2:80,3:500,4:2500,5:9e3,6:2e4,7:4e4,8:7e4,9:12e4};function Xi(){return{merit:0,promotions:0,accruedMonths:0,arrears:0,dutyLeft:0,missed:0,suspended:0,paidTotal:0}}var Zi=class e{ctx;db;registry;seed;maxTicks;birthYear=16;milestones=[];curve=[];notices=[];beats=[];pendingEvent=null;chainDepth=0;episodeSeq=1;currentEpisode=0;pageYear;pageLocation;breakthroughCooldown=0;death=null;steppedDown=!1;failedBranch=null;finished=null;lastTags=[];stance=`打坐吐纳`;lastOutcome=null;lastDeltas=[];lastBreakthrough=null;signInYear=-1;stipend=Xi();lastRank=null;get gacha(){return this.ctx.gacha}set gacha(e){this.ctx.gacha=e}autoResolveMinor=!0;flushItemNotices(){let e=this.ctx.itemNotices;if(!(!e||e.length===0)){for(let t of e)this.note(t);e.length=0}}noticeOnly(e){this.notices.push(e),this.notices.length>64&&this.notices.splice(0,this.notices.length-64)}note(e,t=`notice`){this.notices.push(e),this.beats.push({year:Math.floor(this.ctx.year),tier:this.ctx.actor.tier,kind:t,text:e})}newEpisode(){return this.episodeSeq++}pushTransition(e,t,n=!1){let r=Fi(this.ctx.rng,{gapYears:this.ctx.year-this.pageYear,from:this.pageLocation,to:this.ctx.location,nextTags:e,tier:this.ctx.actor.tier,nextKind:t,chained:n});this.beats.push({year:Math.floor(this.ctx.year),tier:this.ctx.actor.tier,kind:`transition`,text:r,episodeId:this.newEpisode()}),this.pageYear=this.ctx.year,this.pageLocation=this.ctx.location}constructor(e){let t=new o(e.seed);if(this.seed=e.seed,this.db=e.db,this.registry=e.registry,this.maxTicks=e.maxTicks??500,e.restore){let t=structuredClone(e.restore);if(t.pendingEventId&&!e.db.events.has(t.pendingEventId))throw Error(`快照中的事件「${t.pendingEventId}」已不存在（内容已更新）`);this.ctx={rng:o.restore(t.rng),year:t.year,tick:t.tick,actor:t.actor,karmaLedger:t.karmaLedger,log:[],flags:new Set(t.flags),systems:t.systems,eventHistory:new Map(t.eventHistory),eventCounts:new Map(t.eventCounts),sequels:t.sequels??[],location:t.location,knowers:t.knowers,gacha:t.gacha??Sr()},this.milestones.push(...t.milestones),this.curve.push(...t.curve),this.beats.push(...t.beats),this.notices.push(...t.notices),this.pendingEvent=t.pendingEventId?e.db.events.get(t.pendingEventId):null,this.chainDepth=t.chainDepth,this.breakthroughCooldown=t.breakthroughCooldown,this.lastTags=t.lastTags,this.stance=t.stance,this.signInYear=t.signInYear??-1,this.autoResolveMinor=!0,this.stipend=t.stipend??Xi(),this.episodeSeq=t.episodeSeq??t.beats.reduce((e,t)=>Math.max(e,t.episodeId??0),0)+1,this.currentEpisode=t.currentEpisode??0,this.pageYear=t.pageYear??t.year,this.pageLocation=t.pageLocation??t.location,this.lastRank=this.sectRank(),this.backfillKit(t);return}let n=e.birthplace??t.pick(dt),r=vt(t,{birthplace:n,name:e.name??`无名`});this.ctx={rng:t,year:this.birthYear,tick:0,actor:r,karmaLedger:[],log:[],flags:new Set,systems:[],eventHistory:new Map,eventCounts:new Map,sequels:[],location:n.name,knowers:[],gacha:Sr()},this.pageYear=this.birthYear,this.pageLocation=n.name,this.milestones.push({year:this.birthYear,kind:`出生`,text:`生于${n.name}，${r.talent.root}`}),this.ctx.flags.add(`出身·${n.id}`),this.ctx.flags.add(`道统·${r.path}`),(r.path===`正道`||r.path===`儒道`)&&this.ctx.flags.add(`宗门弟子`);let i=e.db.events.get(`evt_prologue_${n.id}`);i&&(this.pendingEvent=i,this.currentEpisode=this.newEpisode(),this.beats.push({year:this.birthYear,tier:1,kind:`scene`,text:fi(this.ctx,i),evId:i.id,title:i.title,isMajor:!0,episodeId:this.currentEpisode}))}snapshot(){return this.finished||!this.ctx.actor.alive?null:structuredClone({v:1,seed:this.seed,name:this.ctx.actor.name,rng:this.ctx.rng.snapshot(),year:this.ctx.year,tick:this.ctx.tick,actor:this.ctx.actor,karmaLedger:this.ctx.karmaLedger,flags:[...this.ctx.flags],systems:this.ctx.systems,eventHistory:[...this.ctx.eventHistory.entries()],eventCounts:[...this.ctx.eventCounts.entries()],sequels:this.ctx.sequels??[],location:this.ctx.location,knowers:this.ctx.knowers,milestones:this.milestones,curve:this.curve,beats:this.beats,notices:[...this.notices],pendingEventId:this.pendingEvent?.id??null,chainDepth:this.chainDepth,breakthroughCooldown:this.breakthroughCooldown,lastTags:this.lastTags,stance:this.stance,signInYear:this.signInYear,autoResolve:this.autoResolveMinor,gacha:this.gacha,stipend:this.stipend,itemsEra:1,episodeSeq:this.episodeSeq,currentEpisode:this.currentEpisode,pageYear:this.pageYear,pageLocation:this.pageLocation})}currentPrompt(){return this.finished?{kind:`gameover`,result:this.finished}:this.pendingEvent?{kind:`event`,card:this.pendingEvent,text:fi(this.ctx,this.pendingEvent),choices:pi(this.ctx,this.pendingEvent)}:null}gatherPage(e){let t=Math.max(0,Math.min(e,this.beats.length));return{page:Ki(this.beats.slice(t),this.pendingEvent?.id??null),cursor:this.beats.length}}advance(){if(this.finished)return{kind:`gameover`,result:this.finished};if(this.pendingEvent){let e=this.currentPrompt();if(e)return e}let{ctx:e}=this,t=e.actor;for(;t.alive&&e.tick<this.maxTicks;){e.tick++;let n=u[t.tier]??12,r=n/12;e.year+=r,t.ageMonths+=n;let i=jt(e,this.stance);i.mishap&&this.note(`修炼时气息岔了一下，胸口发闷 —— 走火的前兆。`),i.stageUp&&this.note(`水到渠成，已入${i.stageUp}。`,`milestone`);for(let n of t.souls){if(n.dissipated||n.favor<=-20||n.possession>=90)continue;let r=un(n,t.tier);r.speedBonus>0&&e.rng.chance(.25)&&(dn(e,n.id),t.sublevel=Math.min(1,t.sublevel+.012*r.speedBonus))}let a=ln(e);a&&this.note(a);let o=e.rng.chance(N.eventChance)?si(e,this.db,{excludeTags:this.lastTags}):null;if(o){this.lastTags=o.tags?.slice(0,1)??[];let n=pi(e,o);if(!this.autoResolveMinor||n.length===0||this.isMajor(o,n)){this.pendingEvent=o,this.chainDepth=0,this.pushTransition(o.tags??[],`event`),this.currentEpisode=this.newEpisode();let r=fi(e,o);return this.beats.push({year:Math.floor(e.year),tier:t.tier,kind:`scene`,text:r,evId:o.id,title:o.title,isMajor:o.tags?.includes(`主干`)||o.tags?.includes(`岔路`),episodeId:this.currentEpisode}),{kind:`event`,card:o,text:r,choices:n}}let r=this.autoResolve(o,n);if(r)return r;if(!t.alive)return{kind:`gameover`,result:this.finalize()}}else this.lastTags=[];let s=this.postTick(r);if(s)return s;if(i.ready&&t.tier<10&&this.breakthroughCooldown<=0){let n=pe({power:Nt(t),dc:Mt(t),scale:Math.max(20,Mt(t)*.2)},I(t)),r=me(e.rng,n,I(t));return this.pushTransition([],`breakthrough`),{kind:`breakthrough`,toTier:t.tier+1,estimate:r}}this.breakthroughCooldown>0&&this.breakthroughCooldown--,e.tick%4==0&&this.curve.push(Nn(t,e.tick,e.year))}return{kind:`gameover`,result:this.finalize()}}static MAJOR_TAGS=new Set([`主干`,`岔路`,`道德`,`抉择`,`打脸`,`止步`,`结丹`,`定道`,`系统`,`心魔`]);isMajor(t,n){return!!(t.once||t.tags?.some(t=>e.MAJOR_TAGS.has(t))||n.some(e=>!!e.require)||n.some(e=>Gi(t,e))||n.some(e=>e.karma!==`none`&&typeof e.karma==`object`&&e.karma.weight>=30))}autoResolve(e,t){let{ctx:n}=this,r=e,i=t,a=0;for(;r&&a++<5;){let e=this.newEpisode(),t=fi(n,r);this.beats.push({year:Math.floor(n.year),tier:n.actor.tier,kind:`scene`,text:t,evId:r.id,title:r.title,episodeId:e,auto:!0});let o=i.filter(e=>!Gi(r,e)),s=o.length?o:i,c=s.map((e,t)=>1/(t+1)+.3),l=n.rng.weighted(s,c);this.beats.push({year:Math.floor(n.year),tier:n.actor.tier,kind:`choice`,text:l.text,episodeId:e,auto:!0});let u=gi(n,r,l);if(this.flushItemNotices(),u.text&&this.beats.push({year:Math.floor(n.year),tier:n.actor.tier,kind:`outcome`,text:u.text,episodeId:e,auto:!0}),r=u.goto?this.db.events.get(u.goto)??null:null,!r||(i=pi(n,r),i.length===0))break;if(this.isMajor(r,i)){this.pendingEvent=r,this.chainDepth=a,this.pushTransition(r.tags??[],`event`,!0),this.currentEpisode=this.newEpisode();let e=fi(n,r);return this.beats.push({year:Math.floor(n.year),tier:n.actor.tier,kind:`scene`,text:e,evId:r.id,title:r.title,isMajor:r.tags?.includes(`主干`)||r.tags?.includes(`岔路`),episodeId:this.currentEpisode}),{kind:`event`,card:r,text:e,choices:i}}}return null}captureStats(){let e=this.ctx.actor;return{修为:e.sublevel*100,道心:e.道心,气运:e.气运,功德:e.功德,业障:e.业障,僭越:e.僭越,堕度:e.堕度,丹毒:e.丹毒,名望:e.名望,悟性:e.talent.悟性,根骨:e.talent.根骨,神魂:e.talent.神魂,寿元:e.lifespanYears,功法:e.factors.功法,法宝:e.factors.法宝,状态:e.factors.状态,灵宠:e.factors.灵宠,伙伴:e.factors.伙伴,道侣:e.factors.道侣,情报:e.factors.情报,暴露:Math.max(...Object.values(e.secrets))}}static WARN_KEYS=new Set([`业障`,`僭越`,`堕度`,`丹毒`,`暴露`]);static FACTOR_KEYS=new Set([`功法`,`法宝`,`状态`,`灵宠`,`伙伴`,`道侣`,`情报`]);diffStats(t){let n=this.captureStats(),r=[];for(let i of Object.keys(t)){let a=(n[i]??0)-(t[i]??0),o=e.FACTOR_KEYS.has(i);if(Math.abs(a)<(o?.015:.5))continue;let s=e.WARN_KEYS.has(i)?a>0?`warn`:`good`:a>0?`good`:`bad`,c=o?a>0?`+${a.toFixed(2)}`:a.toFixed(2):i===`修为`?`${a>0?`+`:``}${a.toFixed(1)}%`:`${a>0?`+`:``}${Math.round(a)}`;r.push({key:i,delta:a,kind:s,text:`${i} ${c}`})}return r}choose(e){let t=this.pendingEvent;if(!t)throw Error(`当前没有待处理的事件`);let n=pi(this.ctx,t),r=n[e];if(!r)throw Error(`选项 ${e} 不存在（共 ${n.length} 项）`);this.currentEpisode||=this.newEpisode(),this.beats.push({year:Math.floor(this.ctx.year),tier:this.ctx.actor.tier,kind:`choice`,text:r.text,episodeId:this.currentEpisode});let i=this.captureStats(),a=gi(this.ctx,t,r);if(this.lastOutcome=a.outcome,this.lastDeltas=this.diffStats(i),this.flushItemNotices(),a.karmaCreated){let e=this.ctx.karmaLedger.find(e=>e.id===a.karmaCreated);e&&this.lastDeltas.push({key:`因果`,delta:e.polarity,kind:e.polarity>0?`good`:e.polarity<0?`warn`:`bad`,text:`因果 · ${e.type}`})}if(a.text&&(this.notices.push(a.text),this.beats.push({year:Math.floor(this.ctx.year),tier:this.ctx.actor.tier,kind:`outcome`,text:a.text,episodeId:this.currentEpisode})),(t.tags?.includes(`岔路`)||t.tags?.includes(`主干`))&&this.milestones.push({year:Math.floor(this.ctx.year),kind:`岔路`,text:`【${t.title}】`}),a.goto&&this.chainDepth<4){let e=this.db.events.get(a.goto);if(e){this.chainDepth++,this.pendingEvent=e;let t=pi(this.ctx,e);if(t.length>0){this.pushTransition(e.tags??[],`event`,!0),this.currentEpisode=this.newEpisode();let n=fi(this.ctx,e);return this.beats.push({year:Math.floor(this.ctx.year),tier:this.ctx.actor.tier,kind:`scene`,text:n,evId:e.id,title:e.title,isMajor:e.tags?.includes(`主干`)||e.tags?.includes(`岔路`),episodeId:this.currentEpisode}),{kind:`event`,card:e,text:n,choices:t}}}}if(this.pendingEvent=null,this.currentEpisode=0,!this.ctx.actor.alive)return{kind:`gameover`,result:this.finalize()};if(this.ctx.flags.has(`止步`)&&Mn(this.ctx.actor))return this.steppedDown=!0,this.milestones.push({year:Math.floor(this.ctx.year),kind:`结局`,text:`止步 —— 不再求进`}),{kind:`gameover`,result:this.finalize()};let o=u[this.ctx.actor.tier]??12;return this.postTick(o/12)||this.advance()}decideBreakthrough(e,t=!1){let n=this.ctx.actor;if(this.lastBreakthrough=null,!e)return this.breakthroughCooldown=6,this.note(`你压下了冲关的念头，继续温养。`),this.advance();let r=n.tier,i=Pt(this.ctx,{hiddenAttempt:t,coreGradeInvest:this.ctx.flags.has(`结丹·全押`)?.85:.4});if(i.newTier>r){Ht(this.ctx);let e=U(n.path,i.newTier),t=i.newTier===3?bt[n.path]===e?St(i.goldenCoreGrade):xt(n.path,i.goldenCoreGrade):``;this.milestones.push({year:Math.floor(this.ctx.year),kind:`突破`,text:`入${e}${i.hiddenAchieved?`（得隐藏境界）`:``}${t?` · ${t}`:``}`}),this.notices.push(`突破成功 —— ${e}。${i.hiddenAchieved?`而且你摸到了传说里的那一层。`:``}`),this.lastBreakthrough={ok:!0,name:e,hidden:i.hiddenAchieved},this.beats.push({year:Math.floor(this.ctx.year),tier:n.tier,kind:`milestone`,isMajor:!0,title:`入${e}`,text:`入${e}${i.hiddenAchieved?`，且踏足了世所罕闻的隐秘之境`:``}${t?`，结成${t}`:``}`})}else if(i.failure){this.milestones.push({year:Math.floor(this.ctx.year),kind:`突破`,text:`渡劫失败 · ${i.failure.name}`});let e=Dn(i.failure.outcome,n.path);if(this.note(`突破失败 —— ${e}`),i.failure.recoverable===!1||i.failure.branch)return this.failedBranch={name:i.failure.name,outcome:e,branch:i.failure.branch},n.alive=!1,{kind:`gameover`,result:this.finalize()}}else this.note(`冲关未成，气机散了。所幸根基未损，还能再来。`);return this.advance()}signIn(){if(!this.ctx.systems.includes(`签到`))return{ok:!1,text:`未绑定签到系统`};let e=Math.floor(this.ctx.year);if(e<=this.signInYear)return{ok:!1,text:`今岁已签，明年再来`};this.signInYear=e;let t=this.ctx.actor,n=this.ctx.rng.pick([{text:`灵气灌顶 · 修为 +2%`,apply:()=>{t.sublevel=Math.min(1,t.sublevel+.02)}},{text:`残页功法一篇 · 功法 +0.02`,apply:()=>{t.factors.功法=Math.min(1.9,t.factors.功法+.02)}},{text:`下品法器一件 · 法宝 +0.02`,apply:()=>{t.factors.法宝=Math.min(1.75,t.factors.法宝+.02)}},{text:`疗伤玉露 · 状态 +0.06`,apply:()=>{t.factors.状态=Math.min(1.45,t.factors.状态+.06)}},{text:`静心符一道 · 道心 +1`,apply:()=>{t.道心=Math.min(100,t.道心+1)}},{text:`一点玄妙气机 · 气运 +1`,apply:()=>{t.气运=Math.min(100,t.气运+1)}}]);return n.apply(),t.僭越+=1.5,t.secrets.金手指=Math.min(100,t.secrets.金手指+1.5),this.note(`【签到系统】叮 —— 连续签到中。今日奖励：${n.text}。`),{ok:!0,text:n.text}}systemDef(e){return this.db.systems.get(e)}availablePools(){return Fr.filter(e=>Ir[e.id]?.cond(this.ctx.actor.tier,this.ctx.flags)??!0)}poolCost(e){return Ir[e]?.cost(this.ctx.flags)??null}poolInfo(e){let t=Fr.find(t=>t.id===e),n=Ir[e];if(!t)return null;let r=n?.cost(this.ctx.flags)??{},i=n?Cr(this.ctx.actor,r):[];return{odds:kr(this.ctx.actor,t,this.gacha),pityLeft:Ar(t,this.gacha),count:this.gacha.count[e]??0,costText:Tr(r),affordable:i.length===0,missing:i,hint:n?.hint??``}}tryDrawFrom(e){let t=Fr.find(t=>t.id===e),n=Ir[e];if(!t||!n)return{ok:!1,missing:[],reason:`没有「${e}」这座签筒`};if(!n.cond(this.ctx.actor.tier,this.ctx.flags)){let e={kind:`locked`,label:t.name,need:0,have:0,text:`${t.name}尚未对你开放`};return{ok:!1,missing:[e],reason:e.text}}let r=n.cost(this.ctx.flags),i=wr(this.ctx.actor,r);if(i.length)return{ok:!1,missing:i,reason:`代价不足 —— ${i.map(e=>e.text).join(`；`)}`};let a=this.captureStats();Hr(this.ctx,[...r.effects??[]]);let o=Or(this.ctx.rng,this.ctx.actor,t,this.gacha);Hr(this.ctx,o.prize.effects),this.lastDeltas=this.diffStats(a);let s=o.rarity===`秘藏`?`★`:o.rarity===`仙品`?`☆`:``;return this.note(`【${t.name}】${s}${o.rarity}·${o.prize.name} —— ${o.prize.desc}`),this.flushItemNotices(),o.byPity&&this.note(`（连番落空之后，天道似乎补了你一次。）`),{ok:!0,result:o,missing:[]}}drawFrom(e){return this.tryDrawFrom(e).result??null}inventory(){return H(this.ctx.actor)}bag(){return Je(this.inventory())}bagSlots(){let e=this.inventory();return{used:Ke(e),total:Ge(e),free:qe(e),container:e.container}}stones(){return ct(this.inventory())}useItem(e){let t=this.captureStats(),n=V(e)?.name??e,r=tt(this.ctx.actor,e);if(!r.ok)return{ok:!1,text:r.reason??`用不了${n}`};for(let e of r.effects)Vr(this.ctx,e);this.lastDeltas=this.diffStats(t);let i=r.note??`用掉了${n}`;return this.note(i),this.flushItemNotices(),{ok:!0,text:i}}equipItem(e){let t=this.captureStats(),n=V(e)?.name??e,r=it(this.ctx.actor,e);if(!r.ok)return{ok:!1,text:r.reason??`佩不上${n}`};r.overTier&&vn(this.ctx),this.lastDeltas=this.diffStats(t);let i=`佩上${n}（${r.slot}位）${r.overTier?` —— 越阶用宝，藏不住了`:``}`;return this.note(i),this.flushItemNotices(),{ok:!0,text:i}}unequipItem(e){let t=this.captureStats(),n=V(e)?.name??e,r=ot(this.ctx.actor,e);return r.ok?(this.lastDeltas=this.diffStats(t),this.flushItemNotices(),{ok:!0,text:`卸下${n}（${r.slot}位）`}):{ok:!1,text:r.reason??`${n}没佩在身上`}}sectStatus(){let e=this.sectRank();return{rank:e,monthly:e?Math.round(this.monthlyStipend(e)*10)/10:0,merit:this.stipend.merit,onDuty:this.stipend.dutyLeft>0,suspended:this.stipend.suspended>0,missed:this.stipend.missed,paidTotal:this.stipend.paidTotal,arrears:this.stipend.arrears}}sectRank(){let e=this.ctx.flags;if(e.has(`已建宗`))return`掌门`;if(!e.has(`宗门弟子`)||e.has(`叛出宗门`)||e.has(`叛出山门`)||e.has(`宗门·已除名`)||e.has(`宗门·已离山`))return null;let t=this.ctx.actor.tier,n=t>=5?4:t>=4?3:t>=3?2:+(t>=2);return e.has(`位列长老`)&&(n=Math.max(n,4)),(e.has(`掌刑堂`)||e.has(`兼任丹房执事`))&&(n=Math.max(n,3)),e.has(`得见一式真传`)&&(n=Math.max(n,2)),e.has(`师承已定`)&&(n=Math.max(n,1)),n=F(n+this.stipend.promotions,0,Ji.length-1),Ji[n]}monthlyStipend(e){let t=F(1+this.ctx.actor.名望/500,.8,1.35),n=F(1+this.stipend.merit/180,.7,1.3);return qi[e].monthly*t*n}grantStones(e){let t=this.inventory(),n=Math.floor(Math.max(0,e));if(n<=0)return 0;let r=st(t),i=0;for(let e of[`下品`,`中品`,`上品`])r[e]<=0||(i+=r[e]*P[e],Qe(t,Ve[e],r[e]));let a=i+n,o=0;for(let e of[`上品`,`中品`,`下品`]){if(a<=0)break;let n=P[e],r=Math.floor(a/n);if(r<=0)continue;let i=Ze(t,Ve[e],r);o+=i.added*n,a-=i.added*n}return Math.max(0,o-i)}consumeSectMarks(){let e=this.ctx.flags,t=this.stipend,n=()=>{t.dutyLeft=0,e.delete(`宗门·当值`)},r=e=>{t.merit=F(t.merit+e,Z.meritMin,Z.meritMax)};e.delete(`宗门·当值·已了`)&&(n(),r(8),t.missed=Math.max(0,t.missed-1),this.ctx.actor.sublevel=Math.max(0,this.ctx.actor.sublevel-Z.dutyCost)),e.delete(`宗门·当值·推了`)&&(n(),r(-10),t.missed++),e.delete(`宗门·记功`)&&r(6),e.delete(`宗门·记过`)&&r(-8),e.delete(`宗门·晋阶`)&&(t.promotions=Math.min(2,t.promotions+1)),e.delete(`宗门·降等`)&&(t.promotions=Math.max(-4,t.promotions-1)),e.delete(`宗门·请辞`)&&(e.add(`宗门·已离山`),n(),t.accruedMonths=0,this.note(`你把腰牌还了。执事堂的册子上划掉一个名字，笔都没抬一下 —— 从此没人管你，也没人给你发钱。`),this.milestones.push({year:Math.floor(this.ctx.year),kind:`岔路`,text:`自请离山，从此散修`})),e.delete(`宗门·复籍`)&&(e.add(`宗门弟子`),e.delete(`宗门·已除名`),e.delete(`宗门·已离山`),e.delete(`宗门·停俸`),t.missed=0,t.suspended=0,t.merit=0,t.accruedMonths=0,this.note(`腰牌重新发回你手上，还是旧的那一块，边角被人摩得发亮。俸禄从这个月起照发。`)),t.missed>=Z.dismissAt?this.dismiss():t.missed>=Z.suspendAt&&t.suspended===0&&(t.suspended=Z.suspendTicks,t.accruedMonths=0,e.add(`宗门·停俸`),this.note(`执事堂把你的名字从发俸的册子上暂时划了出去 —— 「什么时候出满了工，什么时候再说。」`))}dismiss(){let e=this.stipend,t=this.ctx.flags;e.missed=2,e.suspended=0,t.delete(`宗门·停俸`);let n=this.sectRank();if(n!==`掌门`&&n!==null){if(n!==`外门`){e.promotions=Math.max(-4,e.promotions-1),this.note(`执事堂当众念了你的名字：误工太多，免去${n}之职，退回下一等再看。`),this.milestones.push({year:Math.floor(this.ctx.year),kind:`因果`,text:`免职 · 自${n}退下`});return}t.delete(`宗门弟子`),t.add(`宗门·已除名`),e.dutyLeft=0,t.delete(`宗门·当值`),e.accruedMonths=0,this.note(`你的名字从外门册子上被墨笔涂掉了。腰牌收回，山门以内不必再来 —— 俸禄自然也没有了。`),this.milestones.push({year:Math.floor(this.ctx.year),kind:`因果`,text:`除名 · 逐出山门`})}}tickDuty(e){let t=this.stipend,n=this.ctx.flags;if(t.dutyLeft>0){if(t.dutyLeft--,t.dutyLeft>0)return;n.delete(`宗门·当值`),t.merit=F(t.merit+2,Z.meritMin,Z.meritMax),this.ctx.actor.sublevel=Math.max(0,this.ctx.actor.sublevel-Z.dutyCost),this.noticeOnly(`这一档差事你按部就班地当完了，无事可记 —— 只是那些时辰没能用来打坐。`);return}this.ctx.tick%qi[e].dutyEvery===0&&(t.dutyLeft=qi[e].patience,n.add(`宗门·当值`),this.noticeOnly(`【当值】排班簿上写了你的名字：${qi[e].duty}。`))}tickStipend(e){let t=this.stipend,n=this.ctx.flags;this.consumeSectMarks();let r=this.sectRank();if(r!==this.lastRank&&(r&&this.lastRank?this.note(`执事堂改了你的名牌 —— 自今日起，你是${r}。`):r&&this.note(`你的名字进了${r}的册子。往后每月有俸，也每月有差事。`),this.lastRank=r),!r){t.dutyLeft=0,t.accruedMonths=0,n.delete(`宗门·当值`),n.delete(`宗门·停俸`);for(let e of Ji)n.delete(`身份·${e}`);n.delete(`身份·掌门`),n.delete(`宗门·在册`);return}n.add(`宗门·在册`);for(let e of Ji)e!==r&&n.delete(`身份·${e}`);if(r!==`掌门`&&n.delete(`身份·掌门`),n.add(`身份·${r}`),t.suspended>0&&(t.suspended--,t.suspended===0&&(n.delete(`宗门·停俸`),this.note(`名字又写回了发俸的册子上。经手的执事没抬头：「下不为例。」`))),this.tickDuty(r),t.suspended>0||(t.accruedMonths+=Math.min(e,Z.paidMonthsCap),t.accruedMonths<Z.payEveryMonths))return;let i=t.accruedMonths;t.accruedMonths=0;let a=this.monthlyStipend(r),o=Math.floor(a*i)+t.arrears;if(o<=0)return;let s=this.grantStones(o);if(t.paidTotal+=s,t.arrears=Math.min(o-s,Math.floor(a*Z.arrearsMonthsCap)),s>0){let e=Math.round(i/12);this.noticeOnly(`【俸禄】领了${e<=1?`这一年`:`这${e}年`}的例俸，共 ${s} 块下品灵石之数。`)}t.arrears>0&&this.noticeOnly(`行囊塞不下，余下的先记在执事堂的账上 —— 腾出手了再来支。`)}backfillKit(e){if(e.itemsEra===1)return;let t=H(this.ctx.actor);if(t.stacks.length>0)return;let n=ft[[...this.ctx.flags].find(e=>e.startsWith(`出身·`))?.slice(3)??dt.find(e=>e.name===this.ctx.location)?.id??``]??pt,r=[];for(let[e,i]of n){let n=Ze(t,e,i);n.added>0&&r.push(`${V(e)?.name??e}×${n.added}`)}for(let e of[...t.stacks]){let t=V(e.defId);t?.equip&&!e.equipped&&it(this.ctx.actor,t.id)}let i=this.sectRank(),a=Yi[this.ctx.actor.tier]??0,o=i?Math.floor(this.monthlyStipend(i)*Z.backPayMonths):0,s=this.grantStones(a+o);s>0&&(this.stipend.paidTotal+=o>0?Math.min(s,o):0,r.push(`折合下品灵石 ${s}`)),this.note(`【行囊补记】你解下包袱才发现，这些年随身的东西一件都不在 —— 不是被人偷了，是先前记账的人漏了你这一囊：${r.join(`、`)}${i?`（其中含${i}的欠俸 ${o} 块）`:``}。旧存档开局时物品尚未入册，这一份是补给你的。`)}postTick(e){let{ctx:t}=this,n=t.actor;this.tickStipend(Math.round(e*12));let r=Rt(t);r&&(this.note(r),t.rng.chance(.4)&&zt(t));let i=Bt(t);i&&(this.note(i.text),this.milestones.push({year:Math.floor(t.year),kind:`机缘`,text:`身世揭晓：${i.origin}`}));for(let{soul:e,fate:n}of fn(t))this.milestones.push({year:Math.floor(t.year),kind:`因果`,text:`${e.name} · ${n}`}),this.note(`${e.name} —— ${n}。`);if(!n.alive)return{kind:`gameover`,result:this.finalize()};yn(t),Tn(t),n.锋芒=_e(n)*(.15+.85*(n.secrets.真实修为/100));let a=bn(t);if(a.length){this.milestones.push({year:Math.floor(t.year),kind:`因果`,text:`秘密败露：${a.join(`、`)}`}),this.note(`瞒不住了 —— 你的${a.join(`、`)}已是公开的秘密。`);for(let e of a)n.secrets[e]=70;n.名望-=10}for(let n of en(t,e)){if(n.kind===`foreshadow`||n.kind===`window`){this.note(`（${n.evtId.replace(/_/g,` `)}）`);continue}if(!n.lethal)continue;let e=Kt(t,n.karma);if(this.note(e.text),e.death)return this.death=sn(t,e.death),this.milestones.push({year:Math.floor(t.year),kind:`死亡`,text:e.death.description}),{kind:`gameover`,result:this.finalize()};this.milestones.push({year:Math.floor(t.year),kind:`因果`,text:`${n.karma.target}的旧账 —— ${e.kind}`})}let o=cn(t);return o?(this.death=sn(t,o),this.milestones.push({year:Math.floor(t.year),kind:`死亡`,text:o.description}),{kind:`gameover`,result:this.finalize()}):null}finalize(){if(this.finished)return this.finished;let{ctx:e}=this,t=e.actor;t.perfectionByTier[t.tier]||(t.perfectionByTier[t.tier]=Ft(t,t.hiddenRealms.includes(t.tier))),this.curve.push(Nn(t,e.tick,e.year));let n=An({actor:t,death:this.death,steppedDown:this.steppedDown,rootedAt:e.location,failedBranch:this.failedBranch});this.milestones.push({year:Math.floor(e.year),kind:`结局`,text:n.name});let r=In({actor:t,ledger:e.karmaLedger,milestones:this.milestones,curve:this.curve,flags:e.flags,death:this.death,ending:n,diedAtYear:e.year,seed:this.seed}),i=Yn({actor:t,ledger:e.karmaLedger,ending:n,seed:this.seed,serialIndex:this.registry.steleCount+1,birthYear:this.birthYear,diedAtYear:e.year,goldFingers:[...e.systems,...t.souls.map(e=>e.name)],verdictShort:Lt(It(t))}),a=jn(t,n,{noSystem:e.flags.has(`无系统`)});er(this.registry,{actor:t,ending:n,stele:i,place:e.location,signature:this.signature(),unfinished:r.unfinished,relics:this.relics(),daoFruit:a});for(let t of e.systems)this.registry.unlockedSystems.includes(t)||this.registry.unlockedSystems.push(t);let o=Vi({daoName:t.name,seed:this.seed,beats:this.beats,chronicle:r,stele:i,signature:this.signature()});return this.finished={ending:n,chronicle:r,stele:i,daoFruit:a,novel:o,novelChars:Hi(o)},this.finished}signature(){let e=this.ctx.flags;return e.has(`道·剑`)?`挡我者，斩。`:e.has(`道·丹`)?`我要救的人，一个都不能少。`:e.has(`道·苟`)?`谁都可以死，我不行。`:e.has(`道·杀`)?`这世道就是这样，我认。`:e.has(`无系统`)?`我什么都没有。所以我什么都不欠。`:e.has(`拒绝过系统`)?`那东西认的不是我，是「载体」。`:`后生，老夫观你骨骼清奇。`}relics(){let e=[],t=this.ctx.actor;return t.factors.法宝>1.1&&e.push(`一件养过手的法宝`),t.factors.功法>1.2&&e.push(`半部残缺功法`),t.tier>=3&&e.push(`一枚认过主的储物戒`),this.ctx.systems.length&&e.push(`一枚温热的青玉简`),t.goldenCoreGrade>=7&&e.push(`一颗${xt(t.path,t.goldenCoreGrade)}`),e}},Qi=class extends Error{};function $i(){return{events:new Map,systems:new Map,souls:new Map,locations:new Map,items:new Map}}function ea(e,t,n){if(!n||typeof n!=`object`)return;let r=n,i=(e,n,r)=>{for(let i of e??[]){if(!i?.id)throw new Qi(`${t} 存在缺少 id 的${r}`);if(n.has(i.id))throw new Qi(`${t} ${r} id 重复：${i.id}`);n.set(i.id,i)}};i(r.events,e.events,`事件`),i(r.systems,e.systems,`系统`),i(r.souls,e.souls,`残魂`),i(r.locations,e.locations,`地点`);for(let n of r.items??[]){if(!n?.id)throw new Qi(`${t} 存在缺少 id 的物品`);if(e.items.has(n.id))throw new Qi(`${t} 物品 id 重复：${n.id}`);try{e.items.set(n.id,Fe(n))}catch(e){throw new Qi(`${t} 物品 '${n.id}' 不合法：${e.message}`)}}}function ta(e){let t=$i();for(let{path:n,doc:r}of e)ea(t,n,r);return t}var Q={status:`loading`,done:0,total:0,db:null,error:null},na=new Set;function ra(){for(let e of na)e(Q)}function ia(e){Q={...Q,...e},ra()}function aa(){return Q}function oa(e){return na.add(e),e(Q),()=>void na.delete(e)}var sa=new Map,ca=new Map,la=new Map,ua=null,da=null;function fa(){let e=0;for(let t of sa.values())e+=t;ia({done:Q.total>0&&e>Q.total?Q.total:e})}function pa(e){return e instanceof Error?e.message:String(e)}async function ma(e){let t=`${e}content/manifest.json`,n;try{n=await fetch(t)}catch(e){throw Error(`取不到内容清单（${pa(e)}）`)}if(!n.ok)throw Error(`取不到内容清单（HTTP ${n.status}）`);let r=await n.json();if(!Array.isArray(r.chunks)||r.chunks.length===0)throw Error(`内容清单为空`);return r}async function ha(e,t){let n=`${e}content/${t.file}`,r;try{r=await fetch(n)}catch(e){throw Error(`「${t.label}」下载失败（${pa(e)}）`)}if(!r.ok)throw Error(`「${t.label}」下载失败（HTTP ${r.status}）`);let i,a=r.body;if(!a)i=await r.text(),sa.set(t.file,t.bytes),fa();else{let e=a.getReader(),n=[],r=0;for(;;){let{done:i,value:a}=await e.read();if(i)break;a&&(n.push(a),r+=a.byteLength,sa.set(t.file,r),fa())}let o=new Uint8Array(r),s=0;for(let e of n)o.set(e,s),s+=e.byteLength;i=new TextDecoder().decode(o)}let o=JSON.parse(i);if(o.id!==t.id)throw Error(`分片 ${t.file} 内容对不上（${o.id} ≠ ${t.id}）`);return sa.set(t.file,t.bytes),fa(),o.docs}async function ga(){let e=`/cangfeng-play/`;ua??=await ma(e);let t=ua;Q.total!==t.totalBytes&&ia({total:t.totalBytes});let n=ta((await Promise.all(t.chunks.map(t=>{let n=ca.get(t.file);if(n)return Promise.resolve(n);let r=la.get(t.file);return r||(r=ha(e,t).then(e=>(ca.set(t.file,e),la.delete(t.file),e)),r.catch(()=>{la.delete(t.file),sa.delete(t.file),fa()}),la.set(t.file,r)),r}))).flat());return ze(n.items.values()),n}function _a(){return Q.db?Promise.resolve(Q.db):(da??=ga().then(e=>(da=null,ia({status:`ready`,db:e,error:null,done:Q.total}),e),e=>{throw da=null,ia({status:`error`,error:pa(e)}),e}),da)}function va(){Q.db||(ia({status:`loading`,error:null}),_a().catch(()=>{}))}_a().catch(()=>{});function ya(){return{version:1,registry:Qn(),steles:[]}}function ba(e){if(!e)return ya();try{let t=JSON.parse(e);return t.version!==1||!t.registry||!Array.isArray(t.steles)?ya():t}catch{return ya()}}function xa(e){let t={};for(let n of e.steles)t[n.grade]=(t[n.grade]??0)+1;return t}var Sa=`cangfeng-save-v1`;function Ca(){try{return ba(localStorage.getItem(Sa))}catch{return ya()}}function wa(e){try{localStorage.setItem(Sa,JSON.stringify(e))}catch{}}var Ta=`cangfeng-run-v1`;function Ea(e,t){try{localStorage.setItem(Ta,JSON.stringify({snap:e,pov:t,savedAt:Date.now()}))}catch{}}function Da(e){let t=e?.snap;return!t||t.v!==1||!t.actor||typeof t.actor!=`object`||!t.rng||typeof t.rng.state!=`number`||!Array.isArray(t.flags)||!Array.isArray(t.beats)?!1:typeof t.seed==`string`&&typeof t.tick==`number`}function Oa(){try{let e=localStorage.getItem(Ta);if(!e)return null;let t=JSON.parse(e);return Da(t)?t:null}catch{return null}}function ka(){localStorage.removeItem(Ta)}var Aa=`<svg viewBox="0 0 390 420" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="cov_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15"/>
      <stop offset="0.42" stop-color="#101624"/>
      <stop offset="0.78" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="cov_dawn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0"/>
      <stop offset="0.62" stop-color="#d9b36a" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0.3"/>
    </linearGradient>
    <radialGradient id="cov_halo" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.3"/>
      <stop offset="0.45" stop-color="#f2d795" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cov_moon" cx="0.42" cy="0.38" r="0.72">
      <stop offset="0" stop-color="#f7ecc9"/>
      <stop offset="0.55" stop-color="#f2d795"/>
      <stop offset="1" stop-color="#d9b36a"/>
    </radialGradient>
    <linearGradient id="cov_m1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#33405a"/>
      <stop offset="1" stop-color="#253048"/>
    </linearGradient>
    <linearGradient id="cov_m2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#253048"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="cov_m3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="cov_m4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="cov_m5" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <radialGradient id="cov_mist" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#9fb0c8" stop-opacity="0.11"/>
      <stop offset="0.7" stop-color="#9fb0c8" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#9fb0c8" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect x="0" y="0" width="390" height="420" fill="url(#cov_sky)"/>

  <g>
    <circle cx="24" cy="36" r="1" fill="#f2d795" opacity="0.7"/>
    <circle cx="58" cy="120" r="0.7" fill="#e7e0cf" opacity="0.5"/>
    <circle cx="90" cy="58" r="0.8" fill="#f2d795" opacity="0.55"/>
    <circle cx="128" cy="158" r="0.9" fill="#f2d795" opacity="0.6"/>
    <circle cx="166" cy="118" r="0.7" fill="#e7e0cf" opacity="0.5"/>
    <circle cx="206" cy="64" r="1.1" fill="#f2d795" opacity="0.65"/>
    <circle cx="238" cy="150" r="0.8" fill="#e7e0cf" opacity="0.55"/>
    <circle cx="256" cy="32" r="0.7" fill="#f2d795" opacity="0.5"/>
    <circle cx="348" cy="44" r="1" fill="#f2d795" opacity="0.7"/>
    <circle cx="368" cy="132" r="0.8" fill="#e7e0cf" opacity="0.5"/>
    <circle cx="20" cy="176" r="0.7" fill="#f2d795" opacity="0.45"/>
    <circle cx="74" cy="182" r="1.1" fill="#f2d795" opacity="0.6"/>
    <circle cx="300" cy="178" r="0.9" fill="#e7e0cf" opacity="0.55"/>
    <circle cx="338" cy="168" r="0.7" fill="#f2d795" opacity="0.45"/>
    <circle cx="150" cy="190" r="0.9" fill="#7fd4b2" opacity="0.5"/>
  </g>

  <circle cx="300" cy="96" r="62" fill="url(#cov_halo)"/>
  <circle cx="300" cy="96" r="21" fill="url(#cov_moon)"/>

  <rect x="0" y="190" width="390" height="48" fill="url(#cov_dawn)"/>

  <path d="M0,240 Q28,218 60,230 Q95,206 130,224 Q165,200 200,218 Q235,204 262,220 Q300,202 330,222 Q362,212 390,228 L390,420 L0,420 Z" fill="url(#cov_m1)"/>

  <path d="M0,290 Q35,258 75,276 Q115,250 155,270 Q195,246 240,268 Q280,252 320,272 Q355,258 390,276 L390,420 L0,420 Z" fill="url(#cov_m2)"/>

  <ellipse cx="110" cy="290" rx="145" ry="10" fill="url(#cov_mist)"/>
  <ellipse cx="310" cy="282" rx="110" ry="8" fill="url(#cov_mist)"/>

  <path d="M0,330 Q40,306 80,320 Q112,300 134,276 Q147,252 152,246 Q157,252 172,282 Q198,306 235,318 Q275,298 315,316 Q350,304 390,320 L390,420 L0,420 Z" fill="url(#cov_m3)"/>

  <g fill="#0a0e15">
    <circle cx="152" cy="236.8" r="1.6"/>
    <path d="M150.9,238.6 Q150,242.4 149,246.4 L155,246.4 Q154.1,242.4 153.1,238.6 Z"/>
    <path d="M155.2,238.2 L156.4,246.4 L155.6,246.4 L154.6,238.6 Z"/>
  </g>

  <ellipse cx="190" cy="330" rx="160" ry="10" fill="url(#cov_mist)"/>

  <path d="M0,376 Q50,348 100,364 Q150,342 205,362 Q255,344 305,360 Q350,348 390,362 L390,420 L0,420 Z" fill="url(#cov_m4)"/>

  <ellipse cx="180" cy="374" rx="175" ry="11" fill="url(#cov_mist)"/>

  <path d="M0,404 Q60,388 130,400 Q210,386 280,398 Q340,388 390,398 L390,420 L0,420 Z" fill="url(#cov_m5)"/>
</svg>`,ja=`<svg viewBox="0 0 390 80" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="cov_b_r1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="cov_b_r2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <radialGradient id="cov_b_mist" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#9fb0c8" stop-opacity="0.09"/>
      <stop offset="1" stop-color="#9fb0c8" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <circle cx="52" cy="16" r="0.8" fill="#f2d795" opacity="0.45"/>
  <circle cx="212" cy="10" r="0.7" fill="#e7e0cf" opacity="0.4"/>
  <circle cx="336" cy="20" r="0.9" fill="#f2d795" opacity="0.5"/>

  <path d="M0,46 Q60,34 120,44 Q190,28 250,42 Q320,32 390,44 L390,80 L0,80 Z" fill="url(#cov_b_r1)"/>
  <path d="M0,46 Q60,34 120,44 Q190,28 250,42 Q320,32 390,44" fill="none" stroke="#d9b36a" stroke-width="0.8" stroke-opacity="0.16"/>

  <ellipse cx="195" cy="46" rx="185" ry="9" fill="url(#cov_b_mist)"/>

  <path d="M0,62 Q80,52 160,60 Q250,50 320,58 Q360,54 390,60 L390,80 L0,80 Z" fill="url(#cov_b_r2)"/>
</svg>`,Ma={tianshu:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_tianshu_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="0.7" stop-color="#131a28"/><stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="bp_tianshu_glow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.55"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_tianshu_sky)"/>
  <circle cx="30" cy="18" r="0.9" fill="#f2d795" opacity="0.5"/>
  <circle cx="74" cy="10" r="0.7" fill="#f2d795" opacity="0.38"/>
  <circle cx="132" cy="8" r="0.6" fill="#f2d795" opacity="0.32"/>
  <circle cx="205" cy="14" r="0.9" fill="#f2d795" opacity="0.46"/>
  <circle cx="178" cy="26" r="0.6" fill="#f2d795" opacity="0.3"/>
  <path d="M0,70 L34,54 L62,66 L96,50 L128,63 L168,52 L204,64 L240,56 L240,110 L0,110 Z" fill="#2e3b52"/>
  <path d="M0,110 L0,82 L20,82 L20,74 L34,74 L34,82 L56,82 L56,66 L52,66 L65,53 L78,66 L74,66 L74,82 L100,82 L100,72 L118,72 L118,82 L148,82 L148,62 L144,62 L157,46 L170,62 L166,62 L166,82 L196,82 L196,75 L214,75 L214,82 L240,82 L240,110 Z" fill="#253048"/>
  <path d="M0,110 L0,93 L28,93 L34,87 L58,87 L64,93 L108,93 L114,85 L146,85 L152,93 L198,93 L204,88 L240,88 L240,110 Z" fill="#131a28"/>
  <circle cx="130" cy="90" r="9" fill="url(#bp_tianshu_glow)"/>
  <circle cx="130" cy="90" r="1.5" fill="#f2d795"/>
  <path d="M0,110 L0,102 Q60,97 120,101 Q180,105 240,100 L240,110 Z" fill="#0d1117"/>
</svg>`,yaowang:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_yaowang_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1c2740"/>
    </linearGradient>
    <radialGradient id="bp_yaowang_moonglow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.3"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_yaowang_sky)"/>
  <circle cx="38" cy="14" r="0.8" fill="#f2d795" opacity="0.42"/>
  <circle cx="96" cy="10" r="0.6" fill="#f2d795" opacity="0.34"/>
  <circle cx="130" cy="22" r="0.7" fill="#f2d795" opacity="0.38"/>
  <circle cx="206" cy="12" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="163" cy="26" r="15" fill="url(#bp_yaowang_moonglow)"/>
  <path d="M163.5,18.2 A9,9 0 0 0 163.5,33.8 Q160.5,26 163.5,18.2 Z" fill="#f2d795" opacity="0.95"/>
  <path d="M55,110 L55,70 L92,52 L122,62 L152,48 L188,64 L188,110 Z" fill="#2e3b52"/>
  <path d="M0,110 L0,16 Q34,34 62,62 Q84,84 108,98 L108,110 Z" fill="#1a2334"/>
  <path d="M240,110 L240,26 Q210,42 184,66 Q162,86 140,99 L140,110 Z" fill="#1a2334"/>
  <path d="M0,110 L0,104 Q120,88 240,102 L240,110 Z" fill="#131a28"/>
  <path d="M90,97 Q124,91 156,96" fill="none" stroke="#7fd4b2" stroke-width="0.8" opacity="0.22"/>
  <path d="M78,101 Q120,93 168,100" fill="none" stroke="#7fd4b2" stroke-width="0.8" opacity="0.18"/>
  <path d="M64,105 Q120,97 180,104" fill="none" stroke="#2e3b52" stroke-width="0.9" opacity="0.8"/>
</svg>`,huoshan:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_huoshan_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="bp_huoshan_lava">
      <stop offset="0" stop-color="#e8794a" stop-opacity="0.9"/><stop offset="0.55" stop-color="#b3532f" stop-opacity="0.5"/><stop offset="1" stop-color="#b3532f" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_huoshan_sky)"/>
  <circle cx="34" cy="16" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="66" cy="30" r="0.6" fill="#f2d795" opacity="0.3"/>
  <circle cx="196" cy="18" r="0.8" fill="#f2d795" opacity="0.42"/>
  <circle cx="222" cy="34" r="0.6" fill="#f2d795" opacity="0.3"/>
  <path d="M0,86 L48,72 L92,80 L150,70 L200,80 L240,74 L240,110 L0,110 Z" fill="#2e3b52"/>
  <ellipse cx="116" cy="41" rx="14" ry="7" fill="url(#bp_huoshan_lava)"/>
  <path d="M62,110 L102,46 L108,40 L113,44 L119,44 L124,38 L131,46 L178,110 Z" fill="#131a28"/>
  <path d="M104,45 L108,41 L113,44.5 L119,44.5 L124,39" fill="none" stroke="#e07048" stroke-width="1" opacity="0.85"/>
  <circle cx="114" cy="28" r="1" fill="#e8794a" opacity="0.9"/>
  <circle cx="121" cy="20" r="0.8" fill="#e8965a" opacity="0.7"/>
  <circle cx="110" cy="13" r="0.6" fill="#e8965a" opacity="0.5"/>
  <path d="M0,110 L0,74 Q36,66 78,92 L98,110 Z" fill="#253048"/>
  <path d="M240,110 L240,80 Q206,72 172,94 L160,110 Z" fill="#253048"/>
  <path d="M0,110 L0,100 Q120,92 240,101 L240,110 Z" fill="#0d1117"/>
</svg>`,jianzhong:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_jianzhong_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#182132"/>
    </linearGradient>
    <radialGradient id="bp_jianzhong_moon">
      <stop offset="0" stop-color="#fbf3dd"/><stop offset="0.6" stop-color="#f2d795"/><stop offset="1" stop-color="#e6c684"/>
    </radialGradient>
    <radialGradient id="bp_jianzhong_moonglow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.28"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_jianzhong_sky)"/>
  <circle cx="36" cy="14" r="0.7" fill="#f2d795" opacity="0.36"/>
  <circle cx="150" cy="20" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="216" cy="14" r="0.7" fill="#f2d795" opacity="0.36"/>
  <circle cx="188" cy="34" r="0.5" fill="#f2d795" opacity="0.28"/>
  <circle cx="96" cy="22" r="16" fill="url(#bp_jianzhong_moonglow)"/>
  <circle cx="96" cy="22" r="7.5" fill="url(#bp_jianzhong_moon)"/>
  <path d="M0,110 L0,78 L60,77 L140,75 L240,77 L240,110 Z" fill="#253048"/>
  <g fill="#2e3b52" transform="rotate(10 190 76)">
    <circle cx="190" cy="50.5" r="1.5"/>
    <rect x="189.2" y="52" width="1.6" height="4"/>
    <rect x="185.5" y="56" width="9" height="1.8"/>
    <path d="M188,58 L192,58 L190.8,78 L189.2,78 Z"/>
  </g>
  <g fill="#2e3b52" transform="rotate(-12 214 77)">
    <circle cx="214" cy="58" r="1.2"/>
    <rect x="213.3" y="59.5" width="1.4" height="3"/>
    <rect x="210.5" y="62.5" width="7" height="1.6"/>
    <path d="M212.4,64 L215.6,64 L214.6,79 L213.4,79 Z"/>
  </g>
  <path d="M0,110 L0,90 Q80,84 150,88 Q200,90 240,86 L240,110 Z" fill="#1a2334"/>
  <g fill="#0d1117" transform="rotate(-9 150 86)">
    <circle cx="150" cy="36" r="2.2"/>
    <rect x="148.9" y="38.5" width="2.2" height="5.5"/>
    <rect x="143.5" y="44" width="13" height="2.2"/>
    <path d="M147,46.5 L153,46.5 L151.4,88 L148.6,88 Z"/>
  </g>
  <g fill="#0d1117" transform="rotate(12 40 98)">
    <circle cx="40" cy="20" r="3"/>
    <rect x="38.6" y="23" width="2.8" height="7"/>
    <rect x="32" y="30" width="16" height="2.8"/>
    <path d="M36.2,33 L43.8,33 L41.6,100 L38.4,100 Z"/>
  </g>
  <path d="M0,110 L0,101 Q120,95 240,100 L240,110 Z" fill="#0d1117"/>
</svg>`,bingyuan:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_bingyuan_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#162032"/>
    </linearGradient>
    <radialGradient id="bp_bingyuan_ice" cx="0.5" cy="1" r="1">
      <stop offset="0" stop-color="#9fe8c8" stop-opacity="0.85"/><stop offset="0.5" stop-color="#7fd4b2" stop-opacity="0.4"/><stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_bingyuan_sky)"/>
  <circle cx="42" cy="14" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="120" cy="10" r="0.6" fill="#f2d795" opacity="0.32"/>
  <circle cx="188" cy="16" r="0.8" fill="#f2d795" opacity="0.38"/>
  <circle cx="222" cy="28" r="0.5" fill="#f2d795" opacity="0.26"/>
  <path d="M0,76 L22,58 L40,68 L66,52 L88,64 L112,50 L134,62 L160,48 L184,62 L214,54 L240,64 L240,110 L0,110 Z" fill="#2e3b52"/>
  <path d="M0,110 L0,82 Q60,76 120,80 Q180,76 240,82 L240,110 Z" fill="#253048"/>
  <path d="M120,80 L115,90 L121,98 L114,106 L117,110 L133,110 L127,102 L132,92 L125,86 L128,80 Z" fill="url(#bp_bingyuan_ice)"/>
  <ellipse cx="124" cy="84" rx="26" ry="12" fill="url(#bp_bingyuan_ice)" opacity="0.28"/>
  <path d="M0,110 L0,82 Q44,77 82,81 L104,79 L120,80 L115,90 L121,98 L114,106 L117,110 Z" fill="#131a28"/>
  <path d="M240,110 L240,80 Q198,75 162,80 L142,79 L128,80 L125,86 L132,92 L127,102 L133,110 Z" fill="#1a2334"/>
  <path d="M124,82 L119,92 L124,100 L118,108" fill="none" stroke="#9fe8c8" stroke-width="1" opacity="0.55"/>
  <path d="M120,80 L115,90 L121,98 L114,106 L117,110" fill="none" stroke="#7fd4b2" stroke-width="0.7" opacity="0.45"/>
  <path d="M128,80 L125,86 L132,92 L127,102 L133,110" fill="none" stroke="#7fd4b2" stroke-width="0.7" opacity="0.28"/>
</svg>`,nanjiang:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_nanjiang_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="bp_nanjiang_moonglow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.3"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bp_nanjiang_fog" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8d97a9" stop-opacity="0"/><stop offset="0.5" stop-color="#8d97a9" stop-opacity="0.16"/><stop offset="1" stop-color="#8d97a9" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_nanjiang_sky)"/>
  <circle cx="60" cy="14" r="0.6" fill="#f2d795" opacity="0.3"/>
  <circle cx="210" cy="18" r="0.6" fill="#f2d795" opacity="0.28"/>
  <circle cx="150" cy="26" r="16" fill="url(#bp_nanjiang_moonglow)"/>
  <circle cx="150" cy="26" r="5.5" fill="#f2d795" opacity="0.5"/>
  <path d="M0,58 Q20,44 42,56 Q64,40 88,54 Q112,38 136,52 Q160,40 184,52 Q208,42 228,54 Q234,56 240,52 L240,110 L0,110 Z" fill="#2e3b52"/>
  <rect x="0" y="50" width="240" height="16" fill="url(#bp_nanjiang_fog)"/>
  <path d="M0,72 Q28,56 56,70 Q86,52 116,68 Q146,54 176,68 Q204,56 240,70 L240,110 L0,110 Z" fill="#253048"/>
  <rect x="0" y="64" width="240" height="18" fill="url(#bp_nanjiang_fog)"/>
  <path d="M0,88 Q34,70 68,86 Q104,68 140,84 Q176,70 208,86 Q224,78 240,88 L240,110 L0,110 Z" fill="#1a2334"/>
  <rect x="0" y="82" width="240" height="20" fill="url(#bp_nanjiang_fog)"/>
  <path d="M0,110 L0,100 Q48,88 96,100 Q150,88 200,102 Q220,96 240,100 L240,110 Z" fill="#131a28"/>
  <path d="M0,110 L0,106 Q120,98 240,106 L240,110 Z" fill="#0d1117"/>
</svg>`,wangxiang:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_wangxiang_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1c2536"/>
    </linearGradient>
    <linearGradient id="bp_wangxiang_river" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#101724"/><stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <radialGradient id="bp_wangxiang_lamp">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.5"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bp_wangxiang_refl" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.45"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_wangxiang_sky)"/>
  <circle cx="46" cy="14" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="110" cy="10" r="0.6" fill="#f2d795" opacity="0.32"/>
  <circle cx="174" cy="16" r="0.8" fill="#f2d795" opacity="0.38"/>
  <circle cx="216" cy="26" r="0.5" fill="#f2d795" opacity="0.28"/>
  <path d="M0,66 Q40,52 80,62 Q130,48 180,60 Q212,54 240,60 L240,110 L0,110 Z" fill="#2e3b52"/>
  <path d="M0,86 L0,74 L8,74 L8,70 L24,70 L24,74 L32,74 L30,66 L44,58 L58,66 L56,74 L66,74 L66,69 L80,69 L80,74 L88,74 L86,68 L98,61 L110,68 L108,74 L122,74 L122,78 L134,78 L132,72 L142,66 L152,72 L150,78 L168,78 L168,74 L182,74 L182,78 L196,78 L196,80 L240,80 L240,86 Z" fill="#1a2334"/>
  <rect x="41.5" y="63" width="3" height="4" fill="#d9b36a" opacity="0.7"/>
  <path d="M0,88 L0,84 Q120,80 240,83 L240,88 Z" fill="#131a28"/>
  <rect x="0" y="86" width="240" height="24" fill="url(#bp_wangxiang_river)"/>
  <rect x="30" y="92" width="22" height="1" fill="#2e3b52" opacity="0.35"/>
  <rect x="128" y="97" width="30" height="1" fill="#2e3b52" opacity="0.3"/>
  <rect x="196" y="93" width="18" height="1" fill="#2e3b52" opacity="0.3"/>
  <circle cx="76" cy="95" r="6" fill="url(#bp_wangxiang_lamp)"/>
  <circle cx="76" cy="95" r="1.3" fill="#f2d795"/>
  <rect x="75.4" y="97" width="1.2" height="8" fill="url(#bp_wangxiang_refl)"/>
  <circle cx="118" cy="100" r="6" fill="url(#bp_wangxiang_lamp)"/>
  <circle cx="118" cy="100" r="1.3" fill="#f2d795"/>
  <rect x="117.4" y="102" width="1.2" height="7" fill="url(#bp_wangxiang_refl)"/>
  <circle cx="160" cy="93" r="5" fill="url(#bp_wangxiang_lamp)"/>
  <circle cx="160" cy="93" r="1.1" fill="#f2d795"/>
  <rect x="159.5" y="95" width="1" height="9" fill="url(#bp_wangxiang_refl)"/>
</svg>`,baigu:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_baigu_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#192132"/>
    </linearGradient>
    <radialGradient id="bp_baigu_star">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.5"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_baigu_sky)"/>
  <circle cx="66" cy="20" r="9" fill="url(#bp_baigu_star)"/>
  <rect x="65.4" y="12" width="1.2" height="16" fill="#f2d795" opacity="0.32"/>
  <rect x="58" y="19.4" width="16" height="1.2" fill="#f2d795" opacity="0.32"/>
  <circle cx="66" cy="20" r="1.5" fill="#f2d795"/>
  <path d="M0,110 L0,80 L80,77 L160,79 L240,76 L240,110 Z" fill="#253048"/>
  <path d="M58,93 Q60,76 74,73" fill="none" stroke="#131a28" stroke-width="2.5" opacity="0.9"/>
  <path d="M76,93 Q78,78 90,75" fill="none" stroke="#131a28" stroke-width="2" opacity="0.85"/>
  <path d="M0,110 L0,92 Q60,84 120,90 Q180,84 240,90 L240,110 Z" fill="#1a2334"/>
  <path fill-rule="evenodd" d="M146,92 Q142,60 158,48 L150,32 L165,44 Q196,36 212,58 Q220,70 214,92 L202,92 Q210,72 202,60 Q190,50 172,56 Q158,64 158,92 Z M185,48.5 a4,3 0 1 0 8,0 a4,3 0 1 0 -8,0 Z" fill="#0d1117"/>
  <path d="M0,110 L0,102 Q120,96 240,102 L240,110 Z" fill="#0d1117"/>
</svg>`,fudao:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_fudao_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="bp_fudao_sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#212c42"/><stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <radialGradient id="bp_fudao_moon">
      <stop offset="0" stop-color="#fdf4dc"/><stop offset="1" stop-color="#f2d795"/>
    </radialGradient>
    <radialGradient id="bp_fudao_moonglow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.32"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bp_fudao_path" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.4"/><stop offset="1" stop-color="#f2d795" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_fudao_sky)"/>
  <circle cx="34" cy="16" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="86" cy="10" r="0.6" fill="#f2d795" opacity="0.32"/>
  <circle cx="150" cy="12" r="0.7" fill="#f2d795" opacity="0.36"/>
  <circle cx="222" cy="18" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="120" cy="22" r="16" fill="url(#bp_fudao_moonglow)"/>
  <circle cx="120" cy="22" r="7" fill="url(#bp_fudao_moon)"/>
  <path d="M44,39 Q58,35 72,39 L67,41 L63,47 L58,41 L52,43 L48,40 Z" fill="#2e3b52"/>
  <path d="M156,34 Q182,29 208,34 L202,36 L198,44 L192,38 L188,52 L183,40 L176,44 L170,36 L162,35 Z" fill="#1a2334"/>
  <circle cx="188" cy="58" r="1.5" fill="#1a2334"/>
  <circle cx="185" cy="64" r="1" fill="#1a2334"/>
  <rect x="0" y="72" width="240" height="38" fill="url(#bp_fudao_sea)"/>
  <path d="M38,72 Q52,64 66,72 Z" fill="#2e3b52"/>
  <path d="M196,72 Q210,65 224,72 Z" fill="#2e3b52"/>
  <path d="M113,72 L127,72 L136,110 L104,110 Z" fill="url(#bp_fudao_path)"/>
  <rect x="110" y="78" width="20" height="1" fill="#f2d795" opacity="0.4"/>
  <rect x="106" y="86" width="28" height="1.2" fill="#f2d795" opacity="0.28"/>
  <rect x="100" y="97" width="36" height="1.4" fill="#f2d795" opacity="0.16"/>
</svg>`,juelin:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_juelin_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#141a26"/>
    </linearGradient>
    <linearGradient id="bp_juelin_mist" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8d97a9" stop-opacity="0"/><stop offset="0.5" stop-color="#8d97a9" stop-opacity="0.05"/><stop offset="1" stop-color="#8d97a9" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_juelin_sky)"/>
  <circle cx="76" cy="26" r="7" fill="#8d97a9" opacity="0.16"/>
  <path d="M0,64 L20,56 L34,56 L52,62 L74,50 L92,50 L108,60 L132,54 L148,54 L166,62 L190,52 L210,52 L228,60 L240,58 L240,110 L0,110 Z" fill="#253048"/>
  <path d="M0,80 L26,70 L48,70 L66,78 L96,66 L118,66 L142,76 L170,68 L192,68 L216,78 L240,74 L240,110 L0,110 Z" fill="#1a2334"/>
  <rect x="0" y="76" width="240" height="14" fill="url(#bp_juelin_mist)"/>
  <g stroke="#0d1117" stroke-width="1.3" fill="none">
    <path d="M150,86 L150,68"/>
    <path d="M150,78 L142,69"/>
    <path d="M150,73 L158,66"/>
    <path d="M142,69 L138,63"/>
  </g>
  <path d="M0,96 L36,86 L60,86 L84,94 L120,84 L150,84 L178,92 L206,86 L240,90 L240,110 L0,110 Z" fill="#131a28"/>
  <path d="M0,110 L0,104 Q120,98 240,104 L240,110 Z" fill="#0d1117"/>
</svg>`,random:`<svg viewBox="0 0 240 110" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="bp_random_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="bp_random_glow">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.14"/><stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="240" height="110" fill="url(#bp_random_sky)"/>
  <circle cx="34" cy="20" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="76" cy="10" r="0.6" fill="#f2d795" opacity="0.32"/>
  <circle cx="200" cy="14" r="0.8" fill="#f2d795" opacity="0.4"/>
  <circle cx="226" cy="36" r="0.5" fill="#f2d795" opacity="0.28"/>
  <circle cx="140" cy="44" r="40" fill="url(#bp_random_glow)"/>
  <g transform="rotate(-18 112 52)">
    <ellipse cx="112" cy="52" rx="7.5" ry="5" fill="#131a28" stroke="#d9b36a" stroke-width="1" opacity="0.95"/>
    <rect x="109" y="49.8" width="6" height="4.4" fill="none" stroke="#a9853f" stroke-width="0.9"/>
  </g>
  <circle cx="140" cy="34" r="8" fill="#131a28" stroke="#d9b36a" stroke-width="1.2"/>
  <rect x="136.8" y="30.8" width="6.4" height="6.4" fill="none" stroke="#d9b36a" stroke-width="1"/>
  <g transform="rotate(14 166 56)">
    <ellipse cx="166" cy="56" rx="7" ry="5.4" fill="#131a28" stroke="#d9b36a" stroke-width="1" opacity="0.95"/>
    <rect x="163.2" y="53.6" width="5.6" height="4.8" fill="none" stroke="#a9853f" stroke-width="0.9"/>
  </g>
  <circle cx="128" cy="22" r="0.7" fill="#f2d795" opacity="0.6"/>
  <circle cx="156" cy="42" r="0.6" fill="#f2d795" opacity="0.55"/>
  <path d="M104,110 L109,93 Q110,88 115,86 L111,81 L116,83 Q117,77 120,82 L122,76 L125,82 L128,77 L131,83 L135,79 L136,86 Q134,90 128,91 Q119,93 116,98 L115,110 Z" fill="#0d1117"/>
</svg>`},Na={冲突:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_chongtu_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="bn_chongtu_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <radialGradient id="bn_chongtu_rift" cx="0.5" cy="0.3" r="0.7">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.28"/>
      <stop offset="0.55" stop-color="#a9853f" stop-opacity="0.1"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_chongtu_sky)"/>
  <circle cx="48" cy="16" r="0.8" fill="#f2d795" opacity="0.38"/>
  <circle cx="120" cy="9" r="0.6" fill="#f2d795" opacity="0.28"/>
  <circle cx="238" cy="13" r="0.7" fill="#f2d795" opacity="0.34"/>
  <circle cx="284" cy="7" r="0.5" fill="#f2d795" opacity="0.24"/>
  <circle cx="332" cy="20" r="0.8" fill="#f2d795" opacity="0.38"/>
  <path d="M0,52 C60,42 130,52 195,47 C262,42 330,51 390,45 L390,90 L0,90 Z" fill="#253048"/>
  <path d="M0,62 C80,54 160,63 235,57 C300,52 350,60 390,57 L390,90 L0,90 Z" fill="#1a2334"/>
  <ellipse cx="195" cy="66" rx="78" ry="10" fill="#2e3b52" opacity="0.16"/>
  <path d="M0,70 L390,70 L390,90 L0,90 Z" fill="url(#bn_chongtu_ground)"/>
  <ellipse cx="195" cy="76" rx="46" ry="13" fill="url(#bn_chongtu_rift)"/>
  <path d="M195,70 L199,74 L190,78 L201,82 L193,86 L197,90" fill="none" stroke="#d9b36a" stroke-opacity="0.15" stroke-width="3" stroke-linejoin="round"/>
  <path d="M195,70 L199,74 L190,78 L201,82 L193,86 L197,90" fill="none" stroke="#a9853f" stroke-opacity="0.75" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M199,74 L207,76.5 M190,78 L181,81" fill="none" stroke="#a9853f" stroke-opacity="0.4" stroke-width="0.8"/>
  <circle cx="112" cy="55.6" r="2.7" fill="#0d1117"/>
  <path d="M109.5,58 C108.7,61.8 107.5,66 106.3,70.4 L117.7,70.4 C116.5,66 115.3,61.8 114.5,58 Z" fill="#0d1117"/>
  <path d="M116.2,61.5 L121.5,70.8" stroke="#0d1117" stroke-width="1.2" stroke-linecap="round"/>
  <circle cx="278" cy="55.6" r="2.7" fill="#0d1117"/>
  <path d="M280.5,58 C281.3,61.8 282.5,66 283.7,70.4 L272.3,70.4 C273.5,66 274.7,61.8 275.5,58 Z" fill="#0d1117"/>
  <path d="M273.8,61.5 L268.5,70.8" stroke="#0d1117" stroke-width="1.2" stroke-linecap="round"/>
</svg>`,机缘:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_jiyuan_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="bn_jiyuan_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <radialGradient id="bn_jiyuan_cave" cx="0.5" cy="1" r="0.95">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.92"/>
      <stop offset="0.35" stop-color="#d9b36a" stop-opacity="0.5"/>
      <stop offset="0.7" stop-color="#a9853f" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bn_jiyuan_halo" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bn_jiyuan_beam" x1="1" y1="0" x2="0" y2="0">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_jiyuan_sky)"/>
  <circle cx="36" cy="14" r="0.7" fill="#f2d795" opacity="0.34"/>
  <circle cx="96" cy="8" r="0.6" fill="#f2d795" opacity="0.26"/>
  <circle cx="150" cy="18" r="0.8" fill="#f2d795" opacity="0.38"/>
  <circle cx="208" cy="10" r="0.55" fill="#f2d795" opacity="0.24"/>
  <circle cx="252" cy="22" r="0.7" fill="#f2d795" opacity="0.3"/>
  <path d="M0,48 C70,38 150,50 230,43 C270,39 305,44 335,41 L335,90 L0,90 Z" fill="#253048"/>
  <path d="M0,60 C80,54 160,62 245,56 L245,90 L0,90 Z" fill="#1a2334"/>
  <ellipse cx="140" cy="80" rx="115" ry="8" fill="#2e3b52" opacity="0.14"/>
  <path d="M0,78 L390,78 L390,90 L0,90 Z" fill="url(#bn_jiyuan_ground)"/>
  <path d="M232,90 C244,58 268,36 306,28 C340,22 370,20 390,20 L390,90 Z" fill="#131a28"/>
  <ellipse cx="317" cy="84" rx="42" ry="17" fill="url(#bn_jiyuan_halo)"/>
  <path d="M296,90 C296,72 304,60 317,58 C330,60 338,72 338,90 Z" fill="url(#bn_jiyuan_cave)"/>
  <polygon points="298,87 336,87 336,90 230,90" fill="url(#bn_jiyuan_beam)"/>
  <circle cx="256" cy="74.8" r="2.2" fill="#0d1117"/>
  <path d="M254,77 C253.4,80 252.8,83 252.2,86 L259.8,86 C259.2,83 258.6,80 258,77 Z" fill="#0d1117"/>
  <path d="M258.1,77.2 C258.7,80.1 259.3,83 259.8,86" fill="none" stroke="#d9b36a" stroke-opacity="0.45" stroke-width="0.7"/>
</svg>`,宗门:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_zongmen_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="bn_zongmen_moonglow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.26"/>
      <stop offset="0.55" stop-color="#f2d795" stop-opacity="0.1"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bn_zongmen_moon" cx="0.42" cy="0.38" r="0.72">
      <stop offset="0" stop-color="#f2d795"/>
      <stop offset="1" stop-color="#d9b36a"/>
    </radialGradient>
    <linearGradient id="bn_zongmen_door" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0.5"/>
    </linearGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_zongmen_sky)"/>
  <circle cx="110" cy="12" r="0.7" fill="#f2d795" opacity="0.32"/>
  <circle cx="160" cy="20" r="0.6" fill="#f2d795" opacity="0.26"/>
  <circle cx="230" cy="9" r="0.8" fill="#f2d795" opacity="0.36"/>
  <circle cx="300" cy="14" r="0.55" fill="#f2d795" opacity="0.24"/>
  <circle cx="20" cy="42" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="58" cy="22" r="15" fill="url(#bn_zongmen_moonglow)"/>
  <circle cx="58" cy="22" r="6.5" fill="url(#bn_zongmen_moon)"/>
  <path d="M150,52 C230,36 320,24 390,22 L390,90 L150,90 Z" fill="#2e3b52"/>
  <path d="M306,38 Q330,28 354,38 Z" fill="#2e3b52"/>
  <path d="M306,38 C303.8,37.3 302.4,35.6 301.6,33.8 C303,35.2 304.8,36.4 307,37 Z" fill="#2e3b52"/>
  <path d="M354,38 C356.2,37.3 357.6,35.6 358.4,33.8 C357,35.2 355.2,36.4 353,37 Z" fill="#2e3b52"/>
  <path d="M316,38 L344,38 L344,50 L316,50 Z" fill="#2e3b52"/>
  <path d="M0,84 C80,78 160,70 235,60 C295,52 345,44 390,40 L390,90 L0,90 Z" fill="#253048"/>
  <path d="M30,90 C90,87 138,84 162,82 M196,80 C214,74 226,69 236,66 M274,63 C292,58 304,53.5 316,50.5" fill="none" stroke="#2e3b52" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round" stroke-dasharray="2.5 3.2"/>
  <path d="M234,53 L270,53 L270,66 L234,66 Z" fill="#1a2334"/>
  <path d="M224,53 Q252,41 280,53 Z" fill="#1a2334"/>
  <path d="M224,53 C221.6,52.2 220,50.2 219.2,48.2 C220.8,49.8 222.8,51.2 225.2,51.9 Z" fill="#1a2334"/>
  <path d="M280,53 C282.4,52.2 284,50.2 284.8,48.2 C283.2,49.8 281.2,51.2 278.8,51.9 Z" fill="#1a2334"/>
  <circle cx="252" cy="45.6" r="1.2" fill="#1a2334"/>
  <circle cx="245" cy="58.5" r="1" fill="#d9b36a" opacity="0.5"/>
  <circle cx="259" cy="58.5" r="1" fill="#d9b36a" opacity="0.5"/>
  <path d="M146,66 L190,66 L190,82 L146,82 Z" fill="#131a28"/>
  <path d="M132,66 Q168,50 204,66 Z" fill="#131a28"/>
  <path d="M132,66 C129,65 127,62.5 126,60 C128,62 130.5,64 133.5,64.8 Z" fill="#131a28"/>
  <path d="M204,66 C207,65 209,62.5 210,60 C208,62 205.5,64 202.5,64.8 Z" fill="#131a28"/>
  <circle cx="168" cy="56.4" r="1.5" fill="#131a28"/>
  <rect x="165" y="69" width="6" height="13" fill="url(#bn_zongmen_door)"/>
  <circle cx="154" cy="72.5" r="1.1" fill="#d9b36a" opacity="0.5"/>
  <circle cx="182" cy="72.5" r="1.1" fill="#d9b36a" opacity="0.5"/>
</svg>`,山野:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_shanye_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <linearGradient id="bn_shanye_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="bn_shanye_lamp" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2d795"/>
      <stop offset="1" stop-color="#d9b36a"/>
    </linearGradient>
    <radialGradient id="bn_shanye_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_shanye_sky)"/>
  <circle cx="30" cy="12" r="0.7" fill="#f2d795" opacity="0.32"/>
  <circle cx="92" cy="20" r="0.55" fill="#f2d795" opacity="0.24"/>
  <circle cx="158" cy="8" r="0.8" fill="#f2d795" opacity="0.36"/>
  <circle cx="226" cy="16" r="0.6" fill="#f2d795" opacity="0.28"/>
  <circle cx="286" cy="9" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="352" cy="18" r="0.6" fill="#f2d795" opacity="0.26"/>
  <path d="M0,52 C70,44 140,52 210,47 C280,42 340,50 390,45 L390,90 L0,90 Z" fill="#2e3b52"/>
  <path d="M0,60 C90,54 170,62 260,56 C320,52 360,58 390,55 L390,90 L0,90 Z" fill="#253048"/>
  <path d="M69.4,66 L69,57.5" stroke="#0d1117" stroke-width="1.6" stroke-linecap="round"/>
  <ellipse cx="69" cy="53.6" rx="7.5" ry="4.6" fill="#131a28"/>
  <ellipse cx="62.5" cy="56.6" rx="4" ry="2.8" fill="#131a28"/>
  <path d="M0,68 C120,64.5 260,64.5 390,68 L390,90 L0,90 Z" fill="url(#bn_shanye_ground)"/>
  <path d="M0,74 C120,70.5 260,70.5 390,74" fill="none" stroke="#253048" stroke-opacity="0.6" stroke-width="1"/>
  <path d="M0,80 C130,75.5 260,75.5 390,80" fill="none" stroke="#253048" stroke-opacity="0.55" stroke-width="1"/>
  <path d="M0,86 C140,81 250,81 390,86" fill="none" stroke="#253048" stroke-opacity="0.5" stroke-width="1"/>
  <path d="M313,50.5 C315.5,44.5 311.5,39.5 314.5,32.5" fill="none" stroke="#2e3b52" stroke-opacity="0.35" stroke-width="1" stroke-linecap="round"/>
  <circle cx="302" cy="61.5" r="10" fill="url(#bn_shanye_glow)"/>
  <path d="M290,56 L316,56 L316,66.5 L290,66.5 Z" fill="#0d1117"/>
  <path d="M286,57 L303,47.5 L320,57 Z" fill="#0d1117"/>
  <rect x="299.2" y="59" width="5.6" height="5.2" rx="0.8" fill="url(#bn_shanye_lamp)"/>
</svg>`,心魔:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <radialGradient id="bn_xinmo_sky" cx="0.5" cy="0.55" r="0.75">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </radialGradient>
    <linearGradient id="bn_xinmo_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <radialGradient id="bn_xinmo_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.2"/>
      <stop offset="0.6" stop-color="#7fd4b2" stop-opacity="0.07"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_xinmo_sky)"/>
  <circle cx="60" cy="14" r="0.6" fill="#7fd4b2" opacity="0.26"/>
  <circle cx="140" cy="8" r="0.5" fill="#7fd4b2" opacity="0.22"/>
  <circle cx="250" cy="8" r="0.5" fill="#7fd4b2" opacity="0.22"/>
  <circle cx="330" cy="14" r="0.6" fill="#7fd4b2" opacity="0.26"/>
  <path d="M0,50 C65,42 130,56 195,49 C260,56 325,42 390,50 L390,90 L0,90 Z" fill="#1a2334"/>
  <path d="M0,62 C70,56 140,66 195,60 C250,66 320,56 390,62 L390,90 L0,90 Z" fill="#131a28"/>
  <ellipse cx="195" cy="60" rx="42" ry="23" fill="url(#bn_xinmo_glow)"/>
  <path d="M0,70 L390,70 L390,90 L0,90 Z" fill="url(#bn_xinmo_ground)"/>
  <ellipse cx="195" cy="64" rx="120" ry="4" fill="#7fd4b2" opacity="0.04"/>
  <ellipse cx="195" cy="72" rx="160" ry="7" fill="#7fd4b2" opacity="0.05"/>
  <ellipse cx="90" cy="80" rx="95" ry="6" fill="#2e3b52" opacity="0.25"/>
  <ellipse cx="300" cy="80" rx="95" ry="6" fill="#2e3b52" opacity="0.25"/>
  <circle cx="178" cy="48.6" r="2.9" fill="#0d1117"/>
  <path d="M175.3,51.6 C174.4,56.5 173.1,63.5 171.9,70.6 L184.1,70.6 C182.9,63.5 181.6,56.5 180.7,51.6 Z" fill="#0d1117"/>
  <circle cx="212" cy="48.6" r="2.9" fill="#0d1117" stroke="#7fd4b2" stroke-opacity="0.3" stroke-width="0.6"/>
  <path d="M214.7,51.6 C215.6,56.5 216.9,63.5 218.1,70.6 L205.9,70.6 C207.1,63.5 208.4,56.5 209.3,51.6 Z" fill="#0d1117" stroke="#7fd4b2" stroke-opacity="0.3" stroke-width="0.6"/>
  <ellipse cx="178" cy="73.5" rx="4.5" ry="1.5" fill="#7fd4b2" opacity="0.06"/>
  <ellipse cx="212" cy="73.5" rx="4.5" ry="1.5" fill="#7fd4b2" opacity="0.06"/>
</svg>`,秘境:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <radialGradient id="bn_mijing_wall" cx="0.54" cy="0.6" r="0.9">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="0.55" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0d1117"/>
    </radialGradient>
    <linearGradient id="bn_mijing_doorL" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#253048"/>
    </linearGradient>
    <linearGradient id="bn_mijing_doorR" x1="1" y1="0" x2="0" y2="0">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#253048"/>
    </linearGradient>
    <linearGradient id="bn_mijing_gap" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.1"/>
      <stop offset="0.5" stop-color="#7fd4b2" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0.85"/>
    </linearGradient>
    <radialGradient id="bn_mijing_halo" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bn_mijing_spill" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_mijing_wall)"/>
  <path d="M60,30 L74,38 L68,52" fill="none" stroke="#253048" stroke-opacity="0.3" stroke-width="0.8"/>
  <path d="M330,44 L318,54 L326,68" fill="none" stroke="#253048" stroke-opacity="0.3" stroke-width="0.8"/>
  <rect x="164" y="18" width="16" height="72" fill="#131a28"/>
  <rect x="240" y="18" width="16" height="72" fill="#131a28"/>
  <path d="M156,20 L264,20 L256,6 L164,6 Z" fill="#131a28"/>
  <path d="M180,20 L209,23 L209,90 L180,90 Z" fill="url(#bn_mijing_doorL)"/>
  <path d="M240,20 L213,23 L213,90 L240,90 Z" fill="url(#bn_mijing_doorR)"/>
  <ellipse cx="211" cy="58" rx="11" ry="35" fill="url(#bn_mijing_halo)"/>
  <rect x="208.5" y="23" width="5" height="67" fill="url(#bn_mijing_gap)"/>
  <ellipse cx="211" cy="89" rx="30" ry="5" fill="url(#bn_mijing_spill)"/>
  <polygon points="208.5,88 213.5,88 228,90 194,90" fill="#7fd4b2" opacity="0.12"/>
  <path d="M172,0 C170,9 174,16 171,26 C169,34 172,40 170,47" fill="none" stroke="#0d1117" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M186,0 C188,8 184,15 187,24 C189,31 186,36 187,41" fill="none" stroke="#0d1117" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M203,0 C201,7 205,14 202,21" fill="none" stroke="#0d1117" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M226,0 C228,9 224,17 227,27 C229,35 226,42 228,50" fill="none" stroke="#0d1117" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M247,0 C245,8 249,16 246,25 C244,33 247,38 245,44" fill="none" stroke="#0d1117" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="170.5" cy="30" r="1.3" fill="#0d1117"/>
  <circle cx="169.6" cy="46" r="1.4" fill="#0d1117"/>
  <circle cx="187.4" cy="27" r="1.2" fill="#0d1117"/>
  <circle cx="187.2" cy="40.5" r="1.2" fill="#0d1117"/>
  <circle cx="202.2" cy="20.5" r="1.1" fill="#0d1117"/>
  <circle cx="227.4" cy="31" r="1.3" fill="#0d1117"/>
  <circle cx="227.8" cy="49" r="1.4" fill="#0d1117"/>
  <circle cx="245.4" cy="28" r="1.2" fill="#0d1117"/>
  <circle cx="245.2" cy="43.5" r="1.2" fill="#0d1117"/>
</svg>`,岔路:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_chalu_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="bn_chalu_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="bn_chalu_roadL" x1="1" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#253048" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#253048" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="bn_chalu_roadR" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#253048" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#253048" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="bn_chalu_stem" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#253048" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#253048" stop-opacity="0.72"/>
    </linearGradient>
    <radialGradient id="bn_chalu_lamp" cx="0.5" cy="0.45" r="0.6">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.9"/>
      <stop offset="0.5" stop-color="#d9b36a" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0.3"/>
    </radialGradient>
    <radialGradient id="bn_chalu_lampglow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_chalu_sky)"/>
  <circle cx="44" cy="18" r="0.7" fill="#f2d795" opacity="0.32"/>
  <circle cx="112" cy="10" r="0.55" fill="#f2d795" opacity="0.24"/>
  <circle cx="196" cy="14" r="0.9" fill="#f2d795" opacity="0.42"/>
  <circle cx="262" cy="8" r="0.6" fill="#f2d795" opacity="0.26"/>
  <circle cx="322" cy="16" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="366" cy="26" r="0.5" fill="#f2d795" opacity="0.22"/>
  <path d="M0,56 C80,50 170,58 250,52 C310,48 355,54 390,50 L390,90 L0,90 Z" fill="#253048"/>
  <path d="M0,64 C90,59 180,66 270,61 C330,57 365,62 390,60 L390,90 L0,90 Z" fill="#1a2334"/>
  <ellipse cx="195" cy="66" rx="125" ry="6" fill="#2e3b52" opacity="0.14"/>
  <path d="M0,68 L390,68 L390,90 L0,90 Z" fill="url(#bn_chalu_ground)"/>
  <polygon points="187,79 202,79 90,68.6 83,68.6" fill="url(#bn_chalu_roadL)"/>
  <polygon points="190,79 204,79 308,68.6 315,68.6" fill="url(#bn_chalu_roadR)"/>
  <polygon points="170,90 220,90 204,79 187,79" fill="url(#bn_chalu_stem)"/>
  <ellipse cx="78" cy="70" rx="44" ry="10" fill="#0d1117" opacity="0.55"/>
  <ellipse cx="320" cy="70" rx="44" ry="10" fill="#0d1117" opacity="0.55"/>
  <path d="M158,62 Q158,57 165,57 Q172,57 172,62 L172,80 L158,80 Z" fill="#0d1117"/>
  <path d="M154,79 L176,79 L177.5,83 L152.5,83 Z" fill="#0d1117"/>
  <circle cx="189" cy="71.5" r="9" fill="url(#bn_chalu_lampglow)"/>
  <path d="M181,83 L181,66" stroke="#0d1117" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M181,66 C184,64.4 186.5,64.4 189,66" fill="none" stroke="#0d1117" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M189,66 L189,68.4" stroke="#0d1117" stroke-width="0.8"/>
  <path d="M186.4,68.4 L191.6,68.4" stroke="#0d1117" stroke-width="1" stroke-linecap="round"/>
  <ellipse cx="189" cy="71.6" rx="3.1" ry="3.9" fill="url(#bn_chalu_lamp)"/>
</svg>`,命关:`<svg viewBox="0 0 390 90" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="bn_mingguan_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="0.45" stop-color="#253048"/>
      <stop offset="0.62" stop-color="#2e3b52"/>
      <stop offset="0.8" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="bn_mingguan_cloud" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="bn_mingguan_gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#a9853f"/>
      <stop offset="0.5" stop-color="#f2d795"/>
      <stop offset="1" stop-color="#a9853f"/>
    </linearGradient>
    <linearGradient id="bn_mingguan_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
  </defs>
  <rect width="390" height="90" fill="url(#bn_mingguan_sky)"/>
  <path d="M0,44 C30,50 60,40 95,46 C130,52 160,42 200,48 C240,54 275,44 310,50 C340,54 370,46 390,50 L390,0 L0,0 Z" fill="#1a2334"/>
  <path d="M0,36 C25,42 55,30 90,38 C120,44 150,32 185,40 C215,46 245,34 280,42 C310,48 345,36 390,42 L390,0 L0,0 Z" fill="url(#bn_mingguan_cloud)"/>
  <path d="M0,36 C25,42 55,30 90,38 C120,44 150,32 185,40 C215,46 245,34 280,42 C310,48 345,36 390,42" fill="none" stroke="#d9b36a" stroke-opacity="0.15" stroke-width="5"/>
  <path d="M0,36 C25,42 55,30 90,38 C120,44 150,32 185,40 C215,46 245,34 280,42 C310,48 345,36 390,42" fill="none" stroke="url(#bn_mingguan_gold)" stroke-opacity="0.9" stroke-width="1.3"/>
  <path d="M0,64 L390,64 L390,71 L0,71 Z" fill="#1a2334"/>
  <path d="M10,61.2 h5 v2.9 h-5 Z M40,61.2 h5 v2.9 h-5 Z M70,61.2 h5 v2.9 h-5 Z M100,61.2 h5 v2.9 h-5 Z M130,61.2 h5 v2.9 h-5 Z M160,61.2 h5 v2.9 h-5 Z M190,61.2 h5 v2.9 h-5 Z M220,61.2 h5 v2.9 h-5 Z M250,61.2 h5 v2.9 h-5 Z M340,61.2 h5 v2.9 h-5 Z M370,61.2 h5 v2.9 h-5 Z" fill="#1a2334"/>
  <path d="M290,52 L322,52 L322,64 L290,64 Z" fill="#1a2334"/>
  <path d="M284,52 Q306,44 328,52 Z" fill="#1a2334"/>
  <path d="M0,71 L390,71 L390,90 L0,90 Z" fill="url(#bn_mingguan_ground)"/>
  <ellipse cx="150" cy="80" rx="62" ry="8" fill="#2e3b52" opacity="0.18"/>
  <circle cx="150" cy="73.6" r="2.5" fill="#0d1117"/>
  <path d="M147.9,76.2 C147.2,79 146.6,81.8 146.1,84.6 L153.9,84.6 C153.4,81.8 152.8,79 152.1,76.2 Z" fill="#0d1117"/>
  <path d="M148,72.2 C149,71.1 151.6,71.2 152.6,72.6" fill="none" stroke="#d9b36a" stroke-opacity="0.5" stroke-width="0.8"/>
  <path d="M147.6,76.5 L152.4,76.5" stroke="#d9b36a" stroke-opacity="0.25" stroke-width="0.7"/>
</svg>`},$=n(),Pa={你:`「亲历。好，最痛的活法，也最真。」`,我:`「自述么。将来那本书，就是你自己的口气了。」`,他:`「说书。也好——隔着一层看自己，有些事反而看得清。」`};function Fa(){return`世界-${Math.random().toString(36).slice(2,8)}`}function Ia(e){let t=(0,r.useMemo)(()=>new URLSearchParams(location.search).get(`seed`)??``,[]),[n,i]=(0,r.useState)(`greet`),[a,o]=(0,r.useState)([]),[s,c]=(0,r.useState)(``),[l,u]=(0,r.useState)(`你`),[d,f]=(0,r.useState)(void 0),[p,m]=(0,r.useState)(``),[h,ee]=(0,r.useState)(t),[g,te]=(0,r.useState)(``),_=(0,r.useRef)(null),v=e.save.registry,y=(0,r.useMemo)(()=>[...tr(v,j.maxTier),...nr(v),...ir(v),...rr(v)].slice(0,2),[v]),b=e=>o(t=>[...t,...e]);(0,r.useEffect)(()=>{_.current?.scrollIntoView({behavior:`smooth`,block:`end`})},[a,n]),(0,r.useEffect)(()=>{let e=[{who:`吏`,text:`「又来一位。」`},{who:`吏`,text:`渡口的老人头也不抬，续着手里那盏灯。船在雾里，看不见对岸。`},{who:`吏`,text:`「先与你交个底：如今下界不比从前 —— 灵气一年薄过一年，飞升的门断了三万年。修行人多，路窄。」`},{who:`吏`,text:`「就这么个世道，想去的人还是挤破头。」他终于抬眼看你，「说吧，这一世打算怎么个活法。」`}];y.length&&e.splice(3,0,{who:`吏`,text:`「这渡口送走的人里，有几个你兴许会遇上——${y.map(e=>ar(e).split(`
`)[0]).join(`；`)}」`}),o(e)},[]);let x=()=>{let e=g.trim()||`无名`;c(e),b([{who:`你`,text:e===`无名`?`（你没有报名字。）`:`「${e}。」`},{who:`吏`,text:e===`无名`?`「不肯说？也罢，名册上便记『无名』。这样的倒也不少。」`:`「${e}……」他在船头的名册上落了一笔，墨迹很快被雾打湿，「记下了。」`},{who:`吏`,text:`「这一世，你想怎么记着它？」`}]),i(`pov`)},S=e=>{u(e),b([{who:`你`,text:`「${_i[e]}。」`},{who:`吏`,text:Pa[e]},{who:`吏`,text:`「生在哪儿？」他把灯往你这边递了递，「先说好，各处有各处的活法，也有各处的死法。」`}]),i(`birth`)},C=(e,t)=>{f(e),m(t),b([{who:`你`,text:`「${t}。」`},{who:`吏`,text:e?`「${e.name}。」他点点头，「${e.desc}」`:`「随波逐流？」他笑了一声，「也算一种胆量。船到哪算哪。」`},{who:`吏`,text:`「可有指定的去处？」见你不解，他补了一句，「懂行的人会报一串『世界种子』——持同一颗种子的人，入的是同一方天地。不懂就摇头，我替你掷签。」`}]),i(`seed`)},w=e=>{let t=e?.trim()||Fa();ee(t),b([{who:`你`,text:e?.trim()?`「${e.trim()}。」`:`（你摇了摇头。）`},{who:`吏`,text:e?.trim()?`「哦？懂行。」他多看了你一眼。`:`「那便听天由命。」竹签落在筒底，「${t}——是这一方了。」`},{who:`吏`,text:`「${s}，${p}人氏。」他收了名册，撑篙点水，「此去一世，生死自负。船上有一句老话——」`},{who:`吏`,text:`「莫回头。」`}]),i(`confirm`)};return(0,$.jsxs)(`div`,{className:`ferry fade-in`,children:[(0,$.jsxs)(`div`,{className:`ferry-log`,children:[a.map((e,t)=>(0,$.jsxs)(`div`,{className:`ferry-line ${e.who===`吏`?`npc`:`me`} fade-in`,children:[e.who===`吏`&&(0,$.jsx)(`span`,{className:`ferry-who`,children:`渡口老吏`}),(0,$.jsx)(`span`,{className:`ferry-text`,children:e.text})]},t)),(0,$.jsx)(`div`,{ref:_})]}),(0,$.jsxs)(`div`,{className:`ferry-input`,children:[n===`greet`&&(0,$.jsxs)(`div`,{className:`inline-choices`,children:[(0,$.jsxs)(`button`,{className:`choice-btn`,onClick:()=>{b([{who:`你`,text:`（你走近了些。）`},{who:`吏`,text:`「叫什么？」`}]),i(`name`)},children:[(0,$.jsx)(`span`,{className:`idx`,children:`1`}),`上前答话`]}),(0,$.jsxs)(`button`,{className:`choice-btn`,onClick:e.onGallery,children:[(0,$.jsx)(`span`,{className:`idx`,children:`2`}),`先看看渡口的碑林（`,e.save.steles.length,`）`]})]}),n===`name`&&(0,$.jsxs)(`div`,{className:`ferry-form`,children:[(0,$.jsx)(`input`,{type:`text`,value:g,placeholder:`报上道号（空着=无名）`,maxLength:8,autoFocus:!0,onChange:e=>te(e.target.value),onKeyDown:e=>{e.key===`Enter`&&x()}}),(0,$.jsx)(`button`,{className:`primary-btn`,style:{marginTop:0,padding:`10px 22px`},onClick:x,children:`报 名`})]}),n===`pov`&&(0,$.jsx)(`div`,{className:`inline-choices`,children:[`你`,`我`,`他`].map((e,t)=>(0,$.jsxs)(`button`,{className:`choice-btn`,onClick:()=>S(e),children:[(0,$.jsx)(`span`,{className:`idx`,children:t+1}),_i[e],(0,$.jsx)(`span`,{className:`ferry-hint`,children:e===`你`?`经典视角`:e===`我`?`回忆录体`:`说书体`})]},e))}),n===`birth`&&(0,$.jsxs)(`div`,{className:`bp-grid`,children:[(0,$.jsxs)(`div`,{className:`radio-card bp-card`,onClick:()=>C(void 0,`听天由命`),children:[Ma.random&&(0,$.jsx)(`div`,{className:`bp-art`,dangerouslySetInnerHTML:{__html:Ma.random}}),(0,$.jsx)(`div`,{className:`rt`,children:`听天由命`}),(0,$.jsx)(`div`,{className:`rd`,children:`随缘投胎，各安天命`})]}),dt.map(e=>(0,$.jsxs)(`div`,{className:`radio-card bp-card`,onClick:()=>C(e,e.name),children:[Ma[e.id]&&(0,$.jsx)(`div`,{className:`bp-art`,dangerouslySetInnerHTML:{__html:Ma[e.id]}}),(0,$.jsx)(`div`,{className:`rt`,children:e.name}),(0,$.jsx)(`div`,{className:`rd`,children:e.desc}),(0,$.jsxs)(`div`,{className:`rd`,style:{opacity:.7},children:[e.region,` · 灵气`,e.qiDensity,` · `,e.pathPool.join(`/`)]})]},e.id))]}),n===`seed`&&(0,$.jsxs)(`div`,{className:`ferry-form`,children:[(0,$.jsx)(`input`,{type:`text`,value:h,placeholder:`世界种子（可留空）`,onChange:e=>ee(e.target.value),onKeyDown:e=>{e.key===`Enter`&&w(h)}}),(0,$.jsx)(`button`,{className:`ghost-btn`,onClick:()=>w(null),children:`摇头`}),(0,$.jsx)(`button`,{className:`primary-btn`,style:{marginTop:0,padding:`10px 22px`},onClick:()=>w(h),children:`报出`})]}),n===`confirm`&&(0,$.jsxs)(`div`,{className:`inline-choices`,children:[(0,$.jsx)(`button`,{className:`primary-btn`,onClick:()=>{e.onStart({seed:h,name:s,pov:l,birthplace:d})},children:`登 船 入 世`}),(0,$.jsx)(`button`,{className:`linklike`,onClick:()=>{o([]),i(`greet`),te(``),ee(t),b([{who:`吏`,text:`「重新想想？」老人不置可否，把名册翻回上一页。`},{who:`吏`,text:`「叫什么？」`}]),i(`name`)},children:`再想想`})]})]})]})}var La=[`正在焚香净手`,`正在铺陈山川`,`正在丈量寒暑`,`正在点化残魂`,`正在推演因果`,`正在校对天机`,`正在誊录旧籍`,`正在封存前尘`,`正在静候风起`,`只待一线机缘`],Ra=`香已燃尽 · 请入世`;function za({progress:e,label:t}){let n=e>1?1:e>0?e:0,i=n>=1?-1:Math.min(La.length-1,Math.floor(n*La.length)),a=t??(i<0?Ra:La[i]),o=(0,r.useRef)(null);o.current===null&&(o.current=-((typeof document>`u`?0:Number(document.timeline?.currentTime??0))/1e3));let s=(0,r.useRef)(null);s.current===null&&(s.current=a);let c=a!==s.current,l={"--p":n,"--t":`${o.current}s`};return(0,$.jsxs)(`div`,{className:`cf-boot`,style:l,role:`progressbar`,"aria-label":`载入中`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(n*100),children:[(0,$.jsx)(`div`,{className:`cf-ttl`,children:`藏锋录`}),(0,$.jsx)(`div`,{className:`cf-rule`}),(0,$.jsx)(`div`,{className:`cf-art`,children:(0,$.jsxs)(`svg`,{viewBox:`0 0 100 150`,"aria-hidden":`true`,children:[(0,$.jsxs)(`g`,{fill:`var(--card-lo,#131a28)`,stroke:`var(--gold-line-strong,rgba(217,179,106,.5))`,strokeWidth:`1.3`,children:[(0,$.jsx)(`path`,{d:`M25 122c-5.5 1-8 4.5-7.5 7.5s3.5 5 6 5.2M75 122c5.5 1 8 4.5 7.5 7.5s-3.5 5-6 5.2`,fill:`none`,strokeLinecap:`round`}),(0,$.jsx)(`path`,{d:`M29.5 120c.5 13 5.5 21 20.5 21s20-8 20.5-21z`}),(0,$.jsx)(`path`,{d:`M45.5 140.5h9v4.5h-9zM37.5 145h25v3.5h-25z`})]}),(0,$.jsx)(`rect`,{x:`24`,y:`114.6`,width:`52`,height:`5.4`,rx:`2.7`,fill:`var(--gold-deep,#a9853f)`}),(0,$.jsx)(`path`,{className:`cf-ash`,d:`M41.5 115c1.8-5 15.2-5 17 0z`,fill:`var(--dim,#8d97a9)`}),(0,$.jsx)(`rect`,{className:`cf-stk`,x:`49.1`,y:`28`,width:`1.8`,height:`87`,fill:`var(--gold-deep,#a9853f)`}),(0,$.jsxs)(`g`,{className:`cf-emb`,children:[(0,$.jsx)(`circle`,{className:`cf-glo`,cx:`50`,cy:`28`,r:`4.6`,fill:`var(--gold,#d9b36a)`}),(0,$.jsx)(`circle`,{cx:`50`,cy:`28`,r:`1.7`,fill:`var(--gold-bright,#f2d795)`}),(0,$.jsxs)(`g`,{fill:`none`,stroke:`var(--dim,#8d97a9)`,strokeWidth:`1`,strokeLinecap:`round`,opacity:`.6`,children:[(0,$.jsx)(`path`,{className:`cf-smk`,d:`M50 24c-3.4-4.6 3-7.6 0-12.4`}),(0,$.jsx)(`path`,{className:`cf-smk cf-smk2`,d:`M50 24c3.4-4.6-3-8.4 0-13`}),(0,$.jsx)(`path`,{className:`cf-smk cf-smk3`,d:`M50 24c-2-5.6 2.6-8.4 1.2-12.6`})]})]})]})}),(0,$.jsx)(`div`,{className:c?`cf-lbl cf-lbl-in`:`cf-lbl`,"aria-live":`polite`,children:a},a),(0,$.jsxs)(`div`,{className:`cf-bar`,children:[(0,$.jsxs)(`div`,{className:`cf-trk`,children:[(0,$.jsx)(`i`,{className:`cf-fil`}),n<=0&&(0,$.jsx)(`i`,{className:`cf-swp`})]}),(0,$.jsxs)(`span`,{className:`cf-pct`,children:[Math.round(n*100),`%`]})]})]})}function Ba(e){let t=(0,r.useMemo)(()=>Oa(),[]);return(0,$.jsxs)(`div`,{className:`cover fade-in`,children:[(0,$.jsx)(`div`,{className:`cover-art`,dangerouslySetInnerHTML:{__html:Aa}}),(0,$.jsxs)(`div`,{className:`cover-title`,children:[(0,$.jsx)(`h1`,{children:`藏锋录`}),(0,$.jsx)(`div`,{className:`cover-slogan`,children:`开挂即僭越 · 藏拙以保身`}),(0,$.jsx)(`div`,{className:`cover-sub`,children:`一场瞒过天道的修行`})]}),(0,$.jsxs)(`div`,{className:`cover-actions`,children:[t&&(0,$.jsxs)(`button`,{className:`primary-btn`,onClick:e.onResume,children:[`续 前 缘`,(0,$.jsxs)(`span`,{className:`cover-resume-sub`,children:[t.snap.name,` · 第 `,Math.floor(t.snap.year),` 年`]})]}),(0,$.jsx)(`button`,{className:t?`ghost-btn cover-enter`:`primary-btn`,onClick:e.onEnter,children:t?`另 开 一 世`:`入 世`}),(0,$.jsxs)(`button`,{className:`linklike`,onClick:e.onGallery,children:[`碑林（`,e.save.steles.length,`）`]})]}),(0,$.jsx)(`div`,{className:`cover-bottom`,dangerouslySetInnerHTML:{__html:ja}})]})}var Va=[[`系统`,[`系统`,`金手指`,`面板`,`任务`,`签到`,`弹幕`,`模拟器`,`词条`,`熟练度`,`回收站`,`元叙事`]],[`残魂`,[`残魂`,`独孤离`,`苏婆婆`,`怪谈`,`诡异`,`夺舍`,`鬼道`,`异闻`,`身后事`,`乱葬岗`]],[`心魔`,[`心魔`,`道心`,`心境`,`顿悟`,`悟道`,`诱惑`,`取舍`,`藏拙`]],[`修行`,[`渡劫`,`天劫`,`大劫`,`三灾`,`修行`,`修炼`,`结丹`,`化神`,`合体`,`飞升`,`定道`,`长生`,`功法`,`丹道`]],[`危机`,[`危机`,`冲突`,`战斗`,`决战`,`战争`,`正魔`,`旧仇`,`长期敌对`,`天罚`,`反噬`,`暴露`,`风险`,`打脸`]],[`因果`,[`因果`,`清算`,`道德`,`立誓`,`连锁`,`伏笔`,`飞升伏笔`,`僭越`,`债务`,`把柄`]],[`宗门`,[`宗门`,`同门`,`师承`,`传承`,`经营`,`执法`,`立派`,`派系`,`议事`,`势力`,`站队`,`结盟`,`权柄`,`秩序`]],[`情缘`,[`道侣`,`情感`,`姻缘`,`离别`,`告别`,`道别`,`人情`,`故人`,`伙伴`,`同道`,`人物`]],[`机缘`,[`机缘`,`奇遇`,`秘境`,`天机`,`气运`,`器物`,`法宝`,`丹药`,`资源`,`眼力`,`掠夺`,`摸尸`]],[`市井`,[`市井`,`日常`,`江湖`,`交易`,`游历`,`人际`,`坊市`,`凡人`,`武道`,`见闻`,`人间`]]];function Ha(e){for(let[t,n]of Va)if(e?.some(e=>n.includes(e)))return t;return`常`}var Ua={机缘:`<path d="M8 19 L17 5" /><path d="M6.5 20.5 L9.5 17.5" /><circle cx="17" cy="5" r="1.6" />`,危机:`<path d="M4 18 L20 6" /><path d="M4 18 L8 17.2" /><path d="M20 6 L18.8 9.6" />`,因果:`<path d="M5 12 C5 7, 12 7, 12 12 C12 17, 19 17, 19 12" /><path d="M5 12 C5 17, 12 17, 12 12 C12 7, 19 7, 19 12" />`,心魔:`<circle cx="12" cy="12" r="7.5" /><path d="M9 5.5 L13 12 L10.5 18.5" />`,修行:`<path d="M13.5 4 L8 12.5 H12 L10.5 20 L16 11.5 H12 Z" />`,宗门:`<path d="M3.5 9 L12 4.5 L20.5 9" /><path d="M6 9 V19.5" /><path d="M18 9 V19.5" /><path d="M4 19.5 H20" />`,市井:`<path d="M3 9 H21" /><path d="M6.5 9 V12.5" /><path d="M17.5 9 V12.5" /><path d="M3.5 12.5 H9.5 L8.5 16.5 H4.5 Z" /><path d="M14.5 12.5 H20.5 L19.5 16.5 H15.5 Z" />`,残魂:`<path d="M12 4.5 C7.5 8, 7.5 12, 12 15 C16.5 12, 16.5 8, 12 4.5 Z" /><path d="M8 18 C10 16.5, 14 16.5, 16 18" /><path d="M9.5 20.5 C11 19.5, 13 19.5, 14.5 20.5" />`,系统:`<path d="M4.5 4.5 H19.5 V19.5 H4.5 Z" /><path d="M8 9 H16" /><path d="M8 12.5 H13.5" /><path d="M8 16 H11" />`,情缘:`<path d="M12 19.5 C6 15, 4.5 11.5, 6.5 8.5 C8.5 5.5, 11.5 6.5, 12 9 C12.5 6.5, 15.5 5.5, 17.5 8.5 C19.5 11.5, 18 15, 12 19.5 Z" />`,常:`<circle cx="12" cy="12" r="4" /><path d="M12 5.5 V7" /><path d="M12 17 V18.5" />`};function Wa(e){return`<svg viewBox="0 0 240 30" width="100%" height="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g stroke="currentColor" fill="none" stroke-width="1" stroke-linecap="round" opacity="0.55"><path d="M10 15 H98" /><path d="M142 15 H230" /><path d="M98 15 l5 -3 v6 z" fill="currentColor" stroke="none" opacity="0.7" /><path d="M142 15 l-5 -3 v6 z" fill="currentColor" stroke="none" opacity="0.7" /></g><g transform="translate(108 3)" stroke="currentColor" fill="none" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.85">${Ua[e]}</g></svg>`}var Ga=new Map;function Ka(e){let t=Ha(e),n=Ga.get(t);return n||(n=Wa(t),Ga.set(t,n)),n}var qa={evt_houshan_yiwen:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <linearGradient id="sca_hs_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#101624"/><stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <linearGradient id="sca_hs_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#131a28"/><stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
    <radialGradient id="sca_hs_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.85"/>
      <stop offset="0.45" stop-color="#58b894" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#58b894" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sca_hs_crack" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#58b894" stop-opacity="0.7"/>
      <stop offset="0.5" stop-color="#7fd4b2" stop-opacity="1"/>
      <stop offset="1" stop-color="#58b894" stop-opacity="0.5"/>
    </linearGradient>
    <linearGradient id="sca_hs_shaft" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="390" height="240" fill="url(#sca_hs_sky)"/>
  <circle cx="168" cy="24" r="1" fill="#f2d795" opacity="0.5"/>
  <circle cx="196" cy="12" r="0.8" fill="#f2d795" opacity="0.35"/>
  <circle cx="222" cy="30" r="1.1" fill="#f2d795" opacity="0.4"/>
  <circle cx="184" cy="44" r="0.7" fill="#f2d795" opacity="0.3"/>
  <path d="M0,0 H150 C140,26 150,44 132,58 C110,74 70,60 48,72 C24,82 8,68 0,74 Z" fill="#0d1117"/>
  <path d="M240,0 H390 V66 C360,58 340,76 312,64 C286,54 268,72 250,58 C240,48 246,20 240,0 Z" fill="#0d1117"/>
  <path d="M84,192 C82,150 80,112 76,66 L90,66 C88,116 90,154 94,192 Z" fill="#101624"/>
  <path d="M252,190 C250,150 249,116 246,72 L258,72 C256,118 258,152 262,190 Z" fill="#101624"/>
  <path d="M28,196 C26,150 24,110 20,60 L34,60 C32,110 34,150 38,196 Z" fill="#131a28"/>
  <path d="M20,92 C34,84 46,80 60,80" stroke="#131a28" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M322,200 C320,150 318,105 314,52 L330,52 C328,110 330,155 336,200 Z" fill="#131a28"/>
  <path d="M328,96 C314,88 302,86 290,88" stroke="#131a28" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M356,202 C355,160 354,120 352,78 L364,78 C362,124 364,162 368,202 Z" fill="#131a28"/>
  <path d="M0,190 C60,184 120,188 180,192 C250,197 320,190 390,186 L390,240 H0 Z" fill="url(#sca_hs_ground)"/>
  <ellipse cx="195" cy="162" rx="200" ry="18" fill="#1a2334" opacity="0.18"/>
  <ellipse cx="252" cy="208" rx="122" ry="54" fill="url(#sca_hs_glow)" opacity="0.55"/>
  <path d="M196,226 L252,198 L216,110 L160,132 Z" fill="url(#sca_hs_shaft)" opacity="0.32"/>
  <path d="M180,238 L200,224 L196,214 L214,206 L210,198 L232,194 L236,186 L258,188 L262,180 L284,184 L292,176 L312,180 L318,172 L336,178 L340,182 L320,186 L314,192 L294,190 L288,198 L266,196 L262,204 L240,202 L236,210 L218,214 L214,222 L200,230 L190,240 Z" fill="url(#sca_hs_crack)" opacity="0.85"/>
  <path d="M186,234 L208,218 L226,204 L248,196 L272,190 L296,184 L322,178" stroke="#7fd4b2" stroke-width="6" fill="none" stroke-linejoin="round" stroke-linecap="round" opacity="0.28"/>
  <path d="M186,234 L208,218 L226,204 L248,196 L272,190 L296,184 L322,178" stroke="#7fd4b2" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round" opacity="0.95"/>
  <path d="M258,150 C256,120 254,96 252,74" stroke="#7fd4b2" stroke-width="1" fill="none" opacity="0.25"/>
  <path d="M330,150 C332,120 333,96 334,80" stroke="#7fd4b2" stroke-width="1" fill="none" opacity="0.2"/>
  <circle cx="169" cy="142" r="6.2" fill="#0a0e15"/>
  <path d="M168,148 C160,151 156,159 155,167 C153,179 152,191 148,200 L182,200 C178,189 178,177 177,167 C176,157 174,150 168,148 Z" fill="#0a0e15"/>
  <path d="M175,155 C180,162 184,171 186,180 L182,182 C179,174 175,166 171,158 Z" fill="#0a0e15"/>
  <path d="M180,182 C182,176 190,176 192,182" stroke="#0a0e15" stroke-width="2" fill="none"/>
  <path d="M177,182 L195,182 L192,202 L180,202 Z" fill="#0a0e15"/>
  <path d="M178,189 L194,189 M179,195 L193,195" stroke="#131a28" stroke-width="1"/>
  <path d="M171,136 C174,138 175,142 173,147" stroke="#7fd4b2" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.7"/>
  <path d="M170,150 C174,153 176,160 177,168 C178,178 178,190 182,199" stroke="#7fd4b2" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.75"/>
  <path d="M195,183 L192,201" stroke="#7fd4b2" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M0,240 L0,214 C20,208 36,220 52,214 C66,209 84,222 96,216 L104,240 Z" fill="#0a0e15"/>
  <path d="M340,240 L346,220 C360,212 376,218 390,212 L390,240 Z" fill="#0a0e15"/>
</svg>`,evt_dongxue_sanze:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <radialGradient id="sca_dx_wall" cx="0.5" cy="0.82" r="0.9">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="0.5" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </radialGradient>
    <radialGradient id="sca_dx_glowG" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.95"/>
      <stop offset="0.4" stop-color="#d9b36a" stop-opacity="0.4"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_dx_glowJ" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7fd4b2" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#7fd4b2" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_dx_glowW" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_dx_pool" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sca_dx_shadow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#0a0e15" stop-opacity="0.4"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="390" height="240" fill="#0a0e15"/>
  <rect x="0" y="0" width="390" height="192" fill="url(#sca_dx_wall)"/>
  <path d="M250,40 C262,66 258,96 266,120" stroke="#0a0e15" stroke-width="1.4" fill="none" opacity="0.6"/>
  <path d="M320,30 C314,60 322,92 316,126" stroke="#0a0e15" stroke-width="1.2" fill="none" opacity="0.5"/>
  <path d="M160,36 C154,60 160,84 154,110" stroke="#0a0e15" stroke-width="1.2" fill="none" opacity="0.45"/>
  <path d="M0,0 L110,0 L70,36 L30,24 L0,40 Z" fill="#0a0e15"/>
  <path d="M0,36 L74,54 L112,94 L88,132 L118,170 L0,170 Z" fill="#101624"/>
  <path d="M0,108 L56,122 L86,150 L60,172 L0,172 Z" fill="#131a28"/>
  <path d="M24,170 L52,146 L84,166 L70,180 L30,182 Z" fill="#1a2334"/>
  <path d="M92,160 L112,150 L126,166 L108,176 Z" fill="#131a28"/>
  <path d="M0,188 H390 V240 H0 Z" fill="#0d1117"/>
  <ellipse cx="200" cy="198" rx="152" ry="34" fill="url(#sca_dx_pool)"/>
  <path d="M118,174 L134,164 L146,174 L132,182 Z" fill="#131a28"/>
  <circle cx="155" cy="140" r="34" fill="url(#sca_dx_glowG)"/>
  <ellipse cx="232" cy="146" rx="36" ry="13" fill="url(#sca_dx_glowJ)" opacity="0.85"/>
  <circle cx="300" cy="142" r="27" fill="url(#sca_dx_glowW)" opacity="0.75"/>
  <path d="M120,148 L330,148 L344,158 L106,158 Z" fill="#222d43"/>
  <path d="M120,148 L330,148" stroke="#d9b36a" stroke-width="1" opacity="0.35"/>
  <rect x="106" y="158" width="238" height="16" fill="#131a28"/>
  <rect x="140" y="174" width="40" height="16" fill="#101624"/>
  <rect x="270" y="174" width="40" height="16" fill="#101624"/>
  <rect x="106" y="174" width="238" height="14" fill="#0a0e15" opacity="0.5"/>
  <g transform="rotate(8 155 138)">
    <rect x="151" y="128" width="8" height="20" rx="1.5" fill="#f2d795" opacity="0.95"/>
    <path d="M155,131 L155,145" stroke="#a9853f" stroke-width="1"/>
  </g>
  <path d="M204,152 L254,143 L257,146 L207,156 Z" fill="#7fd4b2" opacity="0.82"/>
  <path d="M263,141 L275,138 L277,141 L265,144 Z" fill="#7fd4b2" opacity="0.6"/>
  <path d="M195,153 L204,151 L205,155 L196,157 Z" fill="#a9853f"/>
  <path d="M203,149 L206,158" stroke="#a9853f" stroke-width="2"/>
  <path d="M286,152 C286,140 314,140 314,152 C314,160 307,164 300,164 C293,164 286,160 286,152 Z" fill="#0d1117" stroke="#d9b36a" stroke-width="1.2" stroke-opacity="0.85"/>
  <path d="M291,141 L291,135 M309,141 L309,135" stroke="#d9b36a" stroke-width="1.6" stroke-opacity="0.7" stroke-linecap="round"/>
  <path d="M292,164 L290,170 M300,165 L300,171 M308,164 L310,170" stroke="#d9b36a" stroke-width="1.4" stroke-opacity="0.5" stroke-linecap="round"/>
  <path d="M176,206 L214,206 L262,240 L118,240 Z" fill="url(#sca_dx_shadow)"/>
  <circle cx="195" cy="132" r="7" fill="#0a0e15"/>
  <path d="M195,139 C185,141 180,150 179,160 C177,176 176,194 172,208 L218,208 C214,194 213,176 211,160 C210,150 205,141 195,139 Z" fill="#0a0e15"/>
  <path d="M188,127 C190,123 200,123 202,127" stroke="#f2d795" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.8"/>
  <path d="M188,141 C182,146 180,154 179,163 C177,178 176,194 172,207" stroke="#d9b36a" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.75"/>
  <path d="M202,141 C208,146 210,154 211,163 C213,178 214,194 218,207" stroke="#f2d795" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.9"/>
  <path d="M0,0 H390 V16 C340,28 300,12 250,22 C200,30 150,14 100,24 C60,30 20,18 0,24 Z" fill="#0a0e15" opacity="0.9"/>
  <path d="M0,0 L30,0 C20,80 22,160 12,240 L0,240 Z" fill="#0a0e15" opacity="0.8"/>
  <path d="M390,0 L360,0 C370,80 368,160 378,240 L390,240 Z" fill="#0a0e15" opacity="0.8"/>
</svg>`,evt_yujian_renzhu:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <radialGradient id="sca_yj_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.95"/>
      <stop offset="0.3" stop-color="#d9b36a" stop-opacity="0.5"/>
      <stop offset="0.65" stop-color="#a9853f" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_yj_pool" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_yj_vig" cx="0.5" cy="0.48" r="0.72">
      <stop offset="0" stop-color="#0a0e15" stop-opacity="0"/>
      <stop offset="0.55" stop-color="#0a0e15" stop-opacity="0"/>
      <stop offset="0.8" stop-color="#0a0e15" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#0a0e15" stop-opacity="0.95"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="390" height="240" fill="#0d1117"/>
  <circle cx="224" cy="115" r="104" fill="url(#sca_yj_glow)" opacity="0.9"/>
  <circle cx="226" cy="115" r="26" fill="#f2d795" opacity="0.18"/>
  <ellipse cx="198" cy="194" rx="118" ry="24" fill="url(#sca_yj_pool)" opacity="0.6"/>
  <circle cx="197" cy="105" r="6.4" fill="#0a0e15"/>
  <path d="M197,111 C188,114 184,122 183,132 C182,144 178,158 170,170 C164,178 160,184 159,190 L192,190 C196,183 203,181 208,184 L212,190 C210,180 208,168 207,156 L206,144 C206,130 204,117 199,112 Z" fill="#0a0e15"/>
  <path d="M199,116 C206,120 212,124 218,126 L227,124 L228,129 L218,131 C210,131 202,127 196,123 Z" fill="#0a0e15"/>
  <path d="M201,99 C205,101 206,107 203,111" stroke="#f2d795" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.85"/>
  <path d="M200,112 C204,118 206,128 206,140 C206,156 209,172 213,186" stroke="#f2d795" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.85"/>
  <path d="M201,118 C209,123 216,126 223,127" stroke="#f2d795" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.85"/>
  <g transform="rotate(10 226 116)">
    <rect x="222" y="108" width="8" height="16" rx="1.5" fill="#f2d795"/>
    <path d="M226,110 L226,122" stroke="#a9853f" stroke-width="1"/>
  </g>
  <circle cx="226" cy="116" r="15" stroke="#f2d795" stroke-width="1" fill="none" opacity="0.35"/>
  <circle cx="226" cy="116" r="23" stroke="#f2d795" stroke-width="0.8" fill="none" opacity="0.16"/>
  <path d="M224,120 C216,128 206,130 199,127 C194,124 193,119 196,114 C199,110 202,106 203,103" stroke="#f2d795" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.95"/>
  <path d="M227,112 C222,128 210,134 200,131 C193,128 190,121 194,115" stroke="#f2d795" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M222,118 C214,117 208,112 205,106" stroke="#f2d795" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.45"/>
  <circle cx="203" cy="103" r="5.5" fill="#f2d795" opacity="0.22"/>
  <circle cx="203" cy="103" r="2.1" fill="#f2d795"/>
  <circle cx="244" cy="96" r="1.1" fill="#f2d795" opacity="0.55"/>
  <circle cx="252" cy="132" r="0.9" fill="#f2d795" opacity="0.4"/>
  <circle cx="186" cy="86" r="0.9" fill="#f2d795" opacity="0.45"/>
  <circle cx="238" cy="148" r="0.8" fill="#d9b36a" opacity="0.4"/>
  <rect x="0" y="0" width="390" height="240" fill="url(#sca_yj_vig)"/>
</svg>`,evt_waimen_qiangling:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <linearGradient id="sca_wm_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="0.65" stop-color="#101624"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="sca_wm_moon" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sca_wm_path" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="390" height="240" fill="url(#sca_wm_sky)"/>
  <circle cx="296" cy="52" r="42" fill="url(#sca_wm_moon)" opacity="0.5"/>
  <circle cx="296" cy="52" r="15" fill="#f2d795" opacity="0.85"/>
  <path d="M250,38 C280,32 320,34 352,40 L352,46 C320,44 284,46 254,46 Z" fill="#131a28" opacity="0.7"/>
  <path d="M230,52 C258,44 300,46 330,54 C356,60 372,56 390,60 L390,72 C350,74 310,70 270,72 C248,72 236,66 230,60 Z" fill="#131a28" opacity="0.92"/>
  <path d="M0,96 C50,84 90,92 140,80 C190,68 240,86 290,78 C330,72 360,82 390,74 L390,240 H0 Z" fill="#101624"/>
  <path d="M0,130 C60,118 110,128 170,116 C230,106 300,122 390,110 L390,240 H0 Z" fill="#0d1117"/>
  <path d="M0,178 C80,164 160,172 250,160 C300,154 350,162 390,154 L390,240 H0 Z" fill="#0a0e15"/>
  <path d="M108,240 C132,212 156,192 186,178 L200,174 C216,186 220,212 226,240 Z" fill="url(#sca_wm_path)" opacity="0.95"/>
  <path d="M200,174 C226,164 254,158 282,154 L292,157 C264,162 238,170 214,184 C209,180 204,177 200,174 Z" fill="url(#sca_wm_path)" opacity="0.85"/>
  <path d="M186,178 C166,172 146,170 126,168 L120,172 C142,175 162,180 176,188 C179,184 182,181 186,178 Z" fill="url(#sca_wm_path)" opacity="0.75"/>
  <ellipse cx="204" cy="182" rx="80" ry="16" fill="#f2d795" opacity="0.05"/>
  <path d="M264,162 L273,124" stroke="#0a0e15" stroke-width="2.6" stroke-linecap="round"/>
  <circle cx="251" cy="121" r="4.6" fill="#0a0e15"/>
  <path d="M251,126 C246,128 244,133 244,139 C243,145 244,151 243,161 L249,161 L250,148 L253,148 L255,162 L261,162 C259,152 258,144 258,137 C258,130 256,127 251,126 Z" fill="#0a0e15"/>
  <path d="M256,130 C260,128 266,126 271,124 L272,127 C267,129 262,132 258,134 Z" fill="#0a0e15"/>
  <path d="M247,129 C242,131 240,135 242,139 L245,138 C244,135 246,132 249,131 Z" fill="#0a0e15"/>
  <path d="M247,117 C249,115 253,115 255,118" stroke="#f2d795" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.5"/>
  <path d="M257,128 C260,130 262,133 263,137" stroke="#f2d795" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.4"/>
  <circle cx="276" cy="116" r="4" fill="#0a0e15"/>
  <path d="M276,121 C271,123 270,128 269,134 L269,156 L283,156 L282,134 C282,127 280,122 276,121 Z" fill="#0a0e15"/>
  <path d="M270,136 L261,146" stroke="#0a0e15" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M272,113 C274,111 278,111 280,114" stroke="#f2d795" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.4"/>
  <circle cx="238" cy="120" r="4" fill="#0a0e15"/>
  <path d="M238,125 C234,127 233,132 232,138 L231,158 L245,158 L244,138 C244,131 242,126 238,125 Z" fill="#0a0e15"/>
  <path d="M234,117 C236,115 240,115 242,118" stroke="#f2d795" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.35"/>
  <circle cx="158" cy="152" r="6" fill="#0a0e15"/>
  <path d="M158,158 C150,160 146,168 145,177 C144,190 143,204 140,216 L174,216 C171,204 170,190 169,177 C168,168 165,160 158,158 Z" fill="#0a0e15"/>
  <path d="M162,147 C165,149 166,153 165,156" stroke="#f2d795" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.55"/>
  <path d="M164,160 C168,166 169,174 169,182 C169,194 171,206 174,215" stroke="#f2d795" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.5"/>
  <path d="M0,240 L0,218 C30,214 60,222 90,218 L96,240 Z" fill="#0a0e15"/>
  <path d="M300,240 L306,224 C336,218 364,226 390,220 L390,240 Z" fill="#0a0e15"/>
  <path d="M60,218 C62,212 61,208 58,204 M74,220 C77,214 77,210 75,206 M320,226 C322,220 321,216 318,212" stroke="#131a28" stroke-width="1.2" fill="none" stroke-linecap="round"/>
</svg>`,evt_dingdao:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <linearGradient id="sca_dd_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="0.6" stop-color="#101624"/>
      <stop offset="0.88" stop-color="#1a2334"/>
      <stop offset="1" stop-color="#a9853f"/>
    </linearGradient>
    <radialGradient id="sca_dd_hor" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.55"/>
      <stop offset="0.5" stop-color="#a9853f" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sca_dd_floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="390" height="192" fill="url(#sca_dd_sky)"/>
  <ellipse cx="268" cy="142" rx="150" ry="42" fill="url(#sca_dd_hor)" opacity="0.85"/>
  <path d="M0,150 C50,138 90,146 130,136 C180,124 220,140 260,128 C300,118 350,134 390,124 L390,192 H0 Z" fill="#1a2334" opacity="0.85"/>
  <path d="M0,162 C60,150 120,160 180,148 C240,138 310,154 390,142 L390,192 H0 Z" fill="#131a28"/>
  <ellipse cx="220" cy="158" rx="190" ry="10" fill="#8d97a9" opacity="0.12"/>
  <path d="M0,176 C70,166 150,174 230,162 C290,155 350,166 390,158 L390,192 H0 Z" fill="#0d1117"/>
  <path d="M0,190 L390,182 L390,240 L0,240 Z" fill="url(#sca_dd_floor)"/>
  <path d="M0,202 L390,196 M0,216 L390,212 M0,230 L390,228" stroke="#0a0e15" stroke-width="1" opacity="0.5"/>
  <rect x="246" y="174" width="144" height="3" fill="#0a0e15"/>
  <rect x="258" y="177" width="3" height="13" fill="#0a0e15"/>
  <rect x="294" y="177" width="3" height="13" fill="#0a0e15"/>
  <rect x="330" y="177" width="3" height="13" fill="#0a0e15"/>
  <rect x="366" y="177" width="3" height="13" fill="#0a0e15"/>
  <circle cx="152" cy="114" r="2.4" fill="#0a0e15"/>
  <path d="M147,114 L159,111" stroke="#d9b36a" stroke-width="1.2" stroke-linecap="round" opacity="0.9"/>
  <circle cx="152" cy="122" r="6.5" fill="#0a0e15"/>
  <path d="M152,128 C144,130 140,138 139,147 C138,162 137,180 133,196 L169,196 C166,180 165,162 164,147 C163,138 159,130 152,128 Z" fill="#0a0e15"/>
  <ellipse cx="137" cy="151" rx="3.6" ry="5.2" fill="#0a0e15"/>
  <path d="M156,116 C160,119 161,124 158,128" stroke="#f2d795" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.75"/>
  <path d="M158,130 C163,136 164,146 164,156 C165,172 166,186 169,195" stroke="#f2d795" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.8"/>
  <circle cx="240" cy="166" r="5.6" fill="#0a0e15"/>
  <path d="M241,171 C248,172 255,176 260,181 C264,186 265,192 265,199 C265,205 264,211 263,216 L249,216 C250,209 250,201 249,194 C245,189 240,184 236,178 C236,174 238,171 241,171 Z" fill="#0a0e15"/>
  <path d="M238,176 C234,180 233,184 236,187 C239,188 242,186 243,183 Z" fill="#0a0e15"/>
  <path d="M244,172 C252,174 258,179 262,184" stroke="#f2d795" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.55"/>
  <ellipse cx="182" cy="204" rx="3" ry="1.4" fill="#d9b36a" opacity="0.7" transform="rotate(-20 182 204)"/>
  <ellipse cx="194" cy="214" rx="3" ry="1.3" fill="#a9853f" opacity="0.6" transform="rotate(15 194 214)"/>
  <ellipse cx="204" cy="199" rx="2.6" ry="1.2" fill="#d9b36a" opacity="0.5" transform="rotate(40 204 199)"/>
  <ellipse cx="214" cy="220" rx="3.2" ry="1.5" fill="#d9b36a" opacity="0.75" transform="rotate(-35 214 220)"/>
  <ellipse cx="224" cy="206" rx="2.8" ry="1.3" fill="#a9853f" opacity="0.55" transform="rotate(10 224 206)"/>
  <ellipse cx="188" cy="224" rx="3" ry="1.4" fill="#d9b36a" opacity="0.6" transform="rotate(30 188 224)"/>
  <ellipse cx="232" cy="216" rx="2.6" ry="1.2" fill="#d9b36a" opacity="0.5" transform="rotate(-15 232 216)"/>
  <ellipse cx="176" cy="215" rx="2.4" ry="1.1" fill="#a9853f" opacity="0.5" transform="rotate(50 176 215)"/>
  <ellipse cx="210" cy="209" rx="2.8" ry="1.3" fill="#d9b36a" opacity="0.65" transform="rotate(-45 210 209)"/>
  <ellipse cx="206" cy="168" rx="2.6" ry="1.2" fill="#d9b36a" opacity="0.7" transform="rotate(20 206 168)"/>
  <ellipse cx="220" cy="180" rx="2.4" ry="1.1" fill="#d9b36a" opacity="0.6" transform="rotate(-30 220 180)"/>
  <path d="M390,18 C358,24 334,34 318,52 C336,52 356,46 372,38 C380,34 386,28 390,30 Z" fill="#0a0e15"/>
  <path d="M348,44 C338,50 330,52 322,52 M366,34 C356,40 348,44 340,46" stroke="#0d1117" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`,evt_jiedan_qianye:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <radialGradient id="sca_jd_wall" cx="0.33" cy="0.72" r="0.85">
      <stop offset="0" stop-color="#1a2334"/>
      <stop offset="0.5" stop-color="#131a28"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </radialGradient>
    <radialGradient id="sca_jd_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.95"/>
      <stop offset="0.25" stop-color="#d9b36a" stop-opacity="0.5"/>
      <stop offset="0.6" stop-color="#a9853f" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#a9853f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="sca_jd_pool" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="390" height="240" fill="#0a0e15"/>
  <rect x="0" y="0" width="390" height="200" fill="url(#sca_jd_wall)"/>
  <path d="M200,40 C208,70 202,104 210,134" stroke="#0a0e15" stroke-width="1.4" fill="none" opacity="0.5"/>
  <path d="M300,50 C294,80 302,110 296,140" stroke="#0a0e15" stroke-width="1.2" fill="none" opacity="0.45"/>
  <path d="M70,60 C76,90 70,118 78,148" stroke="#0a0e15" stroke-width="1.2" fill="none" opacity="0.4"/>
  <path d="M0,0 H390 V30 C340,44 300,22 250,38 C200,50 150,26 100,40 C60,48 24,30 0,42 Z" fill="#0a0e15"/>
  <path d="M0,0 L40,0 C30,60 34,120 24,180 L0,190 Z" fill="#0a0e15" opacity="0.92"/>
  <path d="M390,0 L344,0 C352,70 348,140 360,200 L390,208 Z" fill="#0a0e15" opacity="0.92"/>
  <path d="M0,192 C80,186 200,190 300,186 C340,184 370,186 390,184 L390,240 H0 Z" fill="#0d1117"/>
  <ellipse cx="152" cy="200" rx="142" ry="38" fill="url(#sca_jd_pool)"/>
  <circle cx="118" cy="158" r="68" fill="url(#sca_jd_glow)" opacity="0.95"/>
  <ellipse cx="300" cy="146" rx="46" ry="58" fill="#0a0e15" opacity="0.5"/>
  <circle cx="290" cy="92" r="17" fill="#0a0e15" opacity="0.45"/>
  <path d="M104,178 L132,178 L128,190 L108,190 Z" fill="#0a0e15"/>
  <rect x="114" y="162" width="7" height="16" rx="1.5" fill="#d9b36a"/>
  <path d="M117.5,149 C113.5,155 113.5,159 117.5,163 C121.5,159 121.5,155 117.5,149 Z" fill="#d9b36a"/>
  <path d="M117.5,153 C115.5,156 115.5,159 117.5,161 C119.5,159 119.5,156 117.5,153 Z" fill="#f2d795"/>
  <circle cx="117.5" cy="156" r="9" fill="#f2d795" opacity="0.3"/>
  <circle cx="150" cy="184" r="4" fill="#0a0e15"/>
  <circle cx="150" cy="192" r="6" fill="#0a0e15"/>
  <path d="M146,186 C144,189 144,193 146,196" stroke="#d9b36a" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.7"/>
  <rect x="165" y="170" width="3" height="8" fill="#0a0e15"/>
  <rect x="163" y="177" width="7" height="19" rx="2" fill="#0a0e15"/>
  <path d="M164,179 L164,194" stroke="#d9b36a" stroke-width="1" stroke-linecap="round" opacity="0.65"/>
  <ellipse cx="182" cy="192" rx="7" ry="6" fill="#0a0e15"/>
  <path d="M177,189 C176,191 176,194 178,196" stroke="#d9b36a" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6"/>
  <rect x="194" y="184" width="16" height="11" rx="1" fill="#0a0e15"/>
  <path d="M194,187 L210,187" stroke="#a9853f" stroke-width="0.9" opacity="0.6"/>
  <path d="M195,185 L195,194" stroke="#d9b36a" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
  <rect x="216" y="187" width="5" height="9" rx="1" fill="#0a0e15"/>
  <rect x="223" y="189" width="4" height="7" rx="1" fill="#0a0e15"/>
  <g transform="rotate(-8 206 201)">
    <rect x="198" y="199" width="16" height="4" rx="2" fill="#0a0e15"/>
    <path d="M199,199.5 L213,199.5" stroke="#a9853f" stroke-width="0.8" opacity="0.5"/>
  </g>
  <circle cx="171" cy="200" r="1.3" fill="#d9b36a" opacity="0.85"/>
  <circle cx="176" cy="203" r="1.1" fill="#d9b36a" opacity="0.7"/>
  <circle cx="188" cy="201" r="1.2" fill="#f2d795" opacity="0.6"/>
  <circle cx="242" cy="130" r="6.5" fill="#0a0e15"/>
  <path d="M246,136 C238,138 234,144 232,152 C230,162 230,170 231,177 L272,177 C273,168 272,158 269,150 C266,141 258,136 246,136 Z" fill="#0a0e15"/>
  <path d="M226,178 C230,172 246,169 256,170 C268,170 276,174 278,180 C279,185 274,188 264,189 L238,189 C230,188 224,184 226,178 Z" fill="#0a0e15"/>
  <path d="M237,124 C234,127 233,132 235,136 C236,133 236,129 238,125 Z" fill="#d9b36a" opacity="0.75"/>
  <path d="M238,123 C241,121 245,121 248,124" stroke="#d9b36a" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.5"/>
  <path d="M241,137 C235,140 233,146 232,154 C231,162 230,170 231,176" stroke="#d9b36a" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.8"/>
  <path d="M228,178 C232,173 240,170 250,170" stroke="#d9b36a" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M0,240 L0,222 C60,226 120,222 180,226 C250,230 320,224 390,228 L390,240 Z" fill="#0a0e15" opacity="0.75"/>
</svg>`},Ja={evt_diyitiao_renming:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="scb_yp_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15"/>
      <stop offset="0.72" stop-color="#101624"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
    <radialGradient id="scb_yp_moon" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.5"/>
      <stop offset="0.42" stop-color="#f2d795" stop-opacity="0.13"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="scb_yp_ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1e2940"/>
      <stop offset="1" stop-color="#0d1117"/>
    </linearGradient>
    <radialGradient id="scb_yp_pool" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.11"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="240" fill="url(#scb_yp_sky)"/>
  <circle cx="40" cy="30" r="0.8" fill="#f2d795" opacity="0.35"/>
  <circle cx="92" cy="18" r="0.6" fill="#f2d795" opacity="0.25"/>
  <circle cx="150" cy="36" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="208" cy="22" r="0.55" fill="#f2d795" opacity="0.24"/>
  <circle cx="252" cy="40" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="358" cy="24" r="0.8" fill="#f2d795" opacity="0.34"/>
  <circle cx="306" cy="46" r="46" fill="url(#scb_yp_moon)"/>
  <circle cx="306" cy="46" r="17" fill="#f2d795" opacity="0.92"/>
  <circle cx="311" cy="41" r="3" fill="#d9b36a" opacity="0.28"/>
  <circle cx="301" cy="51" r="2" fill="#d9b36a" opacity="0.2"/>
  <path d="M0,132 C50,120 110,127 160,117 C220,105 280,123 330,113 C352,109 372,113 390,109 L390,155 L0,155 Z" fill="#0f1626"/>
  <path d="M0,150 C60,142 140,148 210,140 C280,132 340,144 390,136 L390,175 L0,175 Z" fill="#131a28"/>
  <path d="M0,166 C90,158 200,164 300,158 C335,155 365,158 390,154 L390,240 L0,240 Z" fill="url(#scb_yp_ground)"/>
  <ellipse cx="220" cy="192" rx="155" ry="48" fill="url(#scb_yp_pool)"/>
  <path d="M14,176 q6,-6 12,0 M40,175 q6,-6 12,0 M66,175 q6,-6 12,0 M92,174 q6,-6 12,0 M232,173 q6,-6 12,0 M258,172 q6,-6 12,0 M284,172 q6,-6 12,0" fill="none" stroke="#0b111c" stroke-width="2.2"/>
  <path d="M10,196 q8,-8 16,0 M42,195 q8,-8 16,0 M74,195 q8,-8 16,0 M232,192 q8,-8 16,0 M264,191 q8,-8 16,0" fill="none" stroke="#0a0f1a" stroke-width="2.6"/>
  <path d="M26,214 q10,-10 20,0 M66,213 q10,-10 20,0 M250,210 q10,-10 20,0 M292,210 q10,-10 20,0 M336,212 q10,-10 20,0" fill="none" stroke="#080d16" stroke-width="3"/>
  <path d="M34,208 l3,-6 M42,208 l0,-7 M74,207 l3,-6 M258,204 l3,-6 M266,204 l0,-7 M300,204 l3,-6" stroke="#7fd4b2" stroke-opacity="0.22" stroke-width="1"/>
  <path d="M390,146 C348,150 306,156 274,162 C254,166 240,172 228,180 C222,186 218,196 216,240 L390,240 Z" fill="#0e1524"/>
  <path d="M390,146 C348,150 306,156 274,162 C254,166 240,172 229,179" fill="none" stroke="#f2d795" stroke-opacity="0.14" stroke-width="1.4"/>
  <ellipse cx="238" cy="216" rx="42" ry="9" fill="#05070b" opacity="0.55"/>
  <ellipse cx="112" cy="205" rx="30" ry="6" fill="#05070b" opacity="0.5"/>
  <ellipse cx="118" cy="202" rx="17" ry="5.5" fill="#05070b"/>
  <path d="M101,200 C106,197.5 112,196.5 118,196.5 C124,196.5 130,197.5 135,200" fill="none" stroke="#7fd4b2" stroke-opacity="0.14" stroke-width="1.2"/>
  <path d="M98,199 q5,-4 10,0 M132,198 q5,-4 10,0" fill="none" stroke="#0a0f1a" stroke-width="2.4"/>
  <circle cx="150" cy="161" r="1.9" fill="#06080c"/>
  <circle cx="152" cy="166" r="5.2" fill="#06080c"/>
  <path d="M147,171 C145,178 144,185 143.5,191 C143.5,193 145,194.5 148,195 L160,195.5 C160,188 158,178 155.5,170.5 Z" fill="#06080c"/>
  <path d="M143.5,191 C138,193 133.5,196 131,198.5 L147,200 L148.5,194.5 Z" fill="#06080c"/>
  <path d="M154,172 C160,168 166,164.5 172,162.5" fill="none" stroke="#06080c" stroke-width="3" stroke-linecap="round"/>
  <path d="M153,177 C160,174 167,171 173.5,169.5" fill="none" stroke="#06080c" stroke-width="3" stroke-linecap="round"/>
  <circle cx="173" cy="162" r="1.7" fill="#06080c"/>
  <circle cx="174.5" cy="169.3" r="1.7" fill="#06080c"/>
  <path d="M150.5,161.5 C152.5,159.5 155,158.5 157.5,159" fill="none" stroke="#f2d795" stroke-opacity="0.4" stroke-width="1"/>
  <circle cx="269" cy="110" r="2.1" fill="#06080c"/>
  <circle cx="270" cy="117" r="5.5" fill="#06080c"/>
  <path d="M270,123 C264,125 261.5,131 260.5,139 C259.5,149 258.5,155 256.5,161 L284.5,161 C281.5,151 279.5,139 278.5,129 C277.5,124.5 274.5,123 270,123 Z" fill="#06080c"/>
  <path d="M262,132 C259,137 257.5,143 257,148" fill="none" stroke="#06080c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M278.5,128 C281,132 283,136 284,141" fill="none" stroke="#f2d795" stroke-opacity="0.32" stroke-width="1.1"/>
  <path d="M272.5,112.5 C274.5,111 276.5,110.5 278.5,111" fill="none" stroke="#f2d795" stroke-opacity="0.42" stroke-width="1"/>
  <path d="M256.5,161 C245,175 236,192 231,212 L258,206 C262,190 270,175 281,163 Z" fill="#05070b" opacity="0.5"/>
  <path d="M190,206 L212,199" stroke="#06080c" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M212,199 C219,194 223,188 224.5,181 C220.5,186.5 214.5,192 209.5,195.5 Z" fill="#06080c"/>
  <path d="M212,198 C218,193.5 222,188.5 223.6,182.5" fill="none" stroke="#f2d795" stroke-opacity="0.55" stroke-width="0.9"/>
</svg>`,evt_ob_chengnianli:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="scb_jl_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15"/>
      <stop offset="1" stop-color="#182238"/>
    </linearGradient>
    <radialGradient id="scb_jl_moon" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#e7e0cf" stop-opacity="0.5"/>
      <stop offset="0.45" stop-color="#e7e0cf" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#e7e0cf" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="scb_jl_snow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#33405e"/>
      <stop offset="1" stop-color="#1f2940"/>
    </linearGradient>
    <linearGradient id="scb_jl_bone" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#e7e0cf" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#e7e0cf" stop-opacity="0.55"/>
    </linearGradient>
    <radialGradient id="scb_jl_pool" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#e7e0cf" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#e7e0cf" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="390" height="240" fill="url(#scb_jl_sky)"/>
  <circle cx="95" cy="40" r="40" fill="url(#scb_jl_moon)"/>
  <circle cx="95" cy="40" r="13" fill="#e7e0cf" opacity="0.88"/>
  <circle cx="210" cy="26" r="0.7" fill="#e7e0cf" opacity="0.3"/>
  <circle cx="264" cy="16" r="0.6" fill="#e7e0cf" opacity="0.26"/>
  <circle cx="318" cy="34" r="0.8" fill="#e7e0cf" opacity="0.32"/>
  <circle cx="356" cy="18" r="0.55" fill="#e7e0cf" opacity="0.24"/>
  <path d="M0,142 C70,136 150,140 230,136 C300,133 350,138 390,134 L390,240 L0,240 Z" fill="url(#scb_jl_snow)"/>
  <ellipse cx="195" cy="180" rx="160" ry="50" fill="url(#scb_jl_pool)"/>
  <path d="M0,158 C60,154 130,158 200,155 M120,172 C190,168 260,172 330,168 M40,196 C120,191 210,196 300,191" fill="none" stroke="#8d97a9" stroke-opacity="0.14" stroke-width="1.4"/>
  <path d="M58,136 l0,-8 M64,131 a3,3 0 1 1 0.1,0 M74,131 a3.4,3.4 0 1 1 0.1,0 M84,132 a3,3 0 1 1 0.1,0 M96,131 a3.2,3.2 0 1 1 0.1,0 M108,132 a3,3 0 1 1 0.1,0" fill="#0a0f1a" stroke="#0a0f1a" stroke-width="1"/>
  <path d="M56,140 L114,140 L114,136 C104,133 94,132 84,132.5 C74,133 64,135 56,137 Z" fill="#0a0f1a"/>
  <path d="M282,135 l0,-9 M290,130 a3.2,3.2 0 1 1 0.1,0 M300,130 a3,3 0 1 1 0.1,0 M310,131 a3.4,3.4 0 1 1 0.1,0 M322,130 a3,3 0 1 1 0.1,0 M332,131 a3.2,3.2 0 1 1 0.1,0 M342,132 a2.8,2.8 0 1 1 0.1,0" fill="#0a0f1a" stroke="#0a0f1a" stroke-width="1"/>
  <path d="M284,139 L348,139 L348,135 C337,132 326,131 315,131.5 C304,132 293,134 284,136 Z" fill="#0a0f1a"/>
  <path d="M152,152 C149,120 159,92 188,77 C171,95 163,121 166,150 Z" fill="url(#scb_jl_bone)"/>
  <path d="M238,152 C241,120 231,92 202,77 C219,95 227,121 224,150 Z" fill="url(#scb_jl_bone)"/>
  <path d="M154,132 l11,-2 M153,116 l11,-3 M158,100 l10,-5 M236,132 l-11,-2 M237,116 l-11,-3 M232,100 l-10,-5" stroke="#0f1626" stroke-opacity="0.6" stroke-width="1.4"/>
  <path d="M195,80 l0,6" stroke="#e7e0cf" stroke-opacity="0.35" stroke-width="1"/>
  <circle cx="195" cy="88.5" r="2" fill="none" stroke="#e7e0cf" stroke-opacity="0.4" stroke-width="1.1"/>
  <ellipse cx="147" cy="181" rx="26" ry="5" fill="#0a0f1a" opacity="0.45"/>
  <ellipse cx="242" cy="182" rx="34" ry="5.5" fill="#0a0f1a" opacity="0.45"/>
  <circle cx="154" cy="150" r="4.8" fill="#0a0f1a"/>
  <path d="M151,146 C148,144 146,144 144,145 C146,147 148,148 150,149 Z" fill="#0a0f1a"/>
  <path d="M154,155 L146,168" stroke="#0a0f1a" stroke-width="7" stroke-linecap="round"/>
  <path d="M150,160 L166,166" stroke="#0a0f1a" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M166,166 L177,163.5" stroke="#e7e0cf" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
  <path d="M149,161 L138,156" stroke="#0a0f1a" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M146,168 L153,173 L153,180" fill="none" stroke="#0a0f1a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M146,168 L134,174 L131,180" fill="none" stroke="#0a0f1a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M152,156 C147,153 142,152 137,153 C141,156 146,158 150,159 Z" fill="#0a0f1a"/>
  <path d="M156.5,147 C158.5,145.5 160.5,145 162.5,145.5" fill="none" stroke="#e7e0cf" stroke-opacity="0.4" stroke-width="1"/>
  <path d="M214,158 C209,149 210,140 217,133 C214,141 214,150 217,157 Z" fill="#0a0f1a"/>
  <path d="M220,157 C217,149 219,141 226,136 C222,143 222,151 224,157 Z" fill="#0a0f1a"/>
  <path d="M203,168 C208,163 214,159.5 221,159 C232,155 247,154.5 257,158.5 C263,161 266,165.5 265.5,170.5 C263,175 258,177.5 251,178 L221,178 C213,177 207,174 203,170.5 Z" fill="#0a0f1a"/>
  <path d="M203,168 C199,169.5 196,171.5 194,174 L206,174.5 Z" fill="#0a0f1a"/>
  <path d="M222,160 l3,-4 M230,158 l3,-4 M238,157 l3,-4" stroke="#0a0f1a" stroke-width="2" stroke-linecap="round"/>
  <path d="M264,167 C269,162 272,156 271,149 C274,156 273,164 268,170 Z" fill="#0a0f1a"/>
  <path d="M225,178 L223,183 M237,178 L236,183 M251,178 L250,183" stroke="#0a0f1a" stroke-width="3.6" stroke-linecap="round"/>
  <circle cx="207" cy="166" r="1.1" fill="#f07a66" opacity="0.9"/>
  <ellipse cx="186" cy="163" rx="6" ry="2.4" fill="#e7e0cf" opacity="0.13"/>
  <ellipse cx="197" cy="167" rx="5" ry="2" fill="#e7e0cf" opacity="0.1"/>
  <circle cx="60" cy="70" r="1" fill="#e7e0cf" opacity="0.4"/>
  <circle cx="140" cy="52" r="0.8" fill="#e7e0cf" opacity="0.35"/>
  <circle cx="230" cy="60" r="1" fill="#e7e0cf" opacity="0.4"/>
  <circle cx="300" cy="80" r="0.8" fill="#e7e0cf" opacity="0.3"/>
  <circle cx="90" cy="120" r="1" fill="#e7e0cf" opacity="0.35"/>
  <circle cx="330" cy="110" r="0.9" fill="#e7e0cf" opacity="0.3"/>
  <circle cx="170" cy="200" r="1.1" fill="#e7e0cf" opacity="0.4"/>
  <circle cx="280" cy="215" r="1" fill="#e7e0cf" opacity="0.32"/>
  <circle cx="50" cy="190" r="1" fill="#e7e0cf" opacity="0.32"/>
</svg>`,evt_a4c_xinmo_dajie:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <radialGradient id="scb_xm_bg" cx="0.5" cy="0.5" r="0.75">
      <stop offset="0" stop-color="#131a28"/>
      <stop offset="1" stop-color="#07090f"/>
    </radialGradient>
    <radialGradient id="scb_xm_fog" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#8d97a9" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#8d97a9" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="scb_xm_glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#e7e0cf" stop-opacity="0.13"/>
      <stop offset="1" stop-color="#e7e0cf" stop-opacity="0"/>
    </radialGradient>
    <g id="scb_xm_fig">
      <circle cx="151" cy="84" r="2.4"/>
      <circle cx="153" cy="92" r="6.5"/>
      <path d="M153,99 C147,101 144,108 143,118 C142,136 141,156 138,176 L166,176 C163,158 162,138 161,118 C160,106 158,100 153,99 Z"/>
      <path d="M146,112 C143,120 142,130 141.5,140 M160,112 C162,120 163,130 163.5,140" fill="none" stroke-width="1.2"/>
    </g>
  </defs>
  <rect width="390" height="240" fill="url(#scb_xm_bg)"/>
  <ellipse cx="100" cy="52" rx="130" ry="34" fill="url(#scb_xm_fog)"/>
  <ellipse cx="300" cy="40" rx="120" ry="30" fill="url(#scb_xm_fog)"/>
  <ellipse cx="195" cy="118" rx="115" ry="80" fill="url(#scb_xm_glow)"/>
  <path d="M163,121 C180,114 210,114 227,121" fill="none" stroke="#f07a66" stroke-opacity="0.28" stroke-width="1" stroke-dasharray="3 4"/>
  <use href="#scb_xm_fig" fill="#06080c" stroke="#06080c"/>
  <path d="M155,86 C157.5,84.5 160,84 162.5,84.6" fill="none" stroke="#e7e0cf" stroke-opacity="0.3" stroke-width="1"/>
  <g transform="translate(386,0) scale(-1,1)" opacity="0.13">
    <use href="#scb_xm_fig" fill="#f07a66" stroke="#f07a66"/>
  </g>
  <g transform="translate(394,0) scale(-1,1)" opacity="0.13">
    <use href="#scb_xm_fig" fill="#f07a66" stroke="#f07a66"/>
  </g>
  <g transform="translate(390,0) scale(-1,1)">
    <use href="#scb_xm_fig" fill="#06080c" opacity="0.42" stroke="#06080c"/>
    <use href="#scb_xm_fig" fill="none" stroke="#f07a66" stroke-opacity="0.5" stroke-width="1"/>
  </g>
  <ellipse cx="140" cy="182" rx="70" ry="18" fill="url(#scb_xm_fog)"/>
  <ellipse cx="250" cy="184" rx="70" ry="18" fill="url(#scb_xm_fog)"/>
  <ellipse cx="150" cy="176" rx="45" ry="12" fill="url(#scb_xm_fog)"/>
  <ellipse cx="240" cy="176" rx="45" ry="12" fill="url(#scb_xm_fog)"/>
  <ellipse cx="195" cy="205" rx="185" ry="34" fill="url(#scb_xm_fog)"/>
  <ellipse cx="60" cy="150" rx="80" ry="24" fill="url(#scb_xm_fog)"/>
  <ellipse cx="335" cy="146" rx="85" ry="26" fill="url(#scb_xm_fog)"/>
  <ellipse cx="195" cy="232" rx="200" ry="26" fill="url(#scb_xm_fog)"/>
</svg>`,evt_zongmen_dabi:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="scb_db_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="scb_db_beam" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.5"/>
      <stop offset="0.5" stop-color="#d9b36a" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0.04"/>
    </linearGradient>
    <radialGradient id="scb_db_spark" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.85"/>
      <stop offset="0.5" stop-color="#d9b36a" stop-opacity="0.3"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="scb_db_stage" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#243252"/>
      <stop offset="1" stop-color="#1a2334"/>
    </linearGradient>
  </defs>
  <rect width="390" height="240" fill="url(#scb_db_sky)"/>
  <circle cx="52" cy="26" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="118" cy="16" r="0.6" fill="#f2d795" opacity="0.26"/>
  <circle cx="292" cy="14" r="0.7" fill="#f2d795" opacity="0.3"/>
  <circle cx="348" cy="30" r="0.6" fill="#f2d795" opacity="0.24"/>
  <path d="M70,110 L84,84 L110,78 L120,64 L195,58 L270,64 L280,78 L306,84 L320,110 Z" fill="#0f1626"/>
  <path d="M60,112 L330,112 L322,104 L68,104 Z" fill="#0c1220"/>
  <path d="M66,168 L66,96" stroke="#0a0f1a" stroke-width="2"/>
  <path d="M66,96 L92,102 L66,110 Z" fill="#a9853f" opacity="0.85"/>
  <path d="M324,168 L324,90" stroke="#0a0f1a" stroke-width="2"/>
  <path d="M324,90 L298,96 L324,104 Z" fill="#d9b36a" opacity="0.8"/>
  <path d="M85,146 L305,146 L350,168 L40,168 Z" fill="url(#scb_db_stage)"/>
  <path d="M40,168 L350,168 L350,196 L40,196 Z" fill="#131a28"/>
  <path d="M40,168 L350,168" stroke="#d9b36a" stroke-opacity="0.4" stroke-width="1.4"/>
  <path d="M92,168 L88,196 M195,168 L195,196 M298,168 L302,196" stroke="#0d1117" stroke-width="1.4"/>
  <path d="M85,146 L305,146" stroke="#8d97a9" stroke-opacity="0.18" stroke-width="1"/>
  <circle cx="172" cy="120" r="4.6" fill="#06080c"/>
  <circle cx="171" cy="114.5" r="1.8" fill="#06080c"/>
  <path d="M172,125 L182,140" stroke="#06080c" stroke-width="7" stroke-linecap="round"/>
  <path d="M178,131 L196,127.5" stroke="#06080c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M176,133 L163,140" stroke="#06080c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M182,140 L192,150 L193,161" fill="none" stroke="#06080c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M182,140 L169,152 L164,161" fill="none" stroke="#06080c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M175,128 C169,131 164,135 161,140 C166,138 171,135 175,132 Z" fill="#06080c"/>
  <path d="M196,127.5 L213,122" stroke="#f2d795" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round"/>
  <circle cx="232" cy="114" r="4.6" fill="#06080c"/>
  <circle cx="234" cy="108.6" r="1.8" fill="#06080c"/>
  <path d="M233,119 L240,137" stroke="#06080c" stroke-width="7" stroke-linecap="round"/>
  <path d="M230,126 L212,130" stroke="#06080c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M234,124 L246,113" stroke="#06080c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M240,137 L228,150 L226,161" fill="none" stroke="#06080c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M240,137 L250,152 L253,161" fill="none" stroke="#06080c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M238,124 C244,126 249,130 252,135 C247,133 242,130 238,127 Z" fill="#06080c"/>
  <path d="M212,130 L199,133.6" stroke="#f2d795" stroke-opacity="0.95" stroke-width="2" stroke-linecap="round"/>
  <polygon points="365,22 378,34 55,196 42,184" fill="url(#scb_db_beam)"/>
  <path d="M372,28 L48,190" stroke="#f2d795" stroke-opacity="0.85" stroke-width="1.5"/>
  <circle cx="206" cy="128" r="22" fill="url(#scb_db_spark)"/>
  <path d="M206,128 l10,-4 M206,128 l-10,4 M206,128 l3,-10 M206,128 l-3,10 M206,128 l9,6 M206,128 l-9,-6" stroke="#f2d795" stroke-opacity="0.9" stroke-width="1.2"/>
  <ellipse cx="182" cy="163" rx="18" ry="3" fill="#05070b" opacity="0.5"/>
  <ellipse cx="240" cy="163" rx="18" ry="3" fill="#05070b" opacity="0.5"/>
  <rect x="0" y="206" width="390" height="34" fill="#0a0f1a"/>
  <circle cx="16" cy="204" r="5" fill="#0a0f1a"/><circle cx="38" cy="202" r="4.6" fill="#0a0f1a"/><circle cx="59" cy="205" r="5.2" fill="#0a0f1a"/><circle cx="81" cy="203" r="4.8" fill="#0a0f1a"/><circle cx="103" cy="205" r="5" fill="#0a0f1a"/><circle cx="125" cy="202" r="4.6" fill="#0a0f1a"/><circle cx="147" cy="204" r="5.2" fill="#0a0f1a"/><circle cx="169" cy="203" r="4.8" fill="#0a0f1a"/><circle cx="191" cy="205" r="5" fill="#0a0f1a"/><circle cx="213" cy="202" r="4.6" fill="#0a0f1a"/><circle cx="235" cy="204" r="5.2" fill="#0a0f1a"/><circle cx="257" cy="203" r="4.8" fill="#0a0f1a"/><circle cx="279" cy="205" r="5" fill="#0a0f1a"/><circle cx="301" cy="202" r="4.6" fill="#0a0f1a"/><circle cx="323" cy="204" r="5.2" fill="#0a0f1a"/><circle cx="345" cy="203" r="4.8" fill="#0a0f1a"/><circle cx="367" cy="205" r="5" fill="#0a0f1a"/><circle cx="384" cy="203" r="4.6" fill="#0a0f1a"/>
  <path d="M125,201 l-4,-9 M235,203 l5,-9" stroke="#0a0f1a" stroke-width="2.6" stroke-linecap="round"/>
  <rect x="0" y="226" width="390" height="14" fill="#05070b"/>
  <circle cx="8" cy="224" r="7" fill="#05070b"/><circle cx="36" cy="222" r="6.4" fill="#05070b"/><circle cx="64" cy="225" r="7.2" fill="#05070b"/><circle cx="92" cy="223" r="6.6" fill="#05070b"/><circle cx="120" cy="225" r="7" fill="#05070b"/><circle cx="148" cy="222" r="6.4" fill="#05070b"/><circle cx="176" cy="224" r="7.2" fill="#05070b"/><circle cx="204" cy="223" r="6.6" fill="#05070b"/><circle cx="232" cy="225" r="7" fill="#05070b"/><circle cx="260" cy="222" r="6.4" fill="#05070b"/><circle cx="288" cy="224" r="7.2" fill="#05070b"/><circle cx="316" cy="223" r="6.6" fill="#05070b"/><circle cx="344" cy="225" r="7" fill="#05070b"/><circle cx="372" cy="222" r="6.4" fill="#05070b"/>
</svg>`,evt_a5_dujie_qianye:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="scb_dj_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d1117"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="scb_dj_gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0"/>
      <stop offset="0.3" stop-color="#f2d795" stop-opacity="0.75"/>
      <stop offset="0.7" stop-color="#f2d795" stop-opacity="0.75"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="scb_dj_goldsoft" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d9b36a" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#d9b36a" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="scb_dj_cliff" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#131a28"/>
      <stop offset="1" stop-color="#06080c"/>
    </linearGradient>
  </defs>
  <rect width="390" height="240" fill="url(#scb_dj_sky)"/>
  <path d="M0,0 L390,0 L390,52 C350,66 316,58 284,68 C252,78 216,66 184,76 C150,86 110,74 76,82 C48,88 20,80 0,86 Z" fill="#06080c"/>
  <path d="M0,86 C24,80 52,90 82,84 C116,77 152,90 188,80 C222,71 256,84 288,74 C320,65 356,74 390,60 L390,84 C352,96 314,88 280,97 C246,106 208,94 174,103 C142,111 104,100 72,107 C46,112 20,105 0,110 Z" fill="#0e1424"/>
  <path d="M0,110 C22,105 48,112 74,108 C106,102 144,112 178,104 C212,97 248,107 282,99 C316,92 354,98 390,84 L390,101 C354,112 318,105 284,113 C250,121 212,110 178,118 C146,125 108,115 76,121 C48,126 22,120 0,124 Z" fill="#16203a"/>
  <path d="M12,44 l10,10 -7,4 9,10 M330,30 l-9,12 8,3 -7,12" fill="none" stroke="#d9b36a" stroke-opacity="0.24" stroke-width="1.1"/>
  <rect x="0" y="99" width="390" height="18" fill="url(#scb_dj_goldsoft)"/>
  <path d="M0,108 L390,108" stroke="url(#scb_dj_gold)" stroke-width="1.6"/>
  <path d="M0,124 C50,120 110,126 170,121 C240,116 310,124 390,117 L390,152 L0,152 Z" fill="#101828"/>
  <path d="M0,144 C70,139 150,146 230,141 C290,137 345,143 390,138 L390,175 L0,175 Z" fill="#0d1420"/>
  <path d="M0,240 L0,172 C22,166 46,163 70,158 C100,152 130,148 152,150 C176,152 196,158 210,166 C224,175 231,196 233,240 Z" fill="url(#scb_dj_cliff)"/>
  <path d="M0,172 C22,166 46,163 70,158 C100,152 130,148 152,150 C176,152 196,158 209,165" fill="none" stroke="#f2d795" stroke-opacity="0.22" stroke-width="1.3"/>
  <path d="M50,178 C64,186 74,198 80,214 M120,164 C130,174 137,188 140,204" fill="none" stroke="#0a0f1a" stroke-width="1.6"/>
  <circle cx="167" cy="105" r="2.1" fill="#06080c"/>
  <circle cx="168" cy="112" r="5.6" fill="#06080c"/>
  <path d="M168,119 C162,121 159,128 158,138 C157,148 156,152 155,155 L182,155 C180,147 179,137 178,127 C177,121 173,119 168,119 Z" fill="#06080c"/>
  <path d="M160,128 C158,134 157,140 156.5,146 M177,126 C178.5,132 179.5,139 180,146" fill="none" stroke="#06080c" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M164,106.5 C166,104 169,102.5 172,102.8 M162,118 C165,116.5 168.5,116 172,116.5" fill="none" stroke="#f2d795" stroke-opacity="0.5" stroke-width="1.1"/>
  <path d="M158,138 C156,143 154,148 152,152" fill="none" stroke="#f2d795" stroke-opacity="0.18" stroke-width="1"/>
  <path d="M122,146 C122,142 125,140 129,140 C133,140 136,142 136,146 C136,149 133,151 129,151 C125,151 122,149 122,146 Z" fill="#0b1220"/>
  <path d="M126,140 L124,135 M132,140 L134,135 M124,135 C127,133 131,133 134,135" fill="none" stroke="#0b1220" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M123,143 C126,141.5 131,141.5 135,143" fill="none" stroke="#f2d795" stroke-opacity="0.3" stroke-width="0.9"/>
  <path d="M240,190 C270,186 300,187 330,190 M255,214 C285,210 320,211 355,214" fill="none" stroke="#8d97a9" stroke-opacity="0.1" stroke-width="1.4"/>
</svg>`,evt_sd_mudu_dujie:`<svg viewBox="0 0 390 240" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <linearGradient id="scb_md_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0a0e15"/>
      <stop offset="1" stop-color="#131a28"/>
    </linearGradient>
    <linearGradient id="scb_md_pillar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#f2d795" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#f2d795" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="scb_md_impact" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#f2d795" stop-opacity="0.8"/>
      <stop offset="0.45" stop-color="#d9b36a" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#d9b36a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="scb_md_fore" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#16203a"/>
      <stop offset="1" stop-color="#0a0e15"/>
    </linearGradient>
  </defs>
  <rect width="390" height="240" fill="url(#scb_md_sky)"/>
  <circle cx="48" cy="28" r="0.7" fill="#f2d795" opacity="0.28"/>
  <circle cx="110" cy="18" r="0.6" fill="#f2d795" opacity="0.24"/>
  <circle cx="170" cy="34" r="0.7" fill="#f2d795" opacity="0.28"/>
  <path d="M226,0 L390,0 L390,44 C362,52 336,44 314,50 C334,38 336,24 322,14 C300,4 264,8 226,0 Z" fill="#0c1220"/>
  <path d="M238,14 C260,10 286,14 300,24 C312,34 308,46 292,52 C310,52 328,46 336,36" fill="none" stroke="#1a2334" stroke-width="4" opacity="0.8"/>
  <path d="M252,30 C268,26 286,30 294,38" fill="none" stroke="#0a0f1a" stroke-width="5"/>
  <rect x="272" y="0" width="46" height="120" fill="url(#scb_md_pillar)"/>
  <rect x="284" y="0" width="22" height="120" fill="url(#scb_md_pillar)"/>
  <path d="M295,0 L291,34 L298,52 L292,84 L296,118" fill="none" stroke="#f2d795" stroke-opacity="0.95" stroke-width="3" stroke-linejoin="round"/>
  <path d="M295,0 L291,34 L298,52 L292,84 L296,118" fill="none" stroke="#e7e0cf" stroke-opacity="0.9" stroke-width="1.1" stroke-linejoin="round"/>
  <path d="M291,34 L282,44 M298,52 L307,64 M292,84 L284,94" fill="none" stroke="#f2d795" stroke-opacity="0.5" stroke-width="1.1"/>
  <circle cx="296" cy="118" r="24" fill="url(#scb_md_impact)"/>
  <path d="M296,118 l12,-5 M296,118 l-12,5 M296,118 l4,-12 M296,118 l-4,12 M296,118 l11,7 M296,118 l-11,-7" stroke="#f2d795" stroke-opacity="0.8" stroke-width="1.1"/>
  <path d="M234,132 L268,112 L296,118 L322,108 L356,126 L390,120 L390,150 L234,150 Z" fill="#0d1524"/>
  <path d="M282,116 L296,118 L308,113" fill="none" stroke="#f2d795" stroke-opacity="0.5" stroke-width="1.2"/>
  <path d="M0,140 L40,126 L86,136 L130,122 L176,134 L220,124 L256,134 L234,150 L0,150 Z M234,150 L390,150 L390,158 L0,158 Z" fill="#101a2c"/>
  <path d="M0,158 C80,152 180,156 260,150 C310,146 355,150 390,146 L390,240 L0,240 Z" fill="url(#scb_md_fore)"/>
  <path d="M30,240 C62,216 96,200 138,190 C170,183 202,180 232,178" fill="none" stroke="#2c3a58" stroke-width="9" stroke-linecap="round"/>
  <path d="M30,240 C62,216 96,200 138,190 C170,183 202,180 232,178" fill="none" stroke="#8d97a9" stroke-opacity="0.14" stroke-width="1.2"/>
  <path d="M70,216 l6,-2 M108,200 l6,-2 M196,183 l6,-1" stroke="#0a0f1a" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="128" cy="192" rx="26" ry="4" fill="#05070b" opacity="0.5"/>
  <circle cx="152" cy="148" r="5" fill="#06080c"/>
  <circle cx="149.5" cy="142.6" r="2" fill="#06080c"/>
  <path d="M150,155 L147,170" stroke="#06080c" stroke-width="6.5" stroke-linecap="round"/>
  <path d="M150,157 L156,169" stroke="#06080c" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M149,158 L142,168" stroke="#06080c" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M147,170 L141,180 L140,188" fill="none" stroke="#06080c" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M147,170 L154,179 L156,188" fill="none" stroke="#06080c" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M147,158 C142,161 138,165 136,170 C140,167 144,163 147,161 Z" fill="#06080c"/>
  <path d="M155.5,145 C157.5,143.5 159.5,143 161.5,143.6 M154,153 C156,155.5 157.5,158.5 158.5,161.5" fill="none" stroke="#f2d795" stroke-opacity="0.55" stroke-width="1.1"/>
  <path d="M158,190 C158,186.5 161,184.5 165,184.5 C169,184.5 172,186.5 172,190 C172,192.5 169,194 165,194 C161,194 158,192.5 158,190 Z" fill="#0b1220"/>
  <path d="M161,185 L159,181 M169,185 L171,181" stroke="#0b1220" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M159,187.5 C162,186 168,186 171,187.5" fill="none" stroke="#f2d795" stroke-opacity="0.3" stroke-width="0.8"/>
  <path d="M140,190 C128,193 116,197 106,202 L142,199 Z" fill="#05070b" opacity="0.45"/>
  <path d="M20,228 l4,-8 M34,232 l3,-7 M350,196 l4,-7 M366,200 l3,-6" stroke="#0f1626" stroke-width="1.8" stroke-linecap="round"/>
</svg>`},Ya={...qa,...Ja},Xa={cheap:{title:e=>`— ${e.split(``).join(` `)} v1.0 —`,greet:`尊贵的宿主，欢迎回来！`,act:`今 日 签 到`,fine:`* 签到即留痕。系统提醒宿主：天机可循，慎用。`},data:{title:e=>`[ ${e} ]`,greet:`模块就绪。数据流同步完成。`,act:`执 行`,fine:`// 每次调用都会在天机中留下一条记录`},ink:{title:e=>`${e}`,greet:`心念微动，那物应了一声。`,act:`运 转`,fine:`用之有度。器不欺主，主亦不当欺器。`},terminal:{title:e=>`root@heaven:~# ${e}`,greet:`> 权限校验通过。当前身份：临时执法者（编号待定）`,act:`EXEC`,fine:`# 所有操作计入天规日志，由下一任天道审计`},meta:{title:e=>`${e}`,greet:`……你确定这是游戏的一部分吗？`,act:`继 续`,fine:`（这段文字不应该出现在这里。）`}};function Za(e){let[t,n]=(0,r.useState)(0),i=e.systems[t];if(!i)return(0,$.jsx)($.Fragment,{});let a=Xa[i.skin]??Xa.data,o=i.id===`签到`,s=e.session.beats,c=s.length>0?s[s.length-1].text:``,l=c.includes(i.name)||c.includes(i.id);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`sheet-overlay`,onClick:e.onClose}),(0,$.jsxs)(`div`,{className:`sys-panel skin-${i.skin} fade-in`,children:[e.systems.length>1&&(0,$.jsx)(`div`,{className:`sys-switch`,children:e.systems.map((e,r)=>(0,$.jsx)(`button`,{className:`sys-chip ${r===t?`on`:``}`,onClick:()=>n(r),children:e.name},e.id))}),(0,$.jsx)(`div`,{className:`sys-title`,children:a.title(i.name)}),(0,$.jsx)(`div`,{className:`sys-line`,children:a.greet}),(0,$.jsx)(`div`,{className:`sys-line sys-desc`,children:i.desc}),o&&(0,$.jsx)(`button`,{className:`sys-btn`,onClick:e.onAct,children:a.act}),l&&(0,$.jsx)(`div`,{className:`sys-line sys-log`,children:c}),(0,$.jsxs)(`div`,{className:`sys-line sys-cost`,children:[`代价：`,i.cost]}),(0,$.jsx)(`div`,{className:`sys-line sys-fine`,children:a.fine}),(0,$.jsx)(`button`,{className:`linklike`,style:{marginTop:10},onClick:e.onClose,children:`关闭`})]})]})}var Qa=[`法宝`,`符箓`,`丹药`,`功法`,`材料`,`杂物`,`灵石`],$a=`零一二三四五六七八九`,eo=[``,`十`,`百`,`千`];function to(e){if(!Number.isFinite(e)||e<0||e===0)return`零`;if(e>999)return String(e);let t=String(e),n=``,r=!1;for(let e=0;e<t.length;e++){let i=Number(t[e]),a=t.length-e-1;if(i===0){r=!0;continue}r&&n&&(n+=`零`),r=!1,(i!==1||a!==1||e!==0)&&(n+=$a[i]),n+=eo[a]}return n}function no(e){return e>=1e5?`${Math.floor(e/1e4)}万`:e>=1e4?`${(e/1e4).toFixed(1)}万`:String(e)}function ro(e){return String(e).replace(/\B(?=(\d{3})+(?!\d))/g,`,`)}function io(e){let{session:t}=e,n=e.transform,[i,a]=(0,r.useState)(`全部`),[o,s]=(0,r.useState)(null),[c,l]=(0,r.useState)(null),[u,d]=(0,r.useState)(null),[,f]=(0,r.useState)(0),p=t.bag(),m=t.bagSlots(),h=t.stones(),ee=t.inventory(),g=st(ee),te=t.ctx.actor.tier,_=de(ee.container),v=m.free===0?$e(ee):null,y=e=>`${e.def.id}|${z(e.stack)}`,b=o?p.find(e=>y(e)===o)??p.find(e=>e.def.id===o.split(`|`)[0])??null:null,x=()=>{e.onAct(),f(e=>e+1)},S=(e,n)=>{l({ok:e.ok,text:e.text}),x(),e.ok&&!t.bag().some(e=>e.def.id===n)&&s(null)},C=(e,n)=>{let r=t.inventory().container,i=t.useItem(e);if(S(i,e),i.ok&&n){let e=t.inventory().container;if(e!==r){let t=de(e);d({name:t.id,note:t.note}),setTimeout(()=>d(null),2200)}}},w=new Map;for(let e of p)w.set(e.def.category,(w.get(e.def.category)??0)+1);let T=Qa.filter(e=>w.has(e)),E=i===`全部`?p:p.filter(e=>e.def.category===i),ne=i===`全部`?Math.min(m.free,12):0,D=i===`全部`?m.free-ne:0,re=e=>p.find(t=>t.stack.equipped===e),ie=c?(0,$.jsx)(`div`,{className:`bag-msg ${c.ok?`good`:`bad`}`,children:n(c.text)}):null;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`sheet-overlay bag-overlay`,onClick:e.onClose}),(0,$.jsxs)(`div`,{className:`sheet bag-sheet fade-in`,role:`dialog`,"aria-label":`行囊`,children:[(0,$.jsxs)(`div`,{className:`sheet-head`,children:[(0,$.jsx)(`span`,{className:`sheet-title`,children:`行囊`}),(0,$.jsx)(`span`,{className:`sheet-sub`,children:_.id}),(0,$.jsx)(`button`,{className:`linklike`,onClick:e.onClose,children:`收起`})]}),(0,$.jsxs)(`div`,{className:`bag-cap`,children:[(0,$.jsxs)(`div`,{className:`bag-cap-line`,children:[(0,$.jsxs)(`b`,{children:[to(m.total),`格`]}),(0,$.jsxs)(`span`,{children:[`，`,m.used===0?`空着`:`已满${to(m.used)}`]}),(0,$.jsx)(`i`,{className:m.free===0?`full`:``,children:m.free===0?`再装不下了`:`余 ${to(m.free)} 格`})]}),(0,$.jsx)(`div`,{className:`bag-bar`,children:(0,$.jsx)(`i`,{className:m.free===0?`full`:``,style:{width:`${Math.min(100,Math.round(m.used/Math.max(1,m.total)*100))}%`}})}),(0,$.jsx)(`div`,{className:`bag-note`,children:_.note}),v&&(0,$.jsxs)(`div`,{className:`bag-warn`,children:[`装满了。最不值钱的是`,(0,$.jsx)(`b`,{children:Ne(v.def,z(v.stack))}),`（约值 `,ro(Math.round(He(v.stack))),` 下品）—— 要腾地方，先舍它。`]})]}),(0,$.jsxs)(`div`,{className:`bag-purse`,children:[(0,$.jsxs)(`span`,{className:`bp-sum`,children:[`⟡ `,ro(h),` `,(0,$.jsx)(`i`,{children:`折下品`})]}),(0,$.jsxs)(`span`,{className:`bp-split`,children:[ce.map(e=>g[e]>0?(0,$.jsxs)(`em`,{children:[e,` `,g[e]]},e):null),h===0&&(0,$.jsx)(`em`,{className:`none`,children:`身无分文`})]})]}),g.极品>0&&(0,$.jsxs)(`div`,{className:`bag-jstone`,children:[(0,$.jsx)(`span`,{className:`bj-mark`,children:`✦`}),(0,$.jsxs)(`span`,{className:`bj-t`,children:[`极品灵石 `,(0,$.jsxs)(`b`,{children:[`×`,g.极品]})]}),(0,$.jsx)(`span`,{className:`bj-x`,children:`这不是钱。市面上没有摊主找得开 —— 付账时它不会被拆开， 除非低阶灵石实在凑不出，才会有一枚被迫破开。`})]}),(0,$.jsx)(`div`,{className:`bag-ladder`,children:le.map(e=>(0,$.jsx)(`span`,{className:`bl-step ${e.id===_.id?`on`:e.slots<_.slots?`past`:``}`,title:`${e.slots} 格 · ${e.note}`,children:e.id},e.id))}),(0,$.jsx)(`div`,{className:`bag-slots-row`,children:Pe.map(e=>{let t=re(e);return(0,$.jsxs)(`button`,{className:`eq-slot ${t?`on`:``}`,onClick:()=>t&&s(y(t)),disabled:!t,children:[(0,$.jsx)(`i`,{children:e}),(0,$.jsx)(`b`,{className:t?`r-${t.def.grade-1}`:``,children:t?Ne(t.def,z(t.stack)):`空`})]},e)})}),!b&&ie,T.length>1&&(0,$.jsxs)(`div`,{className:`bag-tabs`,children:[(0,$.jsxs)(`button`,{className:`bag-tab ${i===`全部`?`on`:``}`,onClick:()=>a(`全部`),children:[`全部 `,p.length]}),T.map(e=>(0,$.jsxs)(`button`,{className:`bag-tab ${i===e?`on`:``}`,onClick:()=>a(e),children:[e,` `,w.get(e)]},e))]}),(0,$.jsxs)(`div`,{className:`bag-grid`,children:[E.map((e,t)=>{let n=z(e.stack),r=!R(e.def)&&n!==2;return(0,$.jsxs)(`button`,{className:`bag-slot r-${e.def.grade-1} ${e.stack.equipped?`on`:``}`,style:e.def.slots>1?{gridColumn:`span 2`}:void 0,onClick:()=>{s(y(e)),l(null)},children:[(0,$.jsx)(`span`,{className:`bs-name`,children:e.def.name}),(0,$.jsxs)(`span`,{className:`bs-foot`,children:[(0,$.jsx)(`i`,{className:`bs-grade${e.def.grade>=6?` top`:``}`,children:Se(e.def.grade)}),r&&(0,$.jsx)(`i`,{className:`bs-q q${n}`,children:Ae(n)}),e.stack.qty>1&&(0,$.jsxs)(`i`,{className:`bs-qty`,children:[`×`,e.stack.qty]})]}),e.stack.equipped&&(0,$.jsx)(`span`,{className:`bs-eq`,children:`佩`}),e.def.slots>1&&(0,$.jsxs)(`span`,{className:`bs-big`,children:[`占`,to(e.def.slots),`格`]})]},`${e.def.id}-${t}`)}),Array.from({length:ne},(e,t)=>(0,$.jsx)(`span`,{className:`bag-slot empty`,"aria-hidden":`true`},`e${t}`))]}),E.length===0&&(0,$.jsx)(`div`,{className:`bag-empty`,children:i===`全部`?`空空如也。修士的第一件家当，多半是别人不要的。`:`没有${i}。`}),D>0&&(0,$.jsxs)(`div`,{className:`bag-note`,style:{textAlign:`center`,marginTop:8},children:[`另余 `,D,` 格`]})]}),b&&(()=>{let e=b.def,r=z(b.stack),i=!!b.stack.equipped,a=e.container?de(e.container):null,o=a?a.slots<=_.slots?`${_.id}比${a.id}还宽敞，换了是往回走`:te<a.minTier?`神识撑不开${a.id} —— 须得${a.minTier}阶以上`:null:null,c=e.equip?.minTier!=null&&te<e.equip.minTier,u=!!a||!!e.use&&e.use.length>0;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`sheet-overlay detail-overlay`,onClick:()=>{s(null),l(null)}}),(0,$.jsxs)(`div`,{className:`bag-detail fade-in`,role:`dialog`,"aria-label":e.name,children:[(0,$.jsxs)(`div`,{className:`bd-head`,children:[(0,$.jsx)(`span`,{className:`bd-name r-${e.grade-1}`,children:Ne(e,r)}),(0,$.jsxs)(`span`,{className:`bd-tag${e.grade>=6?` top`:``}`,children:[Se(e.grade),` · `,e.category]}),i&&(0,$.jsxs)(`span`,{className:`bd-worn`,children:[`佩于`,b.stack.equipped]})]}),(0,$.jsx)(`div`,{className:`bd-desc`,children:n(e.desc)}),e.grade>=6&&(0,$.jsxs)(`div`,{className:`bd-uniq`,children:[(0,$.jsx)(`span`,{className:`bu-mark`,children:`✦`}),e.stone?`不是钱。没有摊主找得开 —— 除非低阶灵石实在凑不出，付账时它不会被拆开。`:`世上只此一件。它不会有第二件，前主人的账也一并转到了你身上。`]}),(0,$.jsxs)(`div`,{className:`bd-meta`,children:[(0,$.jsxs)(`span`,{children:[`占 `,to(e.slots),` 格`]}),(0,$.jsxs)(`span`,{children:[`值 `,ro(Math.round(e.value*(R(e)?1:Oe[r]))),` 下品`]}),b.stack.qty>1&&(0,$.jsxs)(`span`,{children:[`身上 `,b.stack.qty,` 件`]}),e.talisman&&(0,$.jsxs)(`span`,{children:[e.talisman,`符`]})]}),e.equip&&(0,$.jsxs)(`div`,{className:`bd-equip`,children:[(0,$.jsx)(`b`,{children:e.equip.slot}),Object.entries(e.equip.factors).map(([e,t])=>(0,$.jsxs)(`span`,{className:`bd-fac`,children:[e,` +`,t.toFixed(2)]},e))]}),c&&!i&&(0,$.jsx)(`div`,{className:`bd-warn`,children:`越阶用宝：佩得上，但压不住 —— 明眼人一看便知你身后有人（真实修为暴露）。`}),a&&!o&&(0,$.jsxs)(`div`,{className:`bd-hint`,children:[`换用之后可装 `,a.slots,` 格。`,a.note]}),o&&(0,$.jsx)(`div`,{className:`bd-warn`,children:o}),!u&&!e.equip&&!(e.grade>=6&&e.stone)&&(0,$.jsx)(`div`,{className:`bd-hint`,children:e.stone?`钱不必手动动它 —— 付账时自会拆开找零。`:`用不上。但总有人要，也总有人认得。`}),ie,(0,$.jsxs)(`div`,{className:`bd-acts`,children:[e.equip&&(i?(0,$.jsx)(`button`,{className:`ghost-btn`,onClick:()=>S(t.unequipItem(e.id),e.id),children:`卸 下`}):(0,$.jsx)(`button`,{className:`primary-btn slim`,onClick:()=>S(t.equipItem(e.id),e.id),children:`佩 上`})),u&&(0,$.jsx)(`button`,{className:`primary-btn slim`,disabled:!!o,onClick:()=>C(e.id,!!a),children:a?`换 用`:e.category===`丹药`?`服 下`:`用 掉`}),(0,$.jsx)(`button`,{className:`ghost-btn`,onClick:()=>{s(null),l(null)},children:`收 起`})]})]})]})})(),u&&(0,$.jsxs)(`div`,{className:`bag-flash`,onClick:()=>d(null),children:[(0,$.jsx)(`div`,{className:`bf-word`,children:u.name}),(0,$.jsx)(`div`,{className:`bf-sub`,children:u.note})]})]})}var ao={oracle:`坊市街口的卦摊。几个铜板一卦 —— 问得多了，天也会烦。`,relic:`荒山野岭的旧坟古洞。前人的东西好拿，前人的账也跟着来。`,alchemy:`自己开炉。费材料费时间，但炉子是自己的。`},oo={CRIT_SUCCESS:{label:`大成`,cls:`s-crit`},SUCCESS:{label:`成`,cls:`s-ok`},FAIL:{label:`败`,cls:`s-fail`},CRIT_FAIL:{label:`大凶`,cls:`s-cfail`}},so=[{m:`打坐吐纳`,label:`稳修`,hint:`不快不慢，不出错`},{m:`悟道`,label:`悟道`,hint:`慢，但根基更纯，圆满度更高`},{m:`历练突破`,label:`历练`,hint:`快，有伤病之险`},{m:`丹药速成`,label:`服丹`,hint:`最快，但积丹毒（丹毒过深会锁死上限）`}];function co(e){if(!(e>0))return`—`;let t=e*100;return t>=1?`${t.toFixed(1)}%`:t>=.1?`${t.toFixed(2)}%`:`${t.toFixed(4)}%`}function lo(e){let t=Math.round(e*100);return t>=80?`八九成`:t>=60?`六七成`:t>=40?`四五成`:t>=20?`两三成`:`一线`}function uo(e){let t=e.session.ctx.actor,n=[],r=t.lifespanYears-t.ageMonths/12;r<15&&n.push({text:`寿余${Math.max(0,r).toFixed(0)}`,cls:`hot`}),t.僭越>=51&&n.push({text:`僭越${Math.round(t.僭越)}`,cls:t.僭越>=101?`hot`:`warn`}),t.堕度>=46&&n.push({text:`堕度${Math.round(t.堕度)}`,cls:t.堕度>=76?`hot`:`warn`}),t.丹毒>=50&&n.push({text:`丹毒${Math.round(t.丹毒)}`,cls:t.丹毒>=80?`hot`:`warn`});let i=t.souls.find(e=>!e.dissipated&&e.possession>=60);return i&&n.push({text:`魂扰${Math.round(i.possession)}`,cls:i.possession>=85?`hot`:`warn`}),n.slice(0,2)}function fo(e){return e.page.player.length>0||e.page.auto.length>0||e.page.loose.length>0||e.page.transition!==null||e.stamp!==null||e.chips.length>0}function po(e){let{session:t,pov:n,name:i}=e.game,a=e=>vi(e,n,i),[o,s]=(0,r.useState)(null),[c,l]=(0,r.useState)(`event`),[u,d]=(0,r.useState)(null),[f,p]=(0,r.useState)(!1),[m,h]=(0,r.useState)(!1),[ee,g]=(0,r.useState)(!1),[te,v]=(0,r.useState)(!1),[y,b]=(0,r.useState)(null),[x,S]=(0,r.useState)(null),[C,w]=(0,r.useState)(!1),[T,E]=(0,r.useState)(!1),[ne,D]=(0,r.useState)(null),[re,ie]=(0,r.useState)([]),[O,ae]=(0,r.useState)(`oracle`),[k,oe]=(0,r.useState)(!1),[A,j]=(0,r.useState)(null),[,M]=(0,r.useState)(0),N=(0,r.useRef)(0),se=(0,r.useRef)(!1),P=(0,r.useRef)(null),ce=e=>{let n=t.gatherPage(N.current);N.current=n.cursor,t.notices.length=0;let r=t.lastOutcome?oo[t.lastOutcome]??null:null,i=[...t.lastDeltas];return t.lastOutcome=null,t.lastDeltas=[],{stamp:r,chips:i,page:n.page,fromYear:e,toYear:Math.floor(t.ctx.year)}},le=(r,i)=>{S(null),v(!1);let a=ce(i);if(r.kind===`gameover`){fo(a)?(d(a),l(`between`),s(r)):e.onOver(r.result);return}s(r),fo(a)?(d(a),l(`between`)):l(`event`);let o=t.snapshot();o&&Ea(o,n)};(0,r.useEffect)(()=>{if(se.current)return;if(se.current=!0,t.beats.length>0){N.current=t.beats.length;let n=t.currentPrompt();if(n){if(n.kind===`gameover`){e.onOver(n.result);return}s(n),l(`event`);return}}let n=Math.floor(t.ctx.year);le(t.advance(),n)},[]),(0,r.useEffect)(()=>{window.scrollTo({top:0})},[c,o]);let ue=e=>{if(!o||o.kind!==`event`)return;let n=Math.floor(t.ctx.year),r=t.choose(e);le(r,n)},de=e=>{if(!o||o.kind!==`event`||te)return;let t=o.choices[e];if(t){if(Gi(o.card,t)&&x!==e){S(e);return}S(null),t.check?(v(!0),setTimeout(()=>ue(e),520)):ue(e)}},F=(e,n)=>{if(!o||o.kind!==`breakthrough`)return;let r=Math.floor(t.ctx.year),i=t.decideBreakthrough(e,n);t.lastBreakthrough&&e&&(b(t.lastBreakthrough),setTimeout(()=>b(null),2e3)),le(i,r)},I=()=>{if(o?.kind===`gameover`){e.onOver(o.result);return}l(`event`)},fe=(e,t)=>{if(!e)return null;let n=e===`命关`?Na.命关:Ya[e];return n?(0,$.jsx)(`div`,{className:`card-art scene-art`,dangerouslySetInnerHTML:{__html:n}},e):(0,$.jsx)(`div`,{className:`card-orn`,dangerouslySetInnerHTML:{__html:Ka(t)}},`orn-${e}`)},pe=(e,t)=>e.kind===`scene`?(0,$.jsxs)(`div`,{className:`mini-scene`,children:[e.title&&(0,$.jsxs)(`span`,{className:`mini-t`,children:[`【`,e.title,`】`]}),(0,$.jsxs)(`span`,{className:`mini-x`,children:[a(e.text).split(`
`)[0],`…`]})]},t):e.kind===`choice`?(0,$.jsx)(`div`,{className:`choice-line`,children:a(e.text)},t):e.kind===`outcome`?(0,$.jsx)(`div`,{className:`outcome`,children:a(e.text)},t):e.kind===`milestone`?(0,$.jsxs)(`div`,{className:`milestone`,children:[`◈ `,a(e.text)]},t):e.kind===`transition`?(0,$.jsx)(`div`,{className:`passage`,children:a(e.text)},t):(0,$.jsx)(`div`,{className:`notice`,children:a(e.text)},t),me=e=>{let t=a(e).split(`
`).filter(e=>e.trim()!==``);return t.length>1?`${t[0]}…`:t[0]??``},he=e=>{let t=e.beats.find(e=>e.kind===`scene`),n=e.beats.find(e=>e.kind===`choice`),r=e.beats.find(e=>e.kind===`outcome`);return(0,$.jsxs)(`div`,{className:`years-unit`,children:[t&&(0,$.jsxs)(`div`,{className:`yu-scene`,children:[t.title&&(0,$.jsxs)(`span`,{className:`yu-t`,children:[`【`,t.title,`】`]}),(0,$.jsx)(`span`,{children:me(t.text)})]}),n&&(0,$.jsxs)(`div`,{className:`yu-choice`,children:[`——`,a(n.text)]}),r&&(0,$.jsx)(`div`,{className:`yu-outcome`,children:me(r.text)})]},e.episodeId)},ge=()=>{if(!u)return null;let{page:e}=u,t=u.toYear-u.fromYear,n=e.player.flatMap(e=>e.beats.filter(e=>e.kind!==`scene`));return(0,$.jsxs)(`div`,{className:`page-card`,ref:P,children:[(0,$.jsx)(`div`,{className:`between-head`,children:(0,$.jsx)(`div`,{className:`year-mark`,children:t>1?`第 ${u.fromYear} — ${u.toYear} 年`:`第 ${u.toYear} 年`})}),(0,$.jsxs)(`div`,{className:`between-body`,children:[(u.stamp||u.chips.length>0||n.length>0)&&(0,$.jsxs)(`section`,{className:`res-player`,children:[u.stamp&&(0,$.jsx)(`div`,{className:`stamp-row`,children:(0,$.jsx)(`span`,{className:`stamp ${u.stamp.cls}`,children:u.stamp.label})}),u.chips.length>0&&(0,$.jsx)(`div`,{className:`delta-chips`,children:u.chips.map((e,t)=>(0,$.jsx)(`span`,{className:`dchip d-${e.kind}`,children:e.text},t))}),n.map((e,t)=>e.kind===`choice`?(0,$.jsx)(`div`,{className:`choice-line`,children:a(e.text)},t):e.kind===`outcome`?(0,$.jsx)(`div`,{className:`outcome`,children:a(e.text)},t):pe(e,t))]}),e.loose.map(pe),e.auto.length>0&&(0,$.jsxs)(`section`,{className:`years-sec`,children:[(0,$.jsx)(`div`,{className:`years-head`,children:`这些年里`}),e.auto.map(he)]})]}),e.transition&&(0,$.jsx)(`div`,{className:`passage trans`,children:a(e.transition.text)}),(0,$.jsx)(`div`,{className:`page-foot`,children:(0,$.jsx)(`button`,{className:`primary-btn`,onClick:I,children:o?.kind===`gameover`?`盖 棺`:`继 续`})})]})},ye=()=>{if(!o)return null;if(o.kind===`event`){let e=o.card.tags?.includes(`岔路`),t=a(o.text).split(`
`).filter(e=>e.trim()!==``),n=.1,r=Math.min(t.length*n+.2,1.3);return(0,$.jsxs)(`div`,{className:`page-card`,ref:P,children:[fe(o.card.id,o.card.tags),(0,$.jsxs)(`div`,{className:`page-body`,children:[e&&(0,$.jsx)(`div`,{className:`fork-badge rv`,children:`岔 · 人生节点`}),(0,$.jsxs)(`div`,{className:`t rv`,children:[`【`,o.card.title,`】`]}),t.map((e,t)=>(0,$.jsx)(`p`,{className:`rv`,style:{animationDelay:`${Math.min(t*n,1.1)}s`},children:e},t))]}),(0,$.jsx)(`div`,{className:`page-foot`,children:te?(0,$.jsx)(`div`,{className:`roll`,children:`天 机 演 算`}):(0,$.jsx)(`div`,{className:`inline-choices rv`,style:{animationDelay:`${r}s`},children:o.choices.map((e,t)=>{if(x===t){let n=Wi(o.card,e);return(0,$.jsxs)(`div`,{className:`confirm-block`,children:[(0,$.jsx)(`div`,{className:`confirm-choice`,children:a(e.text)}),(0,$.jsx)(`div`,{className:`risk-tags`,children:n.map((e,t)=>(0,$.jsx)(`span`,{className:`risk-tag r-${e.level}`,children:e.text},t))}),(0,$.jsxs)(`div`,{className:`confirm-row`,children:[(0,$.jsx)(`button`,{className:`ghost-btn`,onClick:()=>S(null),children:`再想想`}),(0,$.jsx)(`button`,{className:`confirm-go`,onClick:()=>de(t),children:`依此而行`})]})]},t)}return(0,$.jsxs)(`button`,{className:`choice-btn`,onClick:()=>de(t),children:[(0,$.jsx)(`span`,{className:`idx`,children:t+1}),a(e.text),Gi(o.card,e)&&(0,$.jsx)(`span`,{className:`grave-mark`,children:`重`}),e.check&&(0,$.jsx)(`span`,{className:`check-mark`,children:`占`})]},t)})})})]},o.card.id)}if(o.kind!==`breakthrough`)return null;let e=t.ctx.actor;return(0,$.jsxs)(`div`,{className:`page-card`,ref:P,children:[fe(`命关`),(0,$.jsxs)(`div`,{className:`page-body`,children:[(0,$.jsx)(`div`,{className:`t rv`,children:`【命关】`}),(0,$.jsx)(`p`,{className:`rv`,style:{animationDelay:`0.1s`},children:a(`修为已至大圆满，气机满盈，可冲击【${U(t.ctx.actor.path,o.toTier)}】。\n你掂量了一下 —— 约莫${lo(o.estimate)}把握。`)})]}),(0,$.jsx)(`div`,{className:`page-foot`,children:(0,$.jsxs)(`div`,{className:`inline-choices rv`,style:{animationDelay:`0.4s`},children:[(0,$.jsxs)(`button`,{className:`choice-btn`,onClick:()=>F(!0,!1),children:[(0,$.jsx)(`span`,{className:`idx`,children:`1`}),`冲关`]}),(0,$.jsxs)(`button`,{className:`choice-btn`,onClick:()=>F(!0,!0),children:[(0,$.jsx)(`span`,{className:`idx`,children:`2`}),`稳中求进，兼冲隐藏之境`,e.道心>58?``:`（道心尚浅，凶险）`]}),(0,$.jsxs)(`button`,{className:`choice-btn`,onClick:()=>F(!1,!1),children:[(0,$.jsx)(`span`,{className:`idx`,children:`3`}),`再温养几年`]})]})})]},`bt-${t.ctx.tick}`)},L=t.ctx.actor,be=U(L.path,L.tier),xe=Dt(L.path,L.tier,L.sublevel);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`topbar`,children:[(0,$.jsx)(`button`,{className:`tb-name`,onClick:()=>p(!0),children:i}),(0,$.jsxs)(`button`,{className:`tb-sub`,onClick:()=>p(!0),children:[xe,L.tier<10?` ${Math.round(L.sublevel*100)}%`:``,` · `,Math.floor(t.ctx.year),`年`]}),(0,$.jsx)(`span`,{className:`grow`}),uo(e.game).map((e,t)=>(0,$.jsx)(`span`,{className:`chip ${e.cls}`,children:e.text},t)),(()=>{let e=t.bagSlots(),n=e.free===0;return(0,$.jsxs)(`button`,{className:`tb-bag ${n?`full`:``}`,onClick:()=>E(!0),"aria-label":`行囊，${t.stones()} 下品灵石，${e.used} 之 ${e.total} 格`,title:n?`${e.container} 已满`:e.container,children:[(0,$.jsxs)(`span`,{className:`tbb-stone`,children:[`⟡`,no(t.stones())]}),(0,$.jsxs)(`span`,{className:`tbb-slot`,children:[e.used,`/`,e.total]})]})})(),(0,$.jsx)(`button`,{className:`linklike`,onClick:()=>g(!0),children:`回顾`}),(0,$.jsx)(`button`,{className:`linklike`,onClick:e.onQuit,children:`搁笔`})]}),(0,$.jsx)(`div`,{className:`realm-bar`,children:(0,$.jsx)(`i`,{style:{width:`${Math.round(L.sublevel*100)}%`}})}),c===`between`?ge():ye(),y&&(0,$.jsxs)(`div`,{className:`bt-overlay ${y.ok?`bt-ok`:`bt-fail`}`,onClick:()=>b(null),children:[(0,$.jsx)(`div`,{className:`bt-word`,children:y.ok?y.name:`劫`}),(0,$.jsx)(`div`,{className:`bt-sub`,children:y.ok?y.hidden?`且入隐秘之境`:`境界已成`:`未过 · ${y.name}`}),y.ok&&L.goldenCoreGrade>0&&L.tier===3&&(0,$.jsx)(`div`,{className:`bt-core ${_(L.goldenCoreGrade)?`top`:``}`,children:xt(L.path,L.goldenCoreGrade)})]}),t.availablePools().length===0?null:(0,$.jsx)(`button`,{className:`oracle-pill`,onClick:()=>{w(!0),j(null),D(null),ie([])},children:`✦ 机缘`}),C&&(()=>{let e=t.availablePools(),r=e.find(e=>e.id===O)??e[0],i=t.poolInfo(r.id),o=()=>{if(k)return;D(null);let e=t.poolInfo(r.id);if(e&&!e.affordable){D(e.missing.map(e=>e.text).join(`；`));return}oe(!0),j(null),setTimeout(()=>{let e=t.tryDrawFrom(r.id);ie(t.notices.slice(1)),N.current=t.beats.length,t.notices.length=0,j(e.result??null),e.ok||D(e.reason??`这一卦求不得`),oe(!1),M(e=>e+1);let i=t.snapshot();i&&Ea(i,n)},900)},s=(A?.prize.effects??[]).map(e=>/^give\s+(\S+)/.exec(e)?.[1]).filter(e=>!!e).map(e=>V(e)).find(e=>e?.equip&&t.bag().some(t=>t.def.id===e.id&&!t.stack.equipped));return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`sheet-overlay`,onClick:()=>!k&&w(!1)}),(0,$.jsxs)(`div`,{className:`oracle-panel fade-in`,children:[(0,$.jsx)(`div`,{className:`oracle-tabs`,children:e.map(e=>(0,$.jsx)(`button`,{className:`oracle-tab ${e.id===r.id?`on`:``}`,onClick:()=>{ae(e.id),j(null),D(null),ie([])},children:e.name},e.id))}),(0,$.jsx)(`div`,{className:`oracle-stage`,children:k?(0,$.jsx)(`div`,{className:`oracle-shake`,children:`签 筒 摇 动`}):A?(0,$.jsxs)(`div`,{className:`oracle-prize r-${vr.indexOf(A.rarity)}`,children:[(0,$.jsx)(`div`,{className:`op-rarity`,children:A.rarity===`极品`?`✦ 极 品 ✦`:A.rarity}),(0,$.jsx)(`div`,{className:`op-name`,children:A.prize.name}),(0,$.jsx)(`div`,{className:`op-desc`,children:a(A.prize.desc)}),A.rarity===`极品`&&(0,$.jsx)(`div`,{className:`op-uniq`,children:`此物世上只此一件。你拿了它，就不会再有第二件。`}),A.byPity&&(0,$.jsx)(`div`,{className:`op-pity`,children:`连番落空之后，天道补了你一次`})]}):(0,$.jsx)(`div`,{className:`oracle-idle`,children:ao[r.id]??``})}),re.length>0&&!k&&(0,$.jsx)(`div`,{className:`oracle-notes`,children:re.map((e,t)=>(0,$.jsx)(`div`,{className:`on-line`,children:a(e)},t))}),s&&!k&&(0,$.jsxs)(`button`,{className:`oracle-wear`,onClick:()=>{let e=t.equipItem(s.id);ie(t=>[...t,e.text]),N.current=t.beats.length,t.notices.length=0,M(e=>e+1);let r=t.snapshot();r&&Ea(r,n)},children:[`即刻佩上「`,s.name,`」（`,s.equip?.slot,`）`]}),i&&(()=>{let e=Er(L,r,t.gacha),n=i.odds.极品,a=t.gacha,o=(r.prizes.极品?.length??0)>0,s=L.tier>=G.minTier,c=L.气运>=G.minLuck,l=U(L.path,G.minTier),u=[{ok:s,text:s?`修为已至【${l}】`:`修为须至【${l}】—— 今为【${be}】`},{ok:c,text:c?`气运 ${Math.round(L.气运)}，已过 ${G.minLuck} 这道坎`:`气运须过 ${G.minLuck} —— 今为 ${Math.round(L.气运)}`},{ok:!!a.seenSecret,text:a.seenSecret?`本局已亲见过一件秘藏`:`本局须亲见过一件秘藏 —— 没见过的东西，天不会先给你`}];a.supremeTaken&&u.push({ok:!1,text:`此生已得过一件独一无二之物 —— 天不予二`}),o||u.push({ok:!1,text:`${r.name}里本就没有这样的东西`});let d=!e.ok&&u.every(e=>e.ok)?e.reasons:[],f=Math.max(0,xr.threshold-i.pityLeft);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`odds-bar`,children:vr.map((e,t)=>e===`极品`?n>0?(0,$.jsx)(`div`,{className:`odds-seg r-5 hair`,title:`极品 ${co(n)}`},e):null:(0,$.jsx)(`div`,{className:`odds-seg r-${t}`,style:{flex:Math.max(.02,i.odds[e])},title:`${e} ${co(i.odds[e])}`},e))}),(0,$.jsx)(`div`,{className:`odds-legend`,children:vr.map((e,t)=>(0,$.jsxs)(`span`,{className:`ol r-${t}${e===`极品`&&n<=0?` off`:``}`,children:[e,` `,co(i.odds[e])]},e))}),(0,$.jsxs)(`div`,{className:`supreme-box ${e.ok?`open`:``}`,children:[(0,$.jsxs)(`div`,{className:`sb-head`,children:[(0,$.jsx)(`span`,{className:`sb-mark`,children:`✦`}),(0,$.jsx)(`span`,{className:`sb-t`,children:`极品`}),(0,$.jsx)(`span`,{className:`sb-x`,children:e.ok?`此刻确在筒里 · ${co(n)}`:`此刻不在筒里 —— 摇多少次都不会出`})]}),(0,$.jsxs)(`div`,{className:`sb-list`,children:[u.map((e,t)=>(0,$.jsxs)(`div`,{className:`sb-li ${e.ok?`yes`:`no`}`,children:[(0,$.jsx)(`i`,{children:e.ok?`✓`:`✗`}),e.text]},t)),d.map((e,t)=>(0,$.jsxs)(`div`,{className:`sb-li no`,children:[(0,$.jsx)(`i`,{children:`✗`}),e]},`f${t}`))]}),(0,$.jsx)(`div`,{className:`sb-fine`,children:`世上只此一件，一局只出一件。`})]}),(0,$.jsxs)(`div`,{className:`pity-row`,children:[(0,$.jsx)(`div`,{className:`pity-bar`,"aria-hidden":`true`,children:(0,$.jsx)(`i`,{style:{width:`${Math.round(f/xr.threshold*100)}%`}})}),(0,$.jsxs)(`div`,{className:`pity-t`,children:[i.pityLeft>0?`再 ${i.pityLeft} 次落空，必得【宝品】以上`:`时来运转已满 —— 下一次必得【宝品】以上`,(0,$.jsxs)(`em`,{children:[`保底只保到宝品／仙品／秘藏这三档。`,(0,$.jsx)(`b`,{children:`极品不在保底之列`}),` —— 攒出来的东西不叫意外。`]})]})]}),(0,$.jsxs)(`div`,{className:`oracle-meta`,children:[`气运 `,Math.round(L.气运),` · 已求 `,i.count,` 次`]})]})})(),(0,$.jsxs)(`div`,{className:`oracle-cost ${i&&!i.affordable?`lack`:``}`,children:[`代价：`,i?.costText??r.costLabel]}),(0,$.jsxs)(`div`,{className:`oracle-purse`,children:[`囊中 ⟡ `,no(t.stones()),` 下品 · 余 `,t.bagSlots().free,` 格`]}),i&&!i.affordable&&(0,$.jsx)(`div`,{className:`oracle-missing`,children:i.missing.map((e,t)=>(0,$.jsx)(`div`,{className:`om-line`,children:e.text},t))}),ne&&(0,$.jsx)(`div`,{className:`oracle-missing`,children:(0,$.jsx)(`div`,{className:`om-line`,children:ne})}),(0,$.jsx)(`button`,{className:`oracle-btn`,disabled:k||!!i&&!i.affordable,onClick:o,children:k?`……`:i&&!i.affordable?`付 不 起`:`求 一 次`}),i&&!i.affordable&&(0,$.jsx)(`div`,{className:`oracle-fine`,children:`先去挣够了再来 —— 这里从没有免费的运气。`}),(0,$.jsx)(`button`,{className:`linklike`,onClick:()=>!k&&w(!1),children:`收手`})]})]})})(),t.ctx.systems.length>0&&(0,$.jsxs)(`button`,{className:`sys-pill`,onClick:()=>h(!0),children:[(0,$.jsx)(`span`,{className:`sys-dot`}),`系统`]}),m&&(()=>{let n=t.ctx.systems.map(t=>e.game.session.systemDef(t)).filter(e=>!!e);return n.length===0?null:(0,$.jsx)(Za,{session:t,systems:n,onClose:()=>h(!1),onAct:()=>{t.signIn(),N.current=t.beats.length,t.notices.length=0,M(e=>e+1)}})})(),T&&(0,$.jsx)(io,{session:t,transform:a,onClose:()=>E(!1),onAct:()=>{N.current=t.beats.length,t.notices.length=0,M(e=>e+1);let e=t.snapshot();e&&Ea(e,n)}}),ee&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`sheet-overlay`,onClick:()=>g(!1)}),(0,$.jsxs)(`div`,{className:`sheet fade-in`,children:[(0,$.jsxs)(`div`,{className:`sheet-head`,children:[(0,$.jsx)(`span`,{className:`sheet-title`,children:`回顾`}),(0,$.jsx)(`span`,{className:`sheet-sub`,children:`此生至今 · 亦即将来书上的正文`}),(0,$.jsx)(`button`,{className:`linklike`,onClick:()=>g(!1),children:`收起`})]}),(0,$.jsxs)(`div`,{className:`history-scroll`,children:[t.beats.map((e,t)=>e.kind===`scene`?(0,$.jsxs)(`div`,{className:`scene past`,style:{margin:`14px 0 4px`},children:[e.title&&(0,$.jsxs)(`div`,{className:`t`,children:[`【`,e.title,`】`]}),(0,$.jsx)(`div`,{className:`x`,children:a(e.text)})]},t):e.kind===`choice`?(0,$.jsx)(`div`,{className:`choice-line past`,children:a(e.text)},t):e.kind===`outcome`?(0,$.jsx)(`div`,{className:`outcome`,children:a(e.text)},t):e.kind===`milestone`?(0,$.jsxs)(`div`,{className:`milestone`,children:[`◈ `,a(e.text)]},t):e.kind===`transition`?(0,$.jsx)(`div`,{className:`passage`,children:a(e.text)},t):(0,$.jsx)(`div`,{className:`notice`,children:a(e.text)},t)),t.beats.length===0&&(0,$.jsx)(`div`,{className:`notice`,children:`故事才刚要开始。`})]})]})]}),f&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:`sheet-overlay`,onClick:()=>p(!1)}),(0,$.jsxs)(`div`,{className:`sheet fade-in`,children:[(0,$.jsxs)(`div`,{className:`sheet-head`,children:[(0,$.jsx)(`span`,{className:`sheet-title`,children:i}),(0,$.jsxs)(`span`,{className:`sheet-sub`,children:[L.path,` · `,L.talent.root,` · `,L.originRevealed?`身负「${L.origin}」`:`身世未明`]}),(0,$.jsx)(`button`,{className:`linklike`,onClick:()=>p(!1),children:`收起`})]}),(0,$.jsxs)(`div`,{className:`kv`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`境界`}),(0,$.jsxs)(`b`,{children:[xe,`（`,Math.round(L.sublevel*100),`%）`]})]}),L.goldenCoreGrade>0&&(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`结丹`}),(0,$.jsx)(`b`,{className:_(L.goldenCoreGrade)?`core-top`:``,children:xt(L.path,L.goldenCoreGrade)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`寿元`}),(0,$.jsxs)(`b`,{children:[Math.floor(L.ageMonths/12),` / `,L.lifespanYears]})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`道心`}),(0,$.jsx)(`b`,{children:Math.round(L.道心)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`气运`}),(0,$.jsx)(`b`,{children:Math.round(L.气运)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`功德`}),(0,$.jsx)(`b`,{children:Math.round(L.功德)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`业障`}),(0,$.jsx)(`b`,{children:Math.round(L.业障)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`僭越`}),(0,$.jsx)(`b`,{children:Math.round(L.僭越)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`堕度`}),(0,$.jsx)(`b`,{children:Math.round(L.堕度)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`丹毒`}),(0,$.jsx)(`b`,{children:Math.round(L.丹毒)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`名望`}),(0,$.jsx)(`b`,{children:Math.round(L.名望)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`悟性`}),(0,$.jsx)(`b`,{children:L.talent.悟性})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`根骨`}),(0,$.jsx)(`b`,{children:L.talent.根骨})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`神魂`}),(0,$.jsx)(`b`,{children:L.talent.神魂})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`纯度`}),(0,$.jsx)(`b`,{children:Math.round(L.talent.purity)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`真实战力`}),(0,$.jsx)(`b`,{children:_e(L).toFixed(2)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`i`,{children:`藏拙`}),(0,$.jsxs)(`b`,{children:[Math.round(ve(L)*100),`%`]})]})]}),(t.ctx.systems.length>0||L.souls.some(e=>!e.dissipated))&&(0,$.jsxs)(`div`,{className:`sheet-sec`,children:[t.ctx.systems.length>0&&(0,$.jsxs)(`div`,{className:`sheet-line`,children:[`金手指：`,t.ctx.systems.join(`、`)]}),L.souls.filter(e=>!e.dissipated).map(e=>(0,$.jsxs)(`div`,{className:`sheet-line`,children:[`残魂 `,e.name,` —— 好感 `,Math.round(e.favor),` · 夺舍 `,Math.round(e.possession),`%`]},e.id))]}),(0,$.jsxs)(`div`,{className:`sheet-sec`,children:[(0,$.jsxs)(`div`,{className:`sheet-line`,children:[`未了因果：恶 `,t.ctx.karmaLedger.filter(e=>!e.resolved&&e.polarity<0).length,`· 善 `,t.ctx.karmaLedger.filter(e=>!e.resolved&&e.polarity>0).length,t.ctx.knowers.length?` · 知情者 ${t.ctx.knowers.length} 人`:``]}),[`金手指`,`残魂`,`真实修为`,`杀过某人`,`身世`].filter(e=>L.secrets[e]>=25).map(e=>(0,$.jsxs)(`div`,{className:`sheet-line`,children:[`暴露 · `,e,`：`,Math.round(L.secrets[e])]},e))]}),(0,$.jsxs)(`div`,{className:`sheet-sec`,children:[(0,$.jsx)(`div`,{className:`sheet-line`,style:{marginBottom:8},children:`修行之姿`}),(0,$.jsx)(`div`,{className:`row`,children:so.map(e=>(0,$.jsx)(`button`,{className:`ghost-btn ${t.stance===e.m?`on`:``}`,onClick:()=>{t.stance=e.m,M(e=>e+1)},children:e.label},e.m))}),(0,$.jsx)(`div`,{className:`sheet-hint`,children:so.find(e=>e.m===t.stance)?.hint})]})]})]})]})}function mo(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function ho(e){return mo(e).replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`).replace(/\*([^*]+)\*/g,`<em>$1</em>`).replace(/`([^`]+)`/g,`<code>$1</code>`)}function go(e){let t=[],n=!1,r=[],i=[],a=[],o=()=>{a.length&&(t.push(`<p>${a.map(ho).join(`
`)}</p>`),a=[])},s=()=>{i.length&&(t.push(`<blockquote>${i.map(ho).join(`
`)}</blockquote>`),i=[])};for(let c of e.split(`
`)){if(c.startsWith("```")){o(),s(),n&&(t.push(`<pre class="mono">${mo(r.join(`
`))}</pre>`),r.length=0),n=!n;continue}if(n){r.push(c);continue}if(c.startsWith(`### `)){o(),s(),t.push(`<h3>${ho(c.slice(4))}</h3>`);continue}if(c.startsWith(`## `)){o(),s(),t.push(`<h2>${ho(c.slice(3))}</h2>`);continue}if(c.startsWith(`# `)){o(),s(),t.push(`<h1>${ho(c.slice(2))}</h1>`);continue}if(c.trim()===`---`){o(),s(),t.push(`<hr/>`);continue}if(c.startsWith(`> `)||c===`>`){o(),i.push(c.replace(/^> ?/,``));continue}if(c.startsWith(`- `)){o(),s(),t.push(`<li>${ho(c.slice(2))}</li>`);continue}if(c.trim()===``){o(),s();continue}s(),a.push(c)}return o(),s(),n&&r.length&&t.push(`<pre class="mono">${mo(r.join(`
`))}</pre>`),t.join(`
`)}function _o(e){let{game:t,result:n}=e,[i,a]=(0,r.useState)(`成书`),[o,s]=(0,r.useState)(t.pov===`我`?`我`:`他`),c=(0,r.useMemo)(()=>o===`他`?n.novel:Vi({daoName:t.name,seed:t.seed,beats:t.session.beats,chronicle:n.chronicle,stele:n.stele,signature:t.session.signature(),pov:`我`}),[o,t,n]);return(0,$.jsxs)(`div`,{className:`over fade-in`,children:[(0,$.jsxs)(`div`,{className:`ending-grade`,children:[n.stele.grade,` · `,n.stele.serial]}),(0,$.jsx)(`div`,{className:`ending-name`,children:n.ending.name}),(0,$.jsx)(`div`,{className:`ending-text`,children:n.ending.text}),(0,$.jsxs)(`div`,{className:`ending-text`,style:{marginTop:4},children:[`道果 +`,n.daoFruit,`（累计 `,e.save.registry.daoFruit,`）`]}),(0,$.jsx)(`div`,{className:`tabs`,children:[`成书`,`一生录`,`道碑`].map(e=>(0,$.jsx)(`button`,{className:`tab ${i===e?`on`:``}`,onClick:()=>a(e),children:e},e))}),i===`成书`&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:`row`,children:[(0,$.jsx)(`button`,{className:`ghost-btn ${o===`他`?`on`:``}`,onClick:()=>s(`他`),children:`传记体`}),(0,$.jsx)(`button`,{className:`ghost-btn ${o===`我`?`on`:``}`,onClick:()=>s(`我`),children:`自述体`}),(0,$.jsx)(`span`,{className:`grow`}),(0,$.jsx)(`button`,{className:`ghost-btn`,onClick:()=>{let e=new Blob([c],{type:`text/markdown;charset=utf-8`}),n=document.createElement(`a`);n.href=URL.createObjectURL(e),n.download=`藏锋录·${t.name}${o===`我`?`自述`:`卷`}.md`,n.click(),URL.revokeObjectURL(n.href)},children:`下载此书`})]}),(0,$.jsx)(`div`,{className:`book`,dangerouslySetInnerHTML:{__html:go(c)}})]}),i===`一生录`&&(0,$.jsx)(`pre`,{className:`mono`,children:Hn(n.chronicle)}),i===`道碑`&&(0,$.jsx)(`pre`,{className:`mono`,children:Zn(n.stele)}),(0,$.jsx)(`div`,{className:`row`,style:{justifyContent:`center`,marginTop:10},children:(0,$.jsx)(`button`,{className:`primary-btn`,style:{flex:1},onClick:e.onRestart,children:`再 入 轮 回`})}),(0,$.jsx)(`div`,{className:`row`,style:{justifyContent:`center`},children:(0,$.jsx)(`button`,{className:`linklike`,onClick:e.onGallery,children:`去碑林看看`})})]})}function vo(e){let[t,n]=(0,r.useState)(null),i=[...e.save.steles].reverse(),a=xa(e.save);return(0,$.jsxs)(`div`,{className:`gallery fade-in`,children:[(0,$.jsx)(`h2`,{children:`碑 林`}),(0,$.jsxs)(`div`,{className:`row`,style:{justifyContent:`center`,color:`var(--dim)`,fontSize:`0.85rem`},children:[Object.entries(a).map(([e,t])=>(0,$.jsxs)(`span`,{children:[e,`×`,t]},e)),i.length===0&&(0,$.jsx)(`span`,{children:`（空山无碑。去走一遭吧。）`})]}),i.map(e=>(0,$.jsxs)(`div`,{className:`stele-item`,onClick:()=>n(t===e.serial?null:e.serial),children:[(0,$.jsxs)(`div`,{className:`sh`,children:[(0,$.jsx)(`span`,{className:`grade`,children:e.grade}),(0,$.jsx)(`span`,{className:`nm`,children:e.daoName}),(0,$.jsxs)(`span`,{className:`meta`,children:[e.ending,` · `,e.finalRealm,` · 寿`,e.lifespan,`载 · 完满度`,e.perfection]}),(0,$.jsx)(`span`,{className:`meta`,children:`★`.repeat(e.rarity)})]}),t===e.serial&&(0,$.jsx)(`pre`,{className:`mono`,style:{marginTop:10},children:Zn(e)})]},e.serial)),(0,$.jsx)(`div`,{className:`row`,style:{justifyContent:`center`,marginTop:12},children:(0,$.jsx)(`button`,{className:`ghost-btn`,onClick:e.onBack,children:`回到入口`})})]})}function yo(){let[e,t]=(0,r.useState)(aa);return(0,r.useEffect)(()=>oa(t),[]),e}function bo({load:e}){let t=e.total>0?e.done/e.total:0;return e.status===`error`?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(za,{progress:t,label:`香火中断`}),(0,$.jsx)(`div`,{style:{position:`fixed`,inset:0,zIndex:61,pointerEvents:`none`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`flex-end`,paddingBottom:`14vh`},children:(0,$.jsxs)(`div`,{style:{pointerEvents:`auto`,maxWidth:`20rem`,textAlign:`center`},children:[(0,$.jsx)(`div`,{style:{fontSize:`.78rem`,opacity:.75,lineHeight:1.6},children:e.error}),(0,$.jsx)(`button`,{className:`primary-btn`,onClick:va,children:`重 燃`})]})})]}):(0,$.jsx)(za,{progress:t})}function xo(){let e=yo(),t=e.db,[n]=(0,r.useState)(()=>Ca()),[i,a]=(0,r.useState)(`cover`),[o,s]=(0,r.useState)(null),[c,l]=(0,r.useState)(null),[u,d]=(0,r.useState)(null),f=(e,t)=>{ka();let r=new Zi({seed:t.seed,db:e,registry:n.registry,name:t.name,birthplace:t.birthplace});l({session:r,seed:t.seed,name:t.name,pov:t.pov,birthplace:t.birthplace}),d(null),a(`play`)},p=e=>{let t=Oa();if(t)try{let r=new Zi({seed:t.snap.seed,db:e,registry:n.registry,restore:t.snap});l({session:r,seed:t.snap.seed,name:t.snap.name,pov:t.pov}),d(null),a(`play`)}catch{ka()}},m=e=>{t?f(t,e):s({kind:`start`,cfg:e})},h=()=>{t?p(t):s({kind:`resume`})};return(0,r.useEffect)(()=>{!t||!o||(s(null),o.kind===`start`?f(t,o.cfg):p(t))},[t,o]),e.total<=0&&!t?(0,$.jsx)(bo,{load:e}):(0,$.jsxs)(`div`,{className:`shell`,children:[i===`cover`&&(0,$.jsx)(Ba,{save:n,onEnter:()=>a(`start`),onResume:h,onGallery:()=>a(`gallery`)}),i===`start`&&(0,$.jsx)(Ia,{save:n,onStart:m,onResume:h,onGallery:()=>a(`gallery`)}),i===`play`&&c&&(0,$.jsx)(po,{game:c,onOver:e=>{ka(),n.steles.push(e.stele),wa(n),d(e),a(`over`)},onQuit:()=>a(`start`)}),i===`over`&&c&&u&&(0,$.jsx)(_o,{game:c,result:u,save:n,onRestart:()=>a(`start`),onGallery:()=>a(`gallery`)}),i===`gallery`&&(0,$.jsx)(vo,{save:n,onBack:()=>a(`cover`)}),o&&(0,$.jsx)(bo,{load:e})]})}(0,i.createRoot)(document.getElementById(`root`)).render((0,$.jsx)(xo,{}));