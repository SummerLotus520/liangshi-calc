import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "妮露"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWaterTeam: 1, EnergyTeammate: 70 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}启动伤害`,
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['技能伤害'] / 100, 'e')
},
{
  title: `${TalentName.eNameT}${TalentName.aNameT}一段伤害`,
  params: { SkillsUse: 2, SkillsHit: 2, SkillsDmg: 2 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['剑舞步/旋舞步一段伤害2'][0] / 100, 'e')
},
{
  title: `${TalentName.eNameT}${TalentName.aNameT}二段伤害`,
  params: { SkillsUse: 2, SkillsHit: 3, SkillsDmg: 3 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['剑舞步/旋舞步二段伤害2'][0] / 100, 'e')
},
{
  title: '水月伤害',
  params: { Luminous_Illusion: true, SkillsUse: 2, SkillsHit: 4, SkillsDmg: 4 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['水月/水轮伤害2'][0] / 100, 'e')
},
{
  title: '水月蒸发',
  dmgKey: 'e',
  params: { Luminous_Illusion: true, SkillsUse: 2, SkillsHit: 4, SkillsDmg: 4, FireAttachment: true },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['水月/水轮伤害2'][0] / 100, 'e', 'vaporize')
},
{
  title: `${TalentName.qName}命中伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent, calc, attr }, { basic }) => basic( calc(attr.hp) * talent.q['技能伤害'] / 100, 'q')
},
{
  title: `${TalentName.qName}命中蒸发`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, FireAttachment: true },
  dmgKey: 'q',
  dmg: ({ talent, calc, attr }, { basic }) => basic( calc(attr.hp) * talent.q['技能伤害'] / 100, 'q', 'vaporize')
},
{
  title: '永世流沔伤害',
  params: { BurstUse: 1, BurstHit: 2, BurstDmg: 2 },
  dmg: ({ talent, calc, attr }, { basic }) => basic( calc(attr.hp) * talent.q['永世流沔伤害'] / 100, 'q')
},
{
  title: '丰穰之核伤害',
  dmgKey: 'r',
  params: { ElementGrassTeam: 1 },
  dmg: ({}, { reaction }) => reaction('bloom')
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