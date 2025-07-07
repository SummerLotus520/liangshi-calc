import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "琳妮特"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWindTeam: 1, EnergyTeammate: 70, HealDetermine: true, PrimordialDetermine: "ousia", FontaineTeammate: 1 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}伤害`,
  params: { HealNumber: 1 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['谜影突刺伤害'], 'e')
},
{
  check: ({ cons }) => cons >= 6,
  title: `${TalentName.eNameT}后${TalentName.aName}一段`,
  params: { ChangeHp: 3, HealNumber: 1, NormalElement: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
},
{
  title: `${TalentName.eName}命中治疗`,
  params: { HealNumber: 1 },
  dmgKey: 'h',
  dmg: ({ attr, calc }, { heal }) => heal(calc(attr.hp) * 25 / 100)
},
{
  title: `${TalentName.qNameT}展开伤害`,
  params: { BurstAfter: 0.1, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: '惊奇猫猫盒伤害',
  params: { Bogglecat_Box: true, BurstAfter: 2, BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['惊奇猫猫盒伤害'], 'q')
},
{
  title: '彩练术弹伤害',
  params: { Bogglecat_Box: true, BurstAfter: 2, BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.q['彩练术弹伤害'], 'q', 'scene')
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
