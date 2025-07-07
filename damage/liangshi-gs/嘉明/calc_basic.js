import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "嘉明"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { LiyueTeammate: 1, ElementSame: 1, ElementFireTeam: 1, EnergyTeammate: 40, HealDetermine: true, SkillsHit: 0, SkillsDmg: 0 }
export const buffs = CalcBuff
export const details = [
{
  title: '下落攻击·踏云献瑞伤害',
  params: { PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['下落攻击·踏云献瑞伤害'], 'a3')
},
{
  title: '下落攻击·踏云献瑞蒸发',
  params: { PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1, ElementWaterTeam: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['下落攻击·踏云献瑞伤害'], 'a3', 'vaporize')
},
{
  title: '下落攻击·踏云献瑞融化',
  params: { PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1, ElementIceTeam: true },
  dmgKey: 'c',
  dmg: ({ talent }, dmg) => dmg(talent.e['下落攻击·踏云献瑞伤害'], 'a3', 'melt')
},
{
  title: `${TalentName.qName}砸击伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['猊兽·文仔砸击伤害'], 'q')
},
{
  title: `${TalentName.qName}砸击蒸发`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, ElementWaterTeam: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['猊兽·文仔砸击伤害'], 'q', 'vaporize')
},
{
  title: `${TalentName.qName}砸击融化`,
  dmgKey: 'q',
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, ElementIceTeam: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['猊兽·文仔砸击伤害'], 'q', 'melt')
},
{
  title: `${TalentName.tName}下落攻击治疗量`,
  dmgKey: 'h',
  params: { PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1, HealNumber: 6 },
  dmg: ({ attr, calc }, { heal }) => heal(calc(attr.hp) * 6 / 100)
},
{
  check: ({ cons }) => cons >= 1,
  title: `${TalentName.c1Name}会合治疗量`,
  params: { BurstUse: 1, BurstHit: 1, BurstDmg: 1, PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1, OwnHp: 25 },
  dmg: ({ attr, calc }, { heal }) => heal(calc(attr.hp) * 15 / 100)
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
]
