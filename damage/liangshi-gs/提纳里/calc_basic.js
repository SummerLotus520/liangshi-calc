import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "提纳里"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementGrassTeam: 1, EnergyTeammate: 40 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'undefined',
  dmg: ({ talent }, dmg) => dmg(talent.a['花筥箭伤害'], 'a2')
},
{
  title: '单支藏蕴花矢伤害',
  params: { ChargedUse: 1, ChargedHit: 3, ChargedDmg: 3 },
  dmg: ({ talent, cons }, dmg) => dmg(talent.a['藏蕴花矢伤害'], 'a2')
},
{
  title: `${TalentName.a2Name}总伤害`,
  params: { ChargedUse: 1, ChargedHit: 4, ChargedDmg: 4 },
  dmg: ({ talent, cons }, dmg) => {
    let d1 = dmg(talent.a['花筥箭伤害'], 'a2')
    let d2 = dmg(talent.a['藏蕴花矢伤害'], 'a2')
    let cons6 = cons >= 6 ? dmg(150, 'a2') : { dmg: 0, avg: 0 }
    return {
      dmg: d1.dmg + d2.dmg * 4 + cons6.dmg,
      avg: d1.avg + d2.avg * 4 + cons6.avg
    }
  }
},
{
  title: `${TalentName.a2Name}总激化`,
  params: { GrassAttachment: true, ChargedUse: 1, ChargedHit: 4, ChargedDmg: 4 },
  dmgKey: 'z',
  dmg: ({ talent, cons }, dmg) => {
    let d1 = dmg(talent.a['花筥箭伤害'], 'a2', 'spread')
    let d2 = dmg(talent.a['藏蕴花矢伤害'], 'a2')
    let d3 = dmg(talent.a['藏蕴花矢伤害'], 'a2', 'spread')
    let cons6 = cons >= 6 ? dmg(150, 'a2', 'spread') : { dmg: 0, avg: 0 }
    return {
      dmg: d1.dmg + d2.dmg * 3 + d3.dmg + cons6.dmg,
      avg: d1.avg + d2.avg * 3 + d3.avg + cons6.avg
    }
  }
},
{
  title: `${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.eName}激化伤害`,
  params: { GrassAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', 'spread')
},
{
  title: `${TalentName.qName}完整伤害`,
  params: { BurstProgress: true, ReactionDmg: 0, BurstUse: 1, BurstHit: 6, BurstDmg: 6 },
  dmg: ({ talent, cons }, dmg) => {
    let q1 = dmg(talent.q['缠藤箭伤害'], 'q')
    let q2 = dmg(talent.q['次级缠藤箭伤害'], 'q')
    return  {
      dmg: q1.dmg * 6 + q2.dmg * 6,
      avg: q1.avg * 6 + q2.avg * 6
    }
  }
},
{
  title: `${TalentName.qName}完整激化`,
  params: { GrassAttachment: true, BurstProgress: true, ReactionDmg: 4, BurstUse: 1, BurstHit: 6, BurstDmg: 6 },
  dmgKey: 'q',
  dmg: ({ talent, cons }, dmg) => {
    let q1 = dmg(talent.q['缠藤箭伤害'], 'q')
    let q2 = dmg(talent.q['缠藤箭伤害'], 'q', 'spread')
    let q3 = dmg(talent.q['次级缠藤箭伤害'], 'q')
    let q4 = dmg(talent.q['次级缠藤箭伤害'], 'q', 'spread')
    return  {
      dmg: q1.dmg * 4 + q2.dmg * 2 + q3.dmg * 4 + q4.dmg * 2,
      avg: q1.avg * 4 + q2.avg * 2 + q3.avg * 4 + q4.avg * 2
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
