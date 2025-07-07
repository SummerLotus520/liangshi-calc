import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { Format } from '../../../../../plugins/liangshi-calc/components/index.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "雷电将军"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementMineTeam: 1, EnergyTeammate: 90 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}协同攻击`,
  params: { SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4 },
  dmgKey: 'e',
  dmg: ({ talent, attr }, dmg) => dmg(talent.e['协同攻击伤害'], 'e')
},
{
  title: '超绽放伤害',
  params: { SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4 },
  dmgKey: 'r',
  dmg: ({}, { reaction }) => reaction('hyperBloom')
},
{
  title: `零愿力${TalentName.qName}`,
  params: { Musou_Isshin: 0, Resolve: 0, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['梦想一刀基础伤害'], 'q')
},
{
  title: `满愿力${TalentName.qName}`,
  dmgKey: 'q',
  params: { Musou_Isshin: 0, Resolve: 60, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['梦想一刀基础伤害'], 'q')
},
{
  title: `满愿力${TalentName.qName}激化`,
  params: { GrassAttachment: true, Musou_Isshin: 0, Resolve: 60, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['梦想一刀基础伤害'], 'q','aggravate')
},
{
  title: `零愿力${TalentName.qNameT}后${TalentName.a2Name}`,
  params: { Musou_Isshin: 1, Resolve: 0, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, BurstUse: 1, BurstHit: 4, BurstDmg: 4, ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmg: ({ talent, attr }, dmg) => {
    let qz1 = dmg(talent.q['重击伤害'] / 2, 'q')
    return {
      dmg: qz1.dmg * 2,
      avg: qz1.avg * 2
    }
  }
},
{
  title: `满愿力${TalentName.qNameT}后${TalentName.a2Name}`,
  params: { Musou_Isshin: 1, Resolve: 60, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, BurstUse: 1, BurstHit: 4, BurstDmg: 4, ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent, attr }, dmg) => {
    let qz1 = dmg(talent.q['重击伤害'] / 2, 'q')
    return {
      dmg: qz1.dmg * 2,
      avg: qz1.avg * 2
    }
  }
},
{
  title: `满愿力${TalentName.qNameT}后${TalentName.a2Name}激化`,
  params: { GrassAttachment: true, Musou_Isshin: 1, Resolve: 60, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, BurstUse: 1, BurstHit: 4, BurstDmg: 4, ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmg: ({ talent, attr }, dmg) => {
    let qzj1 = dmg(talent.q['重击伤害'] / 2, 'q', 'aggravate')
    let qzj2 = dmg(talent.q['重击伤害'] / 2, 'q')
    return {
      dmg: qzj1.dmg + qzj2.dmg,
      avg: qzj1.avg + qzj2.avg
    }
  }
},
{
  title: `${TalentName.qName}单次能量恢复`,
  params: { Musou_Isshin: 1, Resolve: 60, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4, BurstUse: 1, BurstHit: 4, BurstDmg: 4, ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'f',
  dmg: ({ talent, calc, attr }) => {
    return {
      avg: Format.number(talent.q['梦想一心能量恢复'] * (1 + ((calc(attr.recharge) - 100) * 0.006))),
      type: 'text'
    }
  }
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
