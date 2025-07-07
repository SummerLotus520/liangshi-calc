import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "林尼"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementFireTeam: 1, EnergyTeammate: 60, HealDetermine: true, PrimordialDetermine: "pneuma", FontaineTeammate: 1 }
export const buffs = CalcBuff
export const details = [
{
  title: '隐具魔术箭伤害',
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1, ChangeHp: 1 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['隐具魔术箭伤害'], 'a2')
},
{
  title: '隐具魔术箭蒸发',
  params: { WaterAttachment: true, ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1, ChangeHp: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['隐具魔术箭伤害'], 'a2', 'vaporize')
},
{
  title: '礼花术弹伤害',
  params: { ChargedUse: 1, ChargedHit: 2, ChargedDmg: 2, ChangeHp: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['礼花术弹伤害'], 'a2')
},
{
  title: '礼花术弹蒸发',
  params: { WaterAttachment: true, ChargedUse: 1, ChargedHit: 2, ChargedDmg: 2, ChangeHp: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['礼花术弹伤害'], 'a2', 'vaporize')
},
{
  title: `0层${TalentName.eName}伤害`,
  params: { Prop_Surplus: 0 },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `5层${TalentName.eName}伤害`,
  params: { Prop_Surplus: 5, ChangeHp: 5, HealNumber: 1, ChargedUse: 5, ChargedHit: 10, ChargedDmg: 10 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.eName}每层治疗`,
  params: { Prop_Surplus: 5, ChangeHp: 5, HealNumber: 1, ChargedUse: 5, ChargedHit: 10, ChargedDmg: 10 },
  dmgKey: 'h',
  dmg: ({ talent, attr, calc }, { heal }) => heal(calc(attr.hp) * 20 / 100)
},
{
  title: `${TalentName.qName}伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: `${TalentName.qNameT}引爆礼花伤害`,
  params: { BurstUse: 1, BurstHit: 2, BurstDmg: 2 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['引爆礼花伤害'], 'q')
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
