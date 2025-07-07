import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "鹿野院平藏"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWindTeam: 1, EnergyTeammate: 40 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.aName}一段伤害`,
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
},
{
  title: `${TalentName.a2Name}伤害`,
  dmgKey: 'z',
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
},
{
  title: `${TalentName.eName}伤害`,
  params: { Declension: 0 },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `满层${TalentName.eName}伤害`,
  params: { Declension: 4, NormalUse: 6, NormalHit: 8, NormalDmg: 8 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg((talent.e['技能伤害'] + 4 * talent.e['变格伤害提升'] + talent.e['正论伤害提升']), 'e')
},
{
  title: '真空弹伤害',
  params: { Declension: 4, NormalUse: 6, NormalHit: 8, NormalDmg: 8 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['不动流·真空弹伤害'], 'q')
},
{
  title: '聚风真眼伤害',
  params: { Declension: 4, NormalUse: 6, NormalHit: 8, NormalDmg: 8 },
  dmg: ({ talent }, dmg) => dmg(talent.q['聚风真眼伤害'], 'q', 'scene')
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
