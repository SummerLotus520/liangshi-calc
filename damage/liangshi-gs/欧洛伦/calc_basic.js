import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "欧洛伦"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementMineTeam: 1, EnergyTeammate: 60, NatlanTeammate: 1 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}弹跳对单`,
  params: { SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['宿灵球伤害'], 'e,nightsoul')
},
{
  title: `${TalentName.eName}弹跳激化`,
  params: { GrassAttachment: true, SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.e['宿灵球伤害'], 'e,nightsoul', 'aggravate')
},
{
  title: `${TalentName.qName}释放伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['秘仪伤害'], 'q,nightsoul')
},
{
  title: `${TalentName.qName}释放激化`,
  params: { GrassAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['秘仪伤害'], 'q,nightsoul', 'aggravate')
},
{
  title: `${TalentName.qName}音波碰撞伤害`,
  params: { BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['音波碰撞伤害'], 'q,nightsoul')
},
{
  title: `${TalentName.qName}音波碰撞激化`,
  params: { GrassAttachment: true, BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.q['音波碰撞伤害'], 'q,nightsoul', 'aggravate')
},
{
  title: `${TalentName.tName}附加伤害`,
  params: { Hypersense_effect: true, ElementDmg: 2, Nightsoul: true },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 160 / 100, 'nightsoul')
},
{
  title: '感电反应伤害',
  params: { Nightsoul: true },
  dmgKey: 'r',
  dmg: ({}, { reaction }) => reaction('electroCharged')
},
{
  title: `恰玛欧茜 后台${TalentName.qName}碰撞`,
  dmgKey: 'q',
  params: { team: true, Mavuika: true, Chasca: true, Citlali: true, ElementDifferent: 3, ElementSame: 1, ElementWindTeam: 1, ElementMineTeam: 1, ElementFireTeam: 1, ElementIceTeam: 1, ShieldTime: 10, NatlanTeammate: 4, EnergyTeammate: 180, NightsoulUse: 332, TruceTime: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.q['音波碰撞伤害'], 'q,nightsoul')
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