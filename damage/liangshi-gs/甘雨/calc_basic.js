import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

//默认打冻结，携带冰风4但不想打冻结的可以将FreezeDetermine改为false，重击蓄力按瞄准常开计时，重击计时与元素爆发全部命中帧速率均按60帧/秒

let CharacterName = "甘雨"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { FreezeDetermine: true, ElementSame: 1, ElementIceTeam: 1, LiyueTeammate: 1, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}绽发伤害`,
  params: { ChargedUse: 2, ChargedHit: 4, ChargedDmg: 4, ChargedTime: 2.01 },
  dmg: ({ talent }, dmg) => dmg(talent.a['霜华矢·霜华绽发伤害'], 'a2')
},
{
  title: `${TalentName.a2Name}绽发融化`,
  params: { FreezeDetermine: false, FireAttachment: true, ChargedUse: 2, ChargedHit: 4, ChargedDmg: 4, ChargedTime: 2.01 },
  dmg: ({ talent }, dmg) => dmg(talent.a['霜华矢·霜华绽发伤害'], 'a2', 'melt')
},
{
  title: `${TalentName.a2Name}总伤害`,
  params: { ChargedUse: 2, ChargedHit: 4, ChargedDmg: 4, ChargedTime: 2.01 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => {
    let z1 = dmg(talent.a['霜华矢·霜华绽发伤害'], 'a2')
    let z2 = dmg(talent.a['霜华矢命中伤害'], 'a2')
    return {
      dmg: z1.dmg + z2.dmg,
      avg: z1.avg + z2.avg
    }
  }
},
{
  title: `${TalentName.a2Name}总融化`,
  params: { FreezeDetermine: false, FireAttachment: true, ChargedUse: 2, ChargedHit: 4, ChargedDmg: 4, ChargedTime: 2.01 },
  dmg: ({ talent }, dmg) => {
    let z1 = dmg(talent.a['霜华矢·霜华绽发伤害'], 'a2', 'melt')
    let z2 = dmg(talent.a['霜华矢命中伤害'], 'a2', 'melt')
    return {
      dmg: z1.dmg + z2.dmg,
      avg: z1.avg + z2.avg
    }
  }
},
{
  title: `${TalentName.eName}伤害`,
  params: { ChargedUse: 2, ChargedHit: 4, ChargedDmg: 4 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.qName}冰凌伤害`,
  params: { Celestial_Shower: true, EnergyDetermine: 0, BurstUse:1, BurstHit: 5, BurstDmg: 5, ChargedUse: 2, ChargedHit: 4, ChargedDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['冰棱伤害'], 'q')
},
{
  title: `${TalentName.qName}冰凌融化`,
  params: { Celestial_Shower: true, FreezeDetermine: false, FireAttachment: true, EnergyDetermine: 0, BurstUse:1, BurstHit: 5, BurstDmg: 5, ChargedUse: 2, ChargedHit: 4, ChargedDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['冰棱伤害'], 'q', 'melt')
},
{
  title: `${TalentName.qName}全部命中`,
  dmgKey: 'q',
  params: { Celestial_Shower: true, EnergyDetermine: 0, BurstUse:1, BurstHit: 51, BurstDmg: 51, ChargedUse: 2, ChargedHit: 4, ChargedDmg: 4 },
  dmg: ({ talent }, dmg) => {
    let q1 = dmg(talent.q['冰棱伤害'], 'q')
    return {
      dmg: q1.dmg * 51,
      avg: q1.avg * 51
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
]
