import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "恰斯卡"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let zyd = { dmg: 0, avg: 0 }
let szfhgzyd = { dmg: 0, avg: 0 }
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWindTeam: 1, NatlanTeammate: 1, Nightsoul: true, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}点按伤害`,
  dmgKey: 'a',
  params: { Shadowhunt_Shell: false, ElementDifferent: 0, ChargedAfter: false, ChangeNightsou: 2, NightsoulUse: 8 },
  dmg: ({ talent }, dmg) => {
    let deDmg = dmg(talent.e['多重瞄准点按伤害'], 'a,nightsoul')
    szfhgzyd = dmg(talent.e['焕光追影弹伤害'], 'a2,nightsoul', 'scene,vaporize')
    return deDmg
  }
},
{
  title: '追影弹伤害', // 锁定重击触发不了弹弓与阿莫斯，ChargedAfter直接给false屏蔽相应类型buff
  params: { Shadowhunt_Shell: false, NormalUse: 1, ChargedHit: 6, ChargedDmg: 6, ChargedAfter: false, ChangeNightsou: 2, NightsoulUse: 8 },
  dmg: ({ talent }, dmg) => {
    zyd = dmg(talent.e['追影弹伤害'], 'a2,nightsoul')
    return zyd
  }
},
{
  title: '焕光追影弹伤害', //每秒消耗约8夜魂值
  dmgKey: 'z',
  params: { Shadowhunt_Shell: true, ElementDifferent: 3, NormalUse: 1, ChargedHit: 6, ChargedDmg: 6, ChargedAfter: false, ChangeNightsou: 4, NightsoulUse: 24 },
  dmg: ({ talent }, dmg) => dmg(talent.e['焕光追影弹伤害'], 'a2,nightsoul', 'scene')
},
{
  title: `模拟长按${TalentName.eName}-2火1水队友`,
  params: { simulate: true, Shadowhunt_Shell: true, ElementWindTeam: 1, ElementFireTeam: 2, ElementWaterTeam: 1, ElementDifferent: 3, NormalUse: 1, ChargedHit: 6, ChargedDmg: 6, ChargedAfter: false, ChangeNightsou: 4, NightsoulUse: 24 },
  dmg: ({ talent, cons, attr, calc }, { basic, reaction }) => {
    let hgzyd = basic(talent.e['焕光追影弹伤害'] * calc(attr.atk) / 100, 'a2,nightsoul', 'scene')
    let hzfhgzyd = basic(talent.e['焕光追影弹伤害'] * calc(attr.atk) / 100, 'a2,nightsoul', 'scene,vaporize')
    let Z2config = Math.floor(Math.random() * 100) + 1
    let Z3config = Math.floor(Math.random() * 100) + 1
    let Z4config = Math.floor(Math.random() * 100) + 1
    let Z6config = Math.floor(Math.random() * 100) + 1
    let ksDmg = reaction('swirl')
    let Z4element = Z6config > 33 ? (Z4config > 33 ? 0 : 1) : (Z4config > 33 ? 0.5 : 0)
    let Z4Dmg = Z4element > 0.5 ? szfhgzyd : (Z4element > 0 ? hzfhgzyd : hgzyd)
    let Z3Dmg = cons >= 1 ? hgzyd : (Z3config >= 66.6 ? zyd : hgzyd )
    let Z2Dmg = cons >= 1 ? (Z4element >= 0 ? hgzyd : (Z4config > 33 ? (Z2config > 33 ? hgzyd : szfhgzyd) : (Z2config > 33 ? hzfhgzyd : hgzyd))) : (Z4element >= 0 ? zyd : { dmg: zyd.dmg + ksDmg.avg, avg: zyd.avg + ksDmg.avg })
    let cons2 = basic((cons >= 2 ? 400 : 0) * calc(attr.atk) / 100, 'a2,nightsoul', 'scene')
    /*
    遵循2次附着规则，后填先发
    模拟对单，扩散不触发二次反应，无队友buff
    伤害不包括天赋额外流焰弹，初始默认无附着，无附着时不触发扩散
    不计算战技起身伤害，依据天赋概率平均每次装填2.44火弹1.22水弹2.33风弹（0命）、3.33火弹1.66水弹1风弹（1~6命）随机触发
    */
    return {
      dmg: hgzyd.dmg + hgzyd.dmg + Z4Dmg.dmg + Z3Dmg.dmg + Z2Dmg.dmg + zyd.dmg + cons2.dmg,
      avg: hgzyd.avg + hgzyd.avg + Z4Dmg.avg + Z3Dmg.avg + Z2Dmg.avg + zyd.avg + cons2.avg
    }
  }
},
{
  title: `${TalentName.qName}释放伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['裂风索魂弹伤害'], 'q,nightsoul')
},
{
  title: '索魂弹伤害',
  params: { BurstUse: 1, BurstHit: 7, BurstDmg: 7 },
  dmg: ({ talent }, dmg) => dmg(talent.q['索魂弹伤害'], 'q,nightsoul')
},
{
  title: '溢光索魂弹伤害',
  params: { BurstUse: 1, BurstHit: 7, BurstDmg: 7 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['溢光索魂弹伤害'], 'q,nightsoul', 'scene')
},
{
  title: '扩散反应伤害',
  dmgKey: 'r',
  dmg: ({}, { reaction }) => reaction('swirl')
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
]]
