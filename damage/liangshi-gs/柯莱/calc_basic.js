import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "柯莱"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementGrassTeam: 1, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}伤害`,
  params: { SkillsUse: 1, SkillsHit: 2, SkillsDmg: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.eName}激化`,
  params: { GrassAttachment: true, SkillsUse: 1, SkillsHit: 2, SkillsDmg: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', 'spread')
},
{
  title: `${TalentName.tName}激化`,
  params: { GrassAttachment: true, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4 },
  dmgKey: 'e',
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.atk) * 40 / 100, 'e', 'spread')
},
{
  title: `${TalentName.qName}释放伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['爆发伤害'], 'q')
},
{
  title: `${TalentName.qName}释放激化`,
  params: { GrassAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['爆发伤害'], 'q', 'spread')
},
{
  title: `${TalentName.eName}每跳伤害`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.q['跃动伤害'], 'q')
},
{
  title: `${TalentName.eName}每跳激化`,
  params: { GrassAttachment: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['跃动伤害'], 'q', 'spread')
},
{
  title: '草原核伤害',
  dmgKey: 'r',
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