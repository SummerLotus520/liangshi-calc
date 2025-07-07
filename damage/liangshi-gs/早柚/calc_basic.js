import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "早柚"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWindTeam: 1, EnergyTeammate: 80, HealDetermine: true, HealTeamDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}点按伤害`,
  params: { Kick: true, SkillsAfter: 0 },
  dmg: ({ talent }, dmg) => dmg(talent.e['风风轮舞踢点按伤害'], 'e')
},
{
  title: `${TalentName.eName}基础伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['风风轮伤害'], 'e')
},
{
  title: `${TalentName.eName}长按伤害`,
  params: { Kick: true, SkillsAfter: 10 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['风风轮舞踢长按伤害'], 'e')
},
{
  title: `${TalentName.qName}发动伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, HealNumber: 1 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能发动伤害'], 'q')
},
{
  title: `${TalentName.qName}发动治疗`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, HealNumber: 1 },
  dmgKey: 'h',
  dmg: ({ attr, calc, talent, cons }, { heal }) => heal(talent.q['技能发动治疗量2'][0] * calc(attr.atk) / 100 + talent.q['技能发动治疗量2'][1] * 1 + Math.min(calc(attr.mastery) * 3, 6000) * (cons >= 6 ? 1 : 0))
},
{
  title: `${TalentName.qName}每跳伤害`,
  params: { BurstUse: 1, BurstHit: 4, BurstDmg: 4, HealNumber: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['不倒貉貉伤害'], 'q')
},
{
  title: `${TalentName.qName}每跳治疗`,
  params: { BurstUse: 1, BurstHit: 4, BurstDmg: 4, HealNumber: 4 },
  dmg: ({ attr, calc, talent, cons }, { heal }) => heal(talent.q['不倒貉貉治疗量2'][0] * calc(attr.atk) / 100 + talent.q['不倒貉貉治疗量2'][1] * 1 + Math.min(calc(attr.mastery) * 3, 6000) * (cons >= 6 ? 1 : 0))
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