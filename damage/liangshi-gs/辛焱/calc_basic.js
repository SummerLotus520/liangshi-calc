import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "辛焱"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementFireTeam: 1, EnergyTeammate: 60, ShieldDetermine: true, LiyueTeammate: 1 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}循环伤害`,
  params: { ChargedProgress: true, ChargedUse: 1, ChargedHit: 3, ChargedDmg: 3, phy: true },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击循环伤害'], 'a2', 'phy')
},
{
  title: `${TalentName.eName}伤害`,
  params: { ShieldTime: 0.1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['挥舞伤害'], 'e')
},
{
  title: `${TalentName.eName}蒸发`,
  params: { WaterAttachment: true, ShieldTime: 0.1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['挥舞伤害'], 'e', 'vaporize')
},
{
  title: `${TalentName.eName}冲击波伤害`,
  params: { ChargedProgress: true, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, ShieldTime: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.e['持续伤害'], 'e')
},
{
  title: `${TalentName.eName}冲击波蒸发`,
  params: { ChargedProgress: true, WaterAttachment: true, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, ShieldTime: 4 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['持续伤害'], 'e', 'vaporize')
},
{
  title: '三级护盾量',
  params: { ChargedProgress: true, SkillsUse: 1, SkillsHit: 6, SkillsDmg: 6, ShieldTime: 4 },
  dmgKey: 'h',
  dmg: ({ talent, calc, attr }, { shield }) => shield(talent.e['三级护盾吸收量2'][0] * calc(attr.def) / 100 + talent.e['三级护盾吸收量2'][1] * 1)
},
{
  title: `${TalentName.qName}释放伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, BurstProgress: true, ShieldTime: 4, phy: true },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', 'phy')
},
{
  title: `${TalentName.qName}持续伤害`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3, ShieldTime: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['火元素持续伤害'], 'q')
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
