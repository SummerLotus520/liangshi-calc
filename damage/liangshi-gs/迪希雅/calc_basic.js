import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "迪希雅"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementFireTeam: 1, EnergyTeammate: 70, HealDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}释放伤害`,
  params: { SkillsUse: 1, SkillsHit: 1, SkillsDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['净焰昂藏伤害'], 'e')
},
{
  title: `${TalentName.eName}二段伤害`,
  params: { SkillsUse: 2, SkillsHit: 3, SkillsDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.e['剑域炽焰伤害'], 'e')
},
{
  title: '净焰剑狱协同攻击',
  params: { Field: true, SkillsUse: 2, SkillsHit: 4, SkillsDmg: 4 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.e['领域伤害2'][0] * calc(attr.atk) / 100 + talent.e['领域伤害2'][1] * calc(attr.hp) / 100, 'e')
},
{
  title: '净焰剑狱协同蒸发',
  params: { Field: true, SkillsUse: 2, SkillsHit: 4, SkillsDmg: 4, WaterAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.e['领域伤害2'][0] * calc(attr.atk) / 100 + talent.e['领域伤害2'][1] * calc(attr.hp) / 100, 'e', 'vaporize')
},
{
  title: '炽鬃拳伤害',
  params: { BurstAfter: 4, BurstUse: 1, BurstHit: 6, BurstDmg: 6 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.q['炽鬃拳伤害2'][0] * calc(attr.atk) / 100 + talent.q['炽鬃拳伤害2'][1] * calc(attr.hp) / 100, 'q')
},
{
  title: '炽鬃拳蒸发',
  params: { BurstAfter: 4, WaterAttachment: true, BurstUse: 1, BurstHit: 6, BurstDmg: 6 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.q['炽鬃拳伤害2'][0] * calc(attr.atk) / 100 + talent.q['炽鬃拳伤害2'][1] * calc(attr.hp) / 100, 'q', 'vaporize')
},
{
  title: '焚落踢伤害',
  params: { BurstAfter: 4, BurstUse: 1, BurstHit: 11, BurstDmg: 11 },
  dmg: ({ talent, calc, attr, cons }, { basic }) => basic(talent.q['焚落踢伤害2'][0] * calc(attr.atk) / 100 + talent.q['焚落踢伤害2'][1] * calc(attr.hp) / 100, 'q')
},
{
  title: '焚落踢蒸发',
  dmgKey: 'q',
  params: { BurstAfter: 4, WaterAttachment: true, BurstUse: 1, BurstHit: 11, BurstDmg: 11 },
  dmg: ({ talent, calc, attr, cons }, { basic }) => basic(talent.q['焚落踢伤害2'][0] * calc(attr.atk) / 100 + talent.q['焚落踢伤害2'][1] * calc(attr.hp) / 100, 'q', 'vaporize')
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
