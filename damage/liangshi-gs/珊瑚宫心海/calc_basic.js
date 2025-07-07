import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "珊瑚宫心海"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWaterTeam: 1, EnergyTeammate: 70, HealDetermine: true, TruceChangeHp: true, HealTeamDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}伤害`,
  params: { SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, HealNumber: 4, Ceremonial_Garment: false },
  dmg: ({ attr, talent }, dmg) => dmg(talent.e['波纹伤害'], 'e')
},
{
  title: `${TalentName.eName}每跳治疗`,
  params: { SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, HealNumber: 4, Ceremonial_Garment: false, OwnHp: 25 },
  dmgKey: 'h',
  dmg: ({ attr, talent, calc, cons }, { heal }) => heal(calc(attr.hp) / 100 * talent.e['治疗量2'][0] + talent.e['治疗量2'][1] * 1 + calc(attr.hp) * 4.5 * (cons * 1 >= 2 ? 1 : 0) / 100)
},
{
  title: `${TalentName.qName}伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, HealNumber: 4 },
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.q['技能伤害'] / 100, 'q')
},
{
  title: `${TalentName.qName}蒸发`,
  params: { FireAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, HealNumber: 4 },
  dmgKey: 'q',
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.q['技能伤害'] / 100, 'q', 'vaporize')
},
{
  title: `${TalentName.qNameT}后${TalentName.aName}治疗`,
  params: { BurstUse: 1, BurstHit: 1, BurstDmg: 1, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, HealNumber: 5 },
  dmg: ({ attr, talent, calc, cons }, { heal }) => heal(calc(attr.hp) / 100 * talent.q['命中治疗量2'][0] + talent.q['命中治疗量2'][1] * 1 + calc(attr.hp) * 0.6 * (cons * 1 >= 2 ? 1 : 0) / 100)
},
{
  title: `${TalentName.qNameT}后${TalentName.eName}伤害`,
  params: { BurstUse: 1, BurstHit: 1, BurstDmg: 1, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, HealNumber: 4 },
  dmgKey: 'e',
  dmg: ({ attr, talent }, dmg) => dmg(talent.e['波纹伤害'], 'e')
},
{
  title: `${TalentName.qNameT}后${TalentName.a2Name}伤害`,
  params: { BurstUse: 1, BurstHit: 1, BurstDmg: 1, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, HealNumber: 4, ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmg: ({ attr, talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
},
{
  title: `${TalentName.qNameT}后${TalentName.a2Name}蒸发`,
  params: { FireAttachment: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, HealNumber: 4, ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ attr, talent }, dmg) => dmg(talent.a['重击伤害'], 'a2', 'vaporize')
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
