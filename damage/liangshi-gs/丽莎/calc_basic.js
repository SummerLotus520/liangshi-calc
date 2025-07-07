import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "丽莎"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementMineTeam: 1, EnergyTeammate: 80 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
},
{
  title: `${TalentName.a2Name}激化`,
  params: { GrassAttachment: true, ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2', 'aggravate')
},
{
  title: `点按${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['点按伤害'], 'e')
},
{
  title: `点按${TalentName.eName}激化`,
  params: { GrassAttachment: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['点按伤害'], 'e', 'aggravate')
},
{
  title: `3层引雷长按${TalentName.eNameT}伤害`,
  params: { SkillsUse: 3, SkillsHit: 4, SkillsDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.e['三层引雷长按伤害'], 'e')
},
{
  title: `3层引雷长按${TalentName.eNameT}激化`,
  params: { GrassAttachment: true, SkillsUse: 3, SkillsHit: 4, SkillsDmg: 4 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['三层引雷长按伤害'], 'e', 'aggravate')
},
{
  title: `${TalentName.qName}每段伤害`,
  params: { Lightning_Rose: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.q['放电伤害'], 'q')
},
{
  title: `${TalentName.qName}激化每段`,
  params: { Lightning_Rose: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['放电伤害'], 'q', 'aggravate')
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
