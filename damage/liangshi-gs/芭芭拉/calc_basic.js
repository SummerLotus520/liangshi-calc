import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "芭芭拉"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWaterTeam: 1, EnergyTeammate: 80, HealDetermine: true, TruceChangeHp: true, HealTeamDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
},
{
  title: `${TalentName.a2Name}蒸发`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1, FireAttachment: true },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2', 'vaporize')
},
{
  title: `${TalentName.eName}水珠伤害`,
  params: { SkillsUse: 1, SkillsHit: 1, SkillsDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['水珠伤害'], 'e')
},
{
  title: `${TalentName.eName}水珠蒸发`,
  params: { SkillsUse: 1, SkillsHit: 1, SkillsDmg: 1, FireAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['水珠伤害'], 'e', 'vaporize')
},
{
  title: `${TalentName.eName}每跳治疗`,
  params: { HealNumber: 1 },
  dmg: ({ talent, attr, calc }, { heal }) => heal(talent.e['持续治疗量2'][0] * calc(attr.hp) / 100 + talent.e['持续治疗量2'][1] * 1)
},
{
  title: `${TalentName.eName}命中治疗`,
  params: { HealNumber: 4 },
  dmg: ({ talent, attr, calc }, { heal }) => heal(talent.e['命中治疗量2'][0] * calc(attr.hp) / 100 + talent.e['命中治疗量2'][1] * 1)
},
{
  title: `${TalentName.eName}重击治疗`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1, HealNumber: 2 },
  dmg: ({ talent, attr, calc }, { heal }) => heal((talent.e['命中治疗量2'][0] * calc(attr.hp) / 100 + talent.e['命中治疗量2'][1] * 1) * 4)
},
{
  title: `${TalentName.qName}治疗量`,
  params: { EnergyDetermine: 0, BurstUse: 1, HealNumber: 1 },
  dmgKey: 'h',
  dmg: ({ talent, attr, calc }, { heal }) => heal(talent.q['治疗量2'][0] * calc(attr.hp) / 100 + talent.q['治疗量2'][1] * 1)
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
