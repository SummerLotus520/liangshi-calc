import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "旅行者/pyro"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementFireTeam: 1, Nightsoul: true, EnergyTeammate: 70 }
export const buffs = CalcBuff
export const details = [
{
  title: `点按${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['焰烈之槛伤害'], 'e,nightsoul')
},
{
  title: `长按${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['长按伤害'], 'e,nightsoul')
},
{
  title: `长按${TalentName.eName}蒸发`,
  params: { WaterAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['长按伤害'], 'e,nightsoul', 'vaporize')
},
{
  title: `长按${TalentName.eName}融化`,
  params: { IceAttachment: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['长按伤害'], 'e,nightsoul', 'melt')
},
{
  title: `长按${TalentName.eName}协同`,
  params: { SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['灼火之槛伤害'], 'e,nightsoul')
},
{
  title: `${TalentName.qName}释放伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul')
},
{
  title: `${TalentName.qName}释放蒸发`,
  params: { WaterAttachment: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul', 'vaporize')
},
{
  title: `${TalentName.qName}释放融化`,
  params: { IceAttachment: true },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul', 'melt')
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
