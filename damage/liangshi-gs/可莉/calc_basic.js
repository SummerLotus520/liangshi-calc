import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "可莉"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementFireTeam: 1, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.aName}一段伤害`,
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
},
{
  title: `火花${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
},
{
  title: `火花${TalentName.a2Name}蒸发`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1, WaterAttachment: true },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2', 'vaporize')
},
{
  title: `${TalentName.eName}弹跳伤害`,
  params: { SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.e['蹦蹦炸弹伤害'], 'e')
},
{
  title: `${TalentName.eName}弹跳蒸发`,
  params: { SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3, WaterAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['蹦蹦炸弹伤害'], 'e', 'vaporize')
},
{
  title: `${TalentName.eName}诡雷伤害`,
  params: { SkillsUse: 2, SkillsHit: 6, SkillsDmg: 6 },
  dmg: ({ talent }, dmg) => dmg(talent.e['诡雷伤害'], 'e')
},
{
  title: `${TalentName.qName}单段伤害`,
  params: { BurstUse: 1, BurstHit: 6, BurstDmg: 6 },
  dmg: ({ talent }, dmg) => dmg(talent.q['轰轰火花伤害'], 'q')
},
{
  title: `${TalentName.qName}单段蒸发`,
  params: { BurstUse: 1, BurstHit: 6, BurstDmg: 6, WaterAttachment: true },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['轰轰火花伤害'], 'q', 'vaporize')
},
{
  check: ({ cons }) => cons >= 4,
  params: { BurstUse: 1, BurstHit: 12, BurstDmg: 12 },
  title: `${TalentName.c4Name}退场伤害`,
  dmg: ({ attr, talent, calc }, { basic }) =>  basic(calc(attr.atk) * 555 / 100)
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