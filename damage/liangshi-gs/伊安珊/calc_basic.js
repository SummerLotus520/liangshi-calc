import { LSconfig } from '#liangshi'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "伊安珊"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { Nightsoul: true, HealNumber: 3, HealDetermine: true, ElementSame: 1, ElementMineTeam: 1, NatlanTeammate: 1, NightsoulUse: 10 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`, //每秒消耗约7夜魂值
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1, ChangeNightsou: 2, NightsoulUse: 6 },
  dmgKey: 'z',
  dmg: ({ talent, attr , cons }, dmg ) => dmg(talent.a['雷霆飞缒伤害'], 'a2,nightsoul')
},
{
  title: `${TalentName.eName}施放伤害`,
  params: { ChangeNightsou: 1 },
  dmg: ({ talent, attr, calc }, dmg ) => dmg(talent.e['技能伤害'], 'e,nightsoul')
},
{
  title: `${TalentName.eName}施放激化`,
  params: { GrassAttachment: true, ChangeNightsou: 1 },
  dmgKey: 'e',
  dmg: ({ talent, attr, calc }, dmg ) => dmg(talent.e['技能伤害'], 'e,nightsoul', 'aggravate')
},
{
  title: `${TalentName.tName}治疗`,
  params: { ChangeNightsou: 1 },
  dmgKey: 'h',
  dmg: ({ attr, calc }, { heal }) => heal(calc(attr.atk) * 60 / 100)
},
{
  title: `${TalentName.qName}施放伤害`,
  params: { BurstUse: 1, BurstHit: 1, BurstDmg: 1, EnergyDetermine: 0, ChangeNightsou: 1 },
  dmg: ({ talent, attr, calc }, dmg ) => dmg(talent.q['技能伤害'], 'q,nightsoul')
},
{
  title: `${TalentName.qName}施放激化`,
  dmgKey: 'q',
  params: { GrassAttachment: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1, EnergyDetermine: 0, ChangeNightsou: 1 },
  dmg: ({ talent, attr, calc }, dmg ) => dmg(talent.q['技能伤害'], 'q,nightsoul', 'aggravate')
},
{
  title: `${TalentName.qName}攻击力提升值`,
  params: { ChangeNightsou: 1 },
  dmgKey: 'f',
  dmg: ({ talent, calc, attr, weapon }) => {
    let Staff_of_Homa = weapon.name === '护摩之杖' ? (calc(attr.hp) * (1.4 + weapon.affix * 0.4) / 100) : 0
    let Engulfing_Lightning = weapon.name === '薙草之稻光' ? ((calc(attr.recharge) - 100) * (21 + weapon.affix * 7) / 100 * attr.atk.base / 100) : 0
    let Staff_of_the_Scarlet_Sands = weapon.name === '赤沙之杖' ? (calc(attr.mastery) * (21 + weapon.affix * 7) / 100) : 0
    return {
      avg: Math.min((calc(attr.atk) - Staff_of_Homa - Engulfing_Lightning - Staff_of_the_Scarlet_Sands) * talent.q['高位攻击力转化率'] / 100, talent.q['最大攻击力加成'])
    }
  }
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
  title: '触发特效后暴击率',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) })  
}, {  
  title: '触发特效后暴击伤害',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) })  
}, {  
  title: '触发特效后元素精通',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.mastery) * 1) })  
}, {  
  title: '触发特效后充能效率',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) })  
}, {  
  title: '触发特效后治疗加成',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) })  
}, {  
  title: '触发特效后护盾强效',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.shield) * 1) })  
}, {  
  title: '当前圣遗物套装',  
  dmg: ({ artis }) => ({ avg: artis, type: 'text' })  
}
]
