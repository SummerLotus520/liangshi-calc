import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "迪卢克"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
let e1Dmg = { avg: 0, dmg: 0 }
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementFireTeam: 1, EnergyTeammate: 40 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}第一段伤害`,
  params: { SkillsAfter: 0, SkillsUse: 1, SkillsHit: 1, SkillsDmg: 1 },
  dmg: ({ talent }, dmg) => {
    e1Dmg = dmg(talent.e['一段伤害'], 'e')
    return e1Dmg
  }
},
{
  title: `${TalentName.eName}第一段融化`,
  params: { SkillsAfter: 0, IceAttachment: true, SkillsUse: 1, SkillsHit: 1, SkillsDmg: 1 },
  dmgKey: 'undefined',
  dmg: ({ talent }, dmg) => dmg(talent.e['一段伤害'], 'e', 'melt')
},
{
  title: `${TalentName.eName}完整伤害`,
  dmgKey: 'e',
  params: { SkillsAfter: 2, SkillsUse: 3, SkillsHit: 3, SkillsDmg: 3 },
  dmg: ({ talent }, dmg ) => {
    let e1 = e1Dmg
    let e2 = dmg(talent.e['二段伤害'], 'e')
    let e3 = dmg(talent.e['三段伤害'], 'e')
    return {
      dmg: e1.dmg + e2.dmg + e3.dmg,
      avg: e1.avg + e2.avg + e3.avg
    }
  }
},
{
  title: `${TalentName.qName}爆发伤害`,
  params: { Dawn: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['斩击伤害'], 'q')
},
{
  title: `${TalentName.qName}爆发蒸发`,
  params: { Dawn: true, WaterAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['斩击伤害'], 'q', 'vaporize')
},
{
  title: `${TalentName.qName}爆发融化`,
  dmgKey: 'q',
  params: { Dawn: true, IceAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['斩击伤害'], 'q', 'melt')
},
{
  title: `${TalentName.qName}每段伤害`,
  params: { Dawn: true, BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['持续伤害'], 'q')
},
{
  title: `${TalentName.qNameT}后${TalentName.aName}一段`,
  dmgKey: 'a',
  params: { Dawn: true, BurstUse: 1, BurstHit: 8, BurstDmg: 8, NormalElement: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
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
