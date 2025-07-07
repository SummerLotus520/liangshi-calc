import { Format, LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let NamePath = cfg.namemodel
let rankingOnePath = cfg.rankingOnemodel
let rankingTwoPath = cfg.rankingTwomodel
let rankingThreePath = cfg.rankingThreemodel
let sr1224ranking = cfg.sr1224ranking
let aName = '普通攻击'
let a2Name = '强化普攻'
let eName = '师父，请喝茶！'
let eNameT = 'E'
let qName = '盖世女侠三月七'
let qNameT = 'Q'
let c1Name = '一魂'
if ( NamePath !== 1 ) {
 if ( NamePath == 2 ) {
  aName = '荡涤妖邪琉璃剑'
  a2Name = '一扎眉攒，二扎心'
  eNameT = '师父，请喝茶！'
  qNameT = '盖世女侠三月七'
  c1Name = '一星魂'
 } else if ( NamePath == 3 ) {
  eNameT = '师父，请喝茶！'
  qNameT = '盖世女侠三月七'
 } else if ( NamePath == 4 ) {
  eName = '战技'
  qName = '终结技'
  eNameT = '战技'
  qNameT = '终结技'
 } else if ( NamePath == 5 ) {
  aName = '普攻'
  eName = 'E技能'
  qName = 'Q技能'
  eNameT = 'E技能'
  qNameT = 'Q技能'
 } else if ( NamePath == 6 ) {
  aName = 'A'
  eName = 'E'
  qName = 'Q'
  eNameT = 'E'
  qNameT = 'Q'
  c1Name = 'c1'
 }
}
const miss = ['h','y','dps','dph','hph','hps']
let ranking = 'undefined'
if (!cfg.sr1224ranking) {
 if ( rankingOnePath == 'm' )  {
  ranking = 'z'
 } else if (miss.includes(rankingOnePath)) {
    if ( rankingTwoPath == 'm' )  {
     ranking = 'z'
    } else if (miss.includes(rankingTwoPath)) {
      if ( rankingThreePath == 'm' )  {
       ranking = 'z'
      } else if (miss.includes(rankingThreePath)) {
       logger.mark('[巡猎三月七] 排名规则均未命中，已选择默认排名规则')
       ranking = 'z'
      } else {
        ranking = `${rankingThreePath}`
      }
    } else {
      ranking = `${rankingTwoPath}`
    }
 } else {
  ranking = `${rankingOnePath}`
 }
} else {
 ranking = `${sr1224ranking}`
}
let renew = '无'
let information = '如有问题请输入 #伤害计算反馈'

export const details = [
{
  title: `${aName}伤害`,
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},
{
  title: `${eName}附加伤害-虚数`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['附加伤害'], 'e')
},
{
  title: `${qName}伤害`,
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: `${a2Name}单段伤害`,
  params: { a2: true },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'], 'a')
},
{
  title: `${c1Name}追加伤害`,
  dmgKey: 'c',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 60 / 100, 't')
},
{  
  title: '触发特效后生命值',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.hp) * 1) })  
}, {  
  title: '触发特效后攻击力',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.atk) * 1) })  
}, {  
  title: '触发特效后防御力',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.def) * 1) })  
}, {  
  title: '触发特效后速度',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.speed) * 1) })  
}, {  
  title: '触发特效后暴击率',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) })  
}, {  
  title: '触发特效后暴击伤害',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) })  
}, {  
  title: '触发特效后击破特攻',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.stance) * 1) })  
}, {  
  title: '触发特效后效果命中',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effPct) * 1) })  
}, {  
  title: '触发特效后效果抵抗',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effDef) * 1) })  
}, {  
  title: '触发特效后充能效率',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) })  
}, {  
  title: '触发特效后治疗加成',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) })  
}, {  
  title: '当前遗器套装',  
  dmg: ({ artis }) => ({ avg: artis, type: 'text' })  
}
]

export const defDmgKey = `${ranking}`
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [[
characterBuffSr,enemyBuffSr,
{
  check: ({ params }) => params.a2 === true,
  title: '三月七天赋：[师父，我悟了！] 【师父】施放攻击或终结技后，造成的伤害提高[aDmg]%',
  data: {
    aDmg: ({ talent }) => talent.t['伤害提高'] * 100
 }
},
{
  title: '三月七1魂：[初花学剑动星芒] 场上存在【师父】时，速度提高[speedPct]%',
  cons: 1,
  data: {
    speedPct: 10
 }
},
{
  title: '三月七4魂：[龙飞凤舞不窝囊] 回合开始时，恢复[_energyevery]点能量。',
  cons: 4,
  data: {
    _energyevery: 5
 }
},
{
  check: ({ params }) => params.a2 === true,
  title: '三月七6魂：[****本姑娘] 施放终结技后，下一次强化普攻造成的暴击伤害提高[aCdmg]%',
  cons: 6,
  data: {
    aCdmg: 50
 }
},
{title: `8.21最后修改：[8.20重置] 显示模式:${NamePath} 排行设置:${rankingOnePath},${rankingTwoPath},${rankingThreePath} 专属排行设置:${sr1224ranking} 更新日志:${renew} 其他信息:${information}`}
]
]
