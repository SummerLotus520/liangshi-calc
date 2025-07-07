import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "北斗"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { LiyueTeammate: 1, ElementSame: 1, ElementMineTeam: 1, EnergyTeammate: 80, ShieldDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}基础伤害`,
  params: { ShieldTime: 0.3 },
  dmg: ({ talent }, dmg) => dmg(talent.e['基础伤害'], 'e')
},
{
  title: `2层${TalentName.eName}伤害`,
  params: { ShieldTime: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['基础伤害'] + talent.e['受击时伤害提升'] * 2, 'e')
},
{
  title: `2层${TalentName.eName}激化`,
  params: { GrassAttachment: true, ShieldTime: 2 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['基础伤害'] + talent.e['受击时伤害提升'] * 2, 'e', 'aggravate')
},
{
  title: `${TalentName.eName}护盾吸收量`,
  params: { ShieldTime: 2 },
  dmgKey: 'h',
  dmg: ({ talent, calc, attr }, { shield }) => shield(talent.e['护盾吸收量2'][0] * calc(attr.hp) / 100 + talent.e['护盾吸收量2'][1] * 1)
},
{
  title: `${TalentName.qName}释放伤害`,
  params: ({ cons }) => ({ Stormbreaker: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, ShieldTime: cons >= 1 ? 0.5 : 0 }),
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: '闪雷伤害',
  params: ({ cons }) => ({ Stormbreaker: true, BurstUse: 1, BurstHit: 4, BurstDmg: 4, NormalUse: 4, NormalHit: 4, NormalDmg: 4, ShieldTime: cons >= 1 ? 6 : 0 }),
  dmg: ({ talent }, dmg) => dmg(talent.q['闪雷伤害'], 'q')
},
{
  title: '闪雷激化',
  dmgKey: 'q',
  params: ({ cons }) => ({ Stormbreaker: true, GrassAttachment: true, BurstUse: 1, BurstHit: 4, BurstDmg: 4, NormalUse: 4, NormalHit: 4, NormalDmg: 4, ShieldTime: cons >= 1 ? 6 : 0 }),
  dmg: ({ talent }, dmg) => dmg(talent.q['闪雷伤害'], 'q', 'aggravate')
},
{
  check: ({ cons }) => cons >= 6,
  title: `${TalentName.qNameT}后2层${TalentName.eName}`,
  params: { Stormbreaker: true, ShieldTime: 2, BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.e['基础伤害'] + talent.e['受击时伤害提升'] * 2, 'e')
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
