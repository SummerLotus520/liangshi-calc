import LSconfig from '../../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "旅行者/hydro"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWaterTeam: 1, EnergyTeammate: 80, PrimordialDetermine: "pneuma", HealDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: '水滴伤害',
  params: { OwnHp: 48, Dewdrop: true, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4 },
  dmgKey: 'undefined',
  dmg: ({ talent }, dmg) => dmg(talent.e['露滴伤害'], 'e')
},
{
  title: `${TalentName.eName}伤害`,
  params: { OwnHp: 48, Torrent_Surge: true, SkillsUse: 1, SkillsHit: 7, SkillsDmg: 7 },
  dmg: ({ talent }, dmg) => dmg(talent.e['喷发激流伤害'], 'e')
},
{
  title: `${TalentName.eName}蒸发`,
  params: { FireAttachment: true, OwnHp: 48, Torrent_Surge: true, SkillsUse: 1, SkillsHit: 7, SkillsDmg: 7 },
  dmg: ({ talent }, dmg) => dmg(talent.e['喷发激流伤害'], 'e', 'vaporize')
},
{
  title: '充盈水滴伤害',
  params: { OwnHp: 92, Dewdrop: true, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.e['露滴伤害'], 'e')
},
{
  title: `充盈${TalentName.eName}伤害`,
  params: { OwnHp: 56, Torrent_Surge: true, SkillsUse: 1, SkillsHit: 7, SkillsDmg: 7 },
  dmg: ({ talent }, dmg) => dmg(talent.e['喷发激流伤害'], 'e')
},
{
  title: `充盈${TalentName.eName}蒸发`,
  dmgKey: 'e',
  params: { FireAttachment: true, OwnHp: 56, Torrent_Surge: true, SkillsUse: 1, SkillsHit: 7, SkillsDmg: 7 },
  dmg: ({ talent }, dmg) => dmg(talent.e['喷发激流伤害'], 'e', 'vaporize')
},
{
  title: `${TalentName.qName}单段伤害`,
  params: { BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: `${TalentName.qName}单段蒸发`,
  params: { FireAttachment: true, BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', 'vaporize')
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
