import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "神里绫人"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWaterTeam: 1, EnergyTeammate: 80 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}伤害`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['水影伤害'], 'e')
},
{
  title: `${TalentName.qNameT}后瞬水剑一段伤害`,
  params: { Suiyuu: true, Namisen: 3, NormalElement: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['一段瞬水剑伤害'], 'a')
},
{
  title: `${TalentName.qNameT}后瞬水剑二段伤害`,
  params: { Suiyuu: true, Namisen: 4, NormalUse: 2, NormalHit: 2, NormalDmg: 2, NormalElement: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['二段瞬水剑伤害'], 'a')
},
{
  title: `${TalentName.qNameT}后瞬水剑三段伤害`,
  params: { Suiyuu: true, Namisen: 5, NormalUse: 3, NormalHit: 3, NormalDmg: 3, NormalElement: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.e['三段瞬水剑伤害'], 'a')
},
{
  title: `${TalentName.qNameT}后瞬水剑三段蒸发`,
  params: { Suiyuu: true, Namisen: 5, NormalUse: 3, NormalHit: 3, NormalDmg: 3, FireAttachment: true, NormalElement: 3 },
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => dmg(talent.e['三段瞬水剑伤害'], 'a', 'vaporize')
},
{
  title: `${TalentName.qName}每段伤害`,
  params: { BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['水花剑伤害'], 'q')
},
{
  title: `${TalentName.qName}每段蒸发`,
  params: { BurstUse: 1, BurstHit: 4, BurstDmg: 4, FireAttachment: true },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['水花剑伤害'], 'q', 'vaporize')
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
