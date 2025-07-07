import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "琴"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWindTeam: 1, EnergyTeammate: 80, HealDetermine: true, TruceChangeHp: true, HealTeamDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1, phy: true },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2', 'phy')
},
{
  title: `${TalentName.eName}伤害`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  check: ({ cons }) => cons >= 1,
  title: `长按${TalentName.eName}伤害`,
  params: { SkillsAfter: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.qName}爆发伤害`,
  dmgKey: 'q',
  params: { Dandelion_Field: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1, HealNumber: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['爆发伤害'], 'q')
},
{
  title: `${TalentName.qName}领域伤害`,
  params: { Dandelion_Field: true, BurstUse: 1, BurstHit: 2, BurstDmg: 2, HealNumber: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.q['出入领域伤害'], 'q')
},
{
  title: `${TalentName.qName}爆发治疗`,
  params: { Dandelion_Field: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1, HealNumber: 1 },
  dmgKey: 'h',
  dmg: ({ talent, calc, attr }, { heal }) => heal(talent.q['领域发动治疗量2'][0] * calc(attr.atk) / 100 + talent.q['领域发动治疗量2'][1] * 1)
},
{
  title: `${TalentName.qName}持续治疗`,
  params: { Dandelion_Field: true, BurstUse: 1, BurstHit: 2, BurstDmg: 2, HealNumber: 2 },
  dmg: ({ talent, calc, attr }, { heal }) => heal(talent.q['持续治疗2'][0] * calc(attr.atk) / 100 + talent.q['持续治疗2'][1] * 1)
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
]